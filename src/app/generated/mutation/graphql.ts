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
  bank: BankNode;
  accountName: Scalars['String'];
  accountNumber: Scalars['String'];
  carrier: CarrierNode;
  paymentorderSet: PaymentOrderNodeConnection;
};


export type BankAccountNodePaymentorderSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderedBy?: Maybe<Scalars['ID']>;
  transactionId?: Maybe<Scalars['String']>;
  bankAccount?: Maybe<Scalars['ID']>;
  verifiedBy?: Maybe<Scalars['ID']>;
  verification?: Maybe<Scalars['Boolean']>;
  isChecked?: Maybe<Scalars['Boolean']>;
  bankAccount_Carrier?: Maybe<Scalars['ID']>;
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

export type BankNode = Node & {
  __typename?: 'BankNode';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  name: Scalars['String'];
  logo?: Maybe<Scalars['String']>;
  bankaccountSet: BankAccountNodeConnection;
};


export type BankNodeBankaccountSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  carrier?: Maybe<Scalars['ID']>;
};

export type BoardPassengerMutationInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type BoardPassengerMutationPayload = {
  __typename?: 'BoardPassengerMutationPayload';
  ticket?: Maybe<TicketNode>;
  clientMutationId?: Maybe<Scalars['String']>;
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
  plateCode: Scalars['String'];
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
  carrierticketer_Carrier?: Maybe<Scalars['ID']>;
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
  carrierticketer_Carrier?: Maybe<Scalars['ID']>;
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
  isLocked?: Maybe<Scalars['Boolean']>;
};


export type BusSeatConfigurationSeatNodeTicketSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  trip?: Maybe<Scalars['ID']>;
  trip_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
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
  trip?: Maybe<Scalars['ID']>;
  trip_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
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
  CarrierTicketer: CarrierNodeConnection;
  CarrierRating: CarrierNodeConnection;
  carrieradminSet: CarrierAdminNodeConnection;
  carrierticketerSet: CarrierTicketerNodeConnection;
  carrierratingSet: CarrierRatingNodeConnection;
  drivers: BusNodeConnection;
  assistants: BusNodeConnection;
  tripSet: TripNodeConnection;
  triplocationSet: TripLocationNodeConnection;
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


export type BusUserNodeCarrierTicketerArgs = {
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


export type BusUserNodeCarrierticketerSetArgs = {
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


export type BusUserNodeTriplocationSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  trip?: Maybe<Scalars['ID']>;
};


export type BusUserNodeOrderedByArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderedBy?: Maybe<Scalars['ID']>;
  transactionId?: Maybe<Scalars['String']>;
  bankAccount?: Maybe<Scalars['ID']>;
  verifiedBy?: Maybe<Scalars['ID']>;
  verification?: Maybe<Scalars['Boolean']>;
  isChecked?: Maybe<Scalars['Boolean']>;
  bankAccount_Carrier?: Maybe<Scalars['ID']>;
};


export type BusUserNodePaymentorderSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderedBy?: Maybe<Scalars['ID']>;
  transactionId?: Maybe<Scalars['String']>;
  bankAccount?: Maybe<Scalars['ID']>;
  verifiedBy?: Maybe<Scalars['ID']>;
  verification?: Maybe<Scalars['Boolean']>;
  isChecked?: Maybe<Scalars['Boolean']>;
  bankAccount_Carrier?: Maybe<Scalars['ID']>;
};


export type BusUserNodeTicketSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  trip?: Maybe<Scalars['ID']>;
  trip_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
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
  writePermission: Scalars['Boolean'];
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
  ticketers: BusUserNodeConnection;
  ratings: BusUserNodeConnection;
  carrierphoneSet: CarrierPhoneNodeConnection;
  carrieradminSet: CarrierAdminNodeConnection;
  carrierticketerSet: CarrierTicketerNodeConnection;
  carrierratingSet: CarrierRatingNodeConnection;
  busSet: BusNodeConnection;
  routeSet: RouteNodeConnection;
  routepriceSet: RoutePriceNodeConnection;
  tripSet: TripNodeConnection;
  bankaccountSet: BankAccountNodeConnection;
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
  carrierticketer_Carrier?: Maybe<Scalars['ID']>;
};


export type CarrierNodeTicketersArgs = {
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
  carrierticketer_Carrier?: Maybe<Scalars['ID']>;
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
  carrierticketer_Carrier?: Maybe<Scalars['ID']>;
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


export type CarrierNodeCarrierticketerSetArgs = {
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


export type CarrierNodeBankaccountSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  carrier?: Maybe<Scalars['ID']>;
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

export type CarrierTicketerMutationInput = {
  carrier: Scalars['ID'];
  user?: Maybe<Scalars['ID']>;
  userPhone?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CarrierTicketerMutationPayload = {
  __typename?: 'CarrierTicketerMutationPayload';
  carrierTicketer?: Maybe<CarrierTicketerNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CarrierTicketerNode = Node & {
  __typename?: 'CarrierTicketerNode';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  carrier: CarrierNode;
  user: BusUserNode;
  readPermission: Scalars['Boolean'];
  writePermission: Scalars['Boolean'];
};

export type CarrierTicketerNodeConnection = {
  __typename?: 'CarrierTicketerNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<CarrierTicketerNodeEdge>>;
};

export type CarrierTicketerNodeEdge = {
  __typename?: 'CarrierTicketerNodeEdge';
  node?: Maybe<CarrierTicketerNode>;
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

export type EbaTripMutationInput = {
  trip: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type EbaTripMutationPayload = {
  __typename?: 'EbaTripMutationPayload';
  trip?: Maybe<TripNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};



export type Mutation = {
  __typename?: 'Mutation';
  trip?: Maybe<TripMutationPayload>;
  changeTripBus?: Maybe<ChangeTripBusMutationPayload>;
  cancelTrip?: Maybe<CancelTripMutationPayload>;
  startTrip?: Maybe<StartTripMutationPayload>;
  endTrip?: Maybe<EbaTripMutationPayload>;
  tripLocation?: Maybe<TripLocationMutationPayload>;
  bookTicket?: Maybe<BookTicketMutationPayload>;
  reserveTicket?: Maybe<ReserveTicketMutationPayload>;
  cancelTicket?: Maybe<CancelTicketMutationPayload>;
  rescheduleTicket?: Maybe<RescheduleTicketMutationPayload>;
  boardPassenger?: Maybe<BoardPassengerMutationPayload>;
  paymentConfirmationRequest?: Maybe<PaymentConfirmationRequestMutationPayload>;
  validatePayment?: Maybe<ValidatePaymentMutationPayload>;
  carrier?: Maybe<CarrierMutationPayload>;
  carrierRating?: Maybe<CarrierRatingMutationPayload>;
  carrierTicketer?: Maybe<CarrierTicketerMutationPayload>;
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


export type MutationStartTripArgs = {
  input: StartTripMutationInput;
};


export type MutationEndTripArgs = {
  input: EbaTripMutationInput;
};


export type MutationTripLocationArgs = {
  input: TripLocationMutationInput;
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


export type MutationBoardPassengerArgs = {
  input: BoardPassengerMutationInput;
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


export type MutationCarrierTicketerArgs = {
  input: CarrierTicketerMutationInput;
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
  carrierticketer_Carrier?: Maybe<Scalars['ID']>;
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
  trip?: Maybe<Scalars['ID']>;
  trip_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
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
  myCrewTrips?: Maybe<TripNodeConnection>;
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


export type QueryMyCrewTripsArgs = {
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


export type QueryTicketsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  trip?: Maybe<Scalars['ID']>;
  trip_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type QueryMyTicketsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  trip?: Maybe<Scalars['ID']>;
  trip_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
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
  carrier?: Maybe<Scalars['ID']>;
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
  orderedBy?: Maybe<Scalars['ID']>;
  transactionId?: Maybe<Scalars['String']>;
  bankAccount?: Maybe<Scalars['ID']>;
  verifiedBy?: Maybe<Scalars['ID']>;
  verification?: Maybe<Scalars['Boolean']>;
  isChecked?: Maybe<Scalars['Boolean']>;
  bankAccount_Carrier?: Maybe<Scalars['ID']>;
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
  carrierticketer_Carrier?: Maybe<Scalars['ID']>;
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

export type StartTripMutationInput = {
  trip: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type StartTripMutationPayload = {
  __typename?: 'StartTripMutationPayload';
  trip?: Maybe<TripNode>;
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
  ticketNumber?: Maybe<Scalars['String']>;
  lockedAt?: Maybe<Scalars['DateTime']>;
  lockedUntil?: Maybe<Scalars['DateTime']>;
  boardedAt?: Maybe<Scalars['DateTime']>;
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

export type TripLocationMutationInput = {
  trip: Scalars['ID'];
  time: Scalars['DateTime'];
  lat: Scalars['Decimal'];
  long: Scalars['Decimal'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type TripLocationMutationPayload = {
  __typename?: 'TripLocationMutationPayload';
  tripLocation?: Maybe<TripLocationNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type TripLocationNode = Node & {
  __typename?: 'TripLocationNode';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  time: Scalars['DateTime'];
  lat: Scalars['Decimal'];
  long: Scalars['Decimal'];
  trip: TripNode;
  user: BusUserNode;
};

export type TripLocationNodeConnection = {
  __typename?: 'TripLocationNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<TripLocationNodeEdge>>;
};

export type TripLocationNodeEdge = {
  __typename?: 'TripLocationNodeEdge';
  node?: Maybe<TripLocationNode>;
  cursor: Scalars['String'];
};

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
  startedAt?: Maybe<Scalars['DateTime']>;
  endedAt?: Maybe<Scalars['DateTime']>;
  triplocationSet: TripLocationNodeConnection;
  ticketSet: TicketNodeConnection;
  price?: Maybe<Scalars['Decimal']>;
  seats?: Maybe<Array<Maybe<TripSeatType>>>;
};


export type TripNodeTriplocationSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  trip?: Maybe<Scalars['ID']>;
};


export type TripNodeTicketSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  trip?: Maybe<Scalars['ID']>;
  trip_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
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
  CarrierTicketer: CarrierNodeConnection;
  CarrierRating: CarrierNodeConnection;
  carrieradminSet: CarrierAdminNodeConnection;
  carrierticketerSet: CarrierTicketerNodeConnection;
  carrierratingSet: CarrierRatingNodeConnection;
  drivers: BusNodeConnection;
  assistants: BusNodeConnection;
  tripSet: TripNodeConnection;
  triplocationSet: TripLocationNodeConnection;
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


export type UserNodeCarrierTicketerArgs = {
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


export type UserNodeCarrierticketerSetArgs = {
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


export type UserNodeTriplocationSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  trip?: Maybe<Scalars['ID']>;
};


export type UserNodeOrderedByArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderedBy?: Maybe<Scalars['ID']>;
  transactionId?: Maybe<Scalars['String']>;
  bankAccount?: Maybe<Scalars['ID']>;
  verifiedBy?: Maybe<Scalars['ID']>;
  verification?: Maybe<Scalars['Boolean']>;
  isChecked?: Maybe<Scalars['Boolean']>;
  bankAccount_Carrier?: Maybe<Scalars['ID']>;
};


export type UserNodePaymentorderSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderedBy?: Maybe<Scalars['ID']>;
  transactionId?: Maybe<Scalars['String']>;
  bankAccount?: Maybe<Scalars['ID']>;
  verifiedBy?: Maybe<Scalars['ID']>;
  verification?: Maybe<Scalars['Boolean']>;
  isChecked?: Maybe<Scalars['Boolean']>;
  bankAccount_Carrier?: Maybe<Scalars['ID']>;
};


export type UserNodeTicketSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  trip?: Maybe<Scalars['ID']>;
  trip_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
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
      & Pick<TicketNode, 'id' | 'firstName' | 'lastName' | 'phone' | 'lockedUntil' | 'ticketNumber'>
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
            & Pick<CityNode, 'id' | 'name' | 'nameAm' | 'nameOr' | 'nameTg'>
          ), destination: (
            { __typename?: 'CityNode' }
            & Pick<CityNode, 'id' | 'name' | 'nameAm' | 'nameOr' | 'nameTg'>
          ) }
        ), carrier: (
          { __typename?: 'CarrierNode' }
          & Pick<CarrierNode, 'id' | 'name' | 'nameAm' | 'nameOr' | 'nameTg' | 'logo'>
        ) }
      ) }
    )>>> }
  )> }
);

export type BusDriverMutationVariables = Exact<{
  input: BusDriverMutationInput;
}>;


export type BusDriverMutation = (
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

export type BusMutationVariables = Exact<{
  input: BusMutationInput;
}>;


export type BusMutation = (
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

export type CancelTicketMutationVariables = Exact<{
  input: CancelTicketMutationInput;
}>;


export type CancelTicketMutation = (
  { __typename?: 'Mutation' }
  & { cancelTicket?: Maybe<(
    { __typename?: 'CancelTicketMutationPayload' }
    & { ticket?: Maybe<(
      { __typename?: 'TicketNode' }
      & Pick<TicketNode, 'id'>
      & { trip: (
        { __typename?: 'TripNode' }
        & Pick<TripNode, 'id'>
      ) }
    )> }
  )> }
);

export type CarrierTicketerMutationVariables = Exact<{
  input: CarrierTicketerMutationInput;
}>;


export type CarrierTicketerMutation = (
  { __typename?: 'Mutation' }
  & { carrierTicketer?: Maybe<(
    { __typename?: 'CarrierTicketerMutationPayload' }
    & { carrierTicketer?: Maybe<(
      { __typename?: 'CarrierTicketerNode' }
      & { carrier: (
        { __typename?: 'CarrierNode' }
        & Pick<CarrierNode, 'id' | 'name' | 'logo'>
      ), user: (
        { __typename?: 'BusUserNode' }
        & Pick<BusUserNode, 'id' | 'firstName' | 'lastName' | 'email' | 'phone' | 'profilePic'>
      ) }
    )> }
  )> }
);

export type ChangeTripBusMutationVariables = Exact<{
  input: ChangeTripBusMutationInput;
}>;


export type ChangeTripBusMutation = (
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

export type UserCreateMutationVariables = Exact<{
  input: UserMutationInput;
}>;


export type UserCreateMutation = (
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

export type UserFcmTokenMutationVariables = Exact<{
  input: UserFcmTokenMutationInput;
}>;


export type UserFcmTokenMutation = (
  { __typename?: 'Mutation' }
  & { userFcmToken?: Maybe<(
    { __typename?: 'UserFCMTokenMutationPayload' }
    & { userFcmToken?: Maybe<(
      { __typename?: 'UserFCMTokenNode' }
      & Pick<UserFcmTokenNode, 'id' | 'token' | 'createdAt'>
    )> }
  )> }
);

export type LogoutMutationVariables = Exact<{
  input: RevokeTokenInput;
}>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & { revokeToken?: Maybe<(
    { __typename?: 'RevokeTokenPayload' }
    & Pick<RevokeTokenPayload, 'revoked' | 'success' | 'errors'>
  )> }
);

export type PaymentConfirmationRequestMutationVariables = Exact<{
  input: PaymentConfirmationRequestMutationInput;
}>;


export type PaymentConfirmationRequestMutation = (
  { __typename?: 'Mutation' }
  & { paymentConfirmationRequest?: Maybe<(
    { __typename?: 'PaymentConfirmationRequestMutationPayload' }
    & { paymentOrder?: Maybe<(
      { __typename?: 'PaymentOrderNode' }
      & Pick<PaymentOrderNode, 'id' | 'createdAt' | 'price' | 'transactionId' | 'verifiedAt'>
      & { bankAccount?: Maybe<(
        { __typename?: 'BankAccountNode' }
        & Pick<BankAccountNode, 'id' | 'accountNumber'>
      )>, verifiedBy?: Maybe<(
        { __typename?: 'BusUserNode' }
        & Pick<BusUserNode, 'id' | 'firstName' | 'lastName'>
      )> }
    )> }
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

export type RescheduleTripMutationVariables = Exact<{
  input: RescheduleTicketMutationInput;
}>;


export type RescheduleTripMutation = (
  { __typename?: 'Mutation' }
  & { rescheduleTicket?: Maybe<(
    { __typename?: 'RescheduleTicketMutationPayload' }
    & { ticket?: Maybe<(
      { __typename?: 'TicketNode' }
      & Pick<TicketNode, 'id' | 'firstName' | 'lastName'>
      & { trip: (
        { __typename?: 'TripNode' }
        & Pick<TripNode, 'id' | 'price' | 'departureTime'>
        & { carrier: (
          { __typename?: 'CarrierNode' }
          & Pick<CarrierNode, 'id' | 'name' | 'logo'>
        ) }
      ) }
    )> }
  )> }
);

export type ReserveTicketMutationVariables = Exact<{
  input: ReserveTicketMutationInput;
}>;


export type ReserveTicketMutation = (
  { __typename?: 'Mutation' }
  & { reserveTicket?: Maybe<(
    { __typename?: 'ReserveTicketMutationPayload' }
    & { ticket?: Maybe<(
      { __typename?: 'TicketNode' }
      & Pick<TicketNode, 'id' | 'firstName' | 'lastName' | 'ticketNumber'>
      & { trip: (
        { __typename?: 'TripNode' }
        & Pick<TripNode, 'id'>
      ), busSeatConfigurationSeat: (
        { __typename?: 'BusSeatConfigurationSeatNode' }
        & Pick<BusSeatConfigurationSeatNode, 'id' | 'name'>
      ), user: (
        { __typename?: 'BusUserNode' }
        & Pick<BusUserNode, 'id' | 'firstName' | 'lastName' | 'email' | 'phone'>
      ) }
    )> }
  )> }
);

export type SendPhoneVerificationCodeMutationVariables = Exact<{
  input: SendVerificationCodeMutationInput;
}>;


export type SendPhoneVerificationCodeMutation = (
  { __typename?: 'Mutation' }
  & { sendPhoneVerificationCode?: Maybe<(
    { __typename?: 'SendVerificationCodeMutationPayload' }
    & { user?: Maybe<(
      { __typename?: 'BusUserNode' }
      & Pick<BusUserNode, 'id' | 'firstName' | 'lastName'>
    )> }
  )> }
);

export type LoginMutationVariables = Exact<{
  input: ObtainJsonWebTokenInput;
}>;


export type LoginMutation = (
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

export type TripMutationVariables = Exact<{
  input: TripMutationInput;
}>;


export type TripMutation = (
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

export type ValidatePaymentMutationVariables = Exact<{
  input: ValidatePaymentMutationInput;
}>;


export type ValidatePaymentMutation = (
  { __typename?: 'Mutation' }
  & { validatePayment?: Maybe<(
    { __typename?: 'ValidatePaymentMutationPayload' }
    & { paymentOrder?: Maybe<(
      { __typename?: 'PaymentOrderNode' }
      & Pick<PaymentOrderNode, 'id' | 'transactionId' | 'price' | 'isChecked' | 'verifiedAt' | 'verification' | 'createdAt'>
      & { bankAccount?: Maybe<(
        { __typename?: 'BankAccountNode' }
        & Pick<BankAccountNode, 'id'>
        & { bank: (
          { __typename?: 'BankNode' }
          & Pick<BankNode, 'name' | 'logo'>
        ) }
      )>, verifiedBy?: Maybe<(
        { __typename?: 'BusUserNode' }
        & Pick<BusUserNode, 'id' | 'firstName' | 'lastName'>
      )> }
    )> }
  )> }
);

export type VerifyPhoneVerificationCodeMutationVariables = Exact<{
  input: ValidatePhoneMutationInput;
}>;


export type VerifyPhoneVerificationCodeMutation = (
  { __typename?: 'Mutation' }
  & { verifyPhoneVerificationCode?: Maybe<(
    { __typename?: 'ValidatePhoneMutationPayload' }
    & Pick<ValidatePhoneMutationPayload, 'token' | 'refreshToken'>
    & { user?: Maybe<(
      { __typename?: 'BusUserNode' }
      & Pick<BusUserNode, 'id' | 'firstName' | 'lastName'>
    )> }
  )> }
);

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
      lockedUntil
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
            nameAm
            nameOr
            nameTg
          }
          destination {
            id
            name
            nameAm
            nameOr
            nameTg
          }
          distance
        }
        carrier {
          id
          name
          nameAm
          nameOr
          nameTg
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
export const BusDriverDocument = gql`
    mutation BusDriver($input: BusDriverMutationInput!) {
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
  export class BusDriverGQL extends Apollo.Mutation<BusDriverMutation, BusDriverMutationVariables> {
    document = BusDriverDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const BusDocument = gql`
    mutation Bus($input: BusMutationInput!) {
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
  export class BusGQL extends Apollo.Mutation<BusMutation, BusMutationVariables> {
    document = BusDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CancelTicketDocument = gql`
    mutation CancelTicket($input: CancelTicketMutationInput!) {
  cancelTicket(input: $input) {
    ticket {
      id
      trip {
        id
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CancelTicketGQL extends Apollo.Mutation<CancelTicketMutation, CancelTicketMutationVariables> {
    document = CancelTicketDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CarrierTicketerDocument = gql`
    mutation CarrierTicketer($input: CarrierTicketerMutationInput!) {
  carrierTicketer(input: $input) {
    carrierTicketer {
      carrier {
        id
        name
        logo
      }
      user {
        id
        firstName
        lastName
        email
        phone
        profilePic
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CarrierTicketerGQL extends Apollo.Mutation<CarrierTicketerMutation, CarrierTicketerMutationVariables> {
    document = CarrierTicketerDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ChangeTripBusDocument = gql`
    mutation ChangeTripBus($input: ChangeTripBusMutationInput!) {
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
  export class ChangeTripBusGQL extends Apollo.Mutation<ChangeTripBusMutation, ChangeTripBusMutationVariables> {
    document = ChangeTripBusDocument;
    
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
export const UserCreateDocument = gql`
    mutation UserCreate($input: UserMutationInput!) {
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
  export class UserCreateGQL extends Apollo.Mutation<UserCreateMutation, UserCreateMutationVariables> {
    document = UserCreateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UserFcmTokenDocument = gql`
    mutation UserFCMToken($input: UserFCMTokenMutationInput!) {
  userFcmToken(input: $input) {
    userFcmToken {
      id
      token
      createdAt
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UserFcmTokenGQL extends Apollo.Mutation<UserFcmTokenMutation, UserFcmTokenMutationVariables> {
    document = UserFcmTokenDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LogoutDocument = gql`
    mutation Logout($input: RevokeTokenInput!) {
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
  export class LogoutGQL extends Apollo.Mutation<LogoutMutation, LogoutMutationVariables> {
    document = LogoutDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PaymentConfirmationRequestDocument = gql`
    mutation PaymentConfirmationRequest($input: PaymentConfirmationRequestMutationInput!) {
  paymentConfirmationRequest(input: $input) {
    paymentOrder {
      id
      createdAt
      price
      transactionId
      bankAccount {
        id
        accountNumber
      }
      verifiedAt
      verifiedBy {
        id
        firstName
        lastName
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PaymentConfirmationRequestGQL extends Apollo.Mutation<PaymentConfirmationRequestMutation, PaymentConfirmationRequestMutationVariables> {
    document = PaymentConfirmationRequestDocument;
    
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
export const RescheduleTripDocument = gql`
    mutation RescheduleTrip($input: RescheduleTicketMutationInput!) {
  rescheduleTicket(input: $input) {
    ticket {
      id
      firstName
      lastName
      trip {
        id
        price
        departureTime
        carrier {
          id
          name
          logo
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RescheduleTripGQL extends Apollo.Mutation<RescheduleTripMutation, RescheduleTripMutationVariables> {
    document = RescheduleTripDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ReserveTicketDocument = gql`
    mutation ReserveTicket($input: ReserveTicketMutationInput!) {
  reserveTicket(input: $input) {
    ticket {
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
      user {
        id
        firstName
        lastName
        email
        phone
      }
      ticketNumber
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ReserveTicketGQL extends Apollo.Mutation<ReserveTicketMutation, ReserveTicketMutationVariables> {
    document = ReserveTicketDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SendPhoneVerificationCodeDocument = gql`
    mutation SendPhoneVerificationCode($input: SendVerificationCodeMutationInput!) {
  sendPhoneVerificationCode(input: $input) {
    user {
      id
      firstName
      lastName
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SendPhoneVerificationCodeGQL extends Apollo.Mutation<SendPhoneVerificationCodeMutation, SendPhoneVerificationCodeMutationVariables> {
    document = SendPhoneVerificationCodeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LoginDocument = gql`
    mutation Login($input: ObtainJSONWebTokenInput!) {
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
  export class LoginGQL extends Apollo.Mutation<LoginMutation, LoginMutationVariables> {
    document = LoginDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TripDocument = gql`
    mutation Trip($input: TripMutationInput!) {
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
  export class TripGQL extends Apollo.Mutation<TripMutation, TripMutationVariables> {
    document = TripDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ValidatePaymentDocument = gql`
    mutation ValidatePayment($input: ValidatePaymentMutationInput!) {
  validatePayment(input: $input) {
    paymentOrder {
      id
      transactionId
      price
      isChecked
      verifiedAt
      verification
      bankAccount {
        id
        bank {
          name
          logo
        }
      }
      verifiedAt
      verifiedBy {
        id
        firstName
        lastName
      }
      createdAt
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ValidatePaymentGQL extends Apollo.Mutation<ValidatePaymentMutation, ValidatePaymentMutationVariables> {
    document = ValidatePaymentDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const VerifyPhoneVerificationCodeDocument = gql`
    mutation VerifyPhoneVerificationCode($input: ValidatePhoneMutationInput!) {
  verifyPhoneVerificationCode(input: $input) {
    user {
      id
      firstName
      lastName
    }
    token
    refreshToken
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class VerifyPhoneVerificationCodeGQL extends Apollo.Mutation<VerifyPhoneVerificationCodeMutation, VerifyPhoneVerificationCodeMutationVariables> {
    document = VerifyPhoneVerificationCodeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }