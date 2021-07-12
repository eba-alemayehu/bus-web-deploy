import {Injector, NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {Apollo, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import {InMemoryCache, ApolloLink, fromPromise} from '@apollo/client/core';
import {setContext} from '@apollo/client/link/context';
import {GRAPHQL_URL} from './config/URI.config.js';
import {RefreshTokenGQL, UserCreateAnonimusUserGQL} from './generated/graphql';
import {onError} from '@apollo/client/link/error';
import {tap} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {StorageService} from './core/service/storage.service';
import { persistCache, LocalStorageWrapper } from 'apollo3-cache-persist';

const uri = GRAPHQL_URL;
let isRefreshing = false;
let creatingUser = false;
let pendingRequests = [];

export function createApollo(httpLink: HttpLink, injector: Injector): any {
  console.log(httpLink);
  const basic = setContext((operation, context) => ({
    headers: {
      Accept: 'charset=utf-8'
    }
  }));

  const auth = setContext((operation, context) => {
    const token = localStorage.getItem('token');

    if (token === null) {
      return {};
    } else {
      return {
        headers: {
          Authorization: `JWT ${token}`
        }
      };
    }
  });

  const resolvePendingRequests = () => {
    pendingRequests.map(callback => callback());
    pendingRequests = [];
  };

  const error = onError(({graphQLErrors, networkError, operation, forward}) => {
    if (!!graphQLErrors) {
      for (const err of graphQLErrors) {
        switch (err.message) {
          case 'Signature has expired':
            console.log(err.message);
            // error code is set to UNAUTHENTICATED
            // when AuthenticationError thrown in resolver
            let forward$;
            const storage = injector.get(StorageService);
            if (!isRefreshing) {
              isRefreshing = true;
              const refreshTokenGQL = injector.get(RefreshTokenGQL);
              const refreshToken = refreshTokenGQL.mutate({
                input: {
                  refreshToken: localStorage.getItem('refreshToken'),
                }
              }).pipe(
                tap(({data}) => (data.refreshToken.errors === null) ?
                  storage.setToken(data.refreshToken.token, data.refreshToken.refreshToken) : throwError('Invalid username or password'))
              ).toPromise();
              forward$ = fromPromise(
                refreshToken
                  .then(({data}) => {
                    // Store the new tokens for your auth link
                    resolvePendingRequests();
                    // console.log(data);
                    return data.refreshToken.token;
                  })
                  .catch(error => {
                    pendingRequests = [];
                    // Handle token refresh errors e.g clear stored tokens, redirect to login, ...
                    return;
                  })
                  .finally(() => {
                    isRefreshing = false;
                  })
              ).filter(value => Boolean(value));
            } else {
              // Will only emit once the Promise is resolved
              forward$ = fromPromise(
                new Promise(resolve => {
                  pendingRequests.push(() => resolve());
                })
              );
            }

            return forward$.flatMap(() => forward(operation));
        }
      }
    }

    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  });
  const link = ApolloLink.from([basic, auth, error, httpLink.create({uri})]);
  const cache = new InMemoryCache();
  // await persistCache({
  //   cache,
  //   storage: new LocalStorageWrapper(window.localStorage),
  // });
  return {
    link,
    cache
  };
}

@NgModule({
  exports: [
    HttpClientModule,
  ],
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory: createApollo,
    deps: [HttpLink, Injector]
  }]
})
export class GraphQLModule {
}
