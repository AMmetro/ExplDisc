import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { GraphQLError } from 'graphql-request/dist/types';
import { print } from 'graphql'
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  Base64String: string;
  BigDecimal: any;
  LocalDate: string;
  LocalDateTime: string;
  Long: number;
  ObjectScalar: unknown;
  UNREPRESENTABLE: unknown;
  ZonedDateTime: string;
};

export type AbstractAddressDto = Base & {
  __typename?: 'AbstractAddressDTO';
  _type_?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  county?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  street1?: Maybe<Scalars['String']>;
  street2?: Maybe<Scalars['String']>;
  street3?: Maybe<Scalars['String']>;
};

export type AddChildDetailsInput = {
  dateOfBirth: Scalars['LocalDate'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
};

export type AddProductToCartInput = {
  paymentOption: PaymentOption;
  quantity: Scalars['Int'];
  sku: Scalars['String'];
};

export type Address = Base & {
  __typename?: 'Address';
  _type_?: Maybe<Scalars['String']>;
  addressType?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  county?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  partnerId?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  street1?: Maybe<Scalars['String']>;
  street2?: Maybe<Scalars['String']>;
  street3?: Maybe<Scalars['String']>;
  taxCode?: Maybe<Scalars['String']>;
};

export type AddressLookupResponseDto = {
  __typename?: 'AddressLookupResponseDTO';
  address?: Maybe<Address>;
};

export type AddressSearchResponseDto = {
  __typename?: 'AddressSearchResponseDTO';
  resultCount?: Maybe<Scalars['Int']>;
  results?: Maybe<Array<Maybe<AddressSearchResultDto>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type AddressSearchResultDto = {
  __typename?: 'AddressSearchResultDTO';
  address?: Maybe<Scalars['String']>;
  addressLookupId?: Maybe<Scalars['String']>;
  matchedIndexes?: Maybe<Array<Maybe<Array<Maybe<Scalars['Int']>>>>>;
};

export type AvailableHostnamesResponse = Base & {
  __typename?: 'AvailableHostnamesResponse';
  _type_?: Maybe<Scalars['String']>;
  hostname?: Maybe<Scalars['String']>;
  websites?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type BankDraft = PaymentType & {
  __typename?: 'BankDraft';
  _type_?: Maybe<Scalars['String']>;
  bankName?: Maybe<Scalars['String']>;
};

export type Base = {
  _type_?: Maybe<Scalars['String']>;
};

export type BaseAddress = Base & {
  __typename?: 'BaseAddress';
  _type_?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  county?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  street1?: Maybe<Scalars['String']>;
  street2?: Maybe<Scalars['String']>;
  street3?: Maybe<Scalars['String']>;
};

export type BaseAddressInput = {
  city?: InputMaybe<Scalars['String']>;
  countryCode?: InputMaybe<Scalars['String']>;
  county?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  street1?: InputMaybe<Scalars['String']>;
  street2?: InputMaybe<Scalars['String']>;
  street3?: InputMaybe<Scalars['String']>;
};

export type BaseInput = {
  _type_?: InputMaybe<BaseTypeDisambiguator>;
};

export type BasePerson = Base & {
  __typename?: 'BasePerson';
  _type_?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  homePhone?: Maybe<Scalars['String']>;
  id: Scalars['Long'];
  imageUrl?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  partnerId?: Maybe<Scalars['String']>;
  type?: Maybe<PersonType>;
};

export enum BaseTypeDisambiguator {
  Address = 'Address',
  AvailableHostnamesResponse = 'AvailableHostnamesResponse',
  BaseAddress = 'BaseAddress',
  BasePerson = 'BasePerson',
  BaseVolumeReportDetail = 'BaseVolumeReportDetail',
  BillingInformation = 'BillingInformation',
  BusinessInformation = 'BusinessInformation',
  CallBackEmail = 'CallBackEmail',
  CareerPath = 'CareerPath',
  CareerStatus = 'CareerStatus',
  Cart = 'Cart',
  CartChildDetails = 'CartChildDetails',
  CartLocale = 'CartLocale',
  CartMetaData = 'CartMetaData',
  CartProduct = 'CartProduct',
  CartProductGroup = 'CartProductGroup',
  CartReferral = 'CartReferral',
  CheckoutConfirmation = 'CheckoutConfirmation',
  CheckoutOrderDetail = 'CheckoutOrderDetail',
  ContactDetails = 'ContactDetails',
  ContactUsEmail = 'ContactUsEmail',
  ContributorDetail = 'ContributorDetail',
  Control = 'Control',
  Country = 'Country',
  CountryPrice = 'CountryPrice',
  CustomerAccountDetails = 'CustomerAccountDetails',
  CustomerBrowser = 'CustomerBrowser',
  Dashboard = 'Dashboard',
  ErrorQueueOrderSummary = 'ErrorQueueOrderSummary',
  ErrorQueueResponse = 'ErrorQueueResponse',
  Field = 'Field',
  FieldValue = 'FieldValue',
  FilterOptions = 'FilterOptions',
  FiscalCodeRequest = 'FiscalCodeRequest',
  Form = 'Form',
  GeoDefinition = 'GeoDefinition',
  InstallmentDetail = 'InstallmentDetail',
  InstallmentSchedule = 'InstallmentSchedule',
  Invoice = 'Invoice',
  KpiData = 'KpiData',
  KpiResult = 'KpiResult',
  Language = 'Language',
  LegPartner = 'LegPartner',
  NumberResponse = 'NumberResponse',
  OfflineVoucher = 'OfflineVoucher',
  OnboardPartner = 'OnboardPartner',
  Order = 'Order',
  OrderLine = 'OrderLine',
  PaidOrderDetail = 'PaidOrderDetail',
  PartnerAccountDetails = 'PartnerAccountDetails',
  PartnerBankInformation = 'PartnerBankInformation',
  PartnerPciCompliance = 'PartnerPCICompliance',
  PartnerPublicInformationUpdate = 'PartnerPublicInformationUpdate',
  PartnerRenewal = 'PartnerRenewal',
  PaymentConfirmation = 'PaymentConfirmation',
  PaymentInfo = 'PaymentInfo',
  PaymentMethod = 'PaymentMethod',
  PaymentOptionDefinition = 'PaymentOptionDefinition',
  PendingOrderDetail = 'PendingOrderDetail',
  PerformanceBonus = 'PerformanceBonus',
  Person = 'Person',
  PersonResponse = 'PersonResponse',
  PlaceOfBirth = 'PlaceOfBirth',
  Price = 'Price',
  Product = 'Product',
  ProductSkus = 'ProductSkus',
  ProfilePreference = 'ProfilePreference',
  PromoteOutBonus = 'PromoteOutBonus',
  PurchaseVolume = 'PurchaseVolume',
  Rank = 'Rank',
  RegisterHsf = 'RegisterHSF',
  RegisterPartner = 'RegisterPartner',
  RegistrationAddress = 'RegistrationAddress',
  Shipment = 'Shipment',
  ShipmentHistory = 'ShipmentHistory',
  ShippingInformation = 'ShippingInformation',
  States = 'States',
  Subscription = 'Subscription',
  SubscriptionLine = 'SubscriptionLine',
  TermResult = 'TermResult',
  Validation = 'Validation',
  ValidationRequest = 'ValidationRequest',
  VolumeReportResponse = 'VolumeReportResponse'
}

export type BaseVolumeReportDetail = Base & {
  __typename?: 'BaseVolumeReportDetail';
  _type_?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  frontLineFirstName?: Maybe<Scalars['String']>;
  frontLineLastName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Long']>;
  partnerId?: Maybe<Scalars['String']>;
  partnerTop: Scalars['String'];
  position?: Maybe<Scalars['String']>;
  volume?: Maybe<Scalars['Float']>;
};

export type BillingInformation = Base & {
  __typename?: 'BillingInformation';
  _type_?: Maybe<Scalars['String']>;
  address?: Maybe<BaseAddress>;
  contactDetails?: Maybe<ContactDetails>;
};

export type BillingInformationInput = {
  address?: InputMaybe<BaseAddressInput>;
  contactDetails?: InputMaybe<ContactDetailsInput>;
};

export type BooleanFilterInput = {
  equals?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notEquals?: InputMaybe<Scalars['Boolean']>;
  specified?: InputMaybe<Scalars['Boolean']>;
};

export type BusinessInformation = Base & {
  __typename?: 'BusinessInformation';
  _type_?: Maybe<Scalars['String']>;
  businessName?: Maybe<Scalars['String']>;
  incorporated?: Maybe<Scalars['Boolean']>;
  taxFiledCity?: Maybe<Scalars['String']>;
  taxId?: Maybe<Scalars['String']>;
};

export enum BusinessUnit {
  JuicePlus = 'JUICE_PLUS',
  TowerGarden = 'TOWER_GARDEN'
}

export type CalculateTaxesAndFeesRequestInput = {
  city?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type CallBackEmail = Base & {
  __typename?: 'CallBackEmail';
  _type_?: Maybe<Scalars['String']>;
  callbackDate: Scalars['LocalDate'];
  callbackTime: CallBackTime;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone: Scalars['String'];
};

export type CallBackEmailInput = {
  callbackDate: Scalars['LocalDate'];
  callbackTime: CallBackTime;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  phone: Scalars['String'];
};

export enum CallBackTime {
  Afternoon = 'AFTERNOON',
  Morning = 'MORNING'
}

export type CancelSubscriptionDtoInput = {
  cancel: Scalars['Boolean'];
  cancelAfterFinalPayment: Scalars['Boolean'];
  cancellationReason?: InputMaybe<Scalars['String']>;
  comments?: InputMaybe<Scalars['String']>;
  payImmediatelyAndCancel: Scalars['Boolean'];
};

export type CardPayment = PaymentType & {
  __typename?: 'CardPayment';
  _type_?: Maybe<Scalars['String']>;
  cardName?: Maybe<Scalars['String']>;
};

export type CareerPath = Base & {
  __typename?: 'CareerPath';
  _type_?: Maybe<Scalars['String']>;
  bonusCriteriaKey?: Maybe<Scalars['String']>;
  currentPosition?: Maybe<Scalars['String']>;
  nextPosition?: Maybe<Scalars['String']>;
};

export type CareerStatus = Base & {
  __typename?: 'CareerStatus';
  _type_?: Maybe<Scalars['String']>;
  ruleResult?: Maybe<TermResult>;
  termResults?: Maybe<Array<Maybe<KpiResult>>>;
};

export type Cart = Base & {
  __typename?: 'Cart';
  ASSIGNED_USER_ID?: Maybe<Scalars['String']>;
  CREATOR_USER_ID?: Maybe<Scalars['String']>;
  _type_?: Maybe<Scalars['String']>;
  billingInformation?: Maybe<BillingInformation>;
  businessUnit?: Maybe<BusinessUnit>;
  cartId?: Maybe<Scalars['String']>;
  cartPendingStatus?: Maybe<CartPendingStatus>;
  cartType?: Maybe<CartType>;
  childDetails?: Maybe<CartChildDetails>;
  currencyCode?: Maybe<Scalars['String']>;
  deliveryFee?: Maybe<Scalars['BigDecimal']>;
  installmentSchedule?: Maybe<InstallmentSchedule>;
  locale?: Maybe<CartLocale>;
  orderType?: Maybe<CartOrderType>;
  paymentType?: Maybe<PaymentType>;
  productGroups?: Maybe<Array<Maybe<CartProductGroup>>>;
  referral?: Maybe<CartReferral>;
  sendPromotions?: Maybe<Scalars['Boolean']>;
  sharedOn?: Maybe<Scalars['ZonedDateTime']>;
  shippingInformation?: Maybe<ShippingInformation>;
  taxes?: Maybe<Scalars['BigDecimal']>;
  termsAndConditionsAccepted?: Maybe<Scalars['Boolean']>;
  totalDisplayPrice?: Maybe<Scalars['BigDecimal']>;
  totalPrice?: Maybe<Scalars['BigDecimal']>;
  useShippingAsBillingAddress?: Maybe<Scalars['Boolean']>;
};

export type CartChildDetails = Base & {
  __typename?: 'CartChildDetails';
  _type_?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  dateOfBirth?: Maybe<Scalars['LocalDate']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type CartLocale = Base & {
  __typename?: 'CartLocale';
  _type_?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  languageCode?: Maybe<Scalars['String']>;
};

export type CartMetaData = Base & {
  __typename?: 'CartMetaData';
  _type_?: Maybe<Scalars['String']>;
  browserFingerprint?: Maybe<Scalars['String']>;
  browserScreenColorDepth?: Maybe<Scalars['Int']>;
  browserScreenHeight?: Maybe<Scalars['Int']>;
  browserScreenWidth?: Maybe<Scalars['Int']>;
  browserTimezone?: Maybe<Scalars['String']>;
  errorCode?: Maybe<Status>;
  errorMsg?: Maybe<Scalars['String']>;
  userAgent?: Maybe<Scalars['String']>;
  userIPAddress?: Maybe<Scalars['String']>;
};

export enum CartOrderType {
  Dao = 'DAO',
  Hsf = 'HSF',
  Jp = 'JP',
  Orphan = 'ORPHAN'
}

export enum CartPendingStatus {
  Clicked = 'CLICKED',
  Seen = 'SEEN',
  Unseen = 'UNSEEN'
}

export type CartProduct = Base & {
  __typename?: 'CartProduct';
  _type_?: Maybe<Scalars['String']>;
  availablePaymentOptions?: Maybe<Array<Maybe<PaymentOption>>>;
  description?: Maybe<Scalars['String']>;
  displayPrice?: Maybe<Scalars['BigDecimal']>;
  price?: Maybe<Scalars['BigDecimal']>;
  quantity?: Maybe<Scalars['Int']>;
  shipmentOption?: Maybe<ShipmentOption>;
  sku?: Maybe<Scalars['String']>;
  totalDisplayPrice?: Maybe<Scalars['BigDecimal']>;
  totalPrice?: Maybe<Scalars['BigDecimal']>;
};

export type CartProductGroup = Base & {
  __typename?: 'CartProductGroup';
  _type_?: Maybe<Scalars['String']>;
  paymentOption?: Maybe<PaymentOption>;
  products?: Maybe<Array<Maybe<CartProduct>>>;
  shipmentOption?: Maybe<ShipmentOption>;
  totalDisplayPrice?: Maybe<Scalars['BigDecimal']>;
  totalPrice?: Maybe<Scalars['BigDecimal']>;
};

export type CartReferral = Base & {
  __typename?: 'CartReferral';
  _type_?: Maybe<Scalars['String']>;
  partnerEmail?: Maybe<Scalars['String']>;
  partnerId?: Maybe<Scalars['String']>;
  partnerName?: Maybe<Scalars['String']>;
  partnerUrl?: Maybe<Scalars['String']>;
  readOnly?: Maybe<Scalars['Boolean']>;
  referred?: Maybe<Scalars['Boolean']>;
};

export type CartReferralInput = {
  partnerEmail?: InputMaybe<Scalars['String']>;
  partnerId?: InputMaybe<Scalars['String']>;
  partnerName?: InputMaybe<Scalars['String']>;
  partnerUrl?: InputMaybe<Scalars['String']>;
  readOnly?: InputMaybe<Scalars['Boolean']>;
  referred?: InputMaybe<Scalars['Boolean']>;
};

export enum CartType {
  DefaultCart = 'DEFAULT_CART',
  DistributorCart = 'DISTRIBUTOR_CART',
  HsfCart = 'HSF_CART',
  PartnerCart = 'PARTNER_CART',
  SharedCart = 'SHARED_CART'
}

export type ChangePaymentOptionInput = {
  paymentOption: PaymentOption;
  shipmentOption: ShipmentOption;
};

export type ChangeSharedCartOrderTypeInput = {
  orderType?: InputMaybe<CartOrderType>;
};

export type ChangeSharedCartPendingStatusInput = {
  status?: InputMaybe<CartPendingStatus>;
};

export type ChangeSubscriptionShipmentDateDtoInput = {
  comments?: InputMaybe<Scalars['String']>;
  nextShipmentDate?: InputMaybe<Scalars['LocalDate']>;
  reasonForChange?: InputMaybe<Scalars['String']>;
};

export type Check = PaymentType & {
  __typename?: 'Check';
  _type_?: Maybe<Scalars['String']>;
};

export type CheckoutConfirmation = Base & {
  __typename?: 'CheckoutConfirmation';
  _type_?: Maybe<Scalars['String']>;
  cart?: Maybe<Cart>;
  orderDetails?: Maybe<Array<Maybe<CheckoutOrderDetail>>>;
};

export type CheckoutOrderDetail = Base & {
  __typename?: 'CheckoutOrderDetail';
  _type_?: Maybe<Scalars['String']>;
  cartProductGroups?: Maybe<Array<Maybe<CartProductGroup>>>;
  installmentSchedule?: Maybe<InstallmentSchedule>;
  mercadoVoucher?: Maybe<MercadoVoucherDto>;
  orderId?: Maybe<Scalars['String']>;
  paymentOption?: Maybe<PaymentOption>;
  shippingCharge?: Maybe<Scalars['String']>;
  taxCharge?: Maybe<Scalars['String']>;
  totalPrice?: Maybe<Scalars['String']>;
};

export enum CheckoutProcessStateDto {
  Failed = 'FAILED',
  Pending = 'PENDING',
  Running = 'RUNNING',
  Succeeded = 'SUCCEEDED'
}

export type CheckoutStateResponseDto = {
  __typename?: 'CheckoutStateResponseDTO';
  state?: Maybe<CheckoutProcessStateDto>;
};

export type ContactDetails = Base & {
  __typename?: 'ContactDetails';
  _type_?: Maybe<Scalars['String']>;
  alternativePhoneNumber?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['LocalDate']>;
  email?: Maybe<Scalars['String']>;
  euroSocialSecurityNumber?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  placeOfBirth?: Maybe<Scalars['String']>;
};

export type ContactDetailsInput = {
  alternativePhoneNumber?: InputMaybe<Scalars['String']>;
  dateOfBirth?: InputMaybe<Scalars['LocalDate']>;
  email?: InputMaybe<Scalars['String']>;
  euroSocialSecurityNumber?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Gender>;
  lastName?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  placeOfBirth?: InputMaybe<Scalars['String']>;
};

export type ContactUsEmail = Base & {
  __typename?: 'ContactUsEmail';
  _type_?: Maybe<Scalars['String']>;
  apartment?: Maybe<Scalars['String']>;
  childBirthday?: Maybe<Scalars['String']>;
  childFirstName?: Maybe<Scalars['String']>;
  childLastName?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  emailAddress: Scalars['String'];
  existingCustomer: Scalars['Boolean'];
  firstName?: Maybe<Scalars['String']>;
  howHear?: Maybe<HowHear>;
  lastName?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  partnerEmailAddress?: Maybe<Scalars['String']>;
  partnerFullName?: Maybe<Scalars['String']>;
  partnerId?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
};

export type ContactUsEmailInput = {
  apartment?: InputMaybe<Scalars['String']>;
  childBirthday?: InputMaybe<Scalars['String']>;
  childFirstName?: InputMaybe<Scalars['String']>;
  childLastName?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  emailAddress: Scalars['String'];
  existingCustomer: Scalars['Boolean'];
  firstName?: InputMaybe<Scalars['String']>;
  howHear?: InputMaybe<HowHear>;
  lastName?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  partnerEmailAddress?: InputMaybe<Scalars['String']>;
  partnerFullName?: InputMaybe<Scalars['String']>;
  partnerId?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
};

export type ContributorDetail = Base & {
  __typename?: 'ContributorDetail';
  _type_?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  frontLineFirstName?: Maybe<Scalars['String']>;
  frontLineLastName?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Long']>;
  partnerId?: Maybe<Scalars['String']>;
  partnerTop: Scalars['String'];
  position?: Maybe<Scalars['String']>;
  volume?: Maybe<Scalars['Float']>;
};

export enum ContributorOrderBy {
  FirstName = 'FIRST_NAME',
  FrontlineFirstName = 'FRONTLINE_FIRST_NAME',
  FrontlineLastName = 'FRONTLINE_LAST_NAME',
  LastName = 'LAST_NAME',
  Level = 'LEVEL',
  Position = 'POSITION',
  Volume = 'VOLUME'
}

export type Control = Base & {
  __typename?: 'Control';
  _type_?: Maybe<Scalars['String']>;
  luhncheck?: Maybe<Scalars['Boolean']>;
  section?: Maybe<Scalars['String']>;
  typeahead?: Maybe<Scalars['Boolean']>;
};

export type Country = Base & {
  __typename?: 'Country';
  _type_?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  countryCode?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  nsaCountryId?: Maybe<Scalars['String']>;
};

export type CountryPrice = Base & {
  __typename?: 'CountryPrice';
  _type_?: Maybe<Scalars['String']>;
  available?: Maybe<Scalars['Int']>;
  countryCode?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  prices?: Maybe<Array<Maybe<Price>>>;
  status?: Maybe<Scalars['String']>;
};

export type CreateCartForDaoOrderInput = {
  cartType?: InputMaybe<CartType>;
};

export type CreateSharedCartInput = {
  orderType?: InputMaybe<CartOrderType>;
};

export type CustomerAccountDetails = Base & {
  __typename?: 'CustomerAccountDetails';
  _type_?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['LocalDate']>;
  firstName?: Maybe<Scalars['String']>;
  languageCode?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type CustomerBrowser = Base & {
  __typename?: 'CustomerBrowser';
  _type_?: Maybe<Scalars['String']>;
  fingerprint?: Maybe<Scalars['String']>;
  screenColorDepth?: Maybe<Scalars['Int']>;
  screenHeight?: Maybe<Scalars['Int']>;
  screenWidth?: Maybe<Scalars['Int']>;
  timezone?: Maybe<Scalars['String']>;
};

export type CustomerCriteriaInput = {
  anniversary?: InputMaybe<LocalDateFilterInput>;
  birthday?: InputMaybe<LocalDateFilterInput>;
  cancelDate?: InputMaybe<LocalDateFilterInput>;
  countryCode?: InputMaybe<StringFilterInput>;
  customerEntryDate?: InputMaybe<LocalDateFilterInput>;
  customerSearchType?: InputMaybe<CustomerSearchType>;
  nextShipmentDate?: InputMaybe<LocalDateFilterInput>;
  orderDate?: InputMaybe<LocalDateFilterInput>;
  orderStatus?: InputMaybe<OrderStatusType>;
  partnerSID?: InputMaybe<LongFilterInput>;
  searchText?: InputMaybe<StringFilterInput>;
};

export enum CustomerSearchType {
  All = 'ALL',
  Direct = 'DIRECT'
}

export type Dashboard = Base & {
  __typename?: 'Dashboard';
  _type_?: Maybe<Scalars['String']>;
  careerPath?: Maybe<CareerPath>;
  clubLevel?: Maybe<Scalars['Int']>;
  lastUpdatedDate?: Maybe<Scalars['LocalDateTime']>;
  monthlyNewTeamMembers?: Maybe<Scalars['Int']>;
  monthlySales?: Maybe<Scalars['Int']>;
  partnerId?: Maybe<Scalars['String']>;
  performanceBonus?: Maybe<PerformanceBonus>;
  promoteOutBonus?: Maybe<PromoteOutBonus>;
  purchaseVolume?: Maybe<PurchaseVolume>;
  upcomingShipments?: Maybe<Scalars['Int']>;
};

export enum DataWindow {
  All = 'ALL',
  Last_2Month = 'LAST_2_MONTH',
  Last_30Days = 'LAST_30_DAYS',
  Last_60Days = 'LAST_60_DAYS',
  LastMonth = 'LAST_MONTH',
  None = 'NONE'
}

export enum DemographicMotivationType {
  HealthyWeight = 'HEALTHY_WEIGHT',
  Other = 'OTHER',
  OverallHealth = 'OVERALL_HEALTH',
  SupportPhysical = 'SUPPORT_PHYSICAL'
}

export enum DemographicReferredType {
  Facebook = 'FACEBOOK',
  FromFriend = 'FROM_FRIEND',
  Other = 'OTHER',
  OtherSocial = 'OTHER_SOCIAL'
}

export enum DetailReportType {
  PerformanceBonus = 'PERFORMANCE_BONUS',
  PromoteOutBonus = 'PROMOTE_OUT_BONUS',
  PurchaseVolume = 'PURCHASE_VOLUME'
}

export enum Direction {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type EditSubscriptionOptionsResponse = {
  __typename?: 'EditSubscriptionOptionsResponse';
  canBeCanceledAfterFinalPayment: Scalars['Boolean'];
  canBeCanceledImmediately: Scalars['Boolean'];
  canBeDelayed: Scalars['Boolean'];
  canBePayedImmediatelyAndCanceled: Scalars['Boolean'];
  canBeReordered: Scalars['Boolean'];
  canBeRestarted: Scalars['Boolean'];
  canBeReturned: Scalars['Boolean'];
  canBeRushed: Scalars['Boolean'];
  canChangeAddress: Scalars['Boolean'];
  canChangePayment: Scalars['Boolean'];
  finalInstallmentPaymentDate?: Maybe<Scalars['LocalDate']>;
  nextShipmentDate?: Maybe<Scalars['LocalDate']>;
  remainingInstallmentTotal?: Maybe<Scalars['BigDecimal']>;
};

export type EmailChangeDtoInput = {
  currentPassword?: InputMaybe<Scalars['String']>;
  newEmail?: InputMaybe<Scalars['String']>;
};

export type EmailValidationResponseDto = {
  __typename?: 'EmailValidationResponseDTO';
  emailIsValid?: Maybe<Scalars['Boolean']>;
};

export type ErrorQueueOrderSummary = Base & {
  __typename?: 'ErrorQueueOrderSummary';
  _type_?: Maybe<Scalars['String']>;
  aroNumber?: Maybe<Scalars['String']>;
  assignedUserId?: Maybe<Scalars['String']>;
  billingInformation?: Maybe<BillingInformation>;
  cartId?: Maybe<Scalars['String']>;
  cartLocale?: Maybe<CartLocale>;
  cartProductGroups?: Maybe<Array<Maybe<CartProductGroup>>>;
  cartReferral?: Maybe<CartReferral>;
  cartType?: Maybe<CartType>;
  checkoutProcessKey?: Maybe<Scalars['String']>;
  creatorUserId?: Maybe<Scalars['String']>;
  currencyCode?: Maybe<Scalars['String']>;
  errorCode?: Maybe<Scalars['String']>;
  errorMsg?: Maybe<Scalars['String']>;
  externalOrderId?: Maybe<Scalars['String']>;
  installmentSchedule?: Maybe<InstallmentSchedule>;
  leadType?: Maybe<LeadType>;
  lifeCycle?: Maybe<OrderLifeCycle>;
  orderId?: Maybe<Scalars['String']>;
  orderStatus?: Maybe<Scalars['String']>;
  orderType?: Maybe<CartOrderType>;
  paymentOption?: Maybe<PaymentOption>;
  riskAmount?: Maybe<Scalars['String']>;
  shippingCharge?: Maybe<Scalars['String']>;
  shippingInformation?: Maybe<ShippingInformation>;
  submissionDate?: Maybe<Scalars['LocalDateTime']>;
  taxCharge?: Maybe<Scalars['String']>;
  totalPrice?: Maybe<Scalars['String']>;
};

export type ErrorQueueResponse = Base & {
  __typename?: 'ErrorQueueResponse';
  _type_?: Maybe<Scalars['String']>;
  orderSummaries?: Maybe<Array<Maybe<ErrorQueueOrderSummary>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type Field = Base & {
  __typename?: 'Field';
  _type_?: Maybe<Scalars['String']>;
  dynamic?: Maybe<Scalars['Boolean']>;
  example?: Maybe<Scalars['String']>;
  fieldName?: Maybe<Scalars['String']>;
  mandatory?: Maybe<Scalars['Boolean']>;
  readOnly?: Maybe<Scalars['Boolean']>;
  regex?: Maybe<Scalars['String']>;
  visible?: Maybe<Scalars['Boolean']>;
};

export type FieldValue = Base & {
  __typename?: 'FieldValue';
  _type_?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type FieldValueInput = {
  name?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type FileUploadInputDtoInput = {
  content?: InputMaybe<Scalars['Base64String']>;
  contentType?: InputMaybe<Scalars['String']>;
  fileSize: Scalars['Long'];
};

export type FilterOptions = Base & {
  __typename?: 'FilterOptions';
  _type_?: Maybe<Scalars['String']>;
  countryCode?: Maybe<ListValues>;
  levels?: Maybe<IntervalValues>;
  orderStatus?: Maybe<ListValues>;
  partnerSID?: Maybe<ListValues>;
  pbPercent?: Maybe<IntervalValues>;
  pobPercent?: Maybe<IntervalValues>;
  position?: Maybe<ListValues>;
  pvPercent?: Maybe<IntervalValues>;
};

export type FiscalCodeRequest = Base & {
  __typename?: 'FiscalCodeRequest';
  _type_?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['LocalDate']>;
  firstName?: Maybe<Scalars['String']>;
  fiscalCode?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  lastName?: Maybe<Scalars['String']>;
  placeOfBirth?: Maybe<Scalars['String']>;
};

export type FiscalCodeRequestInput = {
  dateOfBirth?: InputMaybe<Scalars['LocalDate']>;
  firstName?: InputMaybe<Scalars['String']>;
  fiscalCode?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Gender>;
  lastName?: InputMaybe<Scalars['String']>;
  placeOfBirth?: InputMaybe<Scalars['String']>;
};

export type Form = Base & {
  __typename?: 'Form';
  _type_?: Maybe<Scalars['String']>;
  controls?: Maybe<Array<Maybe<Control>>>;
  fields?: Maybe<Array<Maybe<Field>>>;
  formName?: Maybe<Scalars['String']>;
  geo?: Maybe<GeoDefinition>;
};

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE',
  Other = 'OTHER'
}

export type GeoDefinition = Base & {
  __typename?: 'GeoDefinition';
  _type_?: Maybe<Scalars['String']>;
  displayCountry?: Maybe<Scalars['String']>;
  iso2?: Maybe<Scalars['String']>;
  iso3?: Maybe<Scalars['String']>;
};

export type HostnameLookupResponseDto = {
  __typename?: 'HostnameLookupResponseDTO';
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  hostname?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  partnerId?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export enum HowHear {
  JuicePlusRepresentative = 'JUICE_PLUS_REPRESENTATIVE',
  Other = 'OTHER',
  WebAd = 'WEB_AD'
}

export type InstallmentDetail = Base & {
  __typename?: 'InstallmentDetail';
  _type_?: Maybe<Scalars['String']>;
  installmentDate?: Maybe<Scalars['LocalDate']>;
  installmentTotal?: Maybe<Scalars['BigDecimal']>;
};

export type InstallmentSchedule = Base & {
  __typename?: 'InstallmentSchedule';
  _type_?: Maybe<Scalars['String']>;
  installmentDetails?: Maybe<Array<Maybe<InstallmentDetail>>>;
};

export type IntegerFilterInput = {
  equals?: InputMaybe<Scalars['Int']>;
  greaterOrEqualThan?: InputMaybe<Scalars['Int']>;
  greaterThan?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lessOrEqualThan?: InputMaybe<Scalars['Int']>;
  lessThan?: InputMaybe<Scalars['Int']>;
  notEquals?: InputMaybe<Scalars['Int']>;
  specified?: InputMaybe<Scalars['Boolean']>;
};

export type Interval = {
  __typename?: 'Interval';
  from?: Maybe<Scalars['Int']>;
  to?: Maybe<Scalars['Int']>;
};

export type IntervalValues = {
  __typename?: 'IntervalValues';
  extraInfo?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  suffix?: Maybe<Scalars['String']>;
  values?: Maybe<Interval>;
};

export type Invoice = Base & {
  __typename?: 'Invoice';
  _type_?: Maybe<Scalars['String']>;
  balanceDue?: Maybe<Scalars['Float']>;
  dateCreated?: Maybe<Scalars['LocalDate']>;
  id?: Maybe<Scalars['String']>;
  partnerId?: Maybe<Scalars['String']>;
  timeCreated?: Maybe<Scalars['String']>;
  totalAmount?: Maybe<Scalars['Float']>;
};

export type JpError = {
  __typename?: 'JpError';
  details?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  translationKey?: Maybe<Scalars['String']>;
};

export type KeyAndPasswordVmInput = {
  key?: InputMaybe<Scalars['String']>;
  newPassword?: InputMaybe<Scalars['String']>;
};

export type KpiData = Base & {
  __typename?: 'KpiData';
  _type_?: Maybe<Scalars['String']>;
  data?: Maybe<Scalars['Float']>;
  timePeriod?: Maybe<DataWindow>;
};

export type KpiResult = Base & {
  __typename?: 'KpiResult';
  _type_?: Maybe<Scalars['String']>;
  data?: Maybe<KpiData>;
  name?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['Boolean']>;
  salience?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
  type?: Maybe<KpiType>;
  weight?: Maybe<Scalars['Float']>;
};

export enum KpiType {
  Customer = 'CUSTOMER',
  Qualification = 'QUALIFICATION',
  Team = 'TEAM',
  Volume = 'VOLUME'
}

export type Language = Base & {
  __typename?: 'Language';
  _type_?: Maybe<Scalars['String']>;
  languageCode?: Maybe<Scalars['String']>;
  nsaLanguageId?: Maybe<Scalars['String']>;
};

export enum LeadType {
  Dao = 'DAO',
  Guest = 'GUEST',
  Hsf = 'HSF'
}

export type LegPartner = Base & {
  __typename?: 'LegPartner';
  _type_?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  sponsorId?: Maybe<Scalars['String']>;
};

export enum ListValueType {
  MultiSelect = 'MULTI_SELECT',
  SingleSelect = 'SINGLE_SELECT'
}

export type ListValues = {
  __typename?: 'ListValues';
  filterType?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  type?: Maybe<ListValueType>;
  values?: Maybe<Array<Maybe<Scalars['ObjectScalar']>>>;
};

export type LocalDateFilterInput = {
  equals?: InputMaybe<Scalars['LocalDate']>;
  greaterOrEqualThan?: InputMaybe<Scalars['LocalDate']>;
  greaterThan?: InputMaybe<Scalars['LocalDate']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['LocalDate']>>>;
  lessOrEqualThan?: InputMaybe<Scalars['LocalDate']>;
  lessThan?: InputMaybe<Scalars['LocalDate']>;
  notEquals?: InputMaybe<Scalars['LocalDate']>;
  specified?: InputMaybe<Scalars['Boolean']>;
};

export type LongFilterInput = {
  equals?: InputMaybe<Scalars['Long']>;
  greaterOrEqualThan?: InputMaybe<Scalars['Long']>;
  greaterThan?: InputMaybe<Scalars['Long']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  lessOrEqualThan?: InputMaybe<Scalars['Long']>;
  lessThan?: InputMaybe<Scalars['Long']>;
  notEquals?: InputMaybe<Scalars['Long']>;
  specified?: InputMaybe<Scalars['Boolean']>;
};

export type MercadoCash = PaymentType & {
  __typename?: 'MercadoCash';
  _type_?: Maybe<Scalars['String']>;
  storeName?: Maybe<Scalars['String']>;
};

export type MercadoVoucherDto = {
  __typename?: 'MercadoVoucherDTO';
  downloadUrl?: Maybe<Scalars['String']>;
  expiryDate?: Maybe<Scalars['LocalDate']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  activateAccount?: Maybe<ResponseWrapper_Boolean>;
  addPersonImage?: Maybe<ResponseWrapper_Void>;
  addProductToCart?: Maybe<ResponseWrapper_Cart>;
  addProductToSharedCart?: Maybe<ResponseWrapper_Cart>;
  addProductsToCart?: Maybe<ResponseWrapper_Cart>;
  addProductsToSharedCart?: Maybe<ResponseWrapper_Cart>;
  assignCartReferralFlat?: Maybe<ResponseWrapper_List_FieldValue>;
  calculateTaxesAndFees?: Maybe<ResponseWrapper_Cart>;
  calculateTaxesAndFeesInSharedCart?: Maybe<ResponseWrapper_Cart>;
  cancelPartnerPortal?: Maybe<ResponseWrapper_Void>;
  cancelSubscription?: Maybe<ResponseWrapper_Void>;
  changePassword?: Maybe<ResponseWrapper_Boolean>;
  changePaymentOption?: Maybe<ResponseWrapper_Cart>;
  changePaymentOptionInSharedCart?: Maybe<ResponseWrapper_Cart>;
  changeSharedCartOrderType?: Maybe<ResponseWrapper_Cart>;
  changeSharedCartPendingStatus?: Maybe<ResponseWrapper_Cart>;
  checkoutCurrentCartFlat?: Maybe<ResponseWrapper_List_FieldValue>;
  confirmCreateSharedCart?: Maybe<ResponseWrapper_Cart>;
  createReOrderCart?: Maybe<ResponseWrapper_Cart>;
  createSharedCart?: Maybe<ResponseWrapper_Cart>;
  delaySubscription?: Maybe<ResponseWrapper_Void>;
  deleteExpiredCarts?: Maybe<ResponseWrapper_Boolean>;
  deleteExpiredOrders?: Maybe<ResponseWrapper_Boolean>;
  deleteHsfCart?: Maybe<ResponseWrapper_Void>;
  deletePersonImage?: Maybe<ResponseWrapper_Void>;
  deleteSharedCart?: Maybe<ResponseWrapper_Void>;
  evictShopCache?: Maybe<ResponseWrapper_Boolean>;
  finishPasswordReset?: Maybe<ResponseWrapper_Boolean>;
  hsfSignUp?: Maybe<ResponseWrapper_Void>;
  hsfSignUpFlat?: Maybe<ResponseWrapper_Void>;
  impersonateLogout?: Maybe<ResponseWrapper_Void>;
  impersonatePerson?: Maybe<ResponseWrapper_Void>;
  initCartForDaoOrder?: Maybe<ResponseWrapper_Cart>;
  initHsfCart?: Maybe<ResponseWrapper_Cart>;
  mailCallBack?: Maybe<ResponseWrapper_Void>;
  mailContactUs?: Maybe<ResponseWrapper_Void>;
  mailContactUsFlat?: Maybe<ResponseWrapper_Void>;
  makeOnboardingPayment?: Maybe<ResponseWrapper_PaymentConfirmation>;
  onboardPartnerFlat?: Maybe<ResponseWrapper_Boolean>;
  prepareSharedCartForCheckout?: Maybe<ResponseWrapper_Cart>;
  registerCustomer?: Maybe<ResponseWrapper_Boolean>;
  registerPartner?: Maybe<ResponseWrapper_Boolean>;
  registerPartnerFlat?: Maybe<ResponseWrapper_Boolean>;
  removeMultipleProductsFromCart?: Maybe<ResponseWrapper_Cart>;
  removeMultipleProductsFromSharedCart?: Maybe<ResponseWrapper_Cart>;
  removeOnboardingPartner?: Maybe<ResponseWrapper_Boolean>;
  removeOnboardingPartnerByCustomer?: Maybe<ResponseWrapper_Boolean>;
  removeProductFromCart?: Maybe<ResponseWrapper_Cart>;
  removeProductFromSharedCart?: Maybe<ResponseWrapper_Cart>;
  renewPartnerFlat?: Maybe<ResponseWrapper_Boolean>;
  requestPasswordReset?: Maybe<ResponseWrapper_Boolean>;
  restartSubscription?: Maybe<ResponseWrapper_Void>;
  resubmitOrder?: Maybe<ResponseWrapper_ErrorQueueOrderSummary>;
  returnSubscription?: Maybe<ResponseWrapper_Void>;
  rushSubscription?: Maybe<ResponseWrapper_Void>;
  signupPartnerPortal?: Maybe<ResponseWrapper_Void>;
  updateBillingInformation?: Maybe<ResponseWrapper_Cart>;
  updateBillingInformationFlat?: Maybe<ResponseWrapper_List_FieldValue>;
  updateBillingInformationInSharedCart?: Maybe<ResponseWrapper_Cart>;
  updateBillingInformationInSharedCartFlat?: Maybe<ResponseWrapper_List_FieldValue>;
  updateCartProductQuantity?: Maybe<ResponseWrapper_Cart>;
  updateCartReferralFlat?: Maybe<ResponseWrapper_List_FieldValue>;
  updateChildDetailsForSharedCart?: Maybe<ResponseWrapper_Cart>;
  updateCustomerDetails?: Maybe<ResponseWrapper_Person>;
  updateCustomerEmail?: Maybe<ResponseWrapper_Void>;
  updateErrorQueueBillingInformation?: Maybe<ResponseWrapper_ErrorQueueOrderSummary>;
  updateErrorQueueCartReferral?: Maybe<ResponseWrapper_ErrorQueueOrderSummary>;
  updateErrorQueueOrderLifeCycle?: Maybe<ResponseWrapper_ErrorQueueOrderSummary>;
  updateErrorQueueShippingInformation?: Maybe<ResponseWrapper_ErrorQueueOrderSummary>;
  updatePartnerAddress?: Maybe<ResponseWrapper_Void>;
  updatePartnerBusinessInformation?: Maybe<ResponseWrapper_Void>;
  updatePartnerDetails?: Maybe<ResponseWrapper_Person>;
  updatePartnerEmail?: Maybe<ResponseWrapper_Void>;
  updatePartnerHostname?: Maybe<ResponseWrapper_Void>;
  updatePartnerPayOutInformation?: Maybe<ResponseWrapper_Void>;
  updatePartnerPublicInformation?: Maybe<ResponseWrapper_Void>;
  updatePartnerVOStatusFlat?: Maybe<ResponseWrapper_Boolean>;
  updatePersonProfile?: Maybe<ResponseWrapper_Void>;
  updateProductQuantityInSharedCart?: Maybe<ResponseWrapper_Cart>;
  updateProductsQuantitiesInSharedCart?: Maybe<ResponseWrapper_Cart>;
  updateSharedCartCountry?: Maybe<ResponseWrapper_Cart>;
  updateShippingInformation?: Maybe<ResponseWrapper_Cart>;
  updateShippingInformationFlat?: Maybe<ResponseWrapper_List_FieldValue>;
  updateShippingInformationInSharedCart?: Maybe<ResponseWrapper_Cart>;
  updateShippingInformationInSharedCartFlat?: Maybe<ResponseWrapper_List_FieldValue>;
  updateSubscriptionAddress?: Maybe<ResponseWrapper_Void>;
  updateSubscriptionPayment?: Maybe<ResponseWrapper_Void>;
  useShippingAsBillingAddress?: Maybe<ResponseWrapper_Cart>;
  useShippingAsBillingAddressInSharedCart?: Maybe<ResponseWrapper_Cart>;
  validate?: Maybe<ResponseWrapper_Validation>;
  validateFiscalCode?: Maybe<ResponseWrapper_Boolean>;
};


export type MutationActivateAccountArgs = {
  key: Scalars['String'];
  locale: Scalars['String'];
};


export type MutationAddPersonImageArgs = {
  input?: InputMaybe<FileUploadInputDtoInput>;
  partnerId?: InputMaybe<Scalars['String']>;
};


export type MutationAddProductToCartArgs = {
  cartType?: InputMaybe<CartType>;
  input?: InputMaybe<AddProductToCartInput>;
};


export type MutationAddProductToSharedCartArgs = {
  cartId?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<AddProductToCartInput>;
};


export type MutationAddProductsToCartArgs = {
  input?: InputMaybe<Array<InputMaybe<AddProductToCartInput>>>;
};


export type MutationAddProductsToSharedCartArgs = {
  cartId?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<Array<InputMaybe<AddProductToCartInput>>>;
};


export type MutationAssignCartReferralFlatArgs = {
  cartId?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<Array<InputMaybe<FieldValueInput>>>;
};


export type MutationCalculateTaxesAndFeesArgs = {
  input?: InputMaybe<CalculateTaxesAndFeesRequestInput>;
};


export type MutationCalculateTaxesAndFeesInSharedCartArgs = {
  cartId?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<CalculateTaxesAndFeesRequestInput>;
};


export type MutationCancelPartnerPortalArgs = {
  partnerId?: InputMaybe<Scalars['String']>;
};


export type MutationCancelSubscriptionArgs = {
  browserTime?: InputMaybe<Scalars['LocalDateTime']>;
  input?: InputMaybe<CancelSubscriptionDtoInput>;
  subscriptionId?: InputMaybe<Scalars['String']>;
};


export type MutationChangePasswordArgs = {
  input?: InputMaybe<PasswordChangeDtoInput>;
};


export type MutationChangePaymentOptionArgs = {
  input?: InputMaybe<ChangePaymentOptionInput>;
};


export type MutationChangePaymentOptionInSharedCartArgs = {
  cartId?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<ChangePaymentOptionInput>;
};


export type MutationChangeSharedCartOrderTypeArgs = {
  cartId?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<ChangeSharedCartOrderTypeInput>;
};


export type MutationChangeSharedCartPendingStatusArgs = {
  cartId?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<ChangeSharedCartPendingStatusInput>;
};


export type MutationCheckoutCurrentCartFlatArgs = {
  input?: InputMaybe<Array<InputMaybe<FieldValueInput>>>;
};


export type MutationConfirmCreateSharedCartArgs = {
  cartId?: InputMaybe<Scalars['String']>;
};


export type MutationCreateReOrderCartArgs = {
  cartType?: InputMaybe<CartType>;
  input?: InputMaybe<Array<InputMaybe<AddProductToCartInput>>>;
};


export type MutationCreateSharedCartArgs = {
  input?: InputMaybe<CreateSharedCartInput>;
};


export type MutationDelaySubscriptionArgs = {
  browserTime?: InputMaybe<Scalars['LocalDateTime']>;
  input?: InputMaybe<ChangeSubscriptionShipmentDateDtoInput>;
  subscriptionId?: InputMaybe<Scalars['String']>;
};


export type MutationDeletePersonImageArgs = {
  partnerId?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteSharedCartArgs = {
  cartId?: InputMaybe<Scalars['String']>;
};


export type MutationFinishPasswordResetArgs = {
  input?: InputMaybe<KeyAndPasswordVmInput>;
};


export type MutationHsfSignUpArgs = {
  input?: InputMaybe<RegisterHsfInput>;
};


export type MutationHsfSignUpFlatArgs = {
  input?: InputMaybe<Array<InputMaybe<FieldValueInput>>>;
};


export type MutationImpersonatePersonArgs = {
  username?: InputMaybe<Scalars['String']>;
};


export type MutationInitCartForDaoOrderArgs = {
  input?: InputMaybe<CreateCartForDaoOrderInput>;
};


export type MutationInitHsfCartArgs = {
  input?: InputMaybe<AddChildDetailsInput>;
};


export type MutationMailCallBackArgs = {
  input?: InputMaybe<CallBackEmailInput>;
};


export type MutationMailContactUsArgs = {
  input?: InputMaybe<ContactUsEmailInput>;
};


export type MutationMailContactUsFlatArgs = {
  input?: InputMaybe<Array<InputMaybe<FieldValueInput>>>;
};


export type MutationMakeOnboardingPaymentArgs = {
  input?: InputMaybe<Array<InputMaybe<FieldValueInput>>>;
};


export type MutationOnboardPartnerFlatArgs = {
  input?: InputMaybe<Array<InputMaybe<FieldValueInput>>>;
};


export type MutationPrepareSharedCartForCheckoutArgs = {
  cartId?: InputMaybe<Scalars['String']>;
};


export type MutationRegisterCustomerArgs = {
  input?: InputMaybe<RegisterCustomerInput>;
  locale: Scalars['String'];
};


export type MutationRegisterPartnerArgs = {
  input?: InputMaybe<RegisterPartnerInput>;
};


export type MutationRegisterPartnerFlatArgs = {
  input?: InputMaybe<Array<InputMaybe<FieldValueInput>>>;
};


export type MutationRemoveMultipleProductsFromCartArgs = {
  input?: InputMaybe<RemoveMultipleProductsFromCartInput>;
};


export type MutationRemoveMultipleProductsFromSharedCartArgs = {
  cartId?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<RemoveMultipleProductsFromCartInput>;
};


export type MutationRemoveOnboardingPartnerArgs = {
  email?: InputMaybe<Scalars['String']>;
};


export type MutationRemoveOnboardingPartnerByCustomerArgs = {
  email?: InputMaybe<Scalars['String']>;
};


export type MutationRemoveProductFromCartArgs = {
  input?: InputMaybe<RemoveProductFromCartInput>;
};


export type MutationRemoveProductFromSharedCartArgs = {
  cartId?: InputMaybe<Scalars['String']>;
  sku?: InputMaybe<Scalars['String']>;
};


export type MutationRenewPartnerFlatArgs = {
  input?: InputMaybe<Array<InputMaybe<FieldValueInput>>>;
};


export type MutationRequestPasswordResetArgs = {
  locale: Scalars['String'];
  loginName: Scalars['String'];
};


export type MutationRestartSubscriptionArgs = {
  browserTime?: InputMaybe<Scalars['LocalDateTime']>;
  input?: InputMaybe<RestartSubscriptionDtoInput>;
  subscriptionId?: InputMaybe<Scalars['String']>;
};


export type MutationResubmitOrderArgs = {
  orderId?: InputMaybe<Scalars['String']>;
};


export type MutationReturnSubscriptionArgs = {
  browserTime?: InputMaybe<Scalars['LocalDateTime']>;
  input?: InputMaybe<ReturnSubscriptionInput>;
  subscriptionId?: InputMaybe<Scalars['String']>;
};


export type MutationRushSubscriptionArgs = {
  browserTime?: InputMaybe<Scalars['LocalDateTime']>;
  subscriptionId?: InputMaybe<Scalars['String']>;
};


export type MutationSignupPartnerPortalArgs = {
  partnerId?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateBillingInformationArgs = {
  input?: InputMaybe<BillingInformationInput>;
};


export type MutationUpdateBillingInformationFlatArgs = {
  input?: InputMaybe<Array<InputMaybe<FieldValueInput>>>;
};


export type MutationUpdateBillingInformationInSharedCartArgs = {
  cartId?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<BillingInformationInput>;
};


export type MutationUpdateBillingInformationInSharedCartFlatArgs = {
  cartId?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<Array<InputMaybe<FieldValueInput>>>;
};


export type MutationUpdateCartProductQuantityArgs = {
  input?: InputMaybe<UpdateCartProductQuantityInput>;
};


export type MutationUpdateCartReferralFlatArgs = {
  input?: InputMaybe<Array<InputMaybe<FieldValueInput>>>;
};


export type MutationUpdateChildDetailsForSharedCartArgs = {
  cartId?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<AddChildDetailsInput>;
};


export type MutationUpdateCustomerDetailsArgs = {
  email?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<Array<InputMaybe<FieldValueInput>>>;
};


export type MutationUpdateCustomerEmailArgs = {
  email?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<EmailChangeDtoInput>;
};


export type MutationUpdateErrorQueueBillingInformationArgs = {
  input?: InputMaybe<BillingInformationInput>;
  orderId?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateErrorQueueCartReferralArgs = {
  input?: InputMaybe<CartReferralInput>;
  orderId?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateErrorQueueOrderLifeCycleArgs = {
  lifeCycle?: InputMaybe<OrderLifeCycle>;
  orderId?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateErrorQueueShippingInformationArgs = {
  input?: InputMaybe<ShippingInformationInput>;
  orderId?: InputMaybe<Scalars['String']>;
};


export type MutationUpdatePartnerAddressArgs = {
  input?: InputMaybe<Array<InputMaybe<FieldValueInput>>>;
  partnerId?: InputMaybe<Scalars['String']>;
};


export type MutationUpdatePartnerBusinessInformationArgs = {
  input?: InputMaybe<Array<InputMaybe<FieldValueInput>>>;
  partnerId?: InputMaybe<Scalars['String']>;
};


export type MutationUpdatePartnerDetailsArgs = {
  input?: InputMaybe<Array<InputMaybe<FieldValueInput>>>;
  partnerId?: InputMaybe<Scalars['String']>;
};


export type MutationUpdatePartnerEmailArgs = {
  input?: InputMaybe<EmailChangeDtoInput>;
  partnerId?: InputMaybe<Scalars['String']>;
};


export type MutationUpdatePartnerHostnameArgs = {
  hostname?: InputMaybe<Scalars['String']>;
  partnerId?: InputMaybe<Scalars['String']>;
};


export type MutationUpdatePartnerPayOutInformationArgs = {
  input?: InputMaybe<Array<InputMaybe<FieldValueInput>>>;
  partnerId?: InputMaybe<Scalars['String']>;
};


export type MutationUpdatePartnerPublicInformationArgs = {
  input?: InputMaybe<PartnerPublicInformationUpdateInput>;
  partnerId?: InputMaybe<Scalars['String']>;
};


export type MutationUpdatePartnerVoStatusFlatArgs = {
  input?: InputMaybe<Array<InputMaybe<FieldValueInput>>>;
  partnerId?: InputMaybe<Scalars['String']>;
};


export type MutationUpdatePersonProfileArgs = {
  email?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<ProfilePreferenceInput>;
};


export type MutationUpdateProductQuantityInSharedCartArgs = {
  cartId?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
  sku?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateProductsQuantitiesInSharedCartArgs = {
  cartId?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<Array<InputMaybe<UpdateCartProductQuantityInput>>>;
};


export type MutationUpdateSharedCartCountryArgs = {
  cartId?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<UpdateSharedCartCountryInput>;
};


export type MutationUpdateShippingInformationArgs = {
  input?: InputMaybe<ShippingInformationInput>;
};


export type MutationUpdateShippingInformationFlatArgs = {
  input?: InputMaybe<Array<InputMaybe<FieldValueInput>>>;
};


export type MutationUpdateShippingInformationInSharedCartArgs = {
  cartId?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<ShippingInformationInput>;
};


export type MutationUpdateShippingInformationInSharedCartFlatArgs = {
  cartId?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<Array<InputMaybe<FieldValueInput>>>;
};


export type MutationUpdateSubscriptionAddressArgs = {
  browserTime?: InputMaybe<Scalars['LocalDateTime']>;
  input?: InputMaybe<Array<InputMaybe<FieldValueInput>>>;
  subscriptionId?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateSubscriptionPaymentArgs = {
  browserTime?: InputMaybe<Scalars['LocalDateTime']>;
  input?: InputMaybe<Array<InputMaybe<FieldValueInput>>>;
  subscriptionId?: InputMaybe<Scalars['String']>;
};


export type MutationUseShippingAsBillingAddressArgs = {
  input: Scalars['Boolean'];
};


export type MutationUseShippingAsBillingAddressInSharedCartArgs = {
  cartId?: InputMaybe<Scalars['String']>;
  input: Scalars['Boolean'];
};


export type MutationValidateArgs = {
  validationRequest?: InputMaybe<ValidationRequestInput>;
};


export type MutationValidateFiscalCodeArgs = {
  input?: InputMaybe<FiscalCodeRequestInput>;
};

export type NumberResponse = Base & {
  __typename?: 'NumberResponse';
  _type_?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Long']>;
};

export type OfflineVoucher = Base & {
  __typename?: 'OfflineVoucher';
  _type_?: Maybe<Scalars['String']>;
  downloadUrl?: Maybe<Scalars['String']>;
  expiryDate?: Maybe<Scalars['LocalDate']>;
  subscriptionId?: Maybe<Scalars['String']>;
};

export type OnboardPartner = Base & {
  __typename?: 'OnboardPartner';
  _type_?: Maybe<Scalars['String']>;
  bankAbiCode?: Maybe<Scalars['String']>;
  bankAccountName?: Maybe<Scalars['String']>;
  bankAccountNumber?: Maybe<Scalars['String']>;
  bankAccountType?: Maybe<Scalars['String']>;
  bankBicNumber?: Maybe<Scalars['String']>;
  bankBranchNumber?: Maybe<Scalars['String']>;
  bankCode?: Maybe<Scalars['String']>;
  bankName?: Maybe<Scalars['String']>;
  billingAddress?: Maybe<RegistrationAddress>;
  billingFirstName?: Maybe<Scalars['String']>;
  billingLastName?: Maybe<Scalars['String']>;
  customerBrowser?: Maybe<CustomerBrowser>;
  payment?: Maybe<PaymentRequest>;
  returnUrl?: Maybe<Scalars['String']>;
  sameAsContactAddress?: Maybe<Scalars['Boolean']>;
  segment?: Maybe<Segment>;
};

export type Order = Base & {
  __typename?: 'Order';
  _type_?: Maybe<Scalars['String']>;
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  businessUnit?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  county?: Maybe<Scalars['String']>;
  cycleNbr?: Maybe<Scalars['Int']>;
  dateCreated?: Maybe<Scalars['ZonedDateTime']>;
  freightAmount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  installmentNbr?: Maybe<Scalars['Int']>;
  invoiceId?: Maybe<Scalars['String']>;
  leadType?: Maybe<Scalars['String']>;
  nbrInstallments?: Maybe<Scalars['Int']>;
  orderType?: Maybe<Scalars['String']>;
  paid?: Maybe<Scalars['Boolean']>;
  partnerId?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  returnAuthorizationNumber?: Maybe<Scalars['String']>;
  shipmentName?: Maybe<Scalars['String']>;
  shipmentPhone?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  subscriptionId?: Maybe<Scalars['String']>;
  taxAmount?: Maybe<Scalars['Float']>;
  totalAmount?: Maybe<Scalars['Float']>;
};

export enum OrderLifeCycle {
  Active = 'ACTIVE',
  Archive = 'ARCHIVE'
}

export type OrderLine = Base & {
  __typename?: 'OrderLine';
  _type_?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  pv?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Int']>;
  retailProfit?: Maybe<Scalars['Float']>;
  shipDate?: Maybe<Scalars['LocalDate']>;
  shipQuantity?: Maybe<Scalars['Int']>;
  singleShip?: Maybe<Scalars['Boolean']>;
  skuId?: Maybe<Scalars['String']>;
};

export enum OrderStatus {
  Failed = 'FAILED',
  Processing = 'PROCESSING',
  Succeeded = 'SUCCEEDED'
}

export enum OrderStatusType {
  Cancelled = 'CANCELLED',
  CartConfirmationPending = 'CART_CONFIRMATION_PENDING',
  PaymentIssue = 'PAYMENT_ISSUE'
}

export type OrderSummarySearchCriteriaDtoInput = {
  assigned?: InputMaybe<Scalars['Boolean']>;
  cartType?: InputMaybe<CartType>;
  country?: InputMaybe<Scalars['String']>;
  fuzzySearch?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderLifeCycle?: InputMaybe<OrderLifeCycle>;
  orderStatus?: InputMaybe<OrderStatus>;
  paymentStatus?: InputMaybe<PaymentStatus>;
  unassigned?: InputMaybe<Scalars['Boolean']>;
};

export type PaidOrderDetail = Base & {
  __typename?: 'PaidOrderDetail';
  _type_?: Maybe<Scalars['String']>;
  customerName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  frontLineFirstName?: Maybe<Scalars['String']>;
  frontLineLastName?: Maybe<Scalars['String']>;
  hasPerformanceBonus?: Maybe<Scalars['Boolean']>;
  hasPromoteOutBonus?: Maybe<Scalars['Boolean']>;
  hasPurchaseVolume?: Maybe<Scalars['Boolean']>;
  homeCountry?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Long']>;
  orderCountry?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['String']>;
  partnerId?: Maybe<Scalars['String']>;
  partnerTop: Scalars['String'];
  partnerTopPosition?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  rank?: Maybe<Scalars['Int']>;
  shipmentDate?: Maybe<Scalars['LocalDate']>;
  skus?: Maybe<Array<Maybe<Scalars['String']>>>;
  subscriptionId?: Maybe<Scalars['String']>;
  volume?: Maybe<Scalars['Float']>;
};

export enum PaidOrderOrderBy {
  CustomerName = 'CUSTOMER_NAME',
  FirstName = 'FIRST_NAME',
  LastName = 'LAST_NAME',
  Level = 'LEVEL',
  OrderId = 'ORDER_ID',
  Position = 'POSITION',
  ShipDate = 'SHIP_DATE',
  SubscriptionId = 'SUBSCRIPTION_ID',
  Volume = 'VOLUME'
}

export type PartnerAccountDetails = Base & {
  __typename?: 'PartnerAccountDetails';
  _type_?: Maybe<Scalars['String']>;
  ethnicity?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  languageCode?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  socialSecurityNumber?: Maybe<Scalars['String']>;
};

export type PartnerBankInformation = Base & {
  __typename?: 'PartnerBankInformation';
  _type_?: Maybe<Scalars['String']>;
  bankAbiCode?: Maybe<Scalars['String']>;
  bankAccountName?: Maybe<Scalars['String']>;
  bankAccountNumber?: Maybe<Scalars['String']>;
  bankAccountType?: Maybe<Scalars['String']>;
  bankBicNumber?: Maybe<Scalars['String']>;
  bankBranchNumber?: Maybe<Scalars['String']>;
  bankCode?: Maybe<Scalars['String']>;
  bankName?: Maybe<Scalars['String']>;
  paperCheque?: Maybe<Scalars['Boolean']>;
};

export type PartnerCriteriaInput = {
  anniversary?: InputMaybe<LocalDateFilterInput>;
  birthday?: InputMaybe<LocalDateFilterInput>;
  countryCode?: InputMaybe<StringFilterInput>;
  lastTitleUpdate?: InputMaybe<LocalDateFilterInput>;
  levels?: InputMaybe<IntegerFilterInput>;
  memberSince?: InputMaybe<LocalDateFilterInput>;
  membershipRenewal?: InputMaybe<LocalDateFilterInput>;
  partnerSID?: InputMaybe<LongFilterInput>;
  partnerStatus?: InputMaybe<Array<InputMaybe<PartnerStatusType>>>;
  pbPercent?: InputMaybe<IntegerFilterInput>;
  pobPercent?: InputMaybe<IntegerFilterInput>;
  position?: InputMaybe<StringFilterInput>;
  pvPercent?: InputMaybe<IntegerFilterInput>;
  searchText?: InputMaybe<StringFilterInput>;
  volumeFilter?: InputMaybe<VolumeFilter>;
};

export type PartnerPciCompliance = Base & {
  __typename?: 'PartnerPCICompliance';
  _type_?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type PartnerPublicInformationUpdate = Base & {
  __typename?: 'PartnerPublicInformationUpdate';
  _type_?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type PartnerPublicInformationUpdateInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
};

export type PartnerRenewal = Base & {
  __typename?: 'PartnerRenewal';
  _type_?: Maybe<Scalars['String']>;
  billingAddress?: Maybe<RegistrationAddress>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  partnerId?: Maybe<Scalars['String']>;
  payment?: Maybe<PaymentRequest>;
  sameAsContactAddress?: Maybe<Scalars['Boolean']>;
};

export type PartnerSettings = {
  __typename?: 'PartnerSettings';
  bankInformation?: Maybe<PartnerBankInformation>;
  username?: Maybe<Scalars['String']>;
};

export enum PartnerStatusType {
  Active = 'Active',
  Inactive = 'Inactive',
  OnboardExp = 'OnboardExp',
  Onboarding = 'Onboarding',
  Unk = 'Unk'
}

export type PasswordChangeDtoInput = {
  currentPassword?: InputMaybe<Scalars['String']>;
  newPassword?: InputMaybe<Scalars['String']>;
};

export type PaymentConfirmation = Base & {
  __typename?: 'PaymentConfirmation';
  _type_?: Maybe<Scalars['String']>;
  arpNumber?: Maybe<Scalars['String']>;
  challengeToken?: Maybe<Scalars['String']>;
  mercadoVoucher?: Maybe<MercadoVoucherDto>;
  offlinePayment?: Maybe<Scalars['Boolean']>;
  paymentName?: Maybe<Scalars['String']>;
  paymentStatus?: Maybe<PaymentStatus>;
  paymentType?: Maybe<Scalars['String']>;
  processorTransactionId?: Maybe<Scalars['String']>;
  redirectUrl?: Maybe<Scalars['String']>;
  soNumber?: Maybe<Scalars['String']>;
};

export type PaymentInfo = Base & {
  __typename?: 'PaymentInfo';
  _type_?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  installmentNumber?: Maybe<Scalars['Int']>;
  numberOfInstallments?: Maybe<Scalars['Int']>;
  paid?: Maybe<Scalars['Boolean']>;
  paymentDate?: Maybe<Scalars['ZonedDateTime']>;
  totalAmount?: Maybe<Scalars['Float']>;
};

export type PaymentMethod = Base & {
  __typename?: 'PaymentMethod';
  _type_?: Maybe<Scalars['String']>;
  abbreviation?: Maybe<Scalars['String']>;
  accountNumberEncrypted?: Maybe<Scalars['String']>;
  accountNumberLastDigits?: Maybe<Scalars['String']>;
  billingAddress?: Maybe<Address>;
  expirationDate?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  partnerId?: Maybe<Scalars['String']>;
  routingNumber?: Maybe<Scalars['String']>;
  subscriptionId?: Maybe<Scalars['String']>;
};

export enum PaymentOption {
  FullPayment = 'FULL_PAYMENT',
  Installment_2 = 'INSTALLMENT_2',
  Installment_3 = 'INSTALLMENT_3',
  Installment_4 = 'INSTALLMENT_4',
  Installment_12 = 'INSTALLMENT_12'
}

export type PaymentOptionDefinition = Base & {
  __typename?: 'PaymentOptionDefinition';
  _type_?: Maybe<Scalars['String']>;
  abbreviation?: Maybe<Scalars['String']>;
  geo?: Maybe<GeoDefinition>;
  name?: Maybe<Scalars['String']>;
  paymentFormDefinition?: Maybe<Form>;
  paymentType?: Maybe<PaymentType>;
};

export type PaymentRequest = {
  paymentType?: Maybe<PaymentType>;
};

export enum PaymentStatus {
  Approved = 'APPROVED',
  Declined = 'DECLINED',
  Failed = 'FAILED',
  InvalidRequest = 'INVALID_REQUEST',
  Pending = 'PENDING',
  Processing = 'PROCESSING'
}

export type PaymentType = {
  _type_?: Maybe<Scalars['String']>;
};

export type PendingOrderDetail = Base & {
  __typename?: 'PendingOrderDetail';
  _type_?: Maybe<Scalars['String']>;
  customerName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  frontLineFirstName?: Maybe<Scalars['String']>;
  frontLineLastName?: Maybe<Scalars['String']>;
  homeCountry?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Long']>;
  orderCountry?: Maybe<Scalars['String']>;
  partnerId?: Maybe<Scalars['String']>;
  partnerTop: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  shipmentDate?: Maybe<Scalars['LocalDate']>;
  skus?: Maybe<Array<Maybe<Scalars['String']>>>;
  state?: Maybe<Scalars['String']>;
  subscriptionId?: Maybe<Scalars['String']>;
  volume?: Maybe<Scalars['Float']>;
};

export enum PendingOrderOrderBy {
  CustomerName = 'CUSTOMER_NAME',
  FirstName = 'FIRST_NAME',
  LastName = 'LAST_NAME',
  Level = 'LEVEL',
  Position = 'POSITION',
  ShipDate = 'SHIP_DATE',
  SubscriptionId = 'SUBSCRIPTION_ID',
  Volume = 'VOLUME'
}

export type PerformanceBonus = Base & {
  __typename?: 'PerformanceBonus';
  _type_?: Maybe<Scalars['String']>;
  excess?: Maybe<Scalars['BigDecimal']>;
  insightText?: Maybe<Scalars['String']>;
  insightValue?: Maybe<Scalars['Int']>;
  legCount?: Maybe<Scalars['Int']>;
  legPartners?: Maybe<Array<Maybe<LegPartner>>>;
  maxLegCount?: Maybe<Scalars['Int']>;
  myTeamCloseToQualified?: Maybe<Scalars['Int']>;
  myTeamQualified?: Maybe<Scalars['Int']>;
  paid?: Maybe<Scalars['BigDecimal']>;
  pending?: Maybe<Scalars['Float']>;
  percentage?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['BigDecimal']>;
  visible: Scalars['Boolean'];
};

export type Person = Base & {
  __typename?: 'Person';
  _type_?: Maybe<Scalars['String']>;
  addresses?: Maybe<Array<Maybe<Address>>>;
  birthday?: Maybe<Scalars['LocalDate']>;
  businessInformation?: Maybe<BusinessInformation>;
  countryCode?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  customerEntryDate?: Maybe<Scalars['LocalDate']>;
  dashboard?: Maybe<Dashboard>;
  distributor?: Maybe<Person>;
  distributorId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  hasCartStatusPending?: Maybe<Scalars['Boolean']>;
  hasPCIAgreement?: Maybe<Scalars['Boolean']>;
  hasPaymentIssues?: Maybe<Scalars['Boolean']>;
  homePhone?: Maybe<Scalars['String']>;
  id: Scalars['Long'];
  imageUrl?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  levelsBelow?: Maybe<Scalars['Int']>;
  membershipRenewalDate?: Maybe<Scalars['LocalDate']>;
  membershipStartDate?: Maybe<Scalars['LocalDate']>;
  membershipTerminationDate?: Maybe<Scalars['LocalDate']>;
  mobilePhone?: Maybe<Scalars['String']>;
  nextShipmentDate?: Maybe<Scalars['LocalDate']>;
  partnerId?: Maybe<Scalars['String']>;
  partnerStatus?: Maybe<PartnerStatusType>;
  pbPercent?: Maybe<Scalars['Int']>;
  pbVolume?: Maybe<Scalars['BigDecimal']>;
  pobPercent?: Maybe<Scalars['Int']>;
  pobVolume?: Maybe<Scalars['BigDecimal']>;
  processingOnboarding: Scalars['Boolean'];
  pvPercent?: Maybe<Scalars['Int']>;
  pvVolume?: Maybe<Scalars['BigDecimal']>;
  rank?: Maybe<Rank>;
  relativeLevel?: Maybe<Scalars['Int']>;
  socialSecurityNumber?: Maybe<Scalars['String']>;
  sponsor?: Maybe<Person>;
  subscriptions?: Maybe<ResponseWrapper_List_Subscription>;
  type?: Maybe<PersonType>;
  website?: Maybe<Scalars['String']>;
  wellnessCoordinatorId?: Maybe<Scalars['Long']>;
};

export type PersonCriteriaInput = {
  anniversary?: InputMaybe<LocalDateFilterInput>;
  birthday?: InputMaybe<LocalDateFilterInput>;
  countryCode?: InputMaybe<StringFilterInput>;
  customerDistributorId?: InputMaybe<StringFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  firstName?: InputMaybe<StringFilterInput>;
  franchisePartner?: InputMaybe<BooleanFilterInput>;
  homePhone?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<LongFilterInput>;
  language?: InputMaybe<StringFilterInput>;
  lastName?: InputMaybe<StringFilterInput>;
  mobilePhone?: InputMaybe<StringFilterInput>;
  partnerId?: InputMaybe<StringFilterInput>;
  partnerSID?: InputMaybe<LongFilterInput>;
  searchText?: InputMaybe<StringFilterInput>;
  sfmcDistributorId?: InputMaybe<LongFilterInput>;
  sponsorId?: InputMaybe<LongFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  wellnessCoordinatorId?: InputMaybe<LongFilterInput>;
};

export type PersonResponse_BasePerson = Base & {
  __typename?: 'PersonResponse_BasePerson';
  _type_?: Maybe<Scalars['String']>;
  nextPage: Scalars['Boolean'];
  page: Scalars['Int'];
  persons?: Maybe<Array<Maybe<BasePerson>>>;
  totalCount: Scalars['Long'];
};

export type PersonResponse_Person = Base & {
  __typename?: 'PersonResponse_Person';
  _type_?: Maybe<Scalars['String']>;
  nextPage: Scalars['Boolean'];
  page: Scalars['Int'];
  persons?: Maybe<Array<Maybe<Person>>>;
  totalCount: Scalars['Long'];
};

export enum PersonType {
  Customer = 'CUSTOMER',
  Partner = 'PARTNER'
}

export type PlaceOfBirth = Base & {
  __typename?: 'PlaceOfBirth';
  _type_?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Price = Base & {
  __typename?: 'Price';
  _type_?: Maybe<Scalars['String']>;
  displayPrice?: Maybe<Scalars['BigDecimal']>;
  hsfFreeProduct: Scalars['Boolean'];
  lookupType?: Maybe<Scalars['String']>;
  paymentOption?: Maybe<PaymentOption>;
  price?: Maybe<Scalars['BigDecimal']>;
  priceType?: Maybe<Scalars['String']>;
  shipmentOption?: Maybe<ShipmentOption>;
  sku?: Maybe<Scalars['String']>;
};

export type Product = Base & {
  __typename?: 'Product';
  _type_?: Maybe<Scalars['String']>;
  businessUnit?: Maybe<Scalars['String']>;
  countries?: Maybe<Array<Maybe<CountryPrice>>>;
  group?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ProductCriteriaInput = {
  businessUnit?: InputMaybe<StringFilterInput>;
  countryCode?: InputMaybe<StringFilterInput>;
  countryId?: InputMaybe<StringFilterInput>;
  group?: InputMaybe<StringFilterInput>;
  sku?: InputMaybe<StringFilterInput>;
};

export type ProductSkus = Base & {
  __typename?: 'ProductSkus';
  _type_?: Maybe<Scalars['String']>;
  adultProductSkus?: Maybe<Array<Maybe<Scalars['String']>>>;
  childProductSkus?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ProfilePreference = Base & {
  __typename?: 'ProfilePreference';
  _type_?: Maybe<Scalars['String']>;
  demographicMotivationOther?: Maybe<Scalars['String']>;
  demographicMotivationTypes?: Maybe<Array<Maybe<DemographicMotivationType>>>;
  demographicReferredOther?: Maybe<Scalars['String']>;
  demographicReferredTypes?: Maybe<Array<Maybe<DemographicReferredType>>>;
};

export type ProfilePreferenceInput = {
  demographicMotivationOther?: InputMaybe<Scalars['String']>;
  demographicMotivationTypes?: InputMaybe<Array<InputMaybe<DemographicMotivationType>>>;
  demographicReferredOther?: InputMaybe<Scalars['String']>;
  demographicReferredTypes?: InputMaybe<Array<InputMaybe<DemographicReferredType>>>;
};

export type PromoteOutBonus = Base & {
  __typename?: 'PromoteOutBonus';
  _type_?: Maybe<Scalars['String']>;
  excess?: Maybe<Scalars['BigDecimal']>;
  insightText?: Maybe<Scalars['String']>;
  insightValue?: Maybe<Scalars['Int']>;
  legCount?: Maybe<Scalars['Int']>;
  legPartners?: Maybe<Array<Maybe<LegPartner>>>;
  maxLegCount?: Maybe<Scalars['Int']>;
  myCustomerCloseToQualified?: Maybe<Scalars['Int']>;
  myCustomerQualified?: Maybe<Scalars['Int']>;
  paid?: Maybe<Scalars['BigDecimal']>;
  pending?: Maybe<Scalars['Float']>;
  percentage?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['BigDecimal']>;
  visible: Scalars['Boolean'];
};

export type PurchaseVolume = Base & {
  __typename?: 'PurchaseVolume';
  _type_?: Maybe<Scalars['String']>;
  insightText?: Maybe<Scalars['String']>;
  insightValue?: Maybe<Scalars['Int']>;
  paid?: Maybe<Scalars['BigDecimal']>;
  pending?: Maybe<Scalars['Float']>;
  percentage?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['BigDecimal']>;
  visible: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  canPromote?: Maybe<ResponseWrapper_Boolean>;
  checkSSNAvailability?: Maybe<ResponseWrapper_SsnAvailability>;
  checkSubscriptionEditOptions?: Maybe<ResponseWrapper_EditSubscriptionOptionsResponse>;
  checkUserLogin?: Maybe<ResponseWrapper_UserLogin>;
  countCustomers?: Maybe<ResponseWrapper_NumberResponse>;
  countPartners?: Maybe<ResponseWrapper_NumberResponse>;
  countPersons?: Maybe<ResponseWrapper_NumberResponse>;
  generate3dSecureToken?: Maybe<ResponseWrapper_String>;
  getAddressByLookupId?: Maybe<ResponseWrapper_AddressLookupResponseDto>;
  getAddressesByEmail?: Maybe<ResponseWrapper_List_Address>;
  getAddressesBySearch?: Maybe<ResponseWrapper_AddressSearchResponseDto>;
  getAvailableCustomerFilters?: Maybe<ResponseWrapper_FilterOptions>;
  getAvailableHostnamesByPartnerId?: Maybe<ResponseWrapper_List_AvailableHostnamesResponse>;
  getAvailablePartnerFilters?: Maybe<ResponseWrapper_FilterOptions>;
  getBillingInformationFlat?: Maybe<ResponseWrapper_List_FieldValue>;
  getCareerStatus?: Maybe<ResponseWrapper_CareerStatus>;
  getCartByCartId?: Maybe<ResponseWrapper_Cart>;
  getCartReferralFlat?: Maybe<ResponseWrapper_List_FieldValue>;
  getCheckoutConfirmation?: Maybe<ResponseWrapper_CheckoutConfirmation>;
  getCheckoutState?: Maybe<ResponseWrapper_CheckoutStateResponseDto>;
  getCurrentCart?: Maybe<ResponseWrapper_Cart>;
  getCurrentCartFlat?: Maybe<ResponseWrapper_List_FieldValue>;
  getCurrentSharedCart?: Maybe<ResponseWrapper_Cart>;
  getCurrentSharedCartFlat?: Maybe<ResponseWrapper_List_FieldValue>;
  getCustomers?: Maybe<ResponseWrapper_PersonResponse_Person>;
  getDashboardByPartnerId?: Maybe<ResponseWrapper_Dashboard>;
  getDashboardPaidContributorReport?: Maybe<ResponseWrapper_VolumeReportResponse_ContributorDetail>;
  getDashboardPaidOrderReport?: Maybe<ResponseWrapper_VolumeReportResponse_PaidOrderDetail>;
  getDashboardPendingContributorReport?: Maybe<ResponseWrapper_VolumeReportResponse_ContributorDetail>;
  getDashboardPendingOrderReport?: Maybe<ResponseWrapper_VolumeReportResponse_PendingOrderDetail>;
  getFlatCartByCartId?: Maybe<ResponseWrapper_List_FieldValue>;
  getFormConfiguration?: Maybe<ResponseWrapper_List_Field>;
  getFormControls?: Maybe<ResponseWrapper_List_Control>;
  getOnboardingPaymentConfirmation?: Maybe<ResponseWrapper_PaymentConfirmation>;
  getOrderSummaries?: Maybe<ResponseWrapper_ErrorQueueResponse>;
  getPartnerByHostname?: Maybe<ResponseWrapper_HostnameLookupResponseDto>;
  getPartnerByPartnerId?: Maybe<ResponseWrapper_Person>;
  getPartnerNameByCartId?: Maybe<ResponseWrapper_CartReferral>;
  getPartnerSettings?: Maybe<ResponseWrapper_PartnerSettings>;
  getPartners?: Maybe<ResponseWrapper_PersonResponse_Person>;
  getPaymentOptionDefinitions?: Maybe<ResponseWrapper_List_PaymentOptionDefinition>;
  getPersonByEmail?: Maybe<ResponseWrapper_Person>;
  getPersonById?: Maybe<ResponseWrapper_Person>;
  getPersonPlaceOfBirth?: Maybe<ResponseWrapper_List_PlaceOfBirth>;
  getPersons?: Maybe<ResponseWrapper_PersonResponse_BasePerson>;
  getProductSkusByCountryCodeAndChildAge?: Maybe<ResponseWrapper_ProductSkus>;
  getProductsByCountryId?: Maybe<ResponseWrapper_List_Product>;
  getPublicPartnerByPartnerId?: Maybe<ResponseWrapper_HostnameLookupResponseDto>;
  getRanks?: Maybe<ResponseWrapper_List_Rank>;
  getSharedCartBySharedLinkForValidatedEmail?: Maybe<ResponseWrapper_Cart>;
  getSharedCartsByEmail?: Maybe<ResponseWrapper_List_Cart>;
  getShipmentHistoryBySubscription?: Maybe<ResponseWrapper_List_ShipmentHistory>;
  getShipmentsByOrderId?: Maybe<ResponseWrapper_List_Shipment>;
  getShippingInformationFlat?: Maybe<ResponseWrapper_List_FieldValue>;
  getStates?: Maybe<ResponseWrapper_List_States>;
  getSubscriptionCancelReasons?: Maybe<ResponseWrapper_List_SubscriptionChangeReason>;
  getSubscriptionDelayReasons?: Maybe<ResponseWrapper_List_SubscriptionChangeReason>;
  getSubscriptionFees?: Maybe<ResponseWrapper_SubscriptionFee>;
  getSubscriptionReturnReasons?: Maybe<ResponseWrapper_List_SubscriptionChangeReason>;
  getSubscriptionsByEmail?: Maybe<ResponseWrapper_List_Subscription>;
  getSubscriptionsBySubscriptionId?: Maybe<ResponseWrapper_Subscription>;
  getTaxCodeValidation?: Maybe<ResponseWrapper_ZipCodeDto>;
  isEmailValid?: Maybe<ResponseWrapper_EmailValidationResponseDto>;
  lookUpZipCode?: Maybe<ResponseWrapper_ZipCodeLookupResponseDto>;
  useShippingAsBillingAddress?: Maybe<ResponseWrapper_Boolean>;
};


export type QueryCanPromoteArgs = {
  partnerId?: InputMaybe<Scalars['String']>;
};


export type QueryCheckSsnAvailabilityArgs = {
  ssnNumber: Scalars['String'];
};


export type QueryCheckSubscriptionEditOptionsArgs = {
  subscriptionId?: InputMaybe<Scalars['String']>;
};


export type QueryCountCustomersArgs = {
  criteria?: InputMaybe<CustomerCriteriaInput>;
  email?: InputMaybe<Scalars['String']>;
};


export type QueryCountPartnersArgs = {
  criteria?: InputMaybe<PartnerCriteriaInput>;
  email?: InputMaybe<Scalars['String']>;
};


export type QueryCountPersonsArgs = {
  criteria?: InputMaybe<PersonCriteriaInput>;
};


export type QueryGetAddressByLookupIdArgs = {
  addressLookupId?: InputMaybe<Scalars['String']>;
  countryCode?: InputMaybe<Scalars['String']>;
};


export type QueryGetAddressesByEmailArgs = {
  email?: InputMaybe<Scalars['String']>;
};


export type QueryGetAddressesBySearchArgs = {
  countryCode?: InputMaybe<Scalars['String']>;
  maxResults?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryGetAvailableCustomerFiltersArgs = {
  email?: InputMaybe<Scalars['String']>;
};


export type QueryGetAvailableHostnamesByPartnerIdArgs = {
  partnerId?: InputMaybe<Scalars['String']>;
};


export type QueryGetAvailablePartnerFiltersArgs = {
  email?: InputMaybe<Scalars['String']>;
};


export type QueryGetCareerStatusArgs = {
  partnerId?: InputMaybe<Scalars['String']>;
};


export type QueryGetCartByCartIdArgs = {
  cartId?: InputMaybe<Scalars['String']>;
};


export type QueryGetCurrentSharedCartArgs = {
  email?: InputMaybe<Scalars['String']>;
  orderType?: InputMaybe<CartOrderType>;
};


export type QueryGetCurrentSharedCartFlatArgs = {
  email?: InputMaybe<Scalars['String']>;
  orderType?: InputMaybe<CartOrderType>;
};


export type QueryGetCustomersArgs = {
  criteria?: InputMaybe<CustomerCriteriaInput>;
  direction?: InputMaybe<Direction>;
  email?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type QueryGetDashboardByPartnerIdArgs = {
  partnerId?: InputMaybe<Scalars['String']>;
};


export type QueryGetDashboardPaidContributorReportArgs = {
  direction?: InputMaybe<Direction>;
  orderBy?: InputMaybe<ContributorOrderBy>;
  page?: InputMaybe<Scalars['Int']>;
  partnerId?: InputMaybe<Scalars['String']>;
  reportType?: InputMaybe<DetailReportType>;
  size?: InputMaybe<Scalars['Int']>;
};


export type QueryGetDashboardPaidOrderReportArgs = {
  direction?: InputMaybe<Direction>;
  orderBy?: InputMaybe<PaidOrderOrderBy>;
  page?: InputMaybe<Scalars['Int']>;
  partnerId?: InputMaybe<Scalars['String']>;
  reportType?: InputMaybe<DetailReportType>;
  size?: InputMaybe<Scalars['Int']>;
};


export type QueryGetDashboardPendingContributorReportArgs = {
  direction?: InputMaybe<Direction>;
  orderBy?: InputMaybe<ContributorOrderBy>;
  page?: InputMaybe<Scalars['Int']>;
  partnerId?: InputMaybe<Scalars['String']>;
  reportType?: InputMaybe<DetailReportType>;
  size?: InputMaybe<Scalars['Int']>;
};


export type QueryGetDashboardPendingOrderReportArgs = {
  direction?: InputMaybe<Direction>;
  orderBy?: InputMaybe<PendingOrderOrderBy>;
  page?: InputMaybe<Scalars['Int']>;
  partnerId?: InputMaybe<Scalars['String']>;
  reportType?: InputMaybe<DetailReportType>;
  size?: InputMaybe<Scalars['Int']>;
};


export type QueryGetFlatCartByCartIdArgs = {
  cartId?: InputMaybe<Scalars['String']>;
};


export type QueryGetFormConfigurationArgs = {
  context?: InputMaybe<Scalars['String']>;
  countryCode?: InputMaybe<Scalars['String']>;
  form?: InputMaybe<Scalars['String']>;
};


export type QueryGetFormControlsArgs = {
  countryCode?: InputMaybe<Scalars['String']>;
  form?: InputMaybe<Scalars['String']>;
};


export type QueryGetOrderSummariesArgs = {
  criteria?: InputMaybe<OrderSummarySearchCriteriaDtoInput>;
};


export type QueryGetPartnerByHostnameArgs = {
  hostname?: InputMaybe<Scalars['String']>;
};


export type QueryGetPartnerByPartnerIdArgs = {
  partnerId?: InputMaybe<Scalars['String']>;
};


export type QueryGetPartnerNameByCartIdArgs = {
  cartId?: InputMaybe<Scalars['String']>;
};


export type QueryGetPartnerSettingsArgs = {
  partnerId?: InputMaybe<Scalars['String']>;
};


export type QueryGetPartnersArgs = {
  criteria?: InputMaybe<PartnerCriteriaInput>;
  direction?: InputMaybe<Direction>;
  email?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type QueryGetPaymentOptionDefinitionsArgs = {
  context?: InputMaybe<Scalars['String']>;
  countryCode?: InputMaybe<Scalars['String']>;
};


export type QueryGetPersonByEmailArgs = {
  email?: InputMaybe<Scalars['String']>;
};


export type QueryGetPersonByIdArgs = {
  id?: InputMaybe<Scalars['Long']>;
};


export type QueryGetPersonPlaceOfBirthArgs = {
  searchText?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type QueryGetPersonsArgs = {
  criteria?: InputMaybe<PersonCriteriaInput>;
  direction?: InputMaybe<Direction>;
  orderBy?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type QueryGetProductSkusByCountryCodeAndChildAgeArgs = {
  childAge?: InputMaybe<Scalars['Int']>;
  countryCode?: InputMaybe<Scalars['String']>;
};


export type QueryGetProductsByCountryIdArgs = {
  criteria?: InputMaybe<ProductCriteriaInput>;
};


export type QueryGetPublicPartnerByPartnerIdArgs = {
  partnerId?: InputMaybe<Scalars['String']>;
};


export type QueryGetRanksArgs = {
  criteria?: InputMaybe<RankCriteriaInput>;
};


export type QueryGetSharedCartBySharedLinkForValidatedEmailArgs = {
  cartId?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
};


export type QueryGetSharedCartsByEmailArgs = {
  email?: InputMaybe<Scalars['String']>;
};


export type QueryGetShipmentHistoryBySubscriptionArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryGetShipmentsByOrderIdArgs = {
  orderId?: InputMaybe<Scalars['String']>;
};


export type QueryGetStatesArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type QueryGetSubscriptionFeesArgs = {
  countryCode?: InputMaybe<Scalars['String']>;
};


export type QueryGetSubscriptionsByEmailArgs = {
  email?: InputMaybe<Scalars['String']>;
};


export type QueryGetSubscriptionsBySubscriptionIdArgs = {
  subscriptionId?: InputMaybe<Scalars['String']>;
};


export type QueryGetTaxCodeValidationArgs = {
  city?: InputMaybe<Scalars['String']>;
  county?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
};


export type QueryIsEmailValidArgs = {
  email?: InputMaybe<Scalars['String']>;
};


export type QueryLookUpZipCodeArgs = {
  postalCode?: InputMaybe<Scalars['String']>;
};

export type Rank = Base & {
  __typename?: 'Rank';
  _type_?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  rank?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type RankCriteriaInput = {
  countryId?: InputMaybe<StringFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  rank?: InputMaybe<IntegerFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type RegisterCustomerInput = {
  countryCode?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type RegisterHsf = Base & {
  __typename?: 'RegisterHSF';
  _type_?: Maybe<Scalars['String']>;
  childDateOfBirth?: Maybe<Scalars['LocalDate']>;
  childFirstName?: Maybe<Scalars['String']>;
  childLastName?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  existingCustomer?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  street1?: Maybe<Scalars['String']>;
  street2?: Maybe<Scalars['String']>;
  street3?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type RegisterHsfInput = {
  childDateOfBirth?: InputMaybe<Scalars['LocalDate']>;
  childFirstName?: InputMaybe<Scalars['String']>;
  childLastName?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  existingCustomer?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  street1?: InputMaybe<Scalars['String']>;
  street2?: InputMaybe<Scalars['String']>;
  street3?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

export type RegisterPartner = Base & {
  __typename?: 'RegisterPartner';
  _type_?: Maybe<Scalars['String']>;
  businessName?: Maybe<Scalars['String']>;
  contactAddress?: Maybe<RegistrationAddress>;
  dateOfBirth?: Maybe<Scalars['LocalDate']>;
  email: Scalars['String'];
  ethnicity?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  firstSurname?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  incorporated?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  placeOfBirth?: Maybe<Scalars['String']>;
  preferredLanguage?: Maybe<Scalars['String']>;
  provinceOfBirth?: Maybe<Scalars['String']>;
  referredPartnerId?: Maybe<Scalars['String']>;
  registeredByPartner?: Maybe<Scalars['Boolean']>;
  socialSecurityNumber?: Maybe<Scalars['String']>;
  source?: Maybe<RegistrationSource>;
  taxFiledCity?: Maybe<Scalars['String']>;
  taxId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type RegisterPartnerInput = {
  businessName?: InputMaybe<Scalars['String']>;
  contactAddress?: InputMaybe<RegistrationAddressInput>;
  dateOfBirth?: InputMaybe<Scalars['LocalDate']>;
  email: Scalars['String'];
  ethnicity?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  firstSurname?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Gender>;
  incorporated?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  middleName?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  placeOfBirth?: InputMaybe<Scalars['String']>;
  preferredLanguage?: InputMaybe<Scalars['String']>;
  provinceOfBirth?: InputMaybe<Scalars['String']>;
  referredPartnerId?: InputMaybe<Scalars['String']>;
  registeredByPartner?: InputMaybe<Scalars['Boolean']>;
  socialSecurityNumber?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<RegistrationSource>;
  taxFiledCity?: InputMaybe<Scalars['String']>;
  taxId?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type RegistrationAddress = Base & {
  __typename?: 'RegistrationAddress';
  _type_?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  county?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  street1?: Maybe<Scalars['String']>;
  street2?: Maybe<Scalars['String']>;
  street3?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type RegistrationAddressInput = {
  city?: InputMaybe<Scalars['String']>;
  countryCode?: InputMaybe<Scalars['String']>;
  county?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  street1?: InputMaybe<Scalars['String']>;
  street2?: InputMaybe<Scalars['String']>;
  street3?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

export enum RegistrationSource {
  Mobile = 'MOBILE',
  Web = 'WEB'
}

export type RemoveMultipleProductsFromCartInput = {
  skus: Array<InputMaybe<Scalars['String']>>;
};

export type RemoveProductFromCartInput = {
  sku: Scalars['String'];
};

export type ResponseWrapper_AddressLookupResponseDto = {
  __typename?: 'ResponseWrapper_AddressLookupResponseDTO';
  data?: Maybe<AddressLookupResponseDto>;
  dataOrThrow?: Maybe<AddressLookupResponseDto>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_AddressSearchResponseDto = {
  __typename?: 'ResponseWrapper_AddressSearchResponseDTO';
  data?: Maybe<AddressSearchResponseDto>;
  dataOrThrow?: Maybe<AddressSearchResponseDto>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_Boolean = {
  __typename?: 'ResponseWrapper_Boolean';
  data?: Maybe<Scalars['Boolean']>;
  dataOrThrow?: Maybe<Scalars['Boolean']>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_CareerStatus = {
  __typename?: 'ResponseWrapper_CareerStatus';
  data?: Maybe<CareerStatus>;
  dataOrThrow?: Maybe<CareerStatus>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_Cart = {
  __typename?: 'ResponseWrapper_Cart';
  data?: Maybe<Cart>;
  dataOrThrow?: Maybe<Cart>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_CartReferral = {
  __typename?: 'ResponseWrapper_CartReferral';
  data?: Maybe<CartReferral>;
  dataOrThrow?: Maybe<CartReferral>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_CheckoutConfirmation = {
  __typename?: 'ResponseWrapper_CheckoutConfirmation';
  data?: Maybe<CheckoutConfirmation>;
  dataOrThrow?: Maybe<CheckoutConfirmation>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_CheckoutStateResponseDto = {
  __typename?: 'ResponseWrapper_CheckoutStateResponseDTO';
  data?: Maybe<CheckoutStateResponseDto>;
  dataOrThrow?: Maybe<CheckoutStateResponseDto>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_Dashboard = {
  __typename?: 'ResponseWrapper_Dashboard';
  data?: Maybe<Dashboard>;
  dataOrThrow?: Maybe<Dashboard>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_EditSubscriptionOptionsResponse = {
  __typename?: 'ResponseWrapper_EditSubscriptionOptionsResponse';
  data?: Maybe<EditSubscriptionOptionsResponse>;
  dataOrThrow?: Maybe<EditSubscriptionOptionsResponse>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_EmailValidationResponseDto = {
  __typename?: 'ResponseWrapper_EmailValidationResponseDTO';
  data?: Maybe<EmailValidationResponseDto>;
  dataOrThrow?: Maybe<EmailValidationResponseDto>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_ErrorQueueOrderSummary = {
  __typename?: 'ResponseWrapper_ErrorQueueOrderSummary';
  data?: Maybe<ErrorQueueOrderSummary>;
  dataOrThrow?: Maybe<ErrorQueueOrderSummary>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_ErrorQueueResponse = {
  __typename?: 'ResponseWrapper_ErrorQueueResponse';
  data?: Maybe<ErrorQueueResponse>;
  dataOrThrow?: Maybe<ErrorQueueResponse>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_FilterOptions = {
  __typename?: 'ResponseWrapper_FilterOptions';
  data?: Maybe<FilterOptions>;
  dataOrThrow?: Maybe<FilterOptions>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_HostnameLookupResponseDto = {
  __typename?: 'ResponseWrapper_HostnameLookupResponseDTO';
  data?: Maybe<HostnameLookupResponseDto>;
  dataOrThrow?: Maybe<HostnameLookupResponseDto>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_List_Address = {
  __typename?: 'ResponseWrapper_List_Address';
  data?: Maybe<Array<Maybe<Address>>>;
  dataOrThrow?: Maybe<Array<Maybe<Address>>>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_List_AvailableHostnamesResponse = {
  __typename?: 'ResponseWrapper_List_AvailableHostnamesResponse';
  data?: Maybe<Array<Maybe<AvailableHostnamesResponse>>>;
  dataOrThrow?: Maybe<Array<Maybe<AvailableHostnamesResponse>>>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_List_Cart = {
  __typename?: 'ResponseWrapper_List_Cart';
  data?: Maybe<Array<Maybe<Cart>>>;
  dataOrThrow?: Maybe<Array<Maybe<Cart>>>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_List_Control = {
  __typename?: 'ResponseWrapper_List_Control';
  data?: Maybe<Array<Maybe<Control>>>;
  dataOrThrow?: Maybe<Array<Maybe<Control>>>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_List_Field = {
  __typename?: 'ResponseWrapper_List_Field';
  data?: Maybe<Array<Maybe<Field>>>;
  dataOrThrow?: Maybe<Array<Maybe<Field>>>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_List_FieldValue = {
  __typename?: 'ResponseWrapper_List_FieldValue';
  data?: Maybe<Array<Maybe<FieldValue>>>;
  dataOrThrow?: Maybe<Array<Maybe<FieldValue>>>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_List_PaymentOptionDefinition = {
  __typename?: 'ResponseWrapper_List_PaymentOptionDefinition';
  data?: Maybe<Array<Maybe<PaymentOptionDefinition>>>;
  dataOrThrow?: Maybe<Array<Maybe<PaymentOptionDefinition>>>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_List_PlaceOfBirth = {
  __typename?: 'ResponseWrapper_List_PlaceOfBirth';
  data?: Maybe<Array<Maybe<PlaceOfBirth>>>;
  dataOrThrow?: Maybe<Array<Maybe<PlaceOfBirth>>>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_List_Product = {
  __typename?: 'ResponseWrapper_List_Product';
  data?: Maybe<Array<Maybe<Product>>>;
  dataOrThrow?: Maybe<Array<Maybe<Product>>>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_List_Rank = {
  __typename?: 'ResponseWrapper_List_Rank';
  data?: Maybe<Array<Maybe<Rank>>>;
  dataOrThrow?: Maybe<Array<Maybe<Rank>>>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_List_Shipment = {
  __typename?: 'ResponseWrapper_List_Shipment';
  data?: Maybe<Array<Maybe<Shipment>>>;
  dataOrThrow?: Maybe<Array<Maybe<Shipment>>>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_List_ShipmentHistory = {
  __typename?: 'ResponseWrapper_List_ShipmentHistory';
  data?: Maybe<Array<Maybe<ShipmentHistory>>>;
  dataOrThrow?: Maybe<Array<Maybe<ShipmentHistory>>>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_List_States = {
  __typename?: 'ResponseWrapper_List_States';
  data?: Maybe<Array<Maybe<States>>>;
  dataOrThrow?: Maybe<Array<Maybe<States>>>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_List_Subscription = {
  __typename?: 'ResponseWrapper_List_Subscription';
  data?: Maybe<Array<Maybe<Subscription>>>;
  dataOrThrow?: Maybe<Array<Maybe<Subscription>>>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_List_SubscriptionChangeReason = {
  __typename?: 'ResponseWrapper_List_SubscriptionChangeReason';
  data?: Maybe<Array<Maybe<SubscriptionChangeReason>>>;
  dataOrThrow?: Maybe<Array<Maybe<SubscriptionChangeReason>>>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_NumberResponse = {
  __typename?: 'ResponseWrapper_NumberResponse';
  data?: Maybe<NumberResponse>;
  dataOrThrow?: Maybe<NumberResponse>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_PartnerSettings = {
  __typename?: 'ResponseWrapper_PartnerSettings';
  data?: Maybe<PartnerSettings>;
  dataOrThrow?: Maybe<PartnerSettings>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_PaymentConfirmation = {
  __typename?: 'ResponseWrapper_PaymentConfirmation';
  data?: Maybe<PaymentConfirmation>;
  dataOrThrow?: Maybe<PaymentConfirmation>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_Person = {
  __typename?: 'ResponseWrapper_Person';
  data?: Maybe<Person>;
  dataOrThrow?: Maybe<Person>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_PersonResponse_BasePerson = {
  __typename?: 'ResponseWrapper_PersonResponse_BasePerson';
  data?: Maybe<PersonResponse_BasePerson>;
  dataOrThrow?: Maybe<PersonResponse_BasePerson>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_PersonResponse_Person = {
  __typename?: 'ResponseWrapper_PersonResponse_Person';
  data?: Maybe<PersonResponse_Person>;
  dataOrThrow?: Maybe<PersonResponse_Person>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_ProductSkus = {
  __typename?: 'ResponseWrapper_ProductSkus';
  data?: Maybe<ProductSkus>;
  dataOrThrow?: Maybe<ProductSkus>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_SsnAvailability = {
  __typename?: 'ResponseWrapper_SSNAvailability';
  data?: Maybe<SsnAvailability>;
  dataOrThrow?: Maybe<SsnAvailability>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_String = {
  __typename?: 'ResponseWrapper_String';
  data?: Maybe<Scalars['String']>;
  dataOrThrow?: Maybe<Scalars['String']>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_Subscription = {
  __typename?: 'ResponseWrapper_Subscription';
  data?: Maybe<Subscription>;
  dataOrThrow?: Maybe<Subscription>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_SubscriptionFee = {
  __typename?: 'ResponseWrapper_SubscriptionFee';
  data?: Maybe<SubscriptionFee>;
  dataOrThrow?: Maybe<SubscriptionFee>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_UserLogin = {
  __typename?: 'ResponseWrapper_UserLogin';
  data?: Maybe<UserLogin>;
  dataOrThrow?: Maybe<UserLogin>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_Validation = {
  __typename?: 'ResponseWrapper_Validation';
  data?: Maybe<Validation>;
  dataOrThrow?: Maybe<Validation>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_Void = {
  __typename?: 'ResponseWrapper_Void';
  data?: Maybe<Scalars['Boolean']>;
  dataOrThrow?: Maybe<Scalars['Boolean']>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_VolumeReportResponse_ContributorDetail = {
  __typename?: 'ResponseWrapper_VolumeReportResponse_ContributorDetail';
  data?: Maybe<VolumeReportResponse_ContributorDetail>;
  dataOrThrow?: Maybe<VolumeReportResponse_ContributorDetail>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_VolumeReportResponse_PaidOrderDetail = {
  __typename?: 'ResponseWrapper_VolumeReportResponse_PaidOrderDetail';
  data?: Maybe<VolumeReportResponse_PaidOrderDetail>;
  dataOrThrow?: Maybe<VolumeReportResponse_PaidOrderDetail>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_VolumeReportResponse_PendingOrderDetail = {
  __typename?: 'ResponseWrapper_VolumeReportResponse_PendingOrderDetail';
  data?: Maybe<VolumeReportResponse_PendingOrderDetail>;
  dataOrThrow?: Maybe<VolumeReportResponse_PendingOrderDetail>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_ZipCodeDto = {
  __typename?: 'ResponseWrapper_ZipCodeDTO';
  data?: Maybe<ZipCodeDto>;
  dataOrThrow?: Maybe<ZipCodeDto>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type ResponseWrapper_ZipCodeLookupResponseDto = {
  __typename?: 'ResponseWrapper_ZipCodeLookupResponseDTO';
  data?: Maybe<ZipCodeLookupResponseDto>;
  dataOrThrow?: Maybe<ZipCodeLookupResponseDto>;
  error?: Maybe<JpError>;
  validations?: Maybe<Array<Maybe<Validation>>>;
};

export type RestartSubscriptionDtoInput = {
  restartShipmentDate?: InputMaybe<Scalars['LocalDate']>;
};

export type ReturnSubscriptionInput = {
  comments?: InputMaybe<Scalars['String']>;
  returnReason?: InputMaybe<Scalars['String']>;
};

export type SsnAvailability = {
  __typename?: 'SSNAvailability';
  partnerStatus?: Maybe<Scalars['String']>;
  ssnAvailable?: Maybe<Scalars['Boolean']>;
};

export enum Segment {
  FullTimeBusiness = 'FULL_TIME_BUSINESS',
  PartTimeBusiness = 'PART_TIME_BUSINESS',
  Private = 'PRIVATE'
}

export type Sepa = PaymentType & {
  __typename?: 'Sepa';
  _type_?: Maybe<Scalars['String']>;
};

export type Shipment = Base & {
  __typename?: 'Shipment';
  _type_?: Maybe<Scalars['String']>;
  carrier?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['String']>;
  shipDate?: Maybe<Scalars['LocalDate']>;
  skus?: Maybe<Array<Maybe<Scalars['String']>>>;
  trackingNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ShipmentHistory = Base & {
  __typename?: 'ShipmentHistory';
  _type_?: Maybe<Scalars['String']>;
  lastShipmentDate?: Maybe<Scalars['LocalDate']>;
  partnerId?: Maybe<Scalars['String']>;
  payments?: Maybe<Array<Maybe<PaymentInfo>>>;
  shipment?: Maybe<Array<Maybe<Shipment>>>;
};

export enum ShipmentOption {
  RecurringEvery_2Months = 'RECURRING_EVERY_2_MONTHS',
  RecurringEvery_3Months = 'RECURRING_EVERY_3_MONTHS',
  RecurringEvery_4Months = 'RECURRING_EVERY_4_MONTHS',
  RecurringEvery_12Months = 'RECURRING_EVERY_12_MONTHS',
  Single = 'SINGLE'
}

export type ShippingInformation = Base & {
  __typename?: 'ShippingInformation';
  _type_?: Maybe<Scalars['String']>;
  address?: Maybe<BaseAddress>;
  contactDetails?: Maybe<ContactDetails>;
};

export type ShippingInformationInput = {
  address?: InputMaybe<BaseAddressInput>;
  contactDetails?: InputMaybe<ContactDetailsInput>;
};

export type SofortPayment = PaymentType & {
  __typename?: 'SofortPayment';
  _type_?: Maybe<Scalars['String']>;
};

export type StandingOrder = PaymentType & {
  __typename?: 'StandingOrder';
  _type_?: Maybe<Scalars['String']>;
};

export type States = Base & {
  __typename?: 'States';
  _type_?: Maybe<Scalars['String']>;
  abbreviation?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

export enum Status {
  Accepted = 'ACCEPTED',
  AlreadyReported = 'ALREADY_REPORTED',
  BadGateway = 'BAD_GATEWAY',
  BadRequest = 'BAD_REQUEST',
  BandwidthLimitExceeded = 'BANDWIDTH_LIMIT_EXCEEDED',
  Checkpoint = 'CHECKPOINT',
  Conflict = 'CONFLICT',
  Continue = 'CONTINUE',
  Created = 'CREATED',
  ExpectationFailed = 'EXPECTATION_FAILED',
  FailedDependency = 'FAILED_DEPENDENCY',
  Forbidden = 'FORBIDDEN',
  Found = 'FOUND',
  GatewayTimeout = 'GATEWAY_TIMEOUT',
  Gone = 'GONE',
  HttpVersionNotSupported = 'HTTP_VERSION_NOT_SUPPORTED',
  ImUsed = 'IM_USED',
  InsufficientStorage = 'INSUFFICIENT_STORAGE',
  InternalServerError = 'INTERNAL_SERVER_ERROR',
  IAmATeapot = 'I_AM_A_TEAPOT',
  LengthRequired = 'LENGTH_REQUIRED',
  Locked = 'LOCKED',
  LoopDetected = 'LOOP_DETECTED',
  MethodNotAllowed = 'METHOD_NOT_ALLOWED',
  MovedPermanently = 'MOVED_PERMANENTLY',
  MultipleChoices = 'MULTIPLE_CHOICES',
  MultiStatus = 'MULTI_STATUS',
  NetworkAuthenticationRequired = 'NETWORK_AUTHENTICATION_REQUIRED',
  NonAuthoritativeInformation = 'NON_AUTHORITATIVE_INFORMATION',
  NotAcceptable = 'NOT_ACCEPTABLE',
  NotExtended = 'NOT_EXTENDED',
  NotFound = 'NOT_FOUND',
  NotImplemented = 'NOT_IMPLEMENTED',
  NotModified = 'NOT_MODIFIED',
  NoContent = 'NO_CONTENT',
  Ok = 'OK',
  PartialContent = 'PARTIAL_CONTENT',
  PaymentRequired = 'PAYMENT_REQUIRED',
  PermanentRedirect = 'PERMANENT_REDIRECT',
  PreconditionFailed = 'PRECONDITION_FAILED',
  PreconditionRequired = 'PRECONDITION_REQUIRED',
  Processing = 'PROCESSING',
  ProxyAuthenticationRequired = 'PROXY_AUTHENTICATION_REQUIRED',
  RequestedRangeNotSatisfiable = 'REQUESTED_RANGE_NOT_SATISFIABLE',
  RequestEntityTooLarge = 'REQUEST_ENTITY_TOO_LARGE',
  RequestHeaderFieldsTooLarge = 'REQUEST_HEADER_FIELDS_TOO_LARGE',
  RequestTimeout = 'REQUEST_TIMEOUT',
  RequestUriTooLong = 'REQUEST_URI_TOO_LONG',
  ResetContent = 'RESET_CONTENT',
  SeeOther = 'SEE_OTHER',
  ServiceUnavailable = 'SERVICE_UNAVAILABLE',
  SwitchingProtocols = 'SWITCHING_PROTOCOLS',
  TemporaryRedirect = 'TEMPORARY_REDIRECT',
  TooManyRequests = 'TOO_MANY_REQUESTS',
  Unauthorized = 'UNAUTHORIZED',
  UnavailableForLegalReasons = 'UNAVAILABLE_FOR_LEGAL_REASONS',
  UnprocessableEntity = 'UNPROCESSABLE_ENTITY',
  UnsupportedMediaType = 'UNSUPPORTED_MEDIA_TYPE',
  UpgradeRequired = 'UPGRADE_REQUIRED',
  UseProxy = 'USE_PROXY',
  VariantAlsoNegotiates = 'VARIANT_ALSO_NEGOTIATES'
}

export type StringFilterInput = {
  contains?: InputMaybe<Scalars['String']>;
  doesNotContain?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notEquals?: InputMaybe<Scalars['String']>;
  specified?: InputMaybe<Scalars['Boolean']>;
};

export type Subscription = Base & {
  __typename?: 'Subscription';
  _type_?: Maybe<Scalars['String']>;
  businessUnit?: Maybe<BusinessUnit>;
  calculatedDeliveryAmount?: Maybe<Scalars['BigDecimal']>;
  calculatedTaxAmount?: Maybe<Scalars['BigDecimal']>;
  cancellationOnHold?: Maybe<Scalars['Boolean']>;
  currency?: Maybe<Scalars['String']>;
  customerFirstName?: Maybe<Scalars['String']>;
  customerLastName?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['ZonedDateTime']>;
  dateLastPayment?: Maybe<Scalars['LocalDate']>;
  dateLastStatusChange?: Maybe<Scalars['LocalDate']>;
  fee?: Maybe<Scalars['BigDecimal']>;
  finalPaymentDueDate?: Maybe<Scalars['LocalDate']>;
  freightAmount?: Maybe<Scalars['BigDecimal']>;
  id?: Maybe<Scalars['String']>;
  lastFreeShipment?: Maybe<Scalars['Boolean']>;
  leadType?: Maybe<Scalars['String']>;
  nextShipmentDate?: Maybe<Scalars['LocalDate']>;
  offlineVoucher?: Maybe<OfflineVoucher>;
  orderType?: Maybe<Scalars['String']>;
  partnerId?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<PaymentMethod>;
  shippingAddress?: Maybe<Address>;
  subscriptionLines?: Maybe<Array<Maybe<SubscriptionLine>>>;
  taxAmount?: Maybe<Scalars['BigDecimal']>;
  totalAmount?: Maybe<Scalars['BigDecimal']>;
  totalShipments?: Maybe<Scalars['Int']>;
};

export type SubscriptionChangeReason = {
  __typename?: 'SubscriptionChangeReason';
  reasonKey?: Maybe<Scalars['String']>;
};

export type SubscriptionFee = {
  __typename?: 'SubscriptionFee';
  countryCode?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  currencyCode?: Maybe<Scalars['String']>;
  renewalFee?: Maybe<Scalars['BigDecimal']>;
  renewalPriceWithoutTaxes?: Maybe<Scalars['BigDecimal']>;
  renewalSku?: Maybe<Scalars['String']>;
  signUpFee?: Maybe<Scalars['BigDecimal']>;
  signUpSku?: Maybe<Scalars['String']>;
};

export type SubscriptionLine = Base & {
  __typename?: 'SubscriptionLine';
  _type_?: Maybe<Scalars['String']>;
  active: Scalars['Boolean'];
  nbrInstallments?: Maybe<Scalars['Int']>;
  paymentOption?: Maybe<PaymentOption>;
  price?: Maybe<Scalars['BigDecimal']>;
  quantity?: Maybe<Scalars['Int']>;
  shipmentOption?: Maybe<ShipmentOption>;
  singleShip: Scalars['Boolean'];
  skuId?: Maybe<Scalars['String']>;
  subscriptionId?: Maybe<Scalars['String']>;
};

export type TermResult = Base & {
  __typename?: 'TermResult';
  _type_?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  rank?: Maybe<Scalars['Int']>;
  result?: Maybe<Scalars['Boolean']>;
  salience?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

export type UpdateCartProductQuantityInput = {
  quantity: Scalars['Int'];
  sku: Scalars['String'];
};

export type UpdateSharedCartCountryInput = {
  country?: InputMaybe<Scalars['String']>;
};

export type UserLogin = {
  __typename?: 'UserLogin';
  loggedThroughSocialMedia: Scalars['Boolean'];
};

export type Validation = Base & {
  __typename?: 'Validation';
  _type_?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  instance?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type ValidationRequest = Base & {
  __typename?: 'ValidationRequest';
  _type_?: Maybe<Scalars['String']>;
  dto?: Maybe<Base>;
  useCase?: Maybe<Scalars['String']>;
};

export type ValidationRequestInput = {
  dto?: InputMaybe<BaseInput>;
  useCase?: InputMaybe<Scalars['String']>;
};

export enum VolumeFilter {
  CloseToPb = 'CLOSE_TO_PB',
  CloseToPob = 'CLOSE_TO_POB'
}

export type VolumeReportResponse_ContributorDetail = Base & {
  __typename?: 'VolumeReportResponse_ContributorDetail';
  _type_?: Maybe<Scalars['String']>;
  detailList?: Maybe<Array<Maybe<ContributorDetail>>>;
  lastUpdate?: Maybe<Scalars['LocalDateTime']>;
  nextPage: Scalars['Boolean'];
  page: Scalars['Int'];
  totalCount: Scalars['Long'];
  totalVolume: Scalars['Float'];
};

export type VolumeReportResponse_PaidOrderDetail = Base & {
  __typename?: 'VolumeReportResponse_PaidOrderDetail';
  _type_?: Maybe<Scalars['String']>;
  detailList?: Maybe<Array<Maybe<PaidOrderDetail>>>;
  lastUpdate?: Maybe<Scalars['LocalDateTime']>;
  nextPage: Scalars['Boolean'];
  page: Scalars['Int'];
  totalCount: Scalars['Long'];
  totalVolume: Scalars['Float'];
};

export type VolumeReportResponse_PendingOrderDetail = Base & {
  __typename?: 'VolumeReportResponse_PendingOrderDetail';
  _type_?: Maybe<Scalars['String']>;
  detailList?: Maybe<Array<Maybe<PendingOrderDetail>>>;
  lastUpdate?: Maybe<Scalars['LocalDateTime']>;
  nextPage: Scalars['Boolean'];
  page: Scalars['Int'];
  totalCount: Scalars['Long'];
  totalVolume: Scalars['Float'];
};

export type ZipCodeDto = {
  __typename?: 'ZipCodeDTO';
  city?: Maybe<Scalars['String']>;
  county?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  taxCode?: Maybe<Scalars['String']>;
};

export type ZipCodeLookupResponseDto = {
  __typename?: 'ZipCodeLookupResponseDTO';
  zipCodeList?: Maybe<Array<Maybe<ZipCodeDto>>>;
};

export type DashboardQueryVariables = Exact<{
  partnerId: Scalars['String'];
  customerSearchType: CustomerSearchType;
  previewSize?: InputMaybe<Scalars['Int']>;
  today: Scalars['LocalDate'];
  firstDayOfMonth: Scalars['LocalDate'];
  thirtyDaysAgo: Scalars['LocalDate'];
  oneDayAgo: Scalars['LocalDate'];
  thirtyDaysFromNow: Scalars['LocalDate'];
  fourteenDaysFromNow: Scalars['LocalDate'];
  lastDayOfPreviousMonth: Scalars['LocalDate'];
}>;


export type DashboardQuery = { __typename?: 'Query', dashboard?: { __typename?: 'ResponseWrapper_Dashboard', data?: { __typename?: 'Dashboard', lastUpdatedDate?: string | null | undefined, clubLevel?: number | null | undefined, commission?: { __typename?: 'PurchaseVolume', visible: boolean, percentage?: number | null | undefined, paid?: any | null | undefined, pending?: number | null | undefined, total?: any | null | undefined, insightText?: string | null | undefined, insightValue?: number | null | undefined } | null | undefined, performanceBonus?: { __typename?: 'PerformanceBonus', visible: boolean, percentage?: number | null | undefined, paid?: any | null | undefined, pending?: number | null | undefined, total?: any | null | undefined, insightText?: string | null | undefined, insightValue?: number | null | undefined, legCount?: number | null | undefined, maxLegCount?: number | null | undefined, legPartners?: Array<{ __typename?: 'LegPartner', id?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, imageUrl?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined, promoteOutBonus?: { __typename?: 'PromoteOutBonus', visible: boolean, percentage?: number | null | undefined, paid?: any | null | undefined, pending?: number | null | undefined, total?: any | null | undefined, insightText?: string | null | undefined, insightValue?: number | null | undefined, legCount?: number | null | undefined, maxLegCount?: number | null | undefined, legPartners?: Array<{ __typename?: 'LegPartner', id?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, imageUrl?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined } | null | undefined, error?: { __typename?: 'JpError', details?: string | null | undefined, message?: string | null | undefined, status?: number | null | undefined, translationKey?: string | null | undefined } | null | undefined } | null | undefined, newTeamStats?: { __typename?: 'ResponseWrapper_NumberResponse', data?: { __typename?: 'NumberResponse', percentage?: number | null | undefined, value?: number | null | undefined } | null | undefined, error?: { __typename?: 'JpError', details?: string | null | undefined, message?: string | null | undefined, status?: number | null | undefined, translationKey?: string | null | undefined } | null | undefined } | null | undefined, totalTeamStats?: { __typename?: 'ResponseWrapper_NumberResponse', data?: { __typename?: 'NumberResponse', percentage?: number | null | undefined, value?: number | null | undefined } | null | undefined, error?: { __typename?: 'JpError', details?: string | null | undefined, message?: string | null | undefined, status?: number | null | undefined, translationKey?: string | null | undefined } | null | undefined } | null | undefined, newCustomersStats?: { __typename?: 'ResponseWrapper_NumberResponse', data?: { __typename?: 'NumberResponse', percentage?: number | null | undefined, value?: number | null | undefined } | null | undefined, error?: { __typename?: 'JpError', details?: string | null | undefined, message?: string | null | undefined, status?: number | null | undefined, translationKey?: string | null | undefined } | null | undefined } | null | undefined, totalCustomersStats?: { __typename?: 'ResponseWrapper_NumberResponse', data?: { __typename?: 'NumberResponse', percentage?: number | null | undefined, value?: number | null | undefined } | null | undefined, error?: { __typename?: 'JpError', details?: string | null | undefined, message?: string | null | undefined, status?: number | null | undefined, translationKey?: string | null | undefined } | null | undefined } | null | undefined, partnersCloseToPb?: { __typename?: 'ResponseWrapper_PersonResponse_Person', data?: { __typename?: 'PersonResponse_Person', totalCount: number, persons?: Array<{ __typename?: 'Person', id: number, firstName?: string | null | undefined, lastName?: string | null | undefined, imageUrl?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined, error?: { __typename?: 'JpError', details?: string | null | undefined, message?: string | null | undefined, status?: number | null | undefined, translationKey?: string | null | undefined } | null | undefined } | null | undefined, partnersCloseToPob?: { __typename?: 'ResponseWrapper_PersonResponse_Person', data?: { __typename?: 'PersonResponse_Person', totalCount: number, persons?: Array<{ __typename?: 'Person', id: number, firstName?: string | null | undefined, lastName?: string | null | undefined, imageUrl?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined, error?: { __typename?: 'JpError', details?: string | null | undefined, message?: string | null | undefined, status?: number | null | undefined, translationKey?: string | null | undefined } | null | undefined } | null | undefined, partnersNewPosition?: { __typename?: 'ResponseWrapper_PersonResponse_Person', data?: { __typename?: 'PersonResponse_Person', totalCount: number, persons?: Array<{ __typename?: 'Person', id: number, firstName?: string | null | undefined, lastName?: string | null | undefined, imageUrl?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined, error?: { __typename?: 'JpError', details?: string | null | undefined, message?: string | null | undefined, status?: number | null | undefined, translationKey?: string | null | undefined } | null | undefined } | null | undefined, partnersNotRenewed?: { __typename?: 'ResponseWrapper_PersonResponse_Person', data?: { __typename?: 'PersonResponse_Person', totalCount: number, persons?: Array<{ __typename?: 'Person', id: number, firstName?: string | null | undefined, lastName?: string | null | undefined, imageUrl?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined, error?: { __typename?: 'JpError', details?: string | null | undefined, message?: string | null | undefined, status?: number | null | undefined, translationKey?: string | null | undefined } | null | undefined } | null | undefined, partnersAnniversaries?: { __typename?: 'ResponseWrapper_PersonResponse_Person', data?: { __typename?: 'PersonResponse_Person', totalCount: number, persons?: Array<{ __typename?: 'Person', id: number, firstName?: string | null | undefined, lastName?: string | null | undefined, imageUrl?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined, error?: { __typename?: 'JpError', details?: string | null | undefined, message?: string | null | undefined, status?: number | null | undefined, translationKey?: string | null | undefined } | null | undefined } | null | undefined, partnersBirthdays?: { __typename?: 'ResponseWrapper_PersonResponse_Person', data?: { __typename?: 'PersonResponse_Person', totalCount: number, persons?: Array<{ __typename?: 'Person', id: number, firstName?: string | null | undefined, lastName?: string | null | undefined, imageUrl?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined, error?: { __typename?: 'JpError', details?: string | null | undefined, message?: string | null | undefined, status?: number | null | undefined, translationKey?: string | null | undefined } | null | undefined } | null | undefined, customersPaymentIssues?: { __typename?: 'ResponseWrapper_NumberResponse', data?: { __typename?: 'NumberResponse', count?: number | null | undefined } | null | undefined, error?: { __typename?: 'JpError', details?: string | null | undefined, message?: string | null | undefined, status?: number | null | undefined, translationKey?: string | null | undefined } | null | undefined } | null | undefined, customersNextShipment?: { __typename?: 'ResponseWrapper_NumberResponse', data?: { __typename?: 'NumberResponse', count?: number | null | undefined } | null | undefined, error?: { __typename?: 'JpError', details?: string | null | undefined, message?: string | null | undefined, status?: number | null | undefined, translationKey?: string | null | undefined } | null | undefined } | null | undefined, customersCancelledOrders?: { __typename?: 'ResponseWrapper_NumberResponse', data?: { __typename?: 'NumberResponse', count?: number | null | undefined } | null | undefined, error?: { __typename?: 'JpError', details?: string | null | undefined, message?: string | null | undefined, status?: number | null | undefined, translationKey?: string | null | undefined } | null | undefined } | null | undefined, customersPendingCarts?: { __typename?: 'ResponseWrapper_NumberResponse', data?: { __typename?: 'NumberResponse', count?: number | null | undefined } | null | undefined, error?: { __typename?: 'JpError', details?: string | null | undefined, message?: string | null | undefined, status?: number | null | undefined, translationKey?: string | null | undefined } | null | undefined } | null | undefined, customersAnniversaries?: { __typename?: 'ResponseWrapper_NumberResponse', data?: { __typename?: 'NumberResponse', count?: number | null | undefined } | null | undefined, error?: { __typename?: 'JpError', details?: string | null | undefined, message?: string | null | undefined, status?: number | null | undefined, translationKey?: string | null | undefined } | null | undefined } | null | undefined, customersNewOrders?: { __typename?: 'ResponseWrapper_NumberResponse', data?: { __typename?: 'NumberResponse', count?: number | null | undefined } | null | undefined, error?: { __typename?: 'JpError', details?: string | null | undefined, message?: string | null | undefined, status?: number | null | undefined, translationKey?: string | null | undefined } | null | undefined } | null | undefined, customersBirthdays?: { __typename?: 'ResponseWrapper_NumberResponse', data?: { __typename?: 'NumberResponse', count?: number | null | undefined } | null | undefined, error?: { __typename?: 'JpError', details?: string | null | undefined, message?: string | null | undefined, status?: number | null | undefined, translationKey?: string | null | undefined } | null | undefined } | null | undefined };

export type JpErrorFragment = { __typename?: 'JpError', details?: string | null | undefined, message?: string | null | undefined, status?: number | null | undefined, translationKey?: string | null | undefined };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'ResponseWrapper_Person', data?: { __typename?: 'Person', id: number, email?: string | null | undefined, firstName?: string | null | undefined, hasPCIAgreement?: boolean | null | undefined, lastName?: string | null | undefined, membershipRenewalDate?: string | null | undefined, partnerId?: string | null | undefined, partnerStatus?: PartnerStatusType | null | undefined, processingOnboarding: boolean, rank?: { __typename?: 'Rank', rank?: number | null | undefined, title?: string | null | undefined } | null | undefined, sponsor?: { __typename?: 'Person', imageUrl?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, website?: string | null | undefined } | null | undefined } | null | undefined, error?: { __typename?: 'JpError', details?: string | null | undefined, message?: string | null | undefined, status?: number | null | undefined, translationKey?: string | null | undefined } | null | undefined } | null | undefined };

export const JpErrorFragmentDoc = gql`
    fragment JpError on JpError {
  details
  message
  status
  translationKey
}
    `;
export const DashboardDocument = gql`
    query dashboard($partnerId: String!, $customerSearchType: CustomerSearchType!, $previewSize: Int = 4, $today: LocalDate!, $firstDayOfMonth: LocalDate!, $thirtyDaysAgo: LocalDate!, $oneDayAgo: LocalDate!, $thirtyDaysFromNow: LocalDate!, $fourteenDaysFromNow: LocalDate!, $lastDayOfPreviousMonth: LocalDate!) {
  dashboard: getDashboardByPartnerId(partnerId: $partnerId) {
    data {
      lastUpdatedDate
      clubLevel
      commission: purchaseVolume {
        visible
        percentage
        paid
        pending
        total
        insightText
        insightValue
      }
      performanceBonus {
        visible
        percentage
        paid
        pending
        total
        insightText
        insightValue
        legCount
        maxLegCount
        legPartners {
          id
          firstName
          lastName
          imageUrl
        }
      }
      promoteOutBonus {
        visible
        percentage
        paid
        pending
        total
        insightText
        insightValue
        legCount
        maxLegCount
        legPartners {
          id
          firstName
          lastName
          imageUrl
        }
      }
    }
    error {
      ...JpError
    }
  }
  newTeamStats: countPartners(
    criteria: {memberSince: {greaterOrEqualThan: $firstDayOfMonth}}
  ) {
    data {
      percentage: amount
      value: count
    }
    error {
      ...JpError
    }
  }
  totalTeamStats: countPartners(criteria: {}) {
    data {
      percentage: amount
      value: count
    }
    error {
      ...JpError
    }
  }
  newCustomersStats: countCustomers(
    criteria: {customerSearchType: $customerSearchType, customerEntryDate: {greaterOrEqualThan: $firstDayOfMonth}}
  ) {
    data {
      percentage: amount
      value: count
    }
    error {
      ...JpError
    }
  }
  totalCustomersStats: countCustomers(
    criteria: {customerSearchType: $customerSearchType}
  ) {
    data {
      percentage: amount
      value: count
    }
    error {
      ...JpError
    }
  }
  partnersCloseToPb: getPartners(
    criteria: {volumeFilter: CLOSE_TO_PB}
    size: $previewSize
  ) {
    data {
      totalCount
      persons {
        id
        firstName
        lastName
        imageUrl
      }
    }
    error {
      ...JpError
    }
  }
  partnersCloseToPob: getPartners(
    criteria: {volumeFilter: CLOSE_TO_POB}
    size: $previewSize
  ) {
    data {
      totalCount
      persons {
        id
        firstName
        lastName
        imageUrl
      }
    }
    error {
      ...JpError
    }
  }
  partnersNewPosition: getPartners(
    criteria: {lastTitleUpdate: {greaterOrEqualThan: $lastDayOfPreviousMonth, lessOrEqualThan: $today}, position: {in: ["P+", "QSC", "SC", "SSC", "QSSC"]}}
    size: $previewSize
  ) {
    data {
      totalCount
      persons {
        id
        firstName
        lastName
        imageUrl
      }
    }
    error {
      ...JpError
    }
  }
  partnersNotRenewed: getPartners(
    criteria: {membershipRenewal: {greaterOrEqualThan: $thirtyDaysAgo, lessOrEqualThan: $oneDayAgo}}
    size: $previewSize
  ) {
    data {
      totalCount
      persons {
        id
        firstName
        lastName
        imageUrl
      }
    }
    error {
      ...JpError
    }
  }
  partnersAnniversaries: getPartners(
    criteria: {membershipRenewal: {greaterOrEqualThan: $today, lessOrEqualThan: $thirtyDaysFromNow}}
    size: $previewSize
  ) {
    data {
      totalCount
      persons {
        id
        firstName
        lastName
        imageUrl
      }
    }
    error {
      ...JpError
    }
  }
  partnersBirthdays: getPartners(
    criteria: {birthday: {equals: $today}}
    size: $previewSize
  ) {
    data {
      totalCount
      persons {
        id
        firstName
        lastName
        imageUrl
      }
    }
    error {
      ...JpError
    }
  }
  customersPaymentIssues: countCustomers(
    criteria: {customerSearchType: $customerSearchType, orderStatus: PAYMENT_ISSUE}
  ) {
    data {
      count
    }
    error {
      ...JpError
    }
  }
  customersNextShipment: countCustomers(
    criteria: {customerSearchType: $customerSearchType, nextShipmentDate: {greaterOrEqualThan: $today, lessOrEqualThan: $fourteenDaysFromNow}}
  ) {
    data {
      count
    }
    error {
      ...JpError
    }
  }
  customersCancelledOrders: countCustomers(
    criteria: {customerSearchType: $customerSearchType, cancelDate: {greaterOrEqualThan: $firstDayOfMonth}}
  ) {
    data {
      count
    }
    error {
      ...JpError
    }
  }
  customersPendingCarts: countCustomers(
    criteria: {customerSearchType: $customerSearchType, orderStatus: CART_CONFIRMATION_PENDING}
  ) {
    data {
      count
    }
    error {
      ...JpError
    }
  }
  customersAnniversaries: countCustomers(
    criteria: {customerSearchType: $customerSearchType, anniversary: {greaterOrEqualThan: $today, lessOrEqualThan: $thirtyDaysFromNow}}
  ) {
    data {
      count
    }
    error {
      ...JpError
    }
  }
  customersNewOrders: countCustomers(
    criteria: {customerSearchType: $customerSearchType, orderDate: {greaterOrEqualThan: $firstDayOfMonth}}
  ) {
    data {
      count
    }
    error {
      ...JpError
    }
  }
  customersBirthdays: countCustomers(
    criteria: {customerSearchType: $customerSearchType, birthday: {equals: $today}}
  ) {
    data {
      count
    }
    error {
      ...JpError
    }
  }
}
    ${JpErrorFragmentDoc}`;
export const MeDocument = gql`
    query me {
  me: getPersonByEmail {
    data {
      id
      email
      firstName
      hasPCIAgreement
      lastName
      membershipRenewalDate
      partnerId
      partnerStatus
      processingOnboarding
      rank {
        rank
        title
      }
      sponsor {
        imageUrl
        firstName
        lastName
        website
      }
    }
    error {
      ...JpError
    }
  }
}
    ${JpErrorFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();
const DashboardDocumentString = print(DashboardDocument);
const MeDocumentString = print(MeDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    dashboard(variables: DashboardQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data?: DashboardQuery | undefined; extensions?: any; headers: Dom.Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<DashboardQuery>(DashboardDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'dashboard');
    },
    me(variables?: MeQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data?: MeQuery | undefined; extensions?: any; headers: Dom.Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<MeQuery>(MeDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'me');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;