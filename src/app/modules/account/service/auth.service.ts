import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import gql from 'graphql-tag';
import {Apollo} from 'apollo-angular';
import {DocumentNode} from 'graphql';
import {catchError, map, mapTo, tap} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';
import {StorageService} from '../../../core/service/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private apollo: Apollo) {
  }

  decodeToken(): any {
    const helper = new JwtHelperService();
    if (!!!localStorage.getItem('token')) {
      return null;
    }
    try {
      return helper.decodeToken(localStorage.getItem('token'));
    } catch (err) {
      return null;
    }
  }

  // valid_email(str): boolean {
  //   const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   return (mailformat.test(str));
  // }
  // login(username: string, password: string): Observable<any> {
  //   let loginMutation: DocumentNode;
  //   if (this.valid_email(username)) {
  //     loginMutation = gql`
  //       mutation login($username: String!, $password: String!){
  //         tokenAuth(password:$password, email:$username){
  //           token
  //           errors
  //           refreshToken
  //         }
  //       }`;
  //   } else {
  //     loginMutation = gql`
  //       mutation login($username: String!, $password: String!){
  //         tokenAuth(password:$password, phone:$username){
  //           token
  //           refreshToken
  //           errors
  //         }
  //       }`;
  //   }
  //   return this.apollo.mutate({
  //     mutation: loginMutation,
  //     variables: {
  //       username,
  //       password,
  //       fetchPolicy: 'network-only'
  //     }
  //   }).pipe(
  //     tap(({data}) => (data.tokenAuth.errors === null) ?
  //       this.storage.setToken(data.tokenAuth.token, data.tokenAuth.refreshToken) : throwError('Invalid username or password'))
  //   );
  // }
  // logout(): Observable<any> {
  //   const revokeTokenMutation = gql`
  //     mutation revokTokenMuation($refreshToken: String!){
  //       revokeToken(refreshToken: $refreshToken){
  //         success
  //         errors
  //         revoked
  //       }
  //     }
  //   `;
  //   return this.apollo.mutate({
  //     mutation: revokeTokenMutation,
  //     variables: {
  //       refreshToken: this.storage.getRefreshToken()
  //     }
  //   }).pipe(
  //     tap(({data}) => {
  //       // @ts-ignore
  //       if (data.revokeToken.success) {
  //         this.clearRegisteredUser();
  //       }
  //     }),
  //     // @ts-ignore
  //     map(({data}) => data.revokeToken)
  //   );
  // }
  // verifyToken(token: string): Observable<any> {
  //   let verifyTokenMutation: DocumentNode;
  //   verifyTokenMutation = gql`
  //     mutation VerifyToken($token: String!){
  //       verifyToken(token: $token){
  //         payload
  //       }
  //     }`;
  //   return this.apollo.mutate({
  //     mutation: verifyTokenMutation,
  //     variables: {
  //       token
  //     }
  //   });
  // }
  // me(business = false, order = false, resumeUserProfile = false, resume = false): Observable<any> {
  //   const meQuery = gql`
  //     query me($business: Boolean!, $order: Boolean!, $resume: Boolean!){
  //       me{
  //         id
  //         name
  //         email
  //         phone
  //         profilePic
  //         credit
  //         orderedBy @include(if: $order){
  //           edges{
  //             node{
  //               id
  //               transactionId
  //               price
  //               isChecked
  //               verifiedAt
  //               verification
  //               bankAccount{
  //                 id
  //                 bankName
  //               }
  //               verifiedAt
  //               verifiedBy{
  //                 id
  //                 name
  //               }
  //               createdAt
  //             }
  //           }
  //         }
  //         businessSet @include(if: $business){
  //           edges{
  //             node{
  //               id
  //               name
  //               email
  //               isBroker
  //               telegram
  //               whatsapp
  //               latitude
  //               longitude
  //             }
  //           }
  //         }
  //         userresumeprofile{
  //           id
  //           firstName
  //           fatherName
  //           grandFatherName
  //           dateOfBirth
  //         }
  //         resumeSet @include(if: $resume){
  //           edges{
  //             node{
  //               id
  //               name
  //             }
  //           }
  //         }
  //       }
  //     }`;
  //   return this.apollo.query({
  //     query: meQuery,
  //     fetchPolicy: 'no-cache',
  //     variables: {
  //       business: business,
  //       order: order,
  //       resume: resume,
  //     }
  //   }).pipe(
  //     // @ts-ignore
  //     map(({data}) => data.me)
  //   );
  // }
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
    });
  }

  //
  // private clearRegisteredUser(): void{
  //   this.storage.deleteToken();
  //   this.apollo.getClient().resetStore();
  //   this.registerService.createUnregisteredUser().subscribe(
  //     (response) => {}
  //   );
  // }

  isLogedIn(): boolean {
    return (!!localStorage.getItem('token'))
      && (!!localStorage.getItem('refreshToken'))
      && localStorage.getItem('token') !== 'null'
      && localStorage.getItem('refreshToken') !== 'null';
  }

  roles(): any {
    return this.decodeToken() !== null ? JSON.parse(this.decodeToken()?.roles) : [];
  }

  isRegistered(): boolean {
    const tokenDecoded = this.decodeToken();
    return (tokenDecoded) ? tokenDecoded.isRegistered : false;
  }

  emailVerifiedAt(): any {
    return this.decodeToken()?.emailVerifiedAt;
  }

  phoneVerifiedAt(): any {
    return this.decodeToken()?.phoneVerifiedAt;
  }

  email(): any {
    return this.decodeToken()?.email;
  }

  phone(): any {
    return this.decodeToken()?.phone;
  }

  hasResumeProfile(): any {
    return this.decodeToken()?.hasResumeProfile;
  }

  carriers(): any {
    return this.decodeToken()?.carriers;
  }
  // userVerified(): boolean {
  //   return (this.emailVerifiedAt() || this.phoneVerifiedAt()) || this.decodeToken()?.isUnregistered;
  // }
  // changePassword(input): Observable<any> {
  //   const passwordChangeMutation = gql`
  //       mutation passwordChange($oldPassword: String!, $newPassword1: String!, $newPassword2: String!){
  //         passwordChange(oldPassword: $oldPassword, newPassword1: $newPassword1, newPassword2: $newPassword2){
  //           success
  //           errors
  //           refreshToken
  //           token
  //         }
  //       }
  //   `;
  //   return this.apollo.mutate({
  //     mutation: passwordChangeMutation,
  //     variables: {
  //       oldPassword: input.oldPassword,
  //       newPassword1: input.newPassword1,
  //       newPassword2: input.newPassword2
  //     }
  //   }).pipe(
  //     // @ts-ignore
  //     tap(({data}) => (data.passwordChange.errors === null) ?
  //       // @ts-ignore
  //       this.storage.setToken(data.passwordChange.token, data.passwordChange.refreshToken) : throwError('Invalid username or password')),
  //     // @ts-ignore
  //     map(({data}) => data.passwordChange)
  //   );
  // }
  // changeProfilePic(input): Observable<any> {
  //   const changeProfilePicMutation = gql `
  //     mutation changeUserProfilePic($input: ChangeUserProfilePicMutationInput!) {
  //       changeUserProfilePic(input: $input) {
  //         user{
  //           id
  //           name
  //           profilePic
  //         }
  //       }
  //     }
  //   `;
  //   return this.apollo.mutate({
  //     mutation: changeProfilePicMutation,
  //     variables: {
  //       input: input
  //     },
  //     context: {
  //       useMultipart: true
  //     }
  //   }).pipe(
  //     // @ts-ignore
  //     map(({data}) => data.changeUserProfilePic.user)
  //   );
  // }
  //
  // cities(): any {
  //   const CITIES_QUERY = gql`
  //       query cities {
  //         cities{
  //           edges{
  //             node{
  //               id
  //               name
  //             }
  //           }
  //         }
  //       }
  //   `;
  //   return this.apollo.query({
  //     query: CITIES_QUERY,
  //   }).pipe(
  //     // @ts-ignore
  //     map(({data}) => data.cities.edges)
  //   );
  // }
  // regions(): any {
  //   const REGIONS_QUERY = gql`
  //     query regions {
  //       regions{
  //         edges{
  //           node{
  //             id
  //             name
  //           }
  //         }
  //       }
  //     }
  //   `;
  //   return this.apollo.query({
  //     query: REGIONS_QUERY,
  //   }).pipe(
  //     // @ts-ignore
  //     map(({data}) => data.regions.edges)
  //   );
  // }
}
