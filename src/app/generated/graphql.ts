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
  bulkRef?: Maybe<Scalars['String']>;
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

export type BusLocationType = {
  __typename?: 'BusLocationType';
  latitude?: Maybe<Scalars['Decimal']>;
  longitude?: Maybe<Scalars['Decimal']>;
  time?: Maybe<Scalars['DateTime']>;
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
  location?: Maybe<BusLocationType>;
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
  carrierticketer_TicketOffice_Carrier?: Maybe<Scalars['ID']>;
  carrierticketer_TicketOffice?: Maybe<Scalars['ID']>;
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
  carrierticketer_TicketOffice_Carrier?: Maybe<Scalars['ID']>;
  carrierticketer_TicketOffice?: Maybe<Scalars['ID']>;
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
  trip_Carrier?: Maybe<Scalars['ID']>;
  trip_Carrier_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  trip_DepartureTime?: Maybe<Scalars['DateTime']>;
  trip_DepartureTime_Gte?: Maybe<Scalars['DateTime']>;
  trip_DepartureTime_Lte?: Maybe<Scalars['DateTime']>;
  trip_Route_LeavingFrom?: Maybe<Scalars['ID']>;
  trip_Route_LeavingFrom_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  trip_Route_Destination?: Maybe<Scalars['ID']>;
  trip_Route_Destination_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  phone_Icontains?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  phone_Startswith?: Maybe<Scalars['String']>;
  firstName_Icontains?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  firstName_Startswith?: Maybe<Scalars['String']>;
  lastName_Icontains?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  lastName_Startswith?: Maybe<Scalars['String']>;
  ticketNumber_Icontains?: Maybe<Scalars['String']>;
  ticketNumber?: Maybe<Scalars['String']>;
  ticketNumber_Startswith?: Maybe<Scalars['String']>;
  busStop?: Maybe<Scalars['ID']>;
  busStop_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  user?: Maybe<Scalars['ID']>;
  bulkRef?: Maybe<Scalars['String']>;
  bulkRef_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  bookedAt?: Maybe<Scalars['DateTime']>;
  bookedAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  bookedAt_Gte?: Maybe<Scalars['DateTime']>;
  bookedAt_Lte?: Maybe<Scalars['DateTime']>;
  bookedAt_Isnull?: Maybe<Scalars['Boolean']>;
  order_VerifiedAt?: Maybe<Scalars['DateTime']>;
  order_VerifiedAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  order_VerifiedAt_Gte?: Maybe<Scalars['DateTime']>;
  order_VerifiedAt_Lte?: Maybe<Scalars['DateTime']>;
  order_VerifiedAt_Isnull?: Maybe<Scalars['Boolean']>;
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
  trip_Carrier?: Maybe<Scalars['ID']>;
  trip_Carrier_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  trip_DepartureTime?: Maybe<Scalars['DateTime']>;
  trip_DepartureTime_Gte?: Maybe<Scalars['DateTime']>;
  trip_DepartureTime_Lte?: Maybe<Scalars['DateTime']>;
  trip_Route_LeavingFrom?: Maybe<Scalars['ID']>;
  trip_Route_LeavingFrom_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  trip_Route_Destination?: Maybe<Scalars['ID']>;
  trip_Route_Destination_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  phone_Icontains?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  phone_Startswith?: Maybe<Scalars['String']>;
  firstName_Icontains?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  firstName_Startswith?: Maybe<Scalars['String']>;
  lastName_Icontains?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  lastName_Startswith?: Maybe<Scalars['String']>;
  ticketNumber_Icontains?: Maybe<Scalars['String']>;
  ticketNumber?: Maybe<Scalars['String']>;
  ticketNumber_Startswith?: Maybe<Scalars['String']>;
  busStop?: Maybe<Scalars['ID']>;
  busStop_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  user?: Maybe<Scalars['ID']>;
  bulkRef?: Maybe<Scalars['String']>;
  bulkRef_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  bookedAt?: Maybe<Scalars['DateTime']>;
  bookedAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  bookedAt_Gte?: Maybe<Scalars['DateTime']>;
  bookedAt_Lte?: Maybe<Scalars['DateTime']>;
  bookedAt_Isnull?: Maybe<Scalars['Boolean']>;
  order_VerifiedAt?: Maybe<Scalars['DateTime']>;
  order_VerifiedAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  order_VerifiedAt_Gte?: Maybe<Scalars['DateTime']>;
  order_VerifiedAt_Lte?: Maybe<Scalars['DateTime']>;
  order_VerifiedAt_Isnull?: Maybe<Scalars['Boolean']>;
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
  carrierticketer?: Maybe<CarrierTicketerNode>;
  carrierratingSet: CarrierRatingNodeConnection;
  drivers: BusNodeConnection;
  assistants: BusNodeConnection;
  routepriceSet: RoutePriceNodeConnection;
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


export type BusUserNodeRoutepriceSetArgs = {
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
  trip_Carrier?: Maybe<Scalars['ID']>;
  trip_Carrier_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  trip_DepartureTime?: Maybe<Scalars['DateTime']>;
  trip_DepartureTime_Gte?: Maybe<Scalars['DateTime']>;
  trip_DepartureTime_Lte?: Maybe<Scalars['DateTime']>;
  trip_Route_LeavingFrom?: Maybe<Scalars['ID']>;
  trip_Route_LeavingFrom_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  trip_Route_Destination?: Maybe<Scalars['ID']>;
  trip_Route_Destination_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  phone_Icontains?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  phone_Startswith?: Maybe<Scalars['String']>;
  firstName_Icontains?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  firstName_Startswith?: Maybe<Scalars['String']>;
  lastName_Icontains?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  lastName_Startswith?: Maybe<Scalars['String']>;
  ticketNumber_Icontains?: Maybe<Scalars['String']>;
  ticketNumber?: Maybe<Scalars['String']>;
  ticketNumber_Startswith?: Maybe<Scalars['String']>;
  busStop?: Maybe<Scalars['ID']>;
  busStop_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  user?: Maybe<Scalars['ID']>;
  bulkRef?: Maybe<Scalars['String']>;
  bulkRef_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  bookedAt?: Maybe<Scalars['DateTime']>;
  bookedAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  bookedAt_Gte?: Maybe<Scalars['DateTime']>;
  bookedAt_Lte?: Maybe<Scalars['DateTime']>;
  bookedAt_Isnull?: Maybe<Scalars['Boolean']>;
  order_VerifiedAt?: Maybe<Scalars['DateTime']>;
  order_VerifiedAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  order_VerifiedAt_Gte?: Maybe<Scalars['DateTime']>;
  order_VerifiedAt_Lte?: Maybe<Scalars['DateTime']>;
  order_VerifiedAt_Isnull?: Maybe<Scalars['Boolean']>;
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
  ratings: BusUserNodeConnection;
  carrierphoneSet: CarrierPhoneNodeConnection;
  carrieradminSet: CarrierAdminNodeConnection;
  ticketofficeSet: TicketOfficeNodeConnection;
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
  carrierticketer_TicketOffice_Carrier?: Maybe<Scalars['ID']>;
  carrierticketer_TicketOffice?: Maybe<Scalars['ID']>;
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
  carrierticketer_TicketOffice_Carrier?: Maybe<Scalars['ID']>;
  carrierticketer_TicketOffice?: Maybe<Scalars['ID']>;
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


export type CarrierNodeTicketofficeSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  carrier?: Maybe<Scalars['ID']>;
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
  routeprice_Carrier?: Maybe<Scalars['ID']>;
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
  ticketOffice: Scalars['ID'];
  user?: Maybe<Scalars['ID']>;
  userPhone?: Maybe<Scalars['String']>;
  remove?: Maybe<Scalars['Boolean']>;
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
  ticketOffice: TicketOfficeNode;
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
  ticketofficeSet: TicketOfficeNodeConnection;
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


export type CityNodeTicketofficeSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  carrier?: Maybe<Scalars['ID']>;
};


export type CityNodeLeavingFromArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  leavingFrom?: Maybe<Scalars['ID']>;
  destination?: Maybe<Scalars['ID']>;
  routeprice_Carrier?: Maybe<Scalars['ID']>;
};


export type CityNodeDestinationArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  leavingFrom?: Maybe<Scalars['ID']>;
  destination?: Maybe<Scalars['ID']>;
  routeprice_Carrier?: Maybe<Scalars['ID']>;
};


export type CityNodeRouteSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  leavingFrom?: Maybe<Scalars['ID']>;
  destination?: Maybe<Scalars['ID']>;
  routeprice_Carrier?: Maybe<Scalars['ID']>;
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

export type DateCountType = {
  __typename?: 'DateCountType';
  date?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
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

export type EndTripMutationInput = {
  trip: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type EndTripMutationPayload = {
  __typename?: 'EndTripMutationPayload';
  trip?: Maybe<TripNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};



export type Mutation = {
  __typename?: 'Mutation';
  trip?: Maybe<TripMutationPayload>;
  changeTripBus?: Maybe<ChangeTripBusMutationPayload>;
  cancelTrip?: Maybe<CancelTripMutationPayload>;
  startTrip?: Maybe<StartTripMutationPayload>;
  endTrip?: Maybe<EndTripMutationPayload>;
  tripLocation?: Maybe<TripLocationMutationPayload>;
  routePrice?: Maybe<RoutePriceMutationPayload>;
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
  ticketOffice?: Maybe<TicketOfficeMutationPayload>;
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
  input: EndTripMutationInput;
};


export type MutationTripLocationArgs = {
  input: TripLocationMutationInput;
};


export type MutationRoutePriceArgs = {
  input: RoutePriceMutationInput;
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


export type MutationTicketOfficeArgs = {
  input: TicketOfficeMutationInput;
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
  carrierticketer_TicketOffice_Carrier?: Maybe<Scalars['ID']>;
  carrierticketer_TicketOffice?: Maybe<Scalars['ID']>;
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
  trip_Carrier?: Maybe<Scalars['ID']>;
  trip_Carrier_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  trip_DepartureTime?: Maybe<Scalars['DateTime']>;
  trip_DepartureTime_Gte?: Maybe<Scalars['DateTime']>;
  trip_DepartureTime_Lte?: Maybe<Scalars['DateTime']>;
  trip_Route_LeavingFrom?: Maybe<Scalars['ID']>;
  trip_Route_LeavingFrom_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  trip_Route_Destination?: Maybe<Scalars['ID']>;
  trip_Route_Destination_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  phone_Icontains?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  phone_Startswith?: Maybe<Scalars['String']>;
  firstName_Icontains?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  firstName_Startswith?: Maybe<Scalars['String']>;
  lastName_Icontains?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  lastName_Startswith?: Maybe<Scalars['String']>;
  ticketNumber_Icontains?: Maybe<Scalars['String']>;
  ticketNumber?: Maybe<Scalars['String']>;
  ticketNumber_Startswith?: Maybe<Scalars['String']>;
  busStop?: Maybe<Scalars['ID']>;
  busStop_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  user?: Maybe<Scalars['ID']>;
  bulkRef?: Maybe<Scalars['String']>;
  bulkRef_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  bookedAt?: Maybe<Scalars['DateTime']>;
  bookedAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  bookedAt_Gte?: Maybe<Scalars['DateTime']>;
  bookedAt_Lte?: Maybe<Scalars['DateTime']>;
  bookedAt_Isnull?: Maybe<Scalars['Boolean']>;
  order_VerifiedAt?: Maybe<Scalars['DateTime']>;
  order_VerifiedAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  order_VerifiedAt_Gte?: Maybe<Scalars['DateTime']>;
  order_VerifiedAt_Lte?: Maybe<Scalars['DateTime']>;
  order_VerifiedAt_Isnull?: Maybe<Scalars['Boolean']>;
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
  countStat?: Maybe<TotalCount>;
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
  ticketOffices?: Maybe<TicketOfficeNodeConnection>;
  ticketOffice?: Maybe<TicketOfficeNode>;
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


export type QueryCountStatArgs = {
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  start?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['Int']>;
  carrier?: Maybe<Scalars['ID']>;
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
  routeprice_Carrier?: Maybe<Scalars['ID']>;
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
  trip_Carrier?: Maybe<Scalars['ID']>;
  trip_Carrier_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  trip_DepartureTime?: Maybe<Scalars['DateTime']>;
  trip_DepartureTime_Gte?: Maybe<Scalars['DateTime']>;
  trip_DepartureTime_Lte?: Maybe<Scalars['DateTime']>;
  trip_Route_LeavingFrom?: Maybe<Scalars['ID']>;
  trip_Route_LeavingFrom_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  trip_Route_Destination?: Maybe<Scalars['ID']>;
  trip_Route_Destination_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  phone_Icontains?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  phone_Startswith?: Maybe<Scalars['String']>;
  firstName_Icontains?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  firstName_Startswith?: Maybe<Scalars['String']>;
  lastName_Icontains?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  lastName_Startswith?: Maybe<Scalars['String']>;
  ticketNumber_Icontains?: Maybe<Scalars['String']>;
  ticketNumber?: Maybe<Scalars['String']>;
  ticketNumber_Startswith?: Maybe<Scalars['String']>;
  busStop?: Maybe<Scalars['ID']>;
  busStop_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  user?: Maybe<Scalars['ID']>;
  bulkRef?: Maybe<Scalars['String']>;
  bulkRef_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  bookedAt?: Maybe<Scalars['DateTime']>;
  bookedAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  bookedAt_Gte?: Maybe<Scalars['DateTime']>;
  bookedAt_Lte?: Maybe<Scalars['DateTime']>;
  bookedAt_Isnull?: Maybe<Scalars['Boolean']>;
  order_VerifiedAt?: Maybe<Scalars['DateTime']>;
  order_VerifiedAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  order_VerifiedAt_Gte?: Maybe<Scalars['DateTime']>;
  order_VerifiedAt_Lte?: Maybe<Scalars['DateTime']>;
  order_VerifiedAt_Isnull?: Maybe<Scalars['Boolean']>;
};


export type QueryMyTicketsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  trip?: Maybe<Scalars['ID']>;
  trip_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  trip_Carrier?: Maybe<Scalars['ID']>;
  trip_Carrier_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  trip_DepartureTime?: Maybe<Scalars['DateTime']>;
  trip_DepartureTime_Gte?: Maybe<Scalars['DateTime']>;
  trip_DepartureTime_Lte?: Maybe<Scalars['DateTime']>;
  trip_Route_LeavingFrom?: Maybe<Scalars['ID']>;
  trip_Route_LeavingFrom_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  trip_Route_Destination?: Maybe<Scalars['ID']>;
  trip_Route_Destination_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  phone_Icontains?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  phone_Startswith?: Maybe<Scalars['String']>;
  firstName_Icontains?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  firstName_Startswith?: Maybe<Scalars['String']>;
  lastName_Icontains?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  lastName_Startswith?: Maybe<Scalars['String']>;
  ticketNumber_Icontains?: Maybe<Scalars['String']>;
  ticketNumber?: Maybe<Scalars['String']>;
  ticketNumber_Startswith?: Maybe<Scalars['String']>;
  busStop?: Maybe<Scalars['ID']>;
  busStop_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  user?: Maybe<Scalars['ID']>;
  bulkRef?: Maybe<Scalars['String']>;
  bulkRef_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  bookedAt?: Maybe<Scalars['DateTime']>;
  bookedAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  bookedAt_Gte?: Maybe<Scalars['DateTime']>;
  bookedAt_Lte?: Maybe<Scalars['DateTime']>;
  bookedAt_Isnull?: Maybe<Scalars['Boolean']>;
  order_VerifiedAt?: Maybe<Scalars['DateTime']>;
  order_VerifiedAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  order_VerifiedAt_Gte?: Maybe<Scalars['DateTime']>;
  order_VerifiedAt_Lte?: Maybe<Scalars['DateTime']>;
  order_VerifiedAt_Isnull?: Maybe<Scalars['Boolean']>;
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


export type QueryTicketOfficesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  carrier?: Maybe<Scalars['ID']>;
};


export type QueryTicketOfficeArgs = {
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
  carrierticketer_TicketOffice_Carrier?: Maybe<Scalars['ID']>;
  carrierticketer_TicketOffice?: Maybe<Scalars['ID']>;
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
  price?: Maybe<Scalars['Decimal']>;
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

export type RoutePriceMutationInput = {
  leavingFrom: Scalars['ID'];
  destination: Scalars['ID'];
  price: Scalars['ID'];
  carrier: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RoutePriceMutationPayload = {
  __typename?: 'RoutePriceMutationPayload';
  routePrice?: Maybe<RoutePriceNode>;
  routePriceReverse?: Maybe<RoutePriceNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RoutePriceNode = Node & {
  __typename?: 'RoutePriceNode';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  route: RouteNode;
  carrier: CarrierNode;
  price: Scalars['Decimal'];
  createdBy: BusUserNode;
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
  bookedAt?: Maybe<Scalars['DateTime']>;
  bulkRef?: Maybe<Scalars['String']>;
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

export type TicketOfficeMutationInput = {
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  phone: Scalars['String'];
  carrier: Scalars['ID'];
  city: Scalars['ID'];
  latitude?: Maybe<Scalars['Decimal']>;
  longitude?: Maybe<Scalars['Decimal']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type TicketOfficeMutationPayload = {
  __typename?: 'TicketOfficeMutationPayload';
  ticketOffice?: Maybe<TicketOfficeNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type TicketOfficeNode = Node & {
  __typename?: 'TicketOfficeNode';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  latitude?: Maybe<Scalars['Decimal']>;
  longitude?: Maybe<Scalars['Decimal']>;
  name: Scalars['String'];
  phone: Scalars['String'];
  carrier: CarrierNode;
  city: CityNode;
  carrierticketerSet: CarrierTicketerNodeConnection;
};


export type TicketOfficeNodeCarrierticketerSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type TicketOfficeNodeConnection = {
  __typename?: 'TicketOfficeNodeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<TicketOfficeNodeEdge>>;
};

export type TicketOfficeNodeEdge = {
  __typename?: 'TicketOfficeNodeEdge';
  node?: Maybe<TicketOfficeNode>;
  cursor: Scalars['String'];
};

export enum TicketState {
  Reserved = 'RESERVED',
  Booked = 'BOOKED',
  Verified = 'VERIFIED',
  Declined = 'DECLINED'
}

export type TotalCount = {
  __typename?: 'TotalCount';
  users?: Maybe<Array<Maybe<DateCountType>>>;
  tickets?: Maybe<Array<Maybe<DateCountType>>>;
  usersTotal?: Maybe<Scalars['Int']>;
  ticketsTotal?: Maybe<Scalars['Int']>;
};

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
  latitude?: Maybe<Scalars['Decimal']>;
  longitude?: Maybe<Scalars['Decimal']>;
  time: Scalars['DateTime'];
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
  trip_Carrier?: Maybe<Scalars['ID']>;
  trip_Carrier_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  trip_DepartureTime?: Maybe<Scalars['DateTime']>;
  trip_DepartureTime_Gte?: Maybe<Scalars['DateTime']>;
  trip_DepartureTime_Lte?: Maybe<Scalars['DateTime']>;
  trip_Route_LeavingFrom?: Maybe<Scalars['ID']>;
  trip_Route_LeavingFrom_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  trip_Route_Destination?: Maybe<Scalars['ID']>;
  trip_Route_Destination_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  phone_Icontains?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  phone_Startswith?: Maybe<Scalars['String']>;
  firstName_Icontains?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  firstName_Startswith?: Maybe<Scalars['String']>;
  lastName_Icontains?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  lastName_Startswith?: Maybe<Scalars['String']>;
  ticketNumber_Icontains?: Maybe<Scalars['String']>;
  ticketNumber?: Maybe<Scalars['String']>;
  ticketNumber_Startswith?: Maybe<Scalars['String']>;
  busStop?: Maybe<Scalars['ID']>;
  busStop_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  user?: Maybe<Scalars['ID']>;
  bulkRef?: Maybe<Scalars['String']>;
  bulkRef_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  bookedAt?: Maybe<Scalars['DateTime']>;
  bookedAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  bookedAt_Gte?: Maybe<Scalars['DateTime']>;
  bookedAt_Lte?: Maybe<Scalars['DateTime']>;
  bookedAt_Isnull?: Maybe<Scalars['Boolean']>;
  order_VerifiedAt?: Maybe<Scalars['DateTime']>;
  order_VerifiedAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  order_VerifiedAt_Gte?: Maybe<Scalars['DateTime']>;
  order_VerifiedAt_Lte?: Maybe<Scalars['DateTime']>;
  order_VerifiedAt_Isnull?: Maybe<Scalars['Boolean']>;
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
  carrierticketer?: Maybe<CarrierTicketerNode>;
  carrierratingSet: CarrierRatingNodeConnection;
  drivers: BusNodeConnection;
  assistants: BusNodeConnection;
  routepriceSet: RoutePriceNodeConnection;
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


export type UserNodeRoutepriceSetArgs = {
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
  trip_Carrier?: Maybe<Scalars['ID']>;
  trip_Carrier_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  trip_DepartureTime?: Maybe<Scalars['DateTime']>;
  trip_DepartureTime_Gte?: Maybe<Scalars['DateTime']>;
  trip_DepartureTime_Lte?: Maybe<Scalars['DateTime']>;
  trip_Route_LeavingFrom?: Maybe<Scalars['ID']>;
  trip_Route_LeavingFrom_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  trip_Route_Destination?: Maybe<Scalars['ID']>;
  trip_Route_Destination_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  phone_Icontains?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  phone_Startswith?: Maybe<Scalars['String']>;
  firstName_Icontains?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  firstName_Startswith?: Maybe<Scalars['String']>;
  lastName_Icontains?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  lastName_Startswith?: Maybe<Scalars['String']>;
  ticketNumber_Icontains?: Maybe<Scalars['String']>;
  ticketNumber?: Maybe<Scalars['String']>;
  ticketNumber_Startswith?: Maybe<Scalars['String']>;
  busStop?: Maybe<Scalars['ID']>;
  busStop_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  user?: Maybe<Scalars['ID']>;
  bulkRef?: Maybe<Scalars['String']>;
  bulkRef_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  bookedAt?: Maybe<Scalars['DateTime']>;
  bookedAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  bookedAt_Gte?: Maybe<Scalars['DateTime']>;
  bookedAt_Lte?: Maybe<Scalars['DateTime']>;
  bookedAt_Isnull?: Maybe<Scalars['Boolean']>;
  order_VerifiedAt?: Maybe<Scalars['DateTime']>;
  order_VerifiedAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  order_VerifiedAt_Gte?: Maybe<Scalars['DateTime']>;
  order_VerifiedAt_Lte?: Maybe<Scalars['DateTime']>;
  order_VerifiedAt_Isnull?: Maybe<Scalars['Boolean']>;
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
        & Pick<BankAccountNode, 'id' | 'accountName' | 'accountNumber'>
        & { bank: (
          { __typename?: 'BankNode' }
          & Pick<BankNode, 'name' | 'logo'>
        ) }
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
        & { location?: Maybe<(
          { __typename?: 'BusLocationType' }
          & Pick<BusLocationType, 'latitude' | 'longitude' | 'time'>
        )>, carrier: (
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

export type CountQueryVariables = Exact<{
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  carrier?: Maybe<Scalars['ID']>;
}>;


export type CountQuery = (
  { __typename?: 'Query' }
  & { countStat?: Maybe<(
    { __typename?: 'TotalCount' }
    & Pick<TotalCount, 'ticketsTotal' | 'usersTotal'>
    & { users?: Maybe<Array<Maybe<(
      { __typename?: 'DateCountType' }
      & Pick<DateCountType, 'date' | 'count'>
    )>>>, tickets?: Maybe<Array<Maybe<(
      { __typename?: 'DateCountType' }
      & Pick<DateCountType, 'date' | 'count'>
    )>>> }
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

export type MyTicketQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type MyTicketQuery = (
  { __typename?: 'Query' }
  & { ticket?: Maybe<(
    { __typename?: 'TicketNode' }
    & Pick<TicketNode, 'id' | 'firstName' | 'lastName' | 'phone' | 'ticketNumber'>
    & { user: (
      { __typename?: 'BusUserNode' }
      & Pick<BusUserNode, 'id' | 'firstName' | 'lastName' | 'phone'>
    ), busSeatConfigurationSeat: (
      { __typename?: 'BusSeatConfigurationSeatNode' }
      & Pick<BusSeatConfigurationSeatNode, 'id' | 'name'>
    ), order?: Maybe<(
      { __typename?: 'PaymentOrderNode' }
      & Pick<PaymentOrderNode, 'id' | 'price' | 'verification' | 'isChecked' | 'transactionId' | 'verifiedAt'>
      & { orderedBy: (
        { __typename?: 'BusUserNode' }
        & Pick<BusUserNode, 'id' | 'firstName' | 'lastName' | 'phone'>
      ), verifiedBy?: Maybe<(
        { __typename?: 'BusUserNode' }
        & Pick<BusUserNode, 'id' | 'firstName' | 'lastName' | 'phone'>
      )> }
    )>, trip: (
      { __typename?: 'TripNode' }
      & Pick<TripNode, 'price' | 'departureTime' | 'arrivalTime'>
      & { bus?: Maybe<(
        { __typename?: 'BusNode' }
        & Pick<BusNode, 'id' | 'plateNumber' | 'busNumber'>
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
  )> }
);

export type MyTicketsQueryVariables = Exact<{
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
}>;


export type MyTicketsQuery = (
  { __typename?: 'Query' }
  & { myTickets?: Maybe<(
    { __typename?: 'TicketNodeConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | 'endCursor'>
    ), edges: Array<Maybe<(
      { __typename?: 'TicketNodeEdge' }
      & { node?: Maybe<(
        { __typename?: 'TicketNode' }
        & Pick<TicketNode, 'id' | 'firstName' | 'lastName' | 'phone' | 'ticketNumber'>
        & { user: (
          { __typename?: 'BusUserNode' }
          & Pick<BusUserNode, 'id' | 'firstName' | 'lastName' | 'phone'>
        ), busSeatConfigurationSeat: (
          { __typename?: 'BusSeatConfigurationSeatNode' }
          & Pick<BusSeatConfigurationSeatNode, 'id' | 'name'>
        ), order?: Maybe<(
          { __typename?: 'PaymentOrderNode' }
          & Pick<PaymentOrderNode, 'id' | 'price' | 'verification' | 'isChecked' | 'transactionId' | 'verifiedAt'>
          & { orderedBy: (
            { __typename?: 'BusUserNode' }
            & Pick<BusUserNode, 'id' | 'firstName' | 'lastName' | 'phone'>
          ), verifiedBy?: Maybe<(
            { __typename?: 'BusUserNode' }
            & Pick<BusUserNode, 'id' | 'firstName' | 'lastName' | 'phone'>
          )> }
        )>, trip: (
          { __typename?: 'TripNode' }
          & Pick<TripNode, 'price' | 'departureTime' | 'arrivalTime'>
          & { bus?: Maybe<(
            { __typename?: 'BusNode' }
            & Pick<BusNode, 'id' | 'plateNumber' | 'busNumber'>
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
      )> }
    )>> }
  )> }
);

export type PaymentOrdersQueryVariables = Exact<{
  bankAccount_Carrier?: Maybe<Scalars['ID']>;
  isChecked?: Maybe<Scalars['Boolean']>;
  verified?: Maybe<Scalars['Boolean']>;
}>;


export type PaymentOrdersQuery = (
  { __typename?: 'Query' }
  & { paymentOrders?: Maybe<(
    { __typename?: 'PaymentOrderNodeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'PaymentOrderNodeEdge' }
      & { node?: Maybe<(
        { __typename?: 'PaymentOrderNode' }
        & Pick<PaymentOrderNode, 'id' | 'transactionId' | 'verifiedAt' | 'price' | 'verification' | 'createdAt' | 'isChecked'>
        & { bankAccount?: Maybe<(
          { __typename?: 'BankAccountNode' }
          & Pick<BankAccountNode, 'id'>
          & { bank: (
            { __typename?: 'BankNode' }
            & Pick<BankNode, 'name' | 'logo'>
          ) }
        )>, orderedBy: (
          { __typename?: 'BusUserNode' }
          & Pick<BusUserNode, 'id' | 'firstName' | 'lastName'>
        ) }
      )> }
    )>> }
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

export type RoutesQueryVariables = Exact<{
  order?: Maybe<Scalars['String']>;
  carrier?: Maybe<Scalars['ID']>;
}>;


export type RoutesQuery = (
  { __typename?: 'Query' }
  & { routes?: Maybe<(
    { __typename?: 'RouteNodeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'RouteNodeEdge' }
      & { node?: Maybe<(
        { __typename?: 'RouteNode' }
        & Pick<RouteNode, 'id' | 'distance' | 'price'>
        & { leavingFrom: (
          { __typename?: 'CityNode' }
          & Pick<CityNode, 'id' | 'name' | 'nameAm' | 'nameOr' | 'nameTg'>
        ), destination: (
          { __typename?: 'CityNode' }
          & Pick<CityNode, 'id' | 'name' | 'nameAm' | 'nameOr' | 'nameTg'>
        ) }
      )> }
    )>> }
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

export type TicketOfficeQueryVariables = Exact<{
  ticketOffice: Scalars['ID'];
}>;


export type TicketOfficeQuery = (
  { __typename?: 'Query' }
  & { ticketOffice?: Maybe<(
    { __typename?: 'TicketOfficeNode' }
    & Pick<TicketOfficeNode, 'id' | 'name' | 'phone'>
    & { carrier: (
      { __typename?: 'CarrierNode' }
      & Pick<CarrierNode, 'id' | 'name' | 'logo'>
    ), city: (
      { __typename?: 'CityNode' }
      & Pick<CityNode, 'id' | 'name' | 'latitude' | 'longitude'>
    ) }
  )> }
);

export type TicketOfficesQueryVariables = Exact<{
  carrier?: Maybe<Scalars['ID']>;
}>;


export type TicketOfficesQuery = (
  { __typename?: 'Query' }
  & { ticketOffices?: Maybe<(
    { __typename?: 'TicketOfficeNodeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'TicketOfficeNodeEdge' }
      & { node?: Maybe<(
        { __typename?: 'TicketOfficeNode' }
        & Pick<TicketOfficeNode, 'id' | 'name' | 'phone' | 'latitude' | 'longitude'>
        & { carrier: (
          { __typename?: 'CarrierNode' }
          & Pick<CarrierNode, 'id' | 'name' | 'logo'>
        ), city: (
          { __typename?: 'CityNode' }
          & Pick<CityNode, 'id' | 'name'>
        ) }
      )> }
    )>> }
  )> }
);

export type TicketsQueryVariables = Exact<{
  trip?: Maybe<Scalars['ID']>;
  user?: Maybe<Scalars['ID']>;
  carrier?: Maybe<Scalars['ID']>;
  bulkRef?: Maybe<Scalars['String']>;
  tripRouteLeavingFrom?: Maybe<Scalars['ID']>;
  tripRouteDestination?: Maybe<Scalars['ID']>;
  tripDepartureTimeGte?: Maybe<Scalars['DateTime']>;
  tripDepartureTimeLte?: Maybe<Scalars['DateTime']>;
  isBooked?: Maybe<Scalars['Boolean']>;
  isPaid?: Maybe<Scalars['Boolean']>;
}>;


export type TicketsQuery = (
  { __typename?: 'Query' }
  & { tickets?: Maybe<(
    { __typename?: 'TicketNodeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'TicketNodeEdge' }
      & { node?: Maybe<(
        { __typename?: 'TicketNode' }
        & Pick<TicketNode, 'id' | 'ticketNumber' | 'firstName' | 'lastName' | 'phone'>
        & { user: (
          { __typename?: 'BusUserNode' }
          & Pick<BusUserNode, 'id' | 'firstName' | 'lastName' | 'phone'>
        ), busSeatConfigurationSeat: (
          { __typename?: 'BusSeatConfigurationSeatNode' }
          & Pick<BusSeatConfigurationSeatNode, 'id' | 'name'>
        ), order?: Maybe<(
          { __typename?: 'PaymentOrderNode' }
          & Pick<PaymentOrderNode, 'id' | 'price' | 'verification' | 'isChecked' | 'transactionId' | 'verifiedAt'>
          & { orderedBy: (
            { __typename?: 'BusUserNode' }
            & Pick<BusUserNode, 'id' | 'firstName' | 'lastName' | 'phone'>
          ), verifiedBy?: Maybe<(
            { __typename?: 'BusUserNode' }
            & Pick<BusUserNode, 'id' | 'firstName' | 'lastName' | 'phone'>
          )> }
        )>, trip: (
          { __typename?: 'TripNode' }
          & Pick<TripNode, 'price' | 'departureTime' | 'arrivalTime'>
          & { route: (
            { __typename?: 'RouteNode' }
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
            & { busSet: (
              { __typename?: 'BusNodeConnection' }
              & { edges: Array<Maybe<(
                { __typename?: 'BusNodeEdge' }
                & { node?: Maybe<(
                  { __typename?: 'BusNode' }
                  & Pick<BusNode, 'id' | 'plateNumber'>
                )> }
              )>> }
            ) }
          ) }
        ) }
      )> }
    )>> }
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
    & { ticketSet: (
      { __typename?: 'TicketNodeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'TicketNodeEdge' }
        & { node?: Maybe<(
          { __typename?: 'TicketNode' }
          & Pick<TicketNode, 'id' | 'firstName' | 'lastName' | 'phone'>
          & { busStop?: Maybe<(
            { __typename?: 'BusStopNode' }
            & Pick<BusStopNode, 'name'>
          )>, busSeatConfigurationSeat: (
            { __typename?: 'BusSeatConfigurationSeatNode' }
            & Pick<BusSeatConfigurationSeatNode, 'name'>
          ) }
        )> }
      )>> }
    ), seats?: Maybe<Array<Maybe<(
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
  departureTime?: Maybe<Scalars['DateTime']>;
  departureTime_Gte?: Maybe<Scalars['DateTime']>;
  departureTime_Lte?: Maybe<Scalars['DateTime']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
}>;


export type TripsQuery = (
  { __typename?: 'Query' }
  & { trips?: Maybe<(
    { __typename?: 'TripNodeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'TripNodeEdge' }
      & { node?: Maybe<(
        { __typename?: 'TripNode' }
        & Pick<TripNode, 'id' | 'departureTime' | 'arrivalTime' | 'price' | 'createdAt'>
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
    )>>, pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'startCursor' | 'endCursor' | 'hasPreviousPage'>
    ) }
  )> }
);

export type UsersQueryVariables = Exact<{
  phoneContains?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  carrierticketerTicketOfficeCarrier?: Maybe<Scalars['ID']>;
  carrierticketerTicketOffice?: Maybe<Scalars['ID']>;
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
        bank {
          name
          logo
        }
        accountName
        accountNumber
        accountName
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
        location {
          latitude
          longitude
          time
        }
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
export const CountDocument = gql`
    query Count($startDate: DateTime, $endDate: DateTime, $carrier: ID) {
  countStat(startDate: $startDate, endDate: $endDate, carrier: $carrier) {
    users {
      date
      count
    }
    tickets {
      date
      count
    }
    ticketsTotal
    usersTotal
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CountGQL extends Apollo.Query<CountQuery, CountQueryVariables> {
    document = CountDocument;
    
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
export const MyTicketDocument = gql`
    query MyTicket($id: ID!) {
  ticket(id: $id) {
    id
    user {
      id
      firstName
      lastName
      phone
    }
    firstName
    lastName
    phone
    ticketNumber
    busSeatConfigurationSeat {
      id
      name
    }
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
    trip {
      bus {
        id
        plateNumber
        busNumber
      }
      route {
        id
        distance
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
      }
      price
      departureTime
      arrivalTime
      carrier {
        id
        name
        nameAm
        nameOr
        nameTg
        logo
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MyTicketGQL extends Apollo.Query<MyTicketQuery, MyTicketQueryVariables> {
    document = MyTicketDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MyTicketsDocument = gql`
    query MyTickets($first: Int, $after: String) {
  myTickets(first: $first, after: $after) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      node {
        id
        user {
          id
          firstName
          lastName
          phone
        }
        firstName
        lastName
        phone
        ticketNumber
        busSeatConfigurationSeat {
          id
          name
        }
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
        trip {
          bus {
            id
            plateNumber
            busNumber
          }
          route {
            id
            distance
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
          }
          price
          departureTime
          arrivalTime
          carrier {
            id
            name
            nameAm
            nameOr
            nameTg
            logo
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
  export class MyTicketsGQL extends Apollo.Query<MyTicketsQuery, MyTicketsQueryVariables> {
    document = MyTicketsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PaymentOrdersDocument = gql`
    query PaymentOrders($bankAccount_Carrier: ID, $isChecked: Boolean, $verified: Boolean) {
  paymentOrders(
    isChecked: $isChecked
    verification: $verified
    bankAccount_Carrier: $bankAccount_Carrier
  ) {
    edges {
      node {
        id
        transactionId
        verifiedAt
        price
        verification
        createdAt
        isChecked
        bankAccount {
          id
          bank {
            name
            logo
          }
        }
        orderedBy {
          id
          firstName
          lastName
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PaymentOrdersGQL extends Apollo.Query<PaymentOrdersQuery, PaymentOrdersQueryVariables> {
    document = PaymentOrdersDocument;
    
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
export const RoutesDocument = gql`
    query Routes($order: String, $carrier: ID) {
  routes(order: $order, routeprice_Carrier: $carrier) {
    edges {
      node {
        id
        distance
        price
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
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RoutesGQL extends Apollo.Query<RoutesQuery, RoutesQueryVariables> {
    document = RoutesDocument;
    
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
export const TicketOfficeDocument = gql`
    query TicketOffice($ticketOffice: ID!) {
  ticketOffice(id: $ticketOffice) {
    id
    carrier {
      id
      name
      logo
    }
    name
    phone
    city {
      id
      name
      latitude
      longitude
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TicketOfficeGQL extends Apollo.Query<TicketOfficeQuery, TicketOfficeQueryVariables> {
    document = TicketOfficeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TicketOfficesDocument = gql`
    query TicketOffices($carrier: ID) {
  ticketOffices(carrier: $carrier) {
    edges {
      node {
        id
        name
        phone
        latitude
        longitude
        carrier {
          id
          name
          logo
        }
        city {
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
  export class TicketOfficesGQL extends Apollo.Query<TicketOfficesQuery, TicketOfficesQueryVariables> {
    document = TicketOfficesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TicketsDocument = gql`
    query Tickets($trip: ID, $user: ID, $carrier: ID, $bulkRef: String, $tripRouteLeavingFrom: ID, $tripRouteDestination: ID, $tripDepartureTimeGte: DateTime, $tripDepartureTimeLte: DateTime, $isBooked: Boolean, $isPaid: Boolean) {
  tickets(
    first: 60
    trip: $trip
    trip_Carrier: $carrier
    user: $user
    trip_Route_LeavingFrom: $tripRouteLeavingFrom
    trip_Route_Destination: $tripRouteDestination
    trip_DepartureTime_Gte: $tripDepartureTimeGte
    trip_DepartureTime_Lte: $tripDepartureTimeLte
    bookedAt_Isnull: $isBooked
    order_VerifiedAt_Isnull: $isPaid
    bulkRef: $bulkRef
  ) {
    edges {
      node {
        id
        user {
          id
          firstName
          lastName
          phone
        }
        ticketNumber
        firstName
        lastName
        phone
        busSeatConfigurationSeat {
          id
          name
        }
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
        trip {
          route {
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
          }
          price
          departureTime
          arrivalTime
          carrier {
            id
            name
            nameAm
            nameOr
            nameTg
            logo
            busSet {
              edges {
                node {
                  id
                  plateNumber
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
  export class TicketsGQL extends Apollo.Query<TicketsQuery, TicketsQueryVariables> {
    document = TicketsDocument;
    
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
    ticketSet {
      edges {
        node {
          id
          firstName
          lastName
          phone
          busStop {
            name
          }
          busSeatConfigurationSeat {
            name
          }
        }
      }
    }
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
    query Trips($carrier: ID, $bulkRef: String, $leavingFrom: ID, $destination: ID, $departureTime: DateTime, $departureTime_Gte: DateTime, $departureTime_Lte: DateTime, $first: Int, $after: String) {
  trips(
    carrier: $carrier
    bulkRef: $bulkRef
    departureTime: $departureTime
    departureTime_Gte: $departureTime_Gte
    departureTime_Lte: $departureTime_Lte
    route_LeavingFrom: $leavingFrom
    route_Destination: $destination
    first: $first
    after: $after
  ) {
    edges {
      node {
        id
        departureTime
        arrivalTime
        price
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
    pageInfo {
      hasNextPage
      startCursor
      endCursor
      hasPreviousPage
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
    query Users($phoneContains: String, $phone: String, $carrierticketerTicketOfficeCarrier: ID, $carrierticketerTicketOffice: ID) {
  busUsers(
    phone_Icontains: $phoneContains
    phone: $phone
    carrierticketer_TicketOffice: $carrierticketerTicketOffice
    carrierticketer_TicketOffice_Carrier: $carrierticketerTicketOfficeCarrier
  ) {
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