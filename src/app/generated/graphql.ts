import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Decimal: any;
  ExpectedErrorType: any;
  GenericScalar: any;
  UUID: any;
};



export type ArchiveAccountInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};

export type ArchiveAccountPayload = {
  __typename?: 'ArchiveAccountPayload';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type BankAccountNode = Node & {
  __typename?: 'BankAccountNode';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  bankName: Scalars['String'];
  accountName: Scalars['String'];
  accountNumber: Scalars['String'];
  paymentorderSet: PaymentOrderNodeConnection;
};


export type BankAccountNodePaymentorderSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type BankAccountNodeConnection = {
  __typename?: 'BankAccountNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<BankAccountNodeEdge>>;
};

export type BankAccountNodeEdge = {
  __typename?: 'BankAccountNodeEdge';
  node?: Maybe<BankAccountNode>;
  cursor: Scalars['String'];
};

export type BusMutationInput = {
  plateNumber?: Maybe<Scalars['String']>;
  busNumber?: Maybe<Scalars['String']>;
  carrier?: Maybe<Scalars['ID']>;
  busSeatConfiguration?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type BusMutationPayload = {
  __typename?: 'BusMutationPayload';
  bus?: Maybe<BusNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type BusNode = Node & {
  __typename?: 'BusNode';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  plateNumber: Scalars['String'];
  busNumber: Scalars['String'];
  carrier: CarrierNode;
  busSeatConfiguration: BusSeatConfigurationNode;
  busseatsSet: BusSeatsConnection;
  tripSet: TripNodeConnection;
};


export type BusNodeBusseatsSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type BusNodeTripSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  route_LeavingFrom?: Maybe<Scalars['ID']>;
  route_Destination?: Maybe<Scalars['ID']>;
};

export type BusNodeConnection = {
  __typename?: 'BusNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<BusNodeEdge>>;
};

export type BusNodeEdge = {
  __typename?: 'BusNodeEdge';
  node?: Maybe<BusNode>;
  cursor: Scalars['String'];
};

export type BusSeatConfigurationMutationInput = {
  name: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type BusSeatConfigurationMutationPayload = {
  __typename?: 'BusSeatConfigurationMutationPayload';
  busSeatConfiguration?: Maybe<BusSeatConfigurationNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type BusSeatConfigurationNode = Node & {
  __typename?: 'BusSeatConfigurationNode';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  name: Scalars['String'];
  busseatconfigurationseatSet: BusSeatConfigurationSeatNodeConnection;
  busSet: BusNodeConnection;
};


export type BusSeatConfigurationNodeBusseatconfigurationseatSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type BusSeatConfigurationNodeBusSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type BusSeatConfigurationNodeConnection = {
  __typename?: 'BusSeatConfigurationNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<BusSeatConfigurationNodeEdge>>;
};

export type BusSeatConfigurationNodeEdge = {
  __typename?: 'BusSeatConfigurationNodeEdge';
  node?: Maybe<BusSeatConfigurationNode>;
  cursor: Scalars['String'];
};

export type BusSeatConfigurationSeatMutationInput = {
  name: Scalars['String'];
  busSeatConfiguration: Scalars['ID'];
  row: Scalars['Int'];
  col: Scalars['Int'];
  windowSeat?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type BusSeatConfigurationSeatMutationPayload = {
  __typename?: 'BusSeatConfigurationSeatMutationPayload';
  busSeatConfigurationSeat?: Maybe<BusSeatConfigurationSeatNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type BusSeatConfigurationSeatNode = Node & {
  __typename?: 'BusSeatConfigurationSeatNode';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  busSeatConfiguration: BusSeatConfigurationNode;
  windowSeat: Scalars['Boolean'];
  row: Scalars['Int'];
  col: Scalars['Int'];
  busseatsSet: BusSeatsConnection;
  ticketSet: TicketNodeConnection;
};


export type BusSeatConfigurationSeatNodeBusseatsSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type BusSeatConfigurationSeatNodeTicketSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type BusSeatConfigurationSeatNodeConnection = {
  __typename?: 'BusSeatConfigurationSeatNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<BusSeatConfigurationSeatNodeEdge>>;
};

export type BusSeatConfigurationSeatNodeEdge = {
  __typename?: 'BusSeatConfigurationSeatNodeEdge';
  node?: Maybe<BusSeatConfigurationSeatNode>;
  cursor: Scalars['String'];
};

export type BusSeats = Node & {
  __typename?: 'BusSeats';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  bus: BusNode;
  busSeatConfigurationSeat: BusSeatConfigurationSeatNode;
};

export type BusSeatsConnection = {
  __typename?: 'BusSeatsConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<BusSeatsEdge>>;
};

export type BusSeatsEdge = {
  __typename?: 'BusSeatsEdge';
  node?: Maybe<BusSeats>;
  cursor: Scalars['String'];
};

export type BusStopNode = Node & {
  __typename?: 'BusStopNode';
  createdAt: Scalars['DateTime'];
  latitude?: Maybe<Scalars['Decimal']>;
  longitude?: Maybe<Scalars['Decimal']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  city: CityNode;
  ticketSet: TicketNodeConnection;
};


export type BusStopNodeTicketSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type BusStopNodeConnection = {
  __typename?: 'BusStopNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<BusStopNodeEdge>>;
};

export type BusStopNodeEdge = {
  __typename?: 'BusStopNodeEdge';
  node?: Maybe<BusStopNode>;
  cursor: Scalars['String'];
};

export type BusUserNode = Node & {
  __typename?: 'BusUserNode';
  id: Scalars['ID'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerificationCode?: Maybe<Scalars['String']>;
  emailVerificationRequestedAt?: Maybe<Scalars['DateTime']>;
  emailVerifiedAt?: Maybe<Scalars['DateTime']>;
  phone?: Maybe<Scalars['String']>;
  phoneVerificationCode?: Maybe<Scalars['String']>;
  phoneVerificationRequestedAt?: Maybe<Scalars['DateTime']>;
  phoneVerifiedAt?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  isStaff: Scalars['Boolean'];
  isActive: Scalars['Boolean'];
  profilePic?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  carrierSet: CarrierNodeConnection;
  CarrierRating: CarrierNodeConnection;
  carrieradminSet: CarrierAdminNodeConnection;
  carrierratingSet: CarrierRatingNodeConnection;
  tripSet: TripNodeConnection;
  orderedBy: PaymentOrderNodeConnection;
  paymentorderSet: PaymentOrderNodeConnection;
  ticketSet: TicketNodeConnection;
  password: Scalars['String'];
  isRegistered: Scalars['Boolean'];
  isSuperuser: Scalars['Boolean'];
};


export type BusUserNodeCarrierSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type BusUserNodeCarrierRatingArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type BusUserNodeCarrieradminSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type BusUserNodeCarrierratingSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type BusUserNodeTripSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  route_LeavingFrom?: Maybe<Scalars['ID']>;
  route_Destination?: Maybe<Scalars['ID']>;
};


export type BusUserNodeOrderedByArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type BusUserNodePaymentorderSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type BusUserNodeTicketSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type BusUserNodeConnection = {
  __typename?: 'BusUserNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<BusUserNodeEdge>>;
};

export type BusUserNodeEdge = {
  __typename?: 'BusUserNodeEdge';
  node?: Maybe<BusUserNode>;
  cursor: Scalars['String'];
};

export type CancelTripMutationInput = {
  trip: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CancelTripMutationPayload = {
  __typename?: 'CancelTripMutationPayload';
  trip?: Maybe<TripNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CarrierAdminNode = Node & {
  __typename?: 'CarrierAdminNode';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  carrier: CarrierNode;
  user: BusUserNode;
  readPermission: Scalars['Boolean'];
};

export type CarrierAdminNodeConnection = {
  __typename?: 'CarrierAdminNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<CarrierAdminNodeEdge>>;
};

export type CarrierAdminNodeEdge = {
  __typename?: 'CarrierAdminNodeEdge';
  node?: Maybe<CarrierAdminNode>;
  cursor: Scalars['String'];
};

export type CarrierMutationInput = {
  name: Scalars['String'];
  phones?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CarrierMutationPayload = {
  __typename?: 'CarrierMutationPayload';
  carrier?: Maybe<CarrierNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CarrierNode = Node & {
  __typename?: 'CarrierNode';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  logo?: Maybe<Scalars['String']>;
  admins: BusUserNodeConnection;
  ratings: BusUserNodeConnection;
  carrierphoneSet: CarrierPhoneNodeConnection;
  carrieradminSet: CarrierAdminNodeConnection;
  carrierratingSet: CarrierRatingNodeConnection;
  busSet: BusNodeConnection;
  routeSet: RouteNodeConnection;
  tripSet: TripNodeConnection;
};


export type CarrierNodeAdminsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  firstName?: Maybe<Scalars['String']>;
  firstName_Icontains?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  lastName_Icontains?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_Icontains?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  phone_Icontains?: Maybe<Scalars['String']>;
};


export type CarrierNodeRatingsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  firstName?: Maybe<Scalars['String']>;
  firstName_Icontains?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  lastName_Icontains?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_Icontains?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  phone_Icontains?: Maybe<Scalars['String']>;
};


export type CarrierNodeCarrierphoneSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type CarrierNodeCarrieradminSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type CarrierNodeCarrierratingSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type CarrierNodeBusSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type CarrierNodeRouteSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  leavingFrom?: Maybe<Scalars['ID']>;
  destination?: Maybe<Scalars['ID']>;
};


export type CarrierNodeTripSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  route_LeavingFrom?: Maybe<Scalars['ID']>;
  route_Destination?: Maybe<Scalars['ID']>;
};

export type CarrierNodeConnection = {
  __typename?: 'CarrierNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<CarrierNodeEdge>>;
};

export type CarrierNodeEdge = {
  __typename?: 'CarrierNodeEdge';
  node?: Maybe<CarrierNode>;
  cursor: Scalars['String'];
};

export type CarrierPhoneNode = Node & {
  __typename?: 'CarrierPhoneNode';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  carrier: CarrierNode;
  phone: Scalars['String'];
};

export type CarrierPhoneNodeConnection = {
  __typename?: 'CarrierPhoneNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<CarrierPhoneNodeEdge>>;
};

export type CarrierPhoneNodeEdge = {
  __typename?: 'CarrierPhoneNodeEdge';
  node?: Maybe<CarrierPhoneNode>;
  cursor: Scalars['String'];
};

export type CarrierRatingMutationInput = {
  carrier: Scalars['ID'];
  rating: Scalars['Int'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CarrierRatingMutationPayload = {
  __typename?: 'CarrierRatingMutationPayload';
  rating?: Maybe<CarrierRatingNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CarrierRatingNode = Node & {
  __typename?: 'CarrierRatingNode';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  carrier: CarrierNode;
  user: BusUserNode;
  rating: Scalars['Int'];
};

export type CarrierRatingNodeConnection = {
  __typename?: 'CarrierRatingNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<CarrierRatingNodeEdge>>;
};

export type CarrierRatingNodeEdge = {
  __typename?: 'CarrierRatingNodeEdge';
  node?: Maybe<CarrierRatingNode>;
  cursor: Scalars['String'];
};

export type CityNode = Node & {
  __typename?: 'CityNode';
  createdAt: Scalars['DateTime'];
  latitude?: Maybe<Scalars['Decimal']>;
  longitude?: Maybe<Scalars['Decimal']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  region: RegionNode;
  busstopSet: BusStopNodeConnection;
  leavingFrom: RouteNodeConnection;
  destination: RouteNodeConnection;
  routeSet: RouteNodeConnection;
};


export type CityNodeBusstopSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type CityNodeLeavingFromArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  leavingFrom?: Maybe<Scalars['ID']>;
  destination?: Maybe<Scalars['ID']>;
};


export type CityNodeDestinationArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  leavingFrom?: Maybe<Scalars['ID']>;
  destination?: Maybe<Scalars['ID']>;
};


export type CityNodeRouteSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  leavingFrom?: Maybe<Scalars['ID']>;
  destination?: Maybe<Scalars['ID']>;
};

export type CityNodeConnection = {
  __typename?: 'CityNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<CityNodeEdge>>;
};

export type CityNodeEdge = {
  __typename?: 'CityNodeEdge';
  node?: Maybe<CityNode>;
  cursor: Scalars['String'];
};

export type CountryNode = Node & {
  __typename?: 'CountryNode';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  latitude?: Maybe<Scalars['Decimal']>;
  longitude?: Maybe<Scalars['Decimal']>;
  name: Scalars['String'];
  countryCode: Scalars['String'];
  regionSet: RegionNodeConnection;
};


export type CountryNodeRegionSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type CountryNodeConnection = {
  __typename?: 'CountryNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<CountryNodeEdge>>;
};

export type CountryNodeEdge = {
  __typename?: 'CountryNodeEdge';
  node?: Maybe<CountryNode>;
  cursor: Scalars['String'];
};

export type CreateAnonymousUserMutationInput = {
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateAnonymousUserMutationPayload = {
  __typename?: 'CreateAnonymousUserMutationPayload';
  user?: Maybe<BusUserNode>;
  token?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};



export type DeleteAccountInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};

export type DeleteAccountPayload = {
  __typename?: 'DeleteAccountPayload';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  clientMutationId?: Maybe<Scalars['String']>;
};



export type Mutation = {
  __typename?: 'Mutation';
  trip?: Maybe<TripMutationPayload>;
  cancelTrip?: Maybe<CancelTripMutationPayload>;
  ticket?: Maybe<TicketMutationPayload>;
  carrier?: Maybe<CarrierMutationPayload>;
  carrierRating?: Maybe<CarrierRatingMutationPayload>;
  busSeatConfiguration?: Maybe<BusSeatConfigurationMutationPayload>;
  busSeatConfigurationSeat?: Maybe<BusSeatConfigurationSeatMutationPayload>;
  bus?: Maybe<BusMutationPayload>;
  register?: Maybe<RegisterPayload>;
  verifyAccount?: Maybe<VerifyAccountPayload>;
  resendActivationEmail?: Maybe<ResendActivationEmailPayload>;
  sendPasswordResetEmail?: Maybe<SendPasswordResetEmailPayload>;
  passwordReset?: Maybe<PasswordResetPayload>;
  passwordChange?: Maybe<PasswordChangePayload>;
  archiveAccount?: Maybe<ArchiveAccountPayload>;
  deleteAccount?: Maybe<DeleteAccountPayload>;
  updateAccount?: Maybe<UpdateAccountPayload>;
  sendSecondaryEmailActivation?: Maybe<SendSecondaryEmailActivationPayload>;
  verifySecondaryEmail?: Maybe<VerifySecondaryEmailPayload>;
  swapEmails?: Maybe<SwapEmailsPayload>;
  tokenAuth?: Maybe<ObtainJsonWebTokenPayload>;
  verifyToken?: Maybe<VerifyTokenPayload>;
  refreshToken?: Maybe<RefreshTokenPayload>;
  revokeToken?: Maybe<RevokeTokenPayload>;
  createAnonymousUser?: Maybe<CreateAnonymousUserMutationPayload>;
  user?: Maybe<UserMutationPayload>;
  sendPhoneVerificationCode?: Maybe<SendVerificationCodeMutationPayload>;
  verifyPhoneVerificationCode?: Maybe<ValidatePhoneMutationPayload>;
};


export type MutationTripArgs = {
  input: TripMutationInput;
};


export type MutationCancelTripArgs = {
  input: CancelTripMutationInput;
};


export type MutationTicketArgs = {
  input: TicketMutationInput;
};


export type MutationCarrierArgs = {
  input: CarrierMutationInput;
};


export type MutationCarrierRatingArgs = {
  input: CarrierRatingMutationInput;
};


export type MutationBusSeatConfigurationArgs = {
  input: BusSeatConfigurationMutationInput;
};


export type MutationBusSeatConfigurationSeatArgs = {
  input: BusSeatConfigurationSeatMutationInput;
};


export type MutationBusArgs = {
  input: BusMutationInput;
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationVerifyAccountArgs = {
  input: VerifyAccountInput;
};


export type MutationResendActivationEmailArgs = {
  input: ResendActivationEmailInput;
};


export type MutationSendPasswordResetEmailArgs = {
  input: SendPasswordResetEmailInput;
};


export type MutationPasswordResetArgs = {
  input: PasswordResetInput;
};


export type MutationPasswordChangeArgs = {
  input: PasswordChangeInput;
};


export type MutationArchiveAccountArgs = {
  input: ArchiveAccountInput;
};


export type MutationDeleteAccountArgs = {
  input: DeleteAccountInput;
};


export type MutationUpdateAccountArgs = {
  input: UpdateAccountInput;
};


export type MutationSendSecondaryEmailActivationArgs = {
  input: SendSecondaryEmailActivationInput;
};


export type MutationVerifySecondaryEmailArgs = {
  input: VerifySecondaryEmailInput;
};


export type MutationSwapEmailsArgs = {
  input: SwapEmailsInput;
};


export type MutationTokenAuthArgs = {
  input: ObtainJsonWebTokenInput;
};


export type MutationVerifyTokenArgs = {
  input: VerifyTokenInput;
};


export type MutationRefreshTokenArgs = {
  input: RefreshTokenInput;
};


export type MutationRevokeTokenArgs = {
  input: RevokeTokenInput;
};


export type MutationCreateAnonymousUserArgs = {
  input: CreateAnonymousUserMutationInput;
};


export type MutationUserArgs = {
  input: UserMutationInput;
};


export type MutationSendPhoneVerificationCodeArgs = {
  input: SendVerificationCodeMutationInput;
};


export type MutationVerifyPhoneVerificationCodeArgs = {
  input: ValidatePhoneMutationInput;
};

export type Node = {
  id: Scalars['ID'];
};

export type ObtainJsonWebTokenInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type ObtainJsonWebTokenPayload = {
  __typename?: 'ObtainJSONWebTokenPayload';
  token?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  user?: Maybe<UserNode>;
  unarchiving?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
  endCursor?: Maybe<Scalars['String']>;
};

export type PasswordChangeInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  oldPassword: Scalars['String'];
  newPassword1: Scalars['String'];
  newPassword2: Scalars['String'];
};

export type PasswordChangePayload = {
  __typename?: 'PasswordChangePayload';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  clientMutationId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type PasswordResetInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  token: Scalars['String'];
  newPassword1: Scalars['String'];
  newPassword2: Scalars['String'];
};

export type PasswordResetPayload = {
  __typename?: 'PasswordResetPayload';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type PaymentOrderNode = Node & {
  __typename?: 'PaymentOrderNode';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  orderedBy: BusUserNode;
  price: Scalars['Decimal'];
  transactionId?: Maybe<Scalars['String']>;
  bankAccount?: Maybe<BankAccountNode>;
  verifiedAt?: Maybe<Scalars['DateTime']>;
  verifiedBy?: Maybe<BusUserNode>;
  verification?: Maybe<Scalars['Boolean']>;
  isChecked?: Maybe<Scalars['Boolean']>;
  ticketSet: TicketNodeConnection;
};


export type PaymentOrderNodeTicketSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type PaymentOrderNodeConnection = {
  __typename?: 'PaymentOrderNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<PaymentOrderNodeEdge>>;
};

export type PaymentOrderNodeEdge = {
  __typename?: 'PaymentOrderNodeEdge';
  node?: Maybe<PaymentOrderNode>;
  cursor: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  routes?: Maybe<RouteNodeConnection>;
  route?: Maybe<RouteNode>;
  trips?: Maybe<TripNodeConnection>;
  trip?: Maybe<TripNode>;
  tickets?: Maybe<TicketNodeConnection>;
  ticket?: Maybe<TicketNode>;
  bankAccounts?: Maybe<BankAccountNodeConnection>;
  bankAccount?: Maybe<BankAccountNode>;
  paymentOrders?: Maybe<PaymentOrderNodeConnection>;
  paymentOrder?: Maybe<PaymentOrderNode>;
  countries?: Maybe<CountryNodeConnection>;
  country?: Maybe<CountryNode>;
  regions?: Maybe<RegionNodeConnection>;
  region?: Maybe<RegionNode>;
  cities?: Maybe<CityNodeConnection>;
  city?: Maybe<CityNode>;
  busStops?: Maybe<BusStopNodeConnection>;
  busStop?: Maybe<BusStopNode>;
  carriers?: Maybe<CarrierNodeConnection>;
  carrier?: Maybe<CarrierNode>;
  carrierAdmins?: Maybe<CarrierAdminNodeConnection>;
  carrierAdmin?: Maybe<CarrierAdminNode>;
  busSeatConfigurations?: Maybe<BusSeatConfigurationNodeConnection>;
  busSeatConfiguration?: Maybe<BusSeatConfigurationNode>;
  busSeatConfigurationSeats?: Maybe<BusSeatConfigurationSeatNodeConnection>;
  busSeatConfigurationSeat?: Maybe<BusSeatConfigurationSeatNode>;
  buses?: Maybe<BusNodeConnection>;
  bus?: Maybe<BusNode>;
  busSeats?: Maybe<BusSeatsConnection>;
  busSeat?: Maybe<BusSeats>;
  busUsers?: Maybe<BusUserNodeConnection>;
  busUser?: Maybe<BusUserNode>;
  me?: Maybe<UserNode>;
  user?: Maybe<UserNode>;
  users?: Maybe<UserNodeConnection>;
};


export type QueryRoutesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  leavingFrom?: Maybe<Scalars['ID']>;
  destination?: Maybe<Scalars['ID']>;
};


export type QueryRouteArgs = {
  id: Scalars['ID'];
};


export type QueryTripsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  route_LeavingFrom?: Maybe<Scalars['ID']>;
  route_Destination?: Maybe<Scalars['ID']>;
};


export type QueryTripArgs = {
  id: Scalars['ID'];
};


export type QueryTicketsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryTicketArgs = {
  id: Scalars['ID'];
};


export type QueryBankAccountsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryBankAccountArgs = {
  id: Scalars['ID'];
};


export type QueryPaymentOrdersArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryPaymentOrderArgs = {
  id: Scalars['ID'];
};


export type QueryCountriesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCountryArgs = {
  id: Scalars['ID'];
};


export type QueryRegionsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryRegionArgs = {
  id: Scalars['ID'];
};


export type QueryCitiesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCityArgs = {
  id: Scalars['ID'];
};


export type QueryBusStopsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryBusStopArgs = {
  id: Scalars['ID'];
};


export type QueryCarriersArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCarrierArgs = {
  id: Scalars['ID'];
};


export type QueryCarrierAdminsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCarrierAdminArgs = {
  id: Scalars['ID'];
};


export type QueryBusSeatConfigurationsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryBusSeatConfigurationArgs = {
  id: Scalars['ID'];
};


export type QueryBusSeatConfigurationSeatsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryBusSeatConfigurationSeatArgs = {
  id: Scalars['ID'];
};


export type QueryBusesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryBusArgs = {
  id: Scalars['ID'];
};


export type QueryBusSeatsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryBusSeatArgs = {
  id: Scalars['ID'];
};


export type QueryBusUsersArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  firstName?: Maybe<Scalars['String']>;
  firstName_Icontains?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  lastName_Icontains?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_Icontains?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  phone_Icontains?: Maybe<Scalars['String']>;
};


export type QueryBusUserArgs = {
  id: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  firstName_Icontains?: Maybe<Scalars['String']>;
  firstName_Istartswith?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  lastName_Icontains?: Maybe<Scalars['String']>;
  lastName_Istartswith?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type RefreshTokenInput = {
  refreshToken: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RefreshTokenPayload = {
  __typename?: 'RefreshTokenPayload';
  token?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['GenericScalar']>;
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  clientMutationId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
};

export type RegionNode = Node & {
  __typename?: 'RegionNode';
  createdAt: Scalars['DateTime'];
  latitude?: Maybe<Scalars['Decimal']>;
  longitude?: Maybe<Scalars['Decimal']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  country: CountryNode;
  citySet: CityNodeConnection;
};


export type RegionNodeCitySetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type RegionNodeConnection = {
  __typename?: 'RegionNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<RegionNodeEdge>>;
};

export type RegionNodeEdge = {
  __typename?: 'RegionNodeEdge';
  node?: Maybe<RegionNode>;
  cursor: Scalars['String'];
};

export type RegisterInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type RegisterPayload = {
  __typename?: 'RegisterPayload';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  clientMutationId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type ResendActivationEmailInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  email: Scalars['String'];
};

export type ResendActivationEmailPayload = {
  __typename?: 'ResendActivationEmailPayload';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RevokeTokenInput = {
  refreshToken: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RevokeTokenPayload = {
  __typename?: 'RevokeTokenPayload';
  revoked?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RouteNode = Node & {
  __typename?: 'RouteNode';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  leavingFrom: CityNode;
  destination: CityNode;
  distance: Scalars['Int'];
  prices: CarrierNodeConnection;
  crossingCities: CityNodeConnection;
  tripSet: TripNodeConnection;
};


export type RouteNodePricesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type RouteNodeCrossingCitiesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type RouteNodeTripSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  route_LeavingFrom?: Maybe<Scalars['ID']>;
  route_Destination?: Maybe<Scalars['ID']>;
};

export type RouteNodeConnection = {
  __typename?: 'RouteNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<RouteNodeEdge>>;
};

export type RouteNodeEdge = {
  __typename?: 'RouteNodeEdge';
  node?: Maybe<RouteNode>;
  cursor: Scalars['String'];
};

export type SendPasswordResetEmailInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  email: Scalars['String'];
};

export type SendPasswordResetEmailPayload = {
  __typename?: 'SendPasswordResetEmailPayload';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type SendSecondaryEmailActivationInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
};

export type SendSecondaryEmailActivationPayload = {
  __typename?: 'SendSecondaryEmailActivationPayload';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type SendVerificationCodeMutationInput = {
  phone: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type SendVerificationCodeMutationPayload = {
  __typename?: 'SendVerificationCodeMutationPayload';
  user?: Maybe<BusUserNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type SwapEmailsInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};

export type SwapEmailsPayload = {
  __typename?: 'SwapEmailsPayload';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type TicketMutationInput = {
  id?: Maybe<Scalars['ID']>;
  trip: Scalars['ID'];
  busStop: Scalars['ID'];
  busSeatConfigurationSeat: Scalars['ID'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type TicketMutationPayload = {
  __typename?: 'TicketMutationPayload';
  ticket?: Maybe<TicketNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type TicketNode = Node & {
  __typename?: 'TicketNode';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  user: BusUserNode;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  trip: TripNode;
  busStop: BusStopNode;
  busSeatConfigurationSeat: BusSeatConfigurationSeatNode;
  order: PaymentOrderNode;
  ticketNumber: Scalars['UUID'];
};

export type TicketNodeConnection = {
  __typename?: 'TicketNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<TicketNodeEdge>>;
};

export type TicketNodeEdge = {
  __typename?: 'TicketNodeEdge';
  node?: Maybe<TicketNode>;
  cursor: Scalars['String'];
};

export type TripMutationInput = {
  id?: Maybe<Scalars['ID']>;
  route: Scalars['ID'];
  carrier: Scalars['ID'];
  bus: Scalars['ID'];
  departureDatetime: Scalars['String'];
  arrivalDatetime: Scalars['String'];
  reputation?: Maybe<Scalars['Int']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type TripMutationPayload = {
  __typename?: 'TripMutationPayload';
  trips?: Maybe<Array<Maybe<TripNode>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type TripNode = Node & {
  __typename?: 'TripNode';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  route: RouteNode;
  carrier: CarrierNode;
  bus?: Maybe<BusNode>;
  departureTime: Scalars['DateTime'];
  bulkRef?: Maybe<Scalars['String']>;
  canceledBy?: Maybe<BusUserNode>;
  ticketSet: TicketNodeConnection;
};


export type TripNodeTicketSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type TripNodeConnection = {
  __typename?: 'TripNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<TripNodeEdge>>;
};

export type TripNodeEdge = {
  __typename?: 'TripNodeEdge';
  node?: Maybe<TripNode>;
  cursor: Scalars['String'];
};


export type UpdateAccountInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type UpdateAccountPayload = {
  __typename?: 'UpdateAccountPayload';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UserMutationInput = {
  id?: Maybe<Scalars['ID']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UserMutationPayload = {
  __typename?: 'UserMutationPayload';
  user?: Maybe<BusUserNode>;
  token?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UserNode = Node & {
  __typename?: 'UserNode';
  id: Scalars['ID'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerificationCode?: Maybe<Scalars['String']>;
  emailVerificationRequestedAt?: Maybe<Scalars['DateTime']>;
  emailVerifiedAt?: Maybe<Scalars['DateTime']>;
  phone?: Maybe<Scalars['String']>;
  phoneVerificationCode?: Maybe<Scalars['String']>;
  phoneVerificationRequestedAt?: Maybe<Scalars['DateTime']>;
  phoneVerifiedAt?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  isStaff: Scalars['Boolean'];
  isActive: Scalars['Boolean'];
  profilePic?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  carrierSet: CarrierNodeConnection;
  CarrierRating: CarrierNodeConnection;
  carrieradminSet: CarrierAdminNodeConnection;
  carrierratingSet: CarrierRatingNodeConnection;
  tripSet: TripNodeConnection;
  orderedBy: PaymentOrderNodeConnection;
  paymentorderSet: PaymentOrderNodeConnection;
  ticketSet: TicketNodeConnection;
  pk?: Maybe<Scalars['Int']>;
  archived?: Maybe<Scalars['Boolean']>;
  verified?: Maybe<Scalars['Boolean']>;
  secondaryEmail?: Maybe<Scalars['String']>;
};


export type UserNodeCarrierSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserNodeCarrierRatingArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserNodeCarrieradminSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserNodeCarrierratingSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserNodeTripSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  route_LeavingFrom?: Maybe<Scalars['ID']>;
  route_Destination?: Maybe<Scalars['ID']>;
};


export type UserNodeOrderedByArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserNodePaymentorderSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserNodeTicketSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type UserNodeConnection = {
  __typename?: 'UserNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<UserNodeEdge>>;
};

export type UserNodeEdge = {
  __typename?: 'UserNodeEdge';
  node?: Maybe<UserNode>;
  cursor: Scalars['String'];
};

export type ValidatePhoneMutationInput = {
  phone: Scalars['String'];
  verificationCode: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  confirmPassword?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ValidatePhoneMutationPayload = {
  __typename?: 'ValidatePhoneMutationPayload';
  user?: Maybe<BusUserNode>;
  token?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type VerifyAccountInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  token: Scalars['String'];
};

export type VerifyAccountPayload = {
  __typename?: 'VerifyAccountPayload';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type VerifySecondaryEmailInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  token: Scalars['String'];
};

export type VerifySecondaryEmailPayload = {
  __typename?: 'VerifySecondaryEmailPayload';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type VerifyTokenInput = {
  token: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type VerifyTokenPayload = {
  __typename?: 'VerifyTokenPayload';
  payload?: Maybe<Scalars['GenericScalar']>;
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UserCreateAnonimusUserMutationVariables = Exact<{
  input: CreateAnonymousUserMutationInput;
}>;


export type UserCreateAnonimusUserMutation = (
  { __typename?: 'Mutation' }
  & { createAnonymousUser?: Maybe<(
    { __typename?: 'CreateAnonymousUserMutationPayload' }
    & Pick<CreateAnonymousUserMutationPayload, 'token' | 'refreshToken'>
    & { user?: Maybe<(
      { __typename?: 'BusUserNode' }
      & Pick<BusUserNode, 'id'>
    )> }
  )> }
);

export type UserCreateMutationMutationVariables = Exact<{
  input: UserMutationInput;
}>;


export type UserCreateMutationMutation = (
  { __typename?: 'Mutation' }
  & { user?: Maybe<(
    { __typename?: 'UserMutationPayload' }
    & Pick<UserMutationPayload, 'token' | 'refreshToken'>
    & { user?: Maybe<(
      { __typename?: 'BusUserNode' }
      & Pick<BusUserNode, 'id' | 'firstName' | 'lastName' | 'phone'>
    )> }
  )> }
);

export type LogoutMutationMutationVariables = Exact<{
  input: RevokeTokenInput;
}>;


export type LogoutMutationMutation = (
  { __typename?: 'Mutation' }
  & { revokeToken?: Maybe<(
    { __typename?: 'RevokeTokenPayload' }
    & Pick<RevokeTokenPayload, 'revoked' | 'success' | 'errors'>
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'UserNode' }
    & Pick<UserNode, 'id' | 'firstName' | 'lastName' | 'phone' | 'profilePic'>
  )> }
);

export type RefreshTokenMutationVariables = Exact<{
  input: RefreshTokenInput;
}>;


export type RefreshTokenMutation = (
  { __typename?: 'Mutation' }
  & { refreshToken?: Maybe<(
    { __typename?: 'RefreshTokenPayload' }
    & Pick<RefreshTokenPayload, 'token' | 'success' | 'refreshToken' | 'errors'>
  )> }
);

export type LoginMutationMutationVariables = Exact<{
  input: ObtainJsonWebTokenInput;
}>;


export type LoginMutationMutation = (
  { __typename?: 'Mutation' }
  & { tokenAuth?: Maybe<(
    { __typename?: 'ObtainJSONWebTokenPayload' }
    & Pick<ObtainJsonWebTokenPayload, 'token' | 'refreshToken' | 'success' | 'errors'>
    & { user?: Maybe<(
      { __typename?: 'UserNode' }
      & Pick<UserNode, 'id' | 'firstName' | 'lastName' | 'phone'>
    )> }
  )> }
);

export type UsersQueryVariables = Exact<{
  phoneContains?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
}>;


export type UsersQuery = (
  { __typename?: 'Query' }
  & { busUsers?: Maybe<(
    { __typename?: 'BusUserNodeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'BusUserNodeEdge' }
      & { node?: Maybe<(
        { __typename?: 'BusUserNode' }
        & Pick<BusUserNode, 'id' | 'firstName' | 'lastName' | 'profilePic'>
      )> }
    )>> }
  )> }
);

export const UserCreateAnonimusUserDocument = gql`
    mutation UserCreateAnonimusUser($input: CreateAnonymousUserMutationInput!) {
  createAnonymousUser(input: $input) {
    user {
      id
    }
    token
    refreshToken
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UserCreateAnonimusUserGQL extends Apollo.Mutation<UserCreateAnonimusUserMutation, UserCreateAnonimusUserMutationVariables> {
    document = UserCreateAnonimusUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UserCreateMutationDocument = gql`
    mutation UserCreateMutation($input: UserMutationInput!) {
  user(input: $input) {
    user {
      id
      firstName
      lastName
      phone
    }
    token
    refreshToken
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UserCreateMutationGQL extends Apollo.Mutation<UserCreateMutationMutation, UserCreateMutationMutationVariables> {
    document = UserCreateMutationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LogoutMutationDocument = gql`
    mutation LogoutMutation($input: RevokeTokenInput!) {
  revokeToken(input: $input) {
    revoked
    success
    errors
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LogoutMutationGQL extends Apollo.Mutation<LogoutMutationMutation, LogoutMutationMutationVariables> {
    document = LogoutMutationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MeDocument = gql`
    query Me {
  me {
    id
    firstName
    lastName
    phone
    profilePic
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MeGQL extends Apollo.Query<MeQuery, MeQueryVariables> {
    document = MeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RefreshTokenDocument = gql`
    mutation RefreshToken($input: RefreshTokenInput!) {
  refreshToken(input: $input) {
    token
    success
    refreshToken
    errors
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RefreshTokenGQL extends Apollo.Mutation<RefreshTokenMutation, RefreshTokenMutationVariables> {
    document = RefreshTokenDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LoginMutationDocument = gql`
    mutation LoginMutation($input: ObtainJSONWebTokenInput!) {
  tokenAuth(input: $input) {
    token
    refreshToken
    user {
      id
      firstName
      lastName
      phone
    }
    success
    errors
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginMutationGQL extends Apollo.Mutation<LoginMutationMutation, LoginMutationMutationVariables> {
    document = LoginMutationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UsersDocument = gql`
    query Users($phoneContains: String, $phone: String) {
  busUsers(phone_Icontains: $phoneContains, phone: $phone) {
    edges {
      node {
        id
        firstName
        lastName
        profilePic
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UsersGQL extends Apollo.Query<UsersQuery, UsersQueryVariables> {
    document = UsersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }