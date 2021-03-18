import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import gql from 'graphql-tag';
import {Apollo} from 'apollo-angular';
import {DocumentNode} from 'graphql';
import {catchError, map, mapTo, tap} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';
import {StorageService} from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private storage: StorageService, private apollo: Apollo) {}

  valid_email(str): boolean {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return (mailformat.test(str));
  }
  login(username: string, password: string): Observable<any> {
    let loginMutation: DocumentNode;
    if (this.valid_email(username)) {
      loginMutation = gql`
        mutation login($username: String!, $password: String!){
          tokenAuth(password:$password, email:$username){
            token
            errors
            refreshToken
          }
        }`;
    } else {
      loginMutation = gql`
        mutation login($username: String!, $password: String!){
          tokenAuth(password:$password, phone:$username){
            token
            refreshToken
            errors
          }
        }`;
    }
    return this.apollo.mutate({
      mutation: loginMutation,
      variables: {
        username,
        password,
        fetchPolicy: 'network-only'
      }
    }).pipe(
      tap(({data}) => (data.tokenAuth.errors === null) ?
        this.storage.setToken(data.tokenAuth.token, data.tokenAuth.refreshToken) : throwError('Invalid username or password'))
    );
  }
  logout(): Observable<any> {
    const revokeTokenMutation = gql`
      mutation revokTokenMuation($refreshToken: String!){
        revokeToken(refreshToken: $refreshToken){
          success
          errors
          revoked
        }
      }
    `;
    return this.apollo.mutate({
      mutation: revokeTokenMutation,
      variables: {
        refreshToken: this.storage.getRefreshToken()
      }
    }).pipe(
      tap(({data}) => {
        // @ts-ignore
        if (data.revokeToken.success) {
          console.log(data);
        }
      }),
      // @ts-ignore
      map(({data}) => data.revokeToken)
    );
  }
  verifyToken(token: string): Observable<any> {
    let verifyTokenMutation: DocumentNode;
    verifyTokenMutation = gql`
      mutation VerifyToken($token: String!){
        verifyToken(token: $token){
          payload
        }
      }`;
    return this.apollo.mutate({
      mutation: verifyTokenMutation,
      variables: {
        token
      }
    });
  }
  me(business = false, order = false, resumeUserProfile = false, resume = false): Observable<any> {
    const meQuery = gql`
      query me($business: Boolean!, $order: Boolean!, $resume: Boolean!){
        me{
          id
          name
          email
          phone
          profilePic
          credit
          orderedBy @include(if: $order){
            edges{
              node{
                id
                transactionId
                price
                isChecked
                verifiedAt
                verification
                bankAccount{
                  id
                  bankName
                }
                verifiedAt
                verifiedBy{
                  id
                  name
                }
                createdAt
              }
            }
          }
          businessSet @include(if: $business){
            edges{
              node{
                id
                name
                email
                isBroker
                telegram
                whatsapp
                latitude
                longitude
              }
            }
          }
          userresumeprofile{
            id
            firstName
            fatherName
            grandFatherName
            dateOfBirth
          }
          resumeSet @include(if: $resume){
            edges{
              node{
                id
                name
              }
            }
          }
        }
      }`;
    return this.apollo.query({
      query: meQuery,
      fetchPolicy: 'no-cache',
      variables: {
        business: business,
        order: order,
        resume: resume,
      }
    }).pipe(
      // @ts-ignore
      map(({data}) => data.me)
    );
  }
  refreshToken(refreshToken: string): Observable<any> {
    let verifyTokenMutation: DocumentNode;
    verifyTokenMutation = gql`
      mutation RefreshToken($refreshToken: String!){
        refreshToken(refreshToken: $refreshToken){
          payload
          token
          refreshToken
          errors
        }
      }`;
    return this.apollo.mutate({
      mutation: verifyTokenMutation,
      variables: {
        refreshToken,
        fetchPolicy: 'network-only'
      }
    }).pipe(
      tap(({data}) => {
        if (data.errors != null) {
          console.log(data);
        } else {
          this.storage.setToken(data.refreshToken.token, data.refreshToken.refreshToken);
        }
      })
    );
  }

  isLogedIn(): boolean {
    return (!!this.storage.getToken())
      && (!!this.storage.getRefreshToken())
      && this.storage.getToken() !== 'null'
      && this.storage.getRefreshToken() !== 'null';
  }

  changePassword(input): Observable<any> {
    const passwordChangeMutation = gql`
        mutation passwordChange($oldPassword: String!, $newPassword1: String!, $newPassword2: String!){
          passwordChange(oldPassword: $oldPassword, newPassword1: $newPassword1, newPassword2: $newPassword2){
            success
            errors
            refreshToken
            token
          }
        }
    `;
    return this.apollo.mutate({
      mutation: passwordChangeMutation,
      variables: {
        oldPassword: input.oldPassword,
        newPassword1: input.newPassword1,
        newPassword2: input.newPassword2
      }
    }).pipe(
      // @ts-ignore
      tap(({data}) => (data.passwordChange.errors === null) ?
        // @ts-ignore
        this.storage.setToken(data.passwordChange.token, data.passwordChange.refreshToken) : throwError('Invalid username or password')),
      // @ts-ignore
      map(({data}) => data.passwordChange)
    );
  }
  changeProfilePic(input): Observable<any> {
    const changeProfilePicMutation = gql `
      mutation changeUserProfilePic($input: ChangeUserProfilePicMutationInput!) {
        changeUserProfilePic(input: $input) {
          user{
            id
            name
            profilePic
          }
        }
      }
    `;
    return this.apollo.mutate({
      mutation: changeProfilePicMutation,
      variables: {
        input: input
      },
      context: {
        useMultipart: true
      }
    }).pipe(
      // @ts-ignore
      map(({data}) => data.changeUserProfilePic.user)
    );
  }
}
