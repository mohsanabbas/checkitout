import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  /**
   * The `Time` scalar type represents a Time value as
   * specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Time: any;
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: any;
  /** JSON String */
  JSONString: any;
};

export type Query = {
  __typename?: 'Query';
  order?: Maybe<Order>;
  allOrder?: Maybe<Array<Maybe<Order>>>;
  lastOrder?: Maybe<Order>;
  emailCampaignFilter?: Maybe<Array<Maybe<Email>>>;
  filterPocs?: Maybe<Array<Maybe<Poc>>>;
  pocWorkDayRestriction?: Maybe<Array<Maybe<WorkDayRestriction>>>;
  poc?: Maybe<Poc>;
  pocSearch?: Maybe<Array<Maybe<Poc>>>;
  checkout?: Maybe<Checkout>;
  allCategory?: Maybe<Array<Maybe<Category>>>;
  allProduct?: Maybe<Array<Maybe<Product>>>;
  memberGetMemberDiscount?: Maybe<MemberGetMemberDiscount>;
  allDiscountCustomer?: Maybe<Array<Maybe<DiscountCustomer>>>;
  customerPhoneNumberVerified?: Maybe<Scalars['Boolean']>;
};


export type QueryOrderArgs = {
  orderNumber: Scalars['String'];
  userToken: Scalars['String'];
};


export type QueryAllOrderArgs = {
  userToken: Scalars['String'];
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
};


export type QueryLastOrderArgs = {
  userToken: Scalars['String'];
};


export type QueryEmailCampaignFilterArgs = {
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  email?: Maybe<Scalars['String']>;
  campaign?: Maybe<Scalars['String']>;
};


export type QueryFilterPocsArgs = {
  pocFilter: PocFilterInput;
};


export type QueryPocWorkDayRestrictionArgs = {
  pocId: Scalars['Int'];
};


export type QueryPocArgs = {
  id: Scalars['ID'];
  userToken?: Maybe<Scalars['String']>;
};


export type QueryPocSearchArgs = {
  now?: Maybe<Scalars['DateTime']>;
  lat: Scalars['String'];
  long: Scalars['String'];
  algorithm: Scalars['String'];
};


export type QueryCheckoutArgs = {
  cartToken?: Maybe<Scalars['String']>;
};


export type QueryAllProductArgs = {
  pocId: Scalars['ID'];
  categoryId?: Maybe<Scalars['ID']>;
};


export type QueryMemberGetMemberDiscountArgs = {
  userToken: Scalars['String'];
};


export type QueryAllDiscountCustomerArgs = {
  userToken: Scalars['String'];
};


export type QueryCustomerPhoneNumberVerifiedArgs = {
  userName: Scalars['String'];
};

export type Order = {
  __typename?: 'Order';
  id?: Maybe<Scalars['ID']>;
  orderNumber: Scalars['String'];
  orderDate?: Maybe<Scalars['DateTime']>;
  orderDetails?: Maybe<Scalars['String']>;
  orderRating?: Maybe<Scalars['Int']>;
  attachment?: Maybe<Scalars['String']>;
  statusHistory?: Maybe<Array<Maybe<OrderStatusHistory>>>;
};


export type OrderStatusHistory = {
  __typename?: 'OrderStatusHistory';
  status?: Maybe<OrderStatus>;
  comments?: Maybe<Scalars['String']>;
  statusDate?: Maybe<Scalars['DateTime']>;
};

export enum OrderStatus {
  Pending = 'PENDING',
  UserCancelled = 'USER_CANCELLED',
  CsCancelledoc = 'CS_CANCELLEDOC',
  PocReject = 'POC_REJECT',
  DmReject = 'DM_REJECT',
  PocAccepted = 'POC_ACCEPTED',
  DmAccepted = 'DM_ACCEPTED',
  DmPickedUp = 'DM_PICKED_UP',
  Delivered = 'DELIVERED',
  DmCancellationRequest = 'DM_CANCELLATION_REQUEST',
  PocExpired = 'POC_EXPIRED',
  DmExpired = 'DM_EXPIRED',
  PocScheduled = 'POC_SCHEDULED',
  PocPickedUp = 'POC_PICKED_UP',
  Suspect = 'SUSPECT',
  Illegitimate = 'ILLEGITIMATE',
  DmWaitingToPickUp = 'DM_WAITING_TO_PICK_UP',
  DmEnRoute = 'DM_EN_ROUTE',
  DmWaitingCustomer = 'DM_WAITING_CUSTOMER',
  Failed = 'FAILED',
  Transfered = 'TRANSFERED'
}

export type Email = {
  __typename?: 'Email';
  createdDate: Scalars['DateTime'];
  updatedDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  email?: Maybe<Scalars['String']>;
  campaign?: Maybe<Scalars['String']>;
};

export type Poc = {
  __typename?: 'POC';
  id?: Maybe<Scalars['ID']>;
  tradingName?: Maybe<Scalars['String']>;
  officialName?: Maybe<Scalars['String']>;
  products?: Maybe<Array<Maybe<Product>>>;
  allProducts?: Maybe<Array<Maybe<Product>>>;
  pocWorkDay?: Maybe<Array<Maybe<PocWorkDay>>>;
  status: Status;
  deliveryTypes?: Maybe<Array<Maybe<PocDeliveryType>>>;
  paymentMethods?: Maybe<Array<Maybe<PocPaymentMethod>>>;
  address?: Maybe<PocAddress>;
  phone?: Maybe<PocPhone>;
  geoName?: Maybe<Scalars['String']>;
  partnerDeliveryTax?: Maybe<Scalars['Float']>;
};


export type PocProductsArgs = {
  categoryId?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
};


export type PocAllProductsArgs = {
  categoryId?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['ID'];
  productVariants?: Maybe<Array<Maybe<ProductVariant>>>;
  allProductVariants?: Maybe<Array<Maybe<ProductVariant>>>;
  images?: Maybe<Array<Maybe<ProductImage>>>;
  title?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String']>;
  labels?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  abiProduct?: Maybe<Scalars['Boolean']>;
  rgb?: Maybe<Scalars['Boolean']>;
  imageUrl?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<ProductCategory>>>;
  /** Brand ID */
  brandId?: Maybe<Scalars['ID']>;
};


export type ProductProductVariantsArgs = {
  search?: Maybe<Scalars['String']>;
};


export type ProductAllProductVariantsArgs = {
  search?: Maybe<Scalars['String']>;
};

export type ProductVariant = {
  __typename?: 'ProductVariant';
  inventoryItemId: Scalars['ID'];
  productVariantId: Scalars['ID'];
  title: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  attachment?: Maybe<Scalars['String']>;
  volume?: Maybe<Scalars['String']>;
  volumeUnit?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  weightUnit?: Maybe<Scalars['String']>;
  barcode?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['Float']>;
  availableDate?: Maybe<Scalars['DateTime']>;
  imageUrl?: Maybe<Scalars['String']>;
  components?: Maybe<Array<Maybe<Component>>>;
};

export type Component = {
  __typename?: 'Component';
  id: Scalars['ID'];
  productVariantId: Scalars['ID'];
  productVariant?: Maybe<ProductVariantComponent>;
};

export type ProductVariantComponent = {
  __typename?: 'ProductVariantComponent';
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
};

export type ProductImage = {
  __typename?: 'ProductImage';
  url: Scalars['String'];
};

export type ProductCategory = {
  __typename?: 'ProductCategory';
  title?: Maybe<Scalars['String']>;
};

export type PocWorkDay = {
  __typename?: 'POCWorkDay';
  /** POC ID */
  id: Scalars['ID'];
  /** The day of the week */
  weekDay?: Maybe<Scalars['Int']>;
  /** Sets if the Time is Active or Not */
  active?: Maybe<Scalars['Boolean']>;
  workingInterval?: Maybe<Array<Maybe<PocWorkingInterval>>>;
};

export type PocWorkingInterval = {
  __typename?: 'POCWorkingInterval';
  openingTime: Scalars['Time'];
  closingTime: Scalars['Time'];
};


export enum Status {
  Available = 'AVAILABLE',
  Closed = 'CLOSED'
}

export type PocDeliveryType = {
  __typename?: 'POCDeliveryType';
  pocDeliveryTypeId: Scalars['ID'];
  deliveryTypeId: Scalars['ID'];
  price?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  imageUrl?: Maybe<Scalars['String']>;
  type: DeliveryTypeEnum;
  attachment?: Maybe<Scalars['String']>;
};

export enum DeliveryTypeEnum {
  Receive = 'RECEIVE',
  Pickup = 'PICKUP',
  Scheduled = 'SCHEDULED'
}

export type PocPaymentMethod = {
  __typename?: 'POCPaymentMethod';
  pocPaymentMethodId?: Maybe<Scalars['ID']>;
  paymentMethodId?: Maybe<Scalars['ID']>;
  active?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  attachment?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  imageMobileUrl?: Maybe<Scalars['String']>;
  type: PaymentMethodTypeEnum;
};

export enum PaymentMethodTypeEnum {
  DebitCard = 'DEBIT_CARD',
  CreditCard = 'CREDIT_CARD',
  Cash = 'CASH',
  OnlinePayment = 'ONLINE_PAYMENT'
}

export type PocAddress = {
  __typename?: 'POCAddress';
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  provinceCode?: Maybe<Scalars['String']>;
  /** POC Coordinates */
  coordinates?: Maybe<Scalars['String']>;
};

export type PocPhone = {
  __typename?: 'POCPhone';
  phoneNumber?: Maybe<Scalars['String']>;
};

export type PocFilterInput = {
  document?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type WorkDayRestriction = {
  __typename?: 'WorkDayRestriction';
  weekDay: Scalars['Int'];
  hour: Scalars['Int'];
};

export type Checkout = {
  __typename?: 'Checkout';
  id?: Maybe<Scalars['ID']>;
  cartToken?: Maybe<Scalars['String']>;
  totalPrice?: Maybe<Scalars['Float']>;
  subtotalPrice?: Maybe<Scalars['Float']>;
  deliveryPrice?: Maybe<Scalars['Float']>;
  totalDiscount?: Maybe<Scalars['Float']>;
  lineItems?: Maybe<Array<Maybe<CheckoutLineItem>>>;
  pocDeliveryTypeId?: Maybe<Scalars['ID']>;
  pocPaymentMethodId?: Maybe<Scalars['ID']>;
  checkoutShippingAddress?: Maybe<CheckoutShippingAddress>;
  attachment?: Maybe<Scalars['String']>;
  discountCode?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  affiliate?: Maybe<Scalars['String']>;
  deviceToken?: Maybe<Scalars['String']>;
  recoveryTries?: Maybe<Scalars['Int']>;
  scheduledOrderTime?: Maybe<Scalars['DateTime']>;
};

export type CheckoutLineItem = {
  __typename?: 'CheckoutLineItem';
  id?: Maybe<Scalars['ID']>;
  inventoryItemId?: Maybe<Scalars['ID']>;
  quantity?: Maybe<Scalars['Int']>;
  productVariant?: Maybe<ProductVariantCheckout>;
  price?: Maybe<Scalars['Float']>;
  discountId?: Maybe<Scalars['Int']>;
  discountCode?: Maybe<Scalars['String']>;
};

export type ProductVariantCheckout = {
  __typename?: 'ProductVariantCheckout';
  id?: Maybe<Scalars['ID']>;
  product?: Maybe<ProductCheckout>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<ProductVariantImageCheckout>>>;
};

export type ProductCheckout = {
  __typename?: 'ProductCheckout';
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<ProductImageCheckout>>>;
  rgb?: Maybe<Scalars['Boolean']>;
};

export type ProductImageCheckout = {
  __typename?: 'ProductImageCheckout';
  url?: Maybe<Scalars['String']>;
};

export type ProductVariantImageCheckout = {
  __typename?: 'ProductVariantImageCheckout';
  id?: Maybe<Scalars['ID']>;
  url?: Maybe<Scalars['String']>;
};

export type CheckoutShippingAddress = {
  __typename?: 'CheckoutShippingAddress';
  createdDate: Scalars['DateTime'];
  updatedDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  provinceCode?: Maybe<Scalars['String']>;
};

export type Category = {
  __typename?: 'Category';
  title?: Maybe<Scalars['String']>;
  showcaseOrder?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
};

export type MemberGetMemberDiscount = {
  __typename?: 'MemberGetMemberDiscount';
  code: Scalars['String'];
  value?: Maybe<Scalars['Float']>;
  valueType?: Maybe<Scalars['Int']>;
};

export type DiscountCustomer = {
  __typename?: 'DiscountCustomer';
  createdDate: Scalars['DateTime'];
  updatedDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  email: Scalars['String'];
  discountId: Scalars['Int'];
  discount?: Maybe<Discount>;
  /** Discount uses left per user */
  usesLeft?: Maybe<Scalars['Int']>;
};

/** Discounts */
export type Discount = {
  __typename?: 'Discount';
  createdDate: Scalars['DateTime'];
  updatedDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  code?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  discountType?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  priceRuleId: Scalars['Int'];
  createdBy: Scalars['String'];
  uptadedBy?: Maybe<Scalars['String']>;
  priceRule?: Maybe<PriceRule>;
  discountCustomer?: Maybe<Array<Maybe<DiscountCustomer>>>;
  totalUsages?: Maybe<Scalars['Int']>;
  imageUrl?: Maybe<Scalars['String']>;
};

/** Discount price rules */
export type PriceRule = {
  __typename?: 'PriceRule';
  createdDate: Scalars['DateTime'];
  updatedDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  targetType?: Maybe<TargetType>;
  targetSelection?: Maybe<TargetSelection>;
  allocationMethod?: Maybe<AllocationMethod>;
  valueType?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Float']>;
  usageLimitPerCustomer?: Maybe<Scalars['Int']>;
  onlyFirstPurchase?: Maybe<Scalars['Boolean']>;
  onlyReceive?: Maybe<Scalars['Boolean']>;
  usageLimit?: Maybe<Scalars['Int']>;
  minimumSubtotal?: Maybe<Scalars['Float']>;
  maximumSubtotal?: Maybe<Scalars['Float']>;
  maximumDiscount?: Maybe<Scalars['Float']>;
  prerequisiteShippingPriceRange?: Maybe<Scalars['Float']>;
  utmRestriction?: Maybe<Scalars['String']>;
  maxVariantQuantityPerCheckout?: Maybe<Scalars['Int']>;
  startsAt?: Maybe<Scalars['DateTime']>;
  endsAt?: Maybe<Scalars['DateTime']>;
  createdBy: Scalars['String'];
  uptadedBy?: Maybe<Scalars['String']>;
  locations?: Maybe<Array<Maybe<EntitledLocation>>>;
  users?: Maybe<Array<Maybe<EntitledUser>>>;
  discount?: Maybe<Array<Maybe<Discount>>>;
  pocs?: Maybe<Array<Maybe<EntitledPoc>>>;
  variants?: Maybe<Array<Maybe<EntitledVariant>>>;
  userFileUrl?: Maybe<Scalars['String']>;
};

export enum TargetType {
  LineItem = 'LINE_ITEM',
  ShippingLine = 'SHIPPING_LINE'
}

export enum TargetSelection {
  All = 'ALL',
  Entitled = 'ENTITLED'
}

export enum AllocationMethod {
  Across = 'ACROSS',
  Each = 'EACH'
}

export type EntitledLocation = {
  __typename?: 'EntitledLocation';
  createdDate: Scalars['DateTime'];
  updatedDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  state: Scalars['String'];
  cities: Array<Maybe<Scalars['String']>>;
  priceRulesId: Scalars['Int'];
  priceRules?: Maybe<PriceRule>;
};

export type EntitledUser = {
  __typename?: 'EntitledUser';
  createdDate: Scalars['DateTime'];
  updatedDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  email: Scalars['String'];
  priceRulesId: Scalars['Int'];
  priceRules?: Maybe<PriceRule>;
};

export type EntitledPoc = {
  __typename?: 'EntitledPOC';
  createdDate: Scalars['DateTime'];
  updatedDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  pocId: Scalars['Int'];
  priceRulesId: Scalars['Int'];
  priceRules?: Maybe<PriceRule>;
};

export type EntitledVariant = {
  __typename?: 'EntitledVariant';
  createdDate: Scalars['DateTime'];
  updatedDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  variantId: Scalars['Int'];
  priceRulesId: Scalars['Int'];
  priceRules?: Maybe<PriceRule>;
};

export type Mutation = {
  __typename?: 'Mutation';
  login?: Maybe<Login>;
  refreshToken?: Maybe<RefreshToken>;
  addUser?: Maybe<AddUser>;
  partialUpdateUser?: Maybe<PartialUpdateUser>;
  updatePassword?: Maybe<UpdatePassword>;
  resetPassword?: Maybe<ResetPassword>;
  confirmPhoneNumber?: Maybe<ConfirmPhoneNumber>;
  resendPhoneNumberConfirmation?: Maybe<ResendPhoneNumberConfirmation>;
  sendPasswordRecovery?: Maybe<SendPasswordRecovery>;
  addCustomerAddress?: Maybe<AddCustomerAddress>;
  deleteCustomerAddress?: Maybe<DeleteCustomerAddress>;
  registerPoc?: Maybe<RegisterPoc>;
  capturePayment?: Maybe<CapturePayment>;
  setOrderRating?: Maybe<SetOrderRating>;
  createEmailCampaign?: Maybe<CreateEmailCampaign>;
  createFormAnswer?: Maybe<CreateFormAnswer>;
  checkoutComplete?: Maybe<CheckoutComplete>;
  manageCheckout?: Maybe<ManageCheckout>;
  checkoutCreate?: Maybe<CheckoutCreate>;
  completeCheckout?: Maybe<CompleteCheckout>;
  signUp?: Maybe<LegacySignUp>;
  validatePhoneNumber?: Maybe<LegacyValidatePhoneNumber>;
  sendVerificationCode?: Maybe<LegacySendVerificationCode>;
  createCustomerNewsletter?: Maybe<CreateCustomerNewsletter>;
  updateCustomerNewsletter?: Maybe<UpdateCustomerNewsletter>;
  customerUpdate?: Maybe<CustomerUpdate>;
  createDiscountCustomer?: Maybe<CreateDiscountCustomer>;
  inviteFriendMemberGetMember?: Maybe<InviteFriendMemberGetMember>;
};


export type MutationLoginArgs = {
  facebookAccessToken?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  source: Source;
  pushToken?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};


export type MutationRefreshTokenArgs = {
  username: Scalars['String'];
  refreshToken: Scalars['String'];
};


export type MutationAddUserArgs = {
  phoneNumber?: Maybe<Scalars['String']>;
  familyName?: Maybe<Scalars['String']>;
  facebookAccessToken?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  birthdate?: Maybe<Scalars['Date']>;
  source: Source;
  marketingOptIn?: Maybe<Scalars['Boolean']>;
  givenName?: Maybe<Scalars['String']>;
  pushToken?: Maybe<Scalars['String']>;
  document?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};


export type MutationPartialUpdateUserArgs = {
  phoneNumber?: Maybe<Scalars['String']>;
  familyName?: Maybe<Scalars['String']>;
  givenName?: Maybe<Scalars['String']>;
  birthdate?: Maybe<Scalars['Date']>;
};


export type MutationUpdatePasswordArgs = {
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  newPassword: Scalars['String'];
  email: Scalars['String'];
  verificationCode: Scalars['String'];
};


export type MutationConfirmPhoneNumberArgs = {
  confirmationCode: Scalars['Int'];
};


export type MutationSendPasswordRecoveryArgs = {
  email: Scalars['String'];
};


export type MutationAddCustomerAddressArgs = {
  province: Scalars['String'];
  city?: Maybe<Scalars['String']>;
  neighborhood?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  country: Scalars['String'];
  addressLine2?: Maybe<Scalars['String']>;
  number: Scalars['String'];
  longitude: Scalars['Float'];
  zipcode?: Maybe<Scalars['String']>;
  street: Scalars['String'];
  latitude: Scalars['Float'];
  addressType?: Maybe<AddressType>;
};


export type MutationDeleteCustomerAddressArgs = {
  addressType?: Maybe<AddressType>;
  name?: Maybe<Scalars['String']>;
};


export type MutationRegisterPocArgs = {
  input: PocRegisterInput;
};


export type MutationCapturePaymentArgs = {
  input: CapturePaymentInput;
};


export type MutationSetOrderRatingArgs = {
  rating: Scalars['Int'];
  orderNumber: Scalars['String'];
  attachment?: Maybe<Scalars['String']>;
  userToken?: Maybe<Scalars['String']>;
};


export type MutationCreateEmailCampaignArgs = {
  input: LeadInput;
};


export type MutationCreateFormAnswerArgs = {
  input: FormAnswerInput;
};


export type MutationCheckoutCompleteArgs = {
  cartToken: Scalars['String'];
};


export type MutationManageCheckoutArgs = {
  input: CheckoutInput;
};


export type MutationCheckoutCreateArgs = {
  input: CheckoutCreateInput;
};


export type MutationCompleteCheckoutArgs = {
  cartToken: Scalars['String'];
};


export type MutationSignUpArgs = {
  phoneNumber: Scalars['String'];
  familyName: Scalars['String'];
  password: Scalars['String'];
  createDate?: Maybe<Scalars['String']>;
  birthdate?: Maybe<Scalars['String']>;
  givenName: Scalars['String'];
  document?: Maybe<Scalars['String']>;
  userName: Scalars['String'];
  email: Scalars['String'];
  isnewsletter?: Maybe<Scalars['Int']>;
};


export type MutationValidatePhoneNumberArgs = {
  phoneNumber: Scalars['String'];
  code: Scalars['String'];
  userName: Scalars['String'];
};


export type MutationSendVerificationCodeArgs = {
  userName: Scalars['String'];
};


export type MutationCreateCustomerNewsletterArgs = {
  customerNewsletterInput: CustomerNewsletterInput;
};


export type MutationUpdateCustomerNewsletterArgs = {
  id: Scalars['ID'];
  customerNewsletterInput: CustomerNewsletterInput;
};


export type MutationCustomerUpdateArgs = {
  input: CustomerUpdateInput;
  token?: Maybe<Scalars['String']>;
};


export type MutationCreateDiscountCustomerArgs = {
  userToken: Scalars['String'];
  discountCustomerInput: DiscountCustomerInput;
};


export type MutationInviteFriendMemberGetMemberArgs = {
  userToken: Scalars['String'];
  memberGetMemberInvitationInput: MemberGetMemberInvitationInput;
};

export type Login = {
  __typename?: 'Login';
  token?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  errors?: Maybe<Array<Maybe<Message>>>;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  givenName?: Maybe<Scalars['String']>;
  familyName?: Maybe<Scalars['String']>;
  birthdate?: Maybe<Scalars['String']>;
  document?: Maybe<Scalars['String']>;
  phoneNumberConfirmed?: Maybe<Scalars['Boolean']>;
  totalOrdersCount?: Maybe<Scalars['Int']>;
  memberGetMemberCode?: Maybe<Scalars['String']>;
  dashButtonDeviceSerialNumber?: Maybe<Scalars['String']>;
};

export type Message = {
  __typename?: 'Message';
  category?: Maybe<MessageCategory>;
  target?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  args?: Maybe<Array<Maybe<Scalars['String']>>>;
  message?: Maybe<Scalars['String']>;
};

export enum MessageCategory {
  Error = 'ERROR',
  Info = 'INFO',
  Validation = 'VALIDATION',
  Warning = 'WARNING'
}

export enum Source {
  Facebook = 'FACEBOOK',
  Google = 'GOOGLE',
  UserPassword = 'USER_PASSWORD'
}

export type RefreshToken = {
  __typename?: 'RefreshToken';
  accessToken?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type AddUser = {
  __typename?: 'AddUser';
  token?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  errors?: Maybe<Array<Maybe<Message>>>;
};


export type PartialUpdateUser = {
  __typename?: 'PartialUpdateUser';
  user?: Maybe<User>;
  errors?: Maybe<Array<Maybe<Message>>>;
};

export type UpdatePassword = {
  __typename?: 'UpdatePassword';
  user?: Maybe<User>;
  messages?: Maybe<Array<Maybe<Message>>>;
};

export type ResetPassword = {
  __typename?: 'ResetPassword';
  email?: Maybe<Scalars['String']>;
  messages?: Maybe<Array<Maybe<Message>>>;
};

export type ConfirmPhoneNumber = {
  __typename?: 'ConfirmPhoneNumber';
  user?: Maybe<User>;
  errors?: Maybe<Array<Maybe<Message>>>;
};

export type ResendPhoneNumberConfirmation = {
  __typename?: 'ResendPhoneNumberConfirmation';
  user?: Maybe<User>;
};

export type SendPasswordRecovery = {
  __typename?: 'SendPasswordRecovery';
  email?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Maybe<Message>>>;
};

export type AddCustomerAddress = {
  __typename?: 'AddCustomerAddress';
  address?: Maybe<CustomerAddress>;
  messages?: Maybe<Array<Maybe<Message>>>;
};

export type CustomerAddress = {
  __typename?: 'CustomerAddress';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  zipcode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  neighborhood?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  addressType?: Maybe<AddressType>;
  name?: Maybe<Scalars['String']>;
};

export enum AddressType {
  Historic = 'HISTORIC',
  Home = 'HOME',
  Others = 'OTHERS',
  Work = 'WORK'
}

export type DeleteCustomerAddress = {
  __typename?: 'DeleteCustomerAddress';
  messages?: Maybe<Array<Maybe<Message>>>;
  ok?: Maybe<Scalars['Boolean']>;
};

export type RegisterPoc = {
  __typename?: 'RegisterPoc';
  userAuthentication?: Maybe<UserAuthorization>;
  poc?: Maybe<Poc>;
  errors?: Maybe<Array<Maybe<Message>>>;
};

export type UserAuthorization = {
  __typename?: 'UserAuthorization';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type PocRegisterInput = {
  document: Scalars['String'];
  ownerName: Scalars['String'];
  tradingName: Scalars['String'];
  phone: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  address: PocAddressInput;
};

export type PocAddressInput = {
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  coordinates?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  countryCode?: Maybe<CountryEnum>;
  provinceCode?: Maybe<Scalars['String']>;
  neighborhood?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export enum CountryEnum {
  Ad = 'AD',
  Ae = 'AE',
  Af = 'AF',
  Ag = 'AG',
  Ai = 'AI',
  Al = 'AL',
  Am = 'AM',
  Ao = 'AO',
  Aq = 'AQ',
  Ar = 'AR',
  As = 'AS',
  At = 'AT',
  Au = 'AU',
  Aw = 'AW',
  Ax = 'AX',
  Az = 'AZ',
  Ba = 'BA',
  Bb = 'BB',
  Bd = 'BD',
  Be = 'BE',
  Bf = 'BF',
  Bg = 'BG',
  Bh = 'BH',
  Bi = 'BI',
  Bj = 'BJ',
  Bl = 'BL',
  Bm = 'BM',
  Bn = 'BN',
  Bo = 'BO',
  Bq = 'BQ',
  Br = 'BR',
  Bs = 'BS',
  Bt = 'BT',
  Bv = 'BV',
  Bw = 'BW',
  By = 'BY',
  Bz = 'BZ',
  Ca = 'CA',
  Cc = 'CC',
  Cd = 'CD',
  Cf = 'CF',
  Cg = 'CG',
  Ch = 'CH',
  Ci = 'CI',
  Ck = 'CK',
  Cl = 'CL',
  Cm = 'CM',
  Cn = 'CN',
  Co = 'CO',
  Cr = 'CR',
  Cu = 'CU',
  Cv = 'CV',
  Cw = 'CW',
  Cx = 'CX',
  Cy = 'CY',
  Cz = 'CZ',
  De = 'DE',
  Dj = 'DJ',
  Dk = 'DK',
  Dm = 'DM',
  Do = 'DO',
  Dz = 'DZ',
  Ec = 'EC',
  Ee = 'EE',
  Eg = 'EG',
  Eh = 'EH',
  Er = 'ER',
  Es = 'ES',
  Et = 'ET',
  Fi = 'FI',
  Fj = 'FJ',
  Fk = 'FK',
  Fm = 'FM',
  Fo = 'FO',
  Fr = 'FR',
  Ga = 'GA',
  Gb = 'GB',
  Gd = 'GD',
  Ge = 'GE',
  Gf = 'GF',
  Gg = 'GG',
  Gh = 'GH',
  Gi = 'GI',
  Gl = 'GL',
  Gm = 'GM',
  Gn = 'GN',
  Gp = 'GP',
  Gq = 'GQ',
  Gr = 'GR',
  Gs = 'GS',
  Gt = 'GT',
  Gu = 'GU',
  Gw = 'GW',
  Gy = 'GY',
  Hk = 'HK',
  Hm = 'HM',
  Hn = 'HN',
  Hr = 'HR',
  Ht = 'HT',
  Hu = 'HU',
  Id = 'ID',
  Ie = 'IE',
  Il = 'IL',
  Im = 'IM',
  In = 'IN',
  Io = 'IO',
  Iq = 'IQ',
  Ir = 'IR',
  Is = 'IS',
  It = 'IT',
  Je = 'JE',
  Jm = 'JM',
  Jo = 'JO',
  Jp = 'JP',
  Ke = 'KE',
  Kg = 'KG',
  Kh = 'KH',
  Ki = 'KI',
  Km = 'KM',
  Kn = 'KN',
  Kp = 'KP',
  Kr = 'KR',
  Kw = 'KW',
  Ky = 'KY',
  Kz = 'KZ',
  La = 'LA',
  Lb = 'LB',
  Lc = 'LC',
  Li = 'LI',
  Lk = 'LK',
  Lr = 'LR',
  Ls = 'LS',
  Lt = 'LT',
  Lu = 'LU',
  Lv = 'LV',
  Ly = 'LY',
  Ma = 'MA',
  Mc = 'MC',
  Md = 'MD',
  Me = 'ME',
  Mf = 'MF',
  Mg = 'MG',
  Mh = 'MH',
  Mk = 'MK',
  Ml = 'ML',
  Mm = 'MM',
  Mn = 'MN',
  Mo = 'MO',
  Mp = 'MP',
  Mq = 'MQ',
  Mr = 'MR',
  Ms = 'MS',
  Mt = 'MT',
  Mu = 'MU',
  Mv = 'MV',
  Mw = 'MW',
  Mx = 'MX',
  My = 'MY',
  Mz = 'MZ',
  Na = 'NA',
  Nc = 'NC',
  Ne = 'NE',
  Nf = 'NF',
  Ng = 'NG',
  Ni = 'NI',
  Nl = 'NL',
  No = 'NO',
  Np = 'NP',
  Nr = 'NR',
  Nu = 'NU',
  Nz = 'NZ',
  Om = 'OM',
  Pa = 'PA',
  Pe = 'PE',
  Pf = 'PF',
  Pg = 'PG',
  Ph = 'PH',
  Pk = 'PK',
  Pl = 'PL',
  Pm = 'PM',
  Pn = 'PN',
  Pr = 'PR',
  Ps = 'PS',
  Pt = 'PT',
  Pw = 'PW',
  Py = 'PY',
  Qa = 'QA',
  Re = 'RE',
  Ro = 'RO',
  Rs = 'RS',
  Ru = 'RU',
  Rw = 'RW',
  Sa = 'SA',
  Sb = 'SB',
  Sc = 'SC',
  Sd = 'SD',
  Se = 'SE',
  Sg = 'SG',
  Sh = 'SH',
  Si = 'SI',
  Sj = 'SJ',
  Sk = 'SK',
  Sl = 'SL',
  Sm = 'SM',
  Sn = 'SN',
  So = 'SO',
  Sr = 'SR',
  Ss = 'SS',
  St = 'ST',
  Sv = 'SV',
  Sx = 'SX',
  Sy = 'SY',
  Sz = 'SZ',
  Tc = 'TC',
  Td = 'TD',
  Tf = 'TF',
  Tg = 'TG',
  Th = 'TH',
  Tj = 'TJ',
  Tk = 'TK',
  Tl = 'TL',
  Tm = 'TM',
  Tn = 'TN',
  To = 'TO',
  Tr = 'TR',
  Tt = 'TT',
  Tv = 'TV',
  Tw = 'TW',
  Tz = 'TZ',
  Ua = 'UA',
  Ug = 'UG',
  Um = 'UM',
  Us = 'US',
  Uy = 'UY',
  Uz = 'UZ',
  Va = 'VA',
  Vc = 'VC',
  Ve = 'VE',
  Vg = 'VG',
  Vi = 'VI',
  Vn = 'VN',
  Vu = 'VU',
  Wf = 'WF',
  Ws = 'WS',
  Ye = 'YE',
  Yt = 'YT',
  Za = 'ZA',
  Zm = 'ZM',
  Zw = 'ZW'
}

export type CapturePayment = {
  __typename?: 'CapturePayment';
  success?: Maybe<Scalars['Boolean']>;
};

export type CapturePaymentInput = {
  transactionId: Scalars['String'];
  userToken: Scalars['String'];
};

export type SetOrderRating = {
  __typename?: 'SetOrderRating';
  ok?: Maybe<Scalars['Boolean']>;
};

export type CreateEmailCampaign = {
  __typename?: 'CreateEmailCampaign';
  lead?: Maybe<Email>;
  errors?: Maybe<Array<Maybe<Message>>>;
};

export type LeadInput = {
  email?: Maybe<Scalars['String']>;
  campaign?: Maybe<Scalars['String']>;
};

export type CreateFormAnswer = {
  __typename?: 'CreateFormAnswer';
  formAnswer?: Maybe<FormAnswer>;
  errors?: Maybe<Array<Maybe<Message>>>;
};

export type FormAnswer = {
  __typename?: 'FormAnswer';
  answers: Scalars['JSONString'];
  name: Scalars['String'];
  createdDate?: Maybe<Scalars['DateTime']>;
};


export type FormAnswerInput = {
  name?: Maybe<Scalars['String']>;
  answers?: Maybe<Scalars['String']>;
};

export type CheckoutComplete = {
  __typename?: 'CheckoutComplete';
  orderDetails?: Maybe<Scalars['String']>;
  orderNumber?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Maybe<Message>>>;
};

export type ManageCheckout = {
  __typename?: 'ManageCheckout';
  checkout?: Maybe<Checkout>;
  errors?: Maybe<Array<Maybe<Message>>>;
};

export type CheckoutInput = {
  lineItems?: Maybe<Array<Maybe<CheckoutLineItemInput>>>;
  customerToken?: Maybe<Scalars['String']>;
  cartToken?: Maybe<Scalars['String']>;
  pocDeliveryTypeId?: Maybe<Scalars['ID']>;
  pocPaymentMethodId?: Maybe<Scalars['ID']>;
  shippingAddress?: Maybe<ShippingAddressInput>;
  attachment?: Maybe<Scalars['String']>;
  discountCode?: Maybe<Scalars['String']>;
  deviceToken?: Maybe<Scalars['String']>;
  scheduledOrderTime?: Maybe<Scalars['DateTime']>;
};

export type CheckoutLineItemInput = {
  inventoryItemId: Scalars['ID'];
  quantity: Scalars['Int'];
};

export type ShippingAddressInput = {
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  coordinates?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  provinceCode?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type CheckoutCreate = {
  __typename?: 'CheckoutCreate';
  checkout?: Maybe<Checkout>;
  errors?: Maybe<Array<Maybe<Message>>>;
};

export type CheckoutCreateInput = {
  lineItems: Array<Maybe<CheckoutLineItemInput>>;
  email?: Maybe<Scalars['String']>;
  pocDeliveryTypeId?: Maybe<Scalars['ID']>;
  pocPaymentMethodId?: Maybe<Scalars['ID']>;
  shippingAddress?: Maybe<ShippingAddressInput>;
  attachment?: Maybe<Scalars['String']>;
  discountCode?: Maybe<Scalars['String']>;
  affiliate?: Maybe<Scalars['String']>;
  deviceToken?: Maybe<Scalars['String']>;
  scheduledOrderTime?: Maybe<Scalars['DateTime']>;
};

export type CompleteCheckout = {
  __typename?: 'CompleteCheckout';
  orderDetails?: Maybe<Scalars['String']>;
  orderNumber?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Maybe<Message>>>;
};

export type LegacySignUp = {
  __typename?: 'LegacySignUp';
  ok?: Maybe<Scalars['Boolean']>;
  messages?: Maybe<Array<Maybe<Message>>>;
};

export type LegacyValidatePhoneNumber = {
  __typename?: 'LegacyValidatePhoneNumber';
  ok?: Maybe<Scalars['Boolean']>;
};

export type LegacySendVerificationCode = {
  __typename?: 'LegacySendVerificationCode';
  ok?: Maybe<Scalars['Boolean']>;
};

export type CreateCustomerNewsletter = {
  __typename?: 'CreateCustomerNewsletter';
  customerNewsletter?: Maybe<CustomerNewsletter>;
};

export type CustomerNewsletter = {
  __typename?: 'CustomerNewsletter';
  createdDate: Scalars['DateTime'];
  updatedDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  email?: Maybe<Scalars['String']>;
  lat: Scalars['Float'];
  /** Customer newsletter longitude */
  lng?: Maybe<Scalars['Float']>;
};

export type CustomerNewsletterInput = {
  email?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
};

export type UpdateCustomerNewsletter = {
  __typename?: 'UpdateCustomerNewsletter';
  customerNewsletter?: Maybe<CustomerNewsletter>;
};

export type CustomerUpdate = {
  __typename?: 'CustomerUpdate';
  user?: Maybe<Customer>;
};

export type Customer = {
  __typename?: 'Customer';
  phoneNumber?: Maybe<Scalars['String']>;
  birthdate?: Maybe<Scalars['String']>;
  familyName?: Maybe<Scalars['String']>;
  givenName?: Maybe<Scalars['String']>;
  isnewsletter?: Maybe<Scalars['Int']>;
  userName?: Maybe<Scalars['String']>;
  document?: Maybe<Scalars['String']>;
};

export type CustomerUpdateInput = {
  password?: Maybe<Scalars['String']>;
  oldPassword?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  birthdate?: Maybe<Scalars['String']>;
  familyName?: Maybe<Scalars['String']>;
  givenName?: Maybe<Scalars['String']>;
  document?: Maybe<Scalars['String']>;
  isFacebookUser?: Maybe<Scalars['Boolean']>;
};

export type CreateDiscountCustomer = {
  __typename?: 'CreateDiscountCustomer';
  ok?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Array<Maybe<Message>>>;
};

export type DiscountCustomerInput = {
  code: Scalars['String'];
};

export type InviteFriendMemberGetMember = {
  __typename?: 'InviteFriendMemberGetMember';
  ok?: Maybe<Scalars['Boolean']>;
};

export type MemberGetMemberInvitationInput = {
  friendEmail: Scalars['String'];
  friendName: Scalars['String'];
};

export type AllCategoriesSearchQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCategoriesSearchQuery = (
  { __typename?: 'Query' }
  & { allCategory?: Maybe<Array<Maybe<(
    { __typename?: 'Category' }
    & Pick<Category, 'title' | 'id'>
  )>>> }
);

export type PocSearchMethodQueryVariables = Exact<{
  now: Scalars['DateTime'];
  algorithm: Scalars['String'];
  lat: Scalars['String'];
  long: Scalars['String'];
}>;


export type PocSearchMethodQuery = (
  { __typename?: 'Query' }
  & { pocSearch?: Maybe<Array<Maybe<(
    { __typename: 'POC' }
    & Pick<Poc, 'id' | 'status' | 'tradingName' | 'officialName'>
    & { deliveryTypes?: Maybe<Array<Maybe<(
      { __typename: 'POCDeliveryType' }
      & Pick<PocDeliveryType, 'pocDeliveryTypeId' | 'deliveryTypeId' | 'price' | 'title' | 'subtitle' | 'active'>
    )>>>, paymentMethods?: Maybe<Array<Maybe<(
      { __typename: 'POCPaymentMethod' }
      & Pick<PocPaymentMethod, 'pocPaymentMethodId' | 'paymentMethodId' | 'active' | 'title' | 'subtitle'>
    )>>>, pocWorkDay?: Maybe<Array<Maybe<(
      { __typename: 'POCWorkDay' }
      & Pick<PocWorkDay, 'weekDay' | 'active'>
      & { workingInterval?: Maybe<Array<Maybe<(
        { __typename: 'POCWorkingInterval' }
        & Pick<PocWorkingInterval, 'openingTime' | 'closingTime'>
      )>>> }
    )>>>, address?: Maybe<(
      { __typename: 'POCAddress' }
      & Pick<PocAddress, 'address1' | 'address2' | 'number' | 'city' | 'province' | 'zip' | 'coordinates'>
    )>, phone?: Maybe<(
      { __typename: 'POCPhone' }
      & Pick<PocPhone, 'phoneNumber'>
    )> }
  )>>> }
);

export type PocQueryVariables = Exact<{
  id: Scalars['ID'];
  categoryId?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
}>;


export type PocQuery = (
  { __typename?: 'Query' }
  & { poc?: Maybe<(
    { __typename?: 'POC' }
    & Pick<Poc, 'id'>
    & { products?: Maybe<Array<Maybe<(
      { __typename?: 'Product' }
      & Pick<Product, 'id' | 'title' | 'rgb'>
      & { images?: Maybe<Array<Maybe<(
        { __typename?: 'ProductImage' }
        & Pick<ProductImage, 'url'>
      )>>>, productVariants?: Maybe<Array<Maybe<(
        { __typename?: 'ProductVariant' }
        & Pick<ProductVariant, 'availableDate' | 'productVariantId' | 'price' | 'inventoryItemId' | 'shortDescription' | 'title' | 'published' | 'volume' | 'volumeUnit' | 'description' | 'subtitle'>
        & { components?: Maybe<Array<Maybe<(
          { __typename?: 'Component' }
          & Pick<Component, 'id' | 'productVariantId'>
          & { productVariant?: Maybe<(
            { __typename?: 'ProductVariantComponent' }
            & Pick<ProductVariantComponent, 'id' | 'title' | 'description' | 'shortDescription'>
          )> }
        )>>> }
      )>>> }
    )>>> }
  )> }
);


export const AllCategoriesSearchDocument = gql`
    query allCategoriesSearch {
  allCategory {
    title
    id
  }
}
    `;

export function useAllCategoriesSearchQuery(options: Omit<Urql.UseQueryArgs<AllCategoriesSearchQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<AllCategoriesSearchQuery>({ query: AllCategoriesSearchDocument, ...options });
};
export const PocSearchMethodDocument = gql`
    query pocSearchMethod($now: DateTime!, $algorithm: String!, $lat: String!, $long: String!) {
  pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
    __typename
    id
    status
    tradingName
    officialName
    deliveryTypes {
      __typename
      pocDeliveryTypeId
      deliveryTypeId
      price
      title
      subtitle
      active
    }
    paymentMethods {
      __typename
      pocPaymentMethodId
      paymentMethodId
      active
      title
      subtitle
    }
    pocWorkDay {
      __typename
      weekDay
      active
      workingInterval {
        __typename
        openingTime
        closingTime
      }
    }
    address {
      __typename
      address1
      address2
      number
      city
      province
      zip
      coordinates
    }
    phone {
      __typename
      phoneNumber
    }
  }
}
    `;

export function usePocSearchMethodQuery(options: Omit<Urql.UseQueryArgs<PocSearchMethodQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<PocSearchMethodQuery>({ query: PocSearchMethodDocument, ...options });
};
export const PocDocument = gql`
    query poc($id: ID!, $categoryId: Int, $search: String) {
  poc(id: $id) {
    id
    products(categoryId: $categoryId, search: $search) {
      id
      title
      rgb
      images {
        url
      }
      productVariants {
        availableDate
        productVariantId
        price
        inventoryItemId
        shortDescription
        title
        published
        volume
        volumeUnit
        description
        subtitle
        components {
          id
          productVariantId
          productVariant {
            id
            title
            description
            shortDescription
          }
        }
      }
    }
  }
}
    `;

export function usePocQuery(options: Omit<Urql.UseQueryArgs<PocQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<PocQuery>({ query: PocDocument, ...options });
};