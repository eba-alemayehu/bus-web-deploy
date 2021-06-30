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
  Upload: any;
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
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  bankName: Scalars['String'];
  accountName: Scalars['String'];
  accountNumber: Scalars['String'];
  bankLogo?: Maybe<Scalars['String']>;
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

export type BookTicketMutationInput = {
  trip: Scalars['ID'];
  passengers: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type BookTicketMutationPayload = {
  __typename?: 'BookTicketMutationPayload';
  tickets?: Maybe<Array<Maybe<TicketNode>>>;
  order?: Maybe<PaymentOrderNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type BusDriverMutationInput = {
  bus?: Maybe<Scalars['ID']>;
  remove?: Maybe<Scalars['Boolean']>;
  driver?: Maybe<Scalars['ID']>;
  assistant?: Maybe<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type BusDriverMutationPayload = {
  __typename?: 'BusDriverMutationPayload';
  bus?: Maybe<BusNode>;
  clientMutationId?: Maybe<Scalars['String']>;
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
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  plateNumber: Scalars['String'];
  busNumber: Scalars['String'];
  carrier: CarrierNode;
  busSeatConfiguration: BusSeatConfigurationNode;
  drivers: BusUserNodeConnection;
  assistants: BusUserNodeConnection;
  tripSet: TripNodeConnection;
};


export type BusNodeDriversArgs = {
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


export type BusNodeAssistantsArgs = {
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


export type BusNodeTripSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  carrier?: Maybe<Scalars['ID']>;
  carrier_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  bulkRef?: Maybe<Scalars['String']>;
  departureTime?: Maybe<Scalars['DateTime']>;
  departureTime_Gte?: Maybe<Scalars['DateTime']>;
  departureTime_Lte?: Maybe<Scalars['DateTime']>;
  route_LeavingFrom?: Maybe<Scalars['ID']>;
  route_Destination?: Maybe<Scalars['ID']>;
  route_Routeprice_Price?: Maybe<Scalars['Float']>;
  route_Routeprice_Price_Lte?: Maybe<Scalars['Float']>;
  route_Routeprice_Price_Gte?: Maybe<Scalars['Float']>;
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
  tripSet: TripNodeConnection;
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
  carrier?: Maybe<Scalars['ID']>;
  busSeatConfiguration?: Maybe<Scalars['ID']>;
};


export type BusSeatConfigurationNodeTripSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  carrier?: Maybe<Scalars['ID']>;
  carrier_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  bulkRef?: Maybe<Scalars['String']>;
  departureTime?: Maybe<Scalars['DateTime']>;
  departureTime_Gte?: Maybe<Scalars['DateTime']>;
  departureTime_Lte?: Maybe<Scalars['DateTime']>;
  route_LeavingFrom?: Maybe<Scalars['ID']>;
  route_Destination?: Maybe<Scalars['ID']>;
  route_Routeprice_Price?: Maybe<Scalars['Float']>;
  route_Routeprice_Price_Lte?: Maybe<Scalars['Float']>;
  route_Routeprice_Price_Gte?: Maybe<Scalars['Float']>;
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
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  name: Scalars['String'];
  busSeatConfiguration: BusSeatConfigurationNode;
  windowSeat: Scalars['Boolean'];
  row: Scalars['Int'];
  col: Scalars['Int'];
  ticketSet: TicketNodeConnection;
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

export type BusStopNode = Node & {
  __typename?: 'BusStopNode';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  latitude?: Maybe<Scalars['Decimal']>;
  longitude?: Maybe<Scalars['Decimal']>;
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
  userfcmtokenSet: UserFcmTokenNodeConnection;
  carrierSet: CarrierNodeConnection;
  CarrierRating: CarrierNodeConnection;
  carrieradminSet: CarrierAdminNodeConnection;
  carrierratingSet: CarrierRatingNodeConnection;
  drivers: BusNodeConnection;
  assistants: BusNodeConnection;
  tripSet: TripNodeConnection;
  orderedBy: PaymentOrderNodeConnection;
  paymentorderSet: PaymentOrderNodeConnection;
  ticketSet: TicketNodeConnection;
  notificationSet: NotificationNodeConnection;
  usernotificationSet: UserNotificationNodeConnection;
  password: Scalars['String'];
  isRegistered: Scalars['Boolean'];
  isSuperuser: Scalars['Boolean'];
  tickets?: Maybe<Array<Maybe<TicketNode>>>;
};


export type BusUserNodeUserfcmtokenSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
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


export type BusUserNodeDriversArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  carrier?: Maybe<Scalars['ID']>;
  busSeatConfiguration?: Maybe<Scalars['ID']>;
};


export type BusUserNodeAssistantsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  carrier?: Maybe<Scalars['ID']>;
  busSeatConfiguration?: Maybe<Scalars['ID']>;
};


export type BusUserNodeTripSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  carrier?: Maybe<Scalars['ID']>;
  carrier_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  bulkRef?: Maybe<Scalars['String']>;
  departureTime?: Maybe<Scalars['DateTime']>;
  departureTime_Gte?: Maybe<Scalars['DateTime']>;
  departureTime_Lte?: Maybe<Scalars['DateTime']>;
  route_LeavingFrom?: Maybe<Scalars['ID']>;
  route_Destination?: Maybe<Scalars['ID']>;
  route_Routeprice_Price?: Maybe<Scalars['Float']>;
  route_Routeprice_Price_Lte?: Maybe<Scalars['Float']>;
  route_Routeprice_Price_Gte?: Maybe<Scalars['Float']>;
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


export type BusUserNodeNotificationSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};


export type BusUserNodeUsernotificationSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
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

export type CancelTicketMutationInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CancelTicketMutationPayload = {
  __typename?: 'CancelTicketMutationPayload';
  ticket?: Maybe<TicketNode>;
  clientMutationId?: Maybe<Scalars['String']>;
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
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
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
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  name: Scalars['String'];
  nameAm?: Maybe<Scalars['String']>;
  nameOr?: Maybe<Scalars['String']>;
  nameTg?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  admins: BusUserNodeConnection;
  ratings: BusUserNodeConnection;
  carrierphoneSet: CarrierPhoneNodeConnection;
  carrieradminSet: CarrierAdminNodeConnection;
  carrierratingSet: CarrierRatingNodeConnection;
  busSet: BusNodeConnection;
  routeSet: RouteNodeConnection;
  routepriceSet: RoutePriceNodeConnection;
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
  carrier?: Maybe<Scalars['ID']>;
  busSeatConfiguration?: Maybe<Scalars['ID']>;
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


export type CarrierNodeRoutepriceSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type CarrierNodeTripSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  carrier?: Maybe<Scalars['ID']>;
  carrier_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  bulkRef?: Maybe<Scalars['String']>;
  departureTime?: Maybe<Scalars['DateTime']>;
  departureTime_Gte?: Maybe<Scalars['DateTime']>;
  departureTime_Lte?: Maybe<Scalars['DateTime']>;
  route_LeavingFrom?: Maybe<Scalars['ID']>;
  route_Destination?: Maybe<Scalars['ID']>;
  route_Routeprice_Price?: Maybe<Scalars['Float']>;
  route_Routeprice_Price_Lte?: Maybe<Scalars['Float']>;
  route_Routeprice_Price_Gte?: Maybe<Scalars['Float']>;
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
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
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
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
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

export type ChangeTripBusMutationInput = {
  trip: Scalars['ID'];
  bus: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ChangeTripBusMutationPayload = {
  __typename?: 'ChangeTripBusMutationPayload';
  trip?: Maybe<TripNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ChangeUserProfilePicMutationInput = {
  profilePic?: Maybe<Scalars['Upload']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ChangeUserProfilePicMutationPayload = {
  __typename?: 'ChangeUserProfilePicMutationPayload';
  user?: Maybe<BusUserNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CityNode = Node & {
  __typename?: 'CityNode';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  latitude?: Maybe<Scalars['Decimal']>;
  longitude?: Maybe<Scalars['Decimal']>;
  name: Scalars['String'];
  nameAm?: Maybe<Scalars['String']>;
  nameOr?: Maybe<Scalars['String']>;
  nameTg?: Maybe<Scalars['String']>;
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
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
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
  changeTripBus?: Maybe<ChangeTripBusMutationPayload>;
  cancelTrip?: Maybe<CancelTripMutationPayload>;
  bookTicket?: Maybe<BookTicketMutationPayload>;
  reserveTicket?: Maybe<ReserveTicketMutationPayload>;
  cancelTicket?: Maybe<CancelTicketMutationPayload>;
  rescheduleTicket?: Maybe<RescheduleTicketMutationPayload>;
  paymentConfirmationRequest?: Maybe<PaymentConfirmationRequestMutationPayload>;
  validatePayment?: Maybe<ValidatePaymentMutationPayload>;
  carrier?: Maybe<CarrierMutationPayload>;
  carrierRating?: Maybe<CarrierRatingMutationPayload>;
  busSeatConfiguration?: Maybe<BusSeatConfigurationMutationPayload>;
  busSeatConfigurationSeat?: Maybe<BusSeatConfigurationSeatMutationPayload>;
  bus?: Maybe<BusMutationPayload>;
  busDriver?: Maybe<BusDriverMutationPayload>;
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
  userFcmToken?: Maybe<UserFcmTokenMutationPayload>;
  changeUserProfilePic?: Maybe<ChangeUserProfilePicMutationPayload>;
};


export type MutationTripArgs = {
  input: TripMutationInput;
};


export type MutationChangeTripBusArgs = {
  input: ChangeTripBusMutationInput;
};


export type MutationCancelTripArgs = {
  input: CancelTripMutationInput;
};


export type MutationBookTicketArgs = {
  input: BookTicketMutationInput;
};


export type MutationReserveTicketArgs = {
  input: ReserveTicketMutationInput;
};


export type MutationCancelTicketArgs = {
  input: CancelTicketMutationInput;
};


export type MutationRescheduleTicketArgs = {
  input: RescheduleTicketMutationInput;
};


export type MutationPaymentConfirmationRequestArgs = {
  input: PaymentConfirmationRequestMutationInput;
};


export type MutationValidatePaymentArgs = {
  input: ValidatePaymentMutationInput;
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


export type MutationBusDriverArgs = {
  input: BusDriverMutationInput;
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


export type MutationUserFcmTokenArgs = {
  input: UserFcmTokenMutationInput;
};


export type MutationChangeUserProfilePicArgs = {
  input: ChangeUserProfilePicMutationInput;
};

export type Node = {
  id: Scalars['ID'];
};

export type NotificationNode = Node & {
  __typename?: 'NotificationNode';
  id: Scalars['ID'];
  title: Scalars['String'];
  body: Scalars['String'];
  type: NotificationType;
  users: BusUserNodeConnection;
  createdAt: Scalars['DateTime'];
  usernotificationSet: UserNotificationNodeConnection;
};


export type NotificationNodeUsersArgs = {
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


export type NotificationNodeUsernotificationSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
};

export type NotificationNodeConnection = {
  __typename?: 'NotificationNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<NotificationNodeEdge>>;
};

export type NotificationNodeEdge = {
  __typename?: 'NotificationNodeEdge';
  node?: Maybe<NotificationNode>;
  cursor: Scalars['String'];
};

export enum NotificationType {
  A_1 = 'A_1'
}

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

export type PaymentConfirmationRequestMutationInput = {
  paymentOrderId: Scalars['String'];
  bankAccountId: Scalars['String'];
  transactionId: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type PaymentConfirmationRequestMutationPayload = {
  __typename?: 'PaymentConfirmationRequestMutationPayload';
  paymentOrder?: Maybe<PaymentOrderNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type PaymentOrderNode = Node & {
  __typename?: 'PaymentOrderNode';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  orderedBy: BusUserNode;
  price?: Maybe<Scalars['Decimal']>;
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
  notifications?: Maybe<NotificationNodeConnection>;
  userNotifications?: Maybe<UserNotificationNodeConnection>;
  notification?: Maybe<NotificationNode>;
  userNotification?: Maybe<UserNotificationNode>;
  routes?: Maybe<RouteNodeConnection>;
  route?: Maybe<RouteNode>;
  trips?: Maybe<TripNodeConnection>;
  trip?: Maybe<TripNode>;
  tickets?: Maybe<TicketNodeConnection>;
  myTickets?: Maybe<TicketNodeConnection>;
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
  busUsers?: Maybe<BusUserNodeConnection>;
  busUser?: Maybe<BusUserNode>;
  me?: Maybe<UserNode>;
  user?: Maybe<UserNode>;
  users?: Maybe<UserNodeConnection>;
};


export type QueryNotificationsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};


export type QueryUserNotificationsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
};


export type QueryNotificationArgs = {
  id: Scalars['ID'];
};


export type QueryUserNotificationArgs = {
  id: Scalars['ID'];
};


export type QueryRoutesArgs = {
  order?: Maybe<Scalars['String']>;
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
  carrier?: Maybe<Scalars['ID']>;
  carrier_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  bulkRef?: Maybe<Scalars['String']>;
  departureTime?: Maybe<Scalars['DateTime']>;
  departureTime_Gte?: Maybe<Scalars['DateTime']>;
  departureTime_Lte?: Maybe<Scalars['DateTime']>;
  route_LeavingFrom?: Maybe<Scalars['ID']>;
  route_Destination?: Maybe<Scalars['ID']>;
  route_Routeprice_Price?: Maybe<Scalars['Float']>;
  route_Routeprice_Price_Lte?: Maybe<Scalars['Float']>;
  route_Routeprice_Price_Gte?: Maybe<Scalars['Float']>;
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


export type QueryMyTicketsArgs = {
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
  name?: Maybe<Scalars['String']>;
  name_Icontains?: Maybe<Scalars['String']>;
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
  name?: Maybe<Scalars['String']>;
  name_Icontains?: Maybe<Scalars['String']>;
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
  carrier?: Maybe<Scalars['ID']>;
  busSeatConfiguration?: Maybe<Scalars['ID']>;
};


export type QueryBusArgs = {
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
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  latitude?: Maybe<Scalars['Decimal']>;
  longitude?: Maybe<Scalars['Decimal']>;
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
  name?: Maybe<Scalars['String']>;
  name_Icontains?: Maybe<Scalars['String']>;
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

export type RescheduleTicketMutationInput = {
  id: Scalars['ID'];
  trip: Scalars['ID'];
  busSeatConfigurationSeat: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RescheduleTicketMutationPayload = {
  __typename?: 'RescheduleTicketMutationPayload';
  ticket?: Maybe<TicketNode>;
  clientMutationId?: Maybe<Scalars['String']>;
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

export type ReserveTicketMutationInput = {
  id?: Maybe<Scalars['ID']>;
  busSeatConfigurationSeat: Scalars['ID'];
  trip: Scalars['String'];
  lock?: Maybe<Scalars['Boolean']>;
  replace?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ReserveTicketMutationPayload = {
  __typename?: 'ReserveTicketMutationPayload';
  ticket?: Maybe<TicketNode>;
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
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  leavingFrom: CityNode;
  destination: CityNode;
  distance?: Maybe<Scalars['Int']>;
  prices: CarrierNodeConnection;
  crossingCities: CityNodeConnection;
  routepriceSet: RoutePriceNodeConnection;
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
  name?: Maybe<Scalars['String']>;
  name_Icontains?: Maybe<Scalars['String']>;
};


export type RouteNodeRoutepriceSetArgs = {
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
  carrier?: Maybe<Scalars['ID']>;
  carrier_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  bulkRef?: Maybe<Scalars['String']>;
  departureTime?: Maybe<Scalars['DateTime']>;
  departureTime_Gte?: Maybe<Scalars['DateTime']>;
  departureTime_Lte?: Maybe<Scalars['DateTime']>;
  route_LeavingFrom?: Maybe<Scalars['ID']>;
  route_Destination?: Maybe<Scalars['ID']>;
  route_Routeprice_Price?: Maybe<Scalars['Float']>;
  route_Routeprice_Price_Lte?: Maybe<Scalars['Float']>;
  route_Routeprice_Price_Gte?: Maybe<Scalars['Float']>;
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

export type RoutePriceNode = Node & {
  __typename?: 'RoutePriceNode';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  route: RouteNode;
  carrier: CarrierNode;
  price: Scalars['Decimal'];
};

export type RoutePriceNodeConnection = {
  __typename?: 'RoutePriceNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<RoutePriceNodeEdge>>;
};

export type RoutePriceNodeEdge = {
  __typename?: 'RoutePriceNodeEdge';
  node?: Maybe<RoutePriceNode>;
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
  appSignature?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type SendVerificationCodeMutationPayload = {
  __typename?: 'SendVerificationCodeMutationPayload';
  user?: Maybe<BusUserNode>;
  isNew?: Maybe<Scalars['Boolean']>;
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

export type TicketNode = Node & {
  __typename?: 'TicketNode';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  user: BusUserNode;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  trip: TripNode;
  busStop?: Maybe<BusStopNode>;
  busSeatConfigurationSeat: BusSeatConfigurationSeatNode;
  order?: Maybe<PaymentOrderNode>;
  ticketNumber?: Maybe<Scalars['UUID']>;
  lockedAt?: Maybe<Scalars['DateTime']>;
  lockedUntil?: Maybe<Scalars['DateTime']>;
  isLocked?: Maybe<Scalars['Boolean']>;
  state?: Maybe<TicketState>;
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

export enum TicketState {
  Reserved = 'RESERVED',
  Booked = 'BOOKED',
  Verified = 'VERIFIED',
  Declined = 'DECLINED'
}

export type TripMutationInput = {
  id?: Maybe<Scalars['ID']>;
  route?: Maybe<Scalars['ID']>;
  leavingFrom?: Maybe<Scalars['ID']>;
  destination?: Maybe<Scalars['ID']>;
  bus?: Maybe<Scalars['ID']>;
  carrier: Scalars['ID'];
  departureDatetime: Scalars['String'];
  arrivalDatetime: Scalars['String'];
  busSeatConfiguration: Scalars['ID'];
  reputation?: Maybe<Scalars['Int']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type TripMutationPayload = {
  __typename?: 'TripMutationPayload';
  trips?: Maybe<Array<Maybe<TripNode>>>;
  bulkRef?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type TripNode = Node & {
  __typename?: 'TripNode';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  route: RouteNode;
  carrier: CarrierNode;
  bus?: Maybe<BusNode>;
  busSeatConfiguration: BusSeatConfigurationNode;
  departureTime: Scalars['DateTime'];
  arrivalTime: Scalars['DateTime'];
  bulkRef?: Maybe<Scalars['String']>;
  canceledBy?: Maybe<BusUserNode>;
  ticketSet: TicketNodeConnection;
  price?: Maybe<Scalars['Decimal']>;
  seats?: Maybe<Array<Maybe<TripSeatType>>>;
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

export type TripSeatType = {
  __typename?: 'TripSeatType';
  busSeatConfigurationSeat?: Maybe<BusSeatConfigurationSeatNode>;
  isLocked?: Maybe<Scalars['Boolean']>;
  isSold?: Maybe<Scalars['Boolean']>;
  isLockedByMe?: Maybe<Scalars['Boolean']>;
  isBookedByMe?: Maybe<Scalars['Boolean']>;
  lockedBy?: Maybe<BusUserNode>;
  ticket?: Maybe<TicketNode>;
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


export type UserFcmTokenMutationInput = {
  token: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UserFcmTokenMutationPayload = {
  __typename?: 'UserFCMTokenMutationPayload';
  userFcmToken?: Maybe<UserFcmTokenNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UserFcmTokenNode = Node & {
  __typename?: 'UserFCMTokenNode';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  user: BusUserNode;
  token: Scalars['String'];
};

export type UserFcmTokenNodeConnection = {
  __typename?: 'UserFCMTokenNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<UserFcmTokenNodeEdge>>;
};

export type UserFcmTokenNodeEdge = {
  __typename?: 'UserFCMTokenNodeEdge';
  node?: Maybe<UserFcmTokenNode>;
  cursor: Scalars['String'];
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
  userfcmtokenSet: UserFcmTokenNodeConnection;
  carrierSet: CarrierNodeConnection;
  CarrierRating: CarrierNodeConnection;
  carrieradminSet: CarrierAdminNodeConnection;
  carrierratingSet: CarrierRatingNodeConnection;
  drivers: BusNodeConnection;
  assistants: BusNodeConnection;
  tripSet: TripNodeConnection;
  orderedBy: PaymentOrderNodeConnection;
  paymentorderSet: PaymentOrderNodeConnection;
  ticketSet: TicketNodeConnection;
  notificationSet: NotificationNodeConnection;
  usernotificationSet: UserNotificationNodeConnection;
  pk?: Maybe<Scalars['Int']>;
  archived?: Maybe<Scalars['Boolean']>;
  verified?: Maybe<Scalars['Boolean']>;
  secondaryEmail?: Maybe<Scalars['String']>;
};


export type UserNodeUserfcmtokenSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
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


export type UserNodeDriversArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  carrier?: Maybe<Scalars['ID']>;
  busSeatConfiguration?: Maybe<Scalars['ID']>;
};


export type UserNodeAssistantsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  carrier?: Maybe<Scalars['ID']>;
  busSeatConfiguration?: Maybe<Scalars['ID']>;
};


export type UserNodeTripSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  carrier?: Maybe<Scalars['ID']>;
  carrier_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  bulkRef?: Maybe<Scalars['String']>;
  departureTime?: Maybe<Scalars['DateTime']>;
  departureTime_Gte?: Maybe<Scalars['DateTime']>;
  departureTime_Lte?: Maybe<Scalars['DateTime']>;
  route_LeavingFrom?: Maybe<Scalars['ID']>;
  route_Destination?: Maybe<Scalars['ID']>;
  route_Routeprice_Price?: Maybe<Scalars['Float']>;
  route_Routeprice_Price_Lte?: Maybe<Scalars['Float']>;
  route_Routeprice_Price_Gte?: Maybe<Scalars['Float']>;
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


export type UserNodeNotificationSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};


export type UserNodeUsernotificationSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
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

export type UserNotificationNode = Node & {
  __typename?: 'UserNotificationNode';
  id: Scalars['ID'];
  notification: NotificationNode;
  user: BusUserNode;
  sentViaTelegram?: Maybe<Scalars['Boolean']>;
  sentViaSms?: Maybe<Scalars['Boolean']>;
  sentViaFcm?: Maybe<Scalars['Boolean']>;
  seen: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
};

export type UserNotificationNodeConnection = {
  __typename?: 'UserNotificationNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<UserNotificationNodeEdge>>;
};

export type UserNotificationNodeEdge = {
  __typename?: 'UserNotificationNodeEdge';
  node?: Maybe<UserNotificationNode>;
  cursor: Scalars['String'];
};

export type ValidatePaymentMutationInput = {
  paymentOrderId: Scalars['String'];
  verification: Scalars['Boolean'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ValidatePaymentMutationPayload = {
  __typename?: 'ValidatePaymentMutationPayload';
  paymentOrder?: Maybe<PaymentOrderNode>;
  clientMutationId?: Maybe<Scalars['String']>;
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

export type BankAccountsQueryVariables = Exact<{ [key: string]: never; }>;


export type BankAccountsQuery = (
  { __typename?: 'Query' }
  & { bankAccounts?: Maybe<(
    { __typename?: 'BankAccountNodeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'BankAccountNodeEdge' }
      & { node?: Maybe<(
        { __typename?: 'BankAccountNode' }
        & Pick<BankAccountNode, 'id' | 'bankName' | 'bankLogo' | 'accountName' | 'accountNumber'>
      )> }
    )>> }
  )> }
);

export type BookTicketMutationVariables = Exact<{
  input: BookTicketMutationInput;
}>;


export type BookTicketMutation = (
  { __typename?: 'Mutation' }
  & { bookTicket?: Maybe<(
    { __typename?: 'BookTicketMutationPayload' }
    & { order?: Maybe<(
      { __typename?: 'PaymentOrderNode' }
      & Pick<PaymentOrderNode, 'id' | 'price' | 'verification' | 'isChecked' | 'transactionId' | 'verifiedAt'>
      & { orderedBy: (
        { __typename?: 'BusUserNode' }
        & Pick<BusUserNode, 'id' | 'firstName' | 'lastName' | 'phone'>
      ), verifiedBy?: Maybe<(
        { __typename?: 'BusUserNode' }
        & Pick<BusUserNode, 'id' | 'firstName' | 'lastName' | 'phone'>
      )> }
    )>, tickets?: Maybe<Array<Maybe<(
      { __typename?: 'TicketNode' }
      & Pick<TicketNode, 'id' | 'firstName' | 'lastName' | 'phone' | 'ticketNumber'>
      & { order?: Maybe<(
        { __typename?: 'PaymentOrderNode' }
        & Pick<PaymentOrderNode, 'id' | 'price' | 'verification' | 'isChecked' | 'transactionId' | 'verifiedAt'>
        & { orderedBy: (
          { __typename?: 'BusUserNode' }
          & Pick<BusUserNode, 'id' | 'firstName' | 'lastName' | 'phone'>
        ), verifiedBy?: Maybe<(
          { __typename?: 'BusUserNode' }
          & Pick<BusUserNode, 'id' | 'firstName' | 'lastName' | 'phone'>
        )> }
      )>, busStop?: Maybe<(
        { __typename?: 'BusStopNode' }
        & Pick<BusStopNode, 'name'>
      )>, busSeatConfigurationSeat: (
        { __typename?: 'BusSeatConfigurationSeatNode' }
        & Pick<BusSeatConfigurationSeatNode, 'id' | 'name'>
      ), trip: (
        { __typename?: 'TripNode' }
        & Pick<TripNode, 'id' | 'departureTime' | 'arrivalTime' | 'price' | 'createdAt'>
        & { busSeatConfiguration: (
          { __typename?: 'BusSeatConfigurationNode' }
          & Pick<BusSeatConfigurationNode, 'id' | 'name'>
        ), bus?: Maybe<(
          { __typename?: 'BusNode' }
          & Pick<BusNode, 'id' | 'plateNumber' | 'busNumber'>
          & { busSeatConfiguration: (
            { __typename?: 'BusSeatConfigurationNode' }
            & Pick<BusSeatConfigurationNode, 'id' | 'name'>
          ) }
        )>, route: (
          { __typename?: 'RouteNode' }
          & Pick<RouteNode, 'id' | 'distance'>
          & { leavingFrom: (
            { __typename?: 'CityNode' }
            & Pick<CityNode, 'id' | 'name'>
          ), destination: (
            { __typename?: 'CityNode' }
            & Pick<CityNode, 'id' | 'name'>
          ) }
        ), carrier: (
          { __typename?: 'CarrierNode' }
          & Pick<CarrierNode, 'id' | 'name' | 'logo'>
        ) }
      ) }
    )>>> }
  )> }
);

export type BusQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BusQuery = (
  { __typename?: 'Query' }
  & { bus?: Maybe<(
    { __typename?: 'BusNode' }
    & Pick<BusNode, 'id' | 'busNumber' | 'plateNumber'>
    & { carrier: (
      { __typename?: 'CarrierNode' }
      & Pick<CarrierNode, 'id' | 'name'>
    ), busSeatConfiguration: (
      { __typename?: 'BusSeatConfigurationNode' }
      & Pick<BusSeatConfigurationNode, 'id' | 'name'>
    ), drivers: (
      { __typename?: 'BusUserNodeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'BusUserNodeEdge' }
        & { node?: Maybe<(
          { __typename?: 'BusUserNode' }
          & Pick<BusUserNode, 'id' | 'firstName' | 'lastName' | 'profilePic' | 'phone'>
        )> }
      )>> }
    ), assistants: (
      { __typename?: 'BusUserNodeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'BusUserNodeEdge' }
        & { node?: Maybe<(
          { __typename?: 'BusUserNode' }
          & Pick<BusUserNode, 'id' | 'firstName' | 'lastName' | 'profilePic' | 'phone'>
        )> }
      )>> }
    ) }
  )> }
);

export type BusDriverMutationMutationVariables = Exact<{
  input: BusDriverMutationInput;
}>;


export type BusDriverMutationMutation = (
  { __typename?: 'Mutation' }
  & { busDriver?: Maybe<(
    { __typename?: 'BusDriverMutationPayload' }
    & { bus?: Maybe<(
      { __typename?: 'BusNode' }
      & Pick<BusNode, 'id' | 'busNumber' | 'plateNumber'>
      & { carrier: (
        { __typename?: 'CarrierNode' }
        & Pick<CarrierNode, 'id' | 'name'>
      ), busSeatConfiguration: (
        { __typename?: 'BusSeatConfigurationNode' }
        & Pick<BusSeatConfigurationNode, 'id' | 'name'>
      ), drivers: (
        { __typename?: 'BusUserNodeConnection' }
        & { edges: Array<Maybe<(
          { __typename?: 'BusUserNodeEdge' }
          & { node?: Maybe<(
            { __typename?: 'BusUserNode' }
            & Pick<BusUserNode, 'id' | 'firstName' | 'lastName' | 'profilePic' | 'phone'>
          )> }
        )>> }
      ), assistants: (
        { __typename?: 'BusUserNodeConnection' }
        & { edges: Array<Maybe<(
          { __typename?: 'BusUserNodeEdge' }
          & { node?: Maybe<(
            { __typename?: 'BusUserNode' }
            & Pick<BusUserNode, 'id' | 'firstName' | 'lastName' | 'profilePic' | 'phone'>
          )> }
        )>> }
      ) }
    )> }
  )> }
);

export type BusSeatConfigurationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BusSeatConfigurationQuery = (
  { __typename?: 'Query' }
  & { busSeatConfiguration?: Maybe<(
    { __typename?: 'BusSeatConfigurationNode' }
    & Pick<BusSeatConfigurationNode, 'id' | 'name'>
    & { busseatconfigurationseatSet: (
      { __typename?: 'BusSeatConfigurationSeatNodeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'BusSeatConfigurationSeatNodeEdge' }
        & { node?: Maybe<(
          { __typename?: 'BusSeatConfigurationSeatNode' }
          & Pick<BusSeatConfigurationSeatNode, 'id' | 'windowSeat' | 'name' | 'row' | 'col'>
        )> }
      )>> }
    ) }
  )> }
);

export type BusSeatConfigurationsQueryVariables = Exact<{ [key: string]: never; }>;


export type BusSeatConfigurationsQuery = (
  { __typename?: 'Query' }
  & { busSeatConfigurations?: Maybe<(
    { __typename?: 'BusSeatConfigurationNodeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'BusSeatConfigurationNodeEdge' }
      & { node?: Maybe<(
        { __typename?: 'BusSeatConfigurationNode' }
        & Pick<BusSeatConfigurationNode, 'id' | 'name'>
        & { busseatconfigurationseatSet: (
          { __typename?: 'BusSeatConfigurationSeatNodeConnection' }
          & { edges: Array<Maybe<(
            { __typename?: 'BusSeatConfigurationSeatNodeEdge' }
            & { node?: Maybe<(
              { __typename?: 'BusSeatConfigurationSeatNode' }
              & Pick<BusSeatConfigurationSeatNode, 'id' | 'windowSeat' | 'name' | 'row' | 'col'>
            )> }
          )>> }
        ) }
      )> }
    )>> }
  )> }
);

export type BusesQueryVariables = Exact<{
  carrier: Scalars['ID'];
}>;


export type BusesQuery = (
  { __typename?: 'Query' }
  & { buses?: Maybe<(
    { __typename?: 'BusNodeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'BusNodeEdge' }
      & { node?: Maybe<(
        { __typename?: 'BusNode' }
        & Pick<BusNode, 'id' | 'busNumber' | 'plateNumber'>
        & { carrier: (
          { __typename?: 'CarrierNode' }
          & Pick<CarrierNode, 'id' | 'name'>
        ) }
      )> }
    )>> }
  )> }
);

export type BusMutationMutationVariables = Exact<{
  input: BusMutationInput;
}>;


export type BusMutationMutation = (
  { __typename?: 'Mutation' }
  & { bus?: Maybe<(
    { __typename?: 'BusMutationPayload' }
    & { bus?: Maybe<(
      { __typename?: 'BusNode' }
      & Pick<BusNode, 'id' | 'plateNumber' | 'busNumber'>
      & { busSeatConfiguration: (
        { __typename?: 'BusSeatConfigurationNode' }
        & Pick<BusSeatConfigurationNode, 'id' | 'name'>
      ) }
    )> }
  )> }
);

export type CarrierQueryVariables = Exact<{
  id: Scalars['ID'];
  getTrips: Scalars['Boolean'];
}>;


export type CarrierQuery = (
  { __typename?: 'Query' }
  & { carrier?: Maybe<(
    { __typename?: 'CarrierNode' }
    & Pick<CarrierNode, 'id' | 'name' | 'logo'>
    & { tripSet?: Maybe<(
      { __typename?: 'TripNodeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'TripNodeEdge' }
        & { node?: Maybe<(
          { __typename?: 'TripNode' }
          & Pick<TripNode, 'id'>
          & { route: (
            { __typename?: 'RouteNode' }
            & Pick<RouteNode, 'createdAt'>
            & { leavingFrom: (
              { __typename?: 'CityNode' }
              & Pick<CityNode, 'id' | 'name'>
            ), destination: (
              { __typename?: 'CityNode' }
              & Pick<CityNode, 'id' | 'name'>
            ) }
          ) }
        )> }
      )>> }
    )> }
  )> }
);

export type CarriersQueryVariables = Exact<{
  getTrips: Scalars['Boolean'];
}>;


export type CarriersQuery = (
  { __typename?: 'Query' }
  & { carriers?: Maybe<(
    { __typename?: 'CarrierNodeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'CarrierNodeEdge' }
      & { node?: Maybe<(
        { __typename?: 'CarrierNode' }
        & Pick<CarrierNode, 'id' | 'name' | 'logo'>
        & { tripSet?: Maybe<(
          { __typename?: 'TripNodeConnection' }
          & { edges: Array<Maybe<(
            { __typename?: 'TripNodeEdge' }
            & { node?: Maybe<(
              { __typename?: 'TripNode' }
              & Pick<TripNode, 'id'>
              & { route: (
                { __typename?: 'RouteNode' }
                & Pick<RouteNode, 'createdAt'>
                & { leavingFrom: (
                  { __typename?: 'CityNode' }
                  & Pick<CityNode, 'id' | 'name'>
                ), destination: (
                  { __typename?: 'CityNode' }
                  & Pick<CityNode, 'id' | 'name'>
                ) }
              ) }
            )> }
          )>> }
        )> }
      )> }
    )>> }
  )> }
);

export type ChangeTripBusMutationMutationVariables = Exact<{
  input: ChangeTripBusMutationInput;
}>;


export type ChangeTripBusMutationMutation = (
  { __typename?: 'Mutation' }
  & { changeTripBus?: Maybe<(
    { __typename?: 'ChangeTripBusMutationPayload' }
    & { trip?: Maybe<(
      { __typename?: 'TripNode' }
      & Pick<TripNode, 'id' | 'departureTime' | 'arrivalTime' | 'createdAt'>
      & { busSeatConfiguration: (
        { __typename?: 'BusSeatConfigurationNode' }
        & Pick<BusSeatConfigurationNode, 'id' | 'name'>
      ), bus?: Maybe<(
        { __typename?: 'BusNode' }
        & Pick<BusNode, 'id' | 'plateNumber' | 'busNumber'>
        & { busSeatConfiguration: (
          { __typename?: 'BusSeatConfigurationNode' }
          & Pick<BusSeatConfigurationNode, 'id' | 'name'>
        ) }
      )>, route: (
        { __typename?: 'RouteNode' }
        & Pick<RouteNode, 'id' | 'distance'>
        & { leavingFrom: (
          { __typename?: 'CityNode' }
          & Pick<CityNode, 'id' | 'name'>
        ), destination: (
          { __typename?: 'CityNode' }
          & Pick<CityNode, 'id' | 'name'>
        ) }
      ), carrier: (
        { __typename?: 'CarrierNode' }
        & Pick<CarrierNode, 'id' | 'name' | 'logo'>
      ) }
    )> }
  )> }
);

export type CitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type CitiesQuery = (
  { __typename?: 'Query' }
  & { cities?: Maybe<(
    { __typename?: 'CityNodeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'CityNodeEdge' }
      & { node?: Maybe<(
        { __typename?: 'CityNode' }
        & Pick<CityNode, 'id' | 'name'>
        & { region: (
          { __typename?: 'RegionNode' }
          & Pick<RegionNode, 'id' | 'name'>
          & { country: (
            { __typename?: 'CountryNode' }
            & Pick<CountryNode, 'id' | 'name' | 'countryCode'>
          ) }
        ) }
      )> }
    )>> }
  )> }
);

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

export type TicketMuationMutationVariables = Exact<{
  input: BookTicketMutationInput;
}>;


export type TicketMuationMutation = (
  { __typename?: 'Mutation' }
  & { bookTicket?: Maybe<(
    { __typename?: 'BookTicketMutationPayload' }
    & { tickets?: Maybe<Array<Maybe<(
      { __typename?: 'TicketNode' }
      & Pick<TicketNode, 'id' | 'firstName' | 'lastName' | 'ticketNumber'>
      & { trip: (
        { __typename?: 'TripNode' }
        & Pick<TripNode, 'id'>
      ), busSeatConfigurationSeat: (
        { __typename?: 'BusSeatConfigurationSeatNode' }
        & Pick<BusSeatConfigurationSeatNode, 'id' | 'name'>
      ) }
    )>>> }
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

export type TripQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type TripQuery = (
  { __typename?: 'Query' }
  & { trip?: Maybe<(
    { __typename?: 'TripNode' }
    & Pick<TripNode, 'id' | 'departureTime' | 'arrivalTime' | 'price' | 'createdAt'>
    & { seats?: Maybe<Array<Maybe<(
      { __typename?: 'TripSeatType' }
      & Pick<TripSeatType, 'isLocked' | 'isSold' | 'isLockedByMe' | 'isBookedByMe'>
      & { busSeatConfigurationSeat?: Maybe<(
        { __typename?: 'BusSeatConfigurationSeatNode' }
        & Pick<BusSeatConfigurationSeatNode, 'id' | 'name' | 'row' | 'col' | 'windowSeat' | 'createdAt'>
      )>, lockedBy?: Maybe<(
        { __typename?: 'BusUserNode' }
        & Pick<BusUserNode, 'id' | 'firstName' | 'lastName'>
      )>, ticket?: Maybe<(
        { __typename?: 'TicketNode' }
        & Pick<TicketNode, 'id' | 'firstName' | 'lastName'>
      )> }
    )>>>, busSeatConfiguration: (
      { __typename?: 'BusSeatConfigurationNode' }
      & Pick<BusSeatConfigurationNode, 'id' | 'name'>
    ), bus?: Maybe<(
      { __typename?: 'BusNode' }
      & Pick<BusNode, 'id' | 'plateNumber' | 'busNumber'>
      & { busSeatConfiguration: (
        { __typename?: 'BusSeatConfigurationNode' }
        & Pick<BusSeatConfigurationNode, 'id' | 'name'>
      ) }
    )>, route: (
      { __typename?: 'RouteNode' }
      & Pick<RouteNode, 'id' | 'distance'>
      & { leavingFrom: (
        { __typename?: 'CityNode' }
        & Pick<CityNode, 'id' | 'name'>
        & { busstopSet: (
          { __typename?: 'BusStopNodeConnection' }
          & { edges: Array<Maybe<(
            { __typename?: 'BusStopNodeEdge' }
            & { node?: Maybe<(
              { __typename?: 'BusStopNode' }
              & Pick<BusStopNode, 'id' | 'name'>
            )> }
          )>> }
        ) }
      ), destination: (
        { __typename?: 'CityNode' }
        & Pick<CityNode, 'id' | 'name'>
      ) }
    ), carrier: (
      { __typename?: 'CarrierNode' }
      & Pick<CarrierNode, 'id' | 'name' | 'logo'>
    ) }
  )> }
);

export type TripMutationMutationVariables = Exact<{
  input: TripMutationInput;
}>;


export type TripMutationMutation = (
  { __typename?: 'Mutation' }
  & { trip?: Maybe<(
    { __typename?: 'TripMutationPayload' }
    & Pick<TripMutationPayload, 'bulkRef'>
    & { trips?: Maybe<Array<Maybe<(
      { __typename?: 'TripNode' }
      & Pick<TripNode, 'id' | 'departureTime'>
    )>>> }
  )> }
);

export type TripsQueryVariables = Exact<{
  carrier?: Maybe<Scalars['ID']>;
  bulkRef?: Maybe<Scalars['String']>;
  leavingFrom?: Maybe<Scalars['ID']>;
  destination?: Maybe<Scalars['ID']>;
}>;


export type TripsQuery = (
  { __typename?: 'Query' }
  & { trips?: Maybe<(
    { __typename?: 'TripNodeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'TripNodeEdge' }
      & { node?: Maybe<(
        { __typename?: 'TripNode' }
        & Pick<TripNode, 'id' | 'departureTime' | 'arrivalTime' | 'createdAt'>
        & { bus?: Maybe<(
          { __typename?: 'BusNode' }
          & Pick<BusNode, 'id' | 'plateNumber' | 'busNumber'>
        )>, busSeatConfiguration: (
          { __typename?: 'BusSeatConfigurationNode' }
          & { busseatconfigurationseatSet: (
            { __typename?: 'BusSeatConfigurationSeatNodeConnection' }
            & { edges: Array<Maybe<(
              { __typename?: 'BusSeatConfigurationSeatNodeEdge' }
              & { node?: Maybe<(
                { __typename?: 'BusSeatConfigurationSeatNode' }
                & Pick<BusSeatConfigurationSeatNode, 'id' | 'name'>
              )> }
            )>> }
          ) }
        ), route: (
          { __typename?: 'RouteNode' }
          & Pick<RouteNode, 'id' | 'distance'>
          & { leavingFrom: (
            { __typename?: 'CityNode' }
            & Pick<CityNode, 'id' | 'name'>
          ), destination: (
            { __typename?: 'CityNode' }
            & Pick<CityNode, 'id' | 'name'>
          ) }
        ), carrier: (
          { __typename?: 'CarrierNode' }
          & Pick<CarrierNode, 'id' | 'name' | 'logo'>
        ) }
      )> }
    )>> }
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
        & Pick<BusUserNode, 'id' | 'firstName' | 'lastName' | 'profilePic' | 'phone'>
      )> }
    )>> }
  )> }
);

export const BankAccountsDocument = gql`
    query BankAccounts {
  bankAccounts {
    edges {
      node {
        id
        bankName
        bankLogo
        accountName
        accountNumber
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BankAccountsGQL extends Apollo.Query<BankAccountsQuery, BankAccountsQueryVariables> {
    document = BankAccountsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const BookTicketDocument = gql`
    mutation BookTicket($input: BookTicketMutationInput!) {
  bookTicket(input: $input) {
    order {
      id
      price
      orderedBy {
        id
        firstName
        lastName
        phone
      }
      verification
      isChecked
      transactionId
      verifiedAt
      verifiedBy {
        id
        firstName
        lastName
        phone
      }
    }
    tickets {
      id
      firstName
      lastName
      phone
      order {
        id
        price
        orderedBy {
          id
          firstName
          lastName
          phone
        }
        verification
        isChecked
        transactionId
        verifiedAt
        verifiedBy {
          id
          firstName
          lastName
          phone
        }
      }
      busStop {
        name
      }
      busSeatConfigurationSeat {
        id
        name
      }
      trip {
        id
        departureTime
        arrivalTime
        price
        busSeatConfiguration {
          id
          name
        }
        bus {
          id
          plateNumber
          busNumber
          busSeatConfiguration {
            id
            name
          }
        }
        route {
          id
          leavingFrom {
            id
            name
          }
          destination {
            id
            name
          }
          distance
        }
        carrier {
          id
          name
          logo
        }
        createdAt
      }
      ticketNumber
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BookTicketGQL extends Apollo.Mutation<BookTicketMutation, BookTicketMutationVariables> {
    document = BookTicketDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const BusDocument = gql`
    query Bus($id: ID!) {
  bus(id: $id) {
    id
    busNumber
    plateNumber
    carrier {
      id
      name
    }
    busSeatConfiguration {
      id
      name
    }
    drivers {
      edges {
        node {
          id
          firstName
          lastName
          profilePic
          phone
        }
      }
    }
    assistants {
      edges {
        node {
          id
          firstName
          lastName
          profilePic
          phone
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BusGQL extends Apollo.Query<BusQuery, BusQueryVariables> {
    document = BusDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const BusDriverMutationDocument = gql`
    mutation BusDriverMutation($input: BusDriverMutationInput!) {
  busDriver(input: $input) {
    bus {
      id
      busNumber
      plateNumber
      carrier {
        id
        name
      }
      busSeatConfiguration {
        id
        name
      }
      drivers {
        edges {
          node {
            id
            firstName
            lastName
            profilePic
            phone
          }
        }
      }
      assistants {
        edges {
          node {
            id
            firstName
            lastName
            profilePic
            phone
          }
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BusDriverMutationGQL extends Apollo.Mutation<BusDriverMutationMutation, BusDriverMutationMutationVariables> {
    document = BusDriverMutationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const BusSeatConfigurationDocument = gql`
    query BusSeatConfiguration($id: ID!) {
  busSeatConfiguration(id: $id) {
    id
    name
    busseatconfigurationseatSet {
      edges {
        node {
          id
          windowSeat
          name
          row
          col
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BusSeatConfigurationGQL extends Apollo.Query<BusSeatConfigurationQuery, BusSeatConfigurationQueryVariables> {
    document = BusSeatConfigurationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const BusSeatConfigurationsDocument = gql`
    query BusSeatConfigurations {
  busSeatConfigurations {
    edges {
      node {
        id
        name
        busseatconfigurationseatSet {
          edges {
            node {
              id
              windowSeat
              name
              row
              col
            }
          }
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BusSeatConfigurationsGQL extends Apollo.Query<BusSeatConfigurationsQuery, BusSeatConfigurationsQueryVariables> {
    document = BusSeatConfigurationsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const BusesDocument = gql`
    query Buses($carrier: ID!) {
  buses(carrier: $carrier) {
    edges {
      node {
        id
        busNumber
        plateNumber
        carrier {
          id
          name
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BusesGQL extends Apollo.Query<BusesQuery, BusesQueryVariables> {
    document = BusesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const BusMutationDocument = gql`
    mutation BusMutation($input: BusMutationInput!) {
  bus(input: $input) {
    bus {
      id
      plateNumber
      busNumber
      busSeatConfiguration {
        id
        name
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BusMutationGQL extends Apollo.Mutation<BusMutationMutation, BusMutationMutationVariables> {
    document = BusMutationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CarrierDocument = gql`
    query Carrier($id: ID!, $getTrips: Boolean!) {
  carrier(id: $id) {
    id
    name
    logo
    tripSet @include(if: $getTrips) {
      edges {
        node {
          id
          route {
            createdAt
            leavingFrom {
              id
              name
            }
            destination {
              id
              name
            }
          }
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CarrierGQL extends Apollo.Query<CarrierQuery, CarrierQueryVariables> {
    document = CarrierDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CarriersDocument = gql`
    query Carriers($getTrips: Boolean!) {
  carriers {
    edges {
      node {
        id
        name
        logo
        tripSet @include(if: $getTrips) {
          edges {
            node {
              id
              route {
                createdAt
                leavingFrom {
                  id
                  name
                }
                destination {
                  id
                  name
                }
              }
            }
          }
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CarriersGQL extends Apollo.Query<CarriersQuery, CarriersQueryVariables> {
    document = CarriersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ChangeTripBusMutationDocument = gql`
    mutation ChangeTripBusMutation($input: ChangeTripBusMutationInput!) {
  changeTripBus(input: $input) {
    trip {
      id
      departureTime
      arrivalTime
      busSeatConfiguration {
        id
        name
      }
      bus {
        id
        plateNumber
        busNumber
        busSeatConfiguration {
          id
          name
        }
      }
      route {
        id
        leavingFrom {
          id
          name
        }
        destination {
          id
          name
        }
        distance
      }
      carrier {
        id
        name
        logo
      }
      createdAt
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ChangeTripBusMutationGQL extends Apollo.Mutation<ChangeTripBusMutationMutation, ChangeTripBusMutationMutationVariables> {
    document = ChangeTripBusMutationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CitiesDocument = gql`
    query Cities {
  cities {
    edges {
      node {
        id
        name
        region {
          id
          name
          country {
            id
            name
            countryCode
          }
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CitiesGQL extends Apollo.Query<CitiesQuery, CitiesQueryVariables> {
    document = CitiesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
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
export const TicketMuationDocument = gql`
    mutation TicketMuation($input: BookTicketMutationInput!) {
  bookTicket(input: $input) {
    tickets {
      id
      firstName
      lastName
      trip {
        id
      }
      busSeatConfigurationSeat {
        id
        name
      }
      ticketNumber
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TicketMuationGQL extends Apollo.Mutation<TicketMuationMutation, TicketMuationMutationVariables> {
    document = TicketMuationDocument;
    
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
export const TripDocument = gql`
    query Trip($id: ID!) {
  trip(id: $id) {
    id
    departureTime
    arrivalTime
    price
    seats {
      busSeatConfigurationSeat {
        id
        name
        row
        col
        windowSeat
        createdAt
      }
      lockedBy {
        id
        firstName
        lastName
      }
      ticket {
        id
        firstName
        lastName
      }
      isLocked
      isSold
      isLockedByMe
      isBookedByMe
    }
    busSeatConfiguration {
      id
      name
    }
    bus {
      id
      plateNumber
      busNumber
      busSeatConfiguration {
        id
        name
      }
    }
    route {
      id
      leavingFrom {
        id
        name
        busstopSet {
          edges {
            node {
              id
              name
            }
          }
        }
      }
      destination {
        id
        name
      }
      distance
    }
    carrier {
      id
      name
      logo
    }
    createdAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TripGQL extends Apollo.Query<TripQuery, TripQueryVariables> {
    document = TripDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TripMutationDocument = gql`
    mutation TripMutation($input: TripMutationInput!) {
  trip(input: $input) {
    bulkRef
    trips {
      id
      departureTime
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TripMutationGQL extends Apollo.Mutation<TripMutationMutation, TripMutationMutationVariables> {
    document = TripMutationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TripsDocument = gql`
    query Trips($carrier: ID, $bulkRef: String, $leavingFrom: ID, $destination: ID) {
  trips(
    carrier: $carrier
    bulkRef: $bulkRef
    route_LeavingFrom: $leavingFrom
    route_Destination: $destination
  ) {
    edges {
      node {
        id
        departureTime
        arrivalTime
        bus {
          id
          plateNumber
          busNumber
        }
        busSeatConfiguration {
          busseatconfigurationseatSet {
            edges {
              node {
                id
                name
              }
            }
          }
        }
        route {
          id
          leavingFrom {
            id
            name
          }
          destination {
            id
            name
          }
          distance
        }
        carrier {
          id
          name
          logo
        }
        createdAt
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TripsGQL extends Apollo.Query<TripsQuery, TripsQueryVariables> {
    document = TripsDocument;
    
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
        phone
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