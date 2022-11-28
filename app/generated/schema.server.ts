import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { gql } from 'graphql-request';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
  Hex: any;
  /** Raw JSON value */
  Json: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
};

export type Address = {
  __typename?: 'Address';
  addressLine2?: Maybe<Scalars['String']>;
  adressLine1?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country: Country;
  /** The unique identifier */
  id: Scalars['ID'];
  phoneNumber?: Maybe<Scalars['String']>;
  pic?: Maybe<Scalars['Json']>;
  postalCode?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
};

export type AddressConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AddressWhereUniqueInput;
};

/** A connection to a list of items. */
export type AddressConnection = {
  __typename?: 'AddressConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AddressEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AddressCreateInput = {
  addressLine2?: InputMaybe<Scalars['String']>;
  adressLine1?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country: Country;
  phoneNumber?: InputMaybe<Scalars['String']>;
  pic?: InputMaybe<Scalars['Json']>;
  postalCode?: InputMaybe<Scalars['String']>;
};

export type AddressCreateManyInlineInput = {
  /** Create and connect multiple existing Address documents */
  create?: InputMaybe<Array<AddressCreateInput>>;
};

export type AddressCreateOneInlineInput = {
  /** Create and connect one Address document */
  create?: InputMaybe<AddressCreateInput>;
};

export type AddressCreateWithPositionInput = {
  /** Document to create */
  data: AddressCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type AddressEdge = {
  __typename?: 'AddressEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Address;
};

/** Identifies documents */
export type AddressManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AddressWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AddressWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AddressWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  addressLine2?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  addressLine2_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  addressLine2_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  addressLine2_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  addressLine2_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  addressLine2_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  addressLine2_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  addressLine2_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  addressLine2_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  addressLine2_starts_with?: InputMaybe<Scalars['String']>;
  adressLine1?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  adressLine1_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  adressLine1_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  adressLine1_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  adressLine1_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  adressLine1_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  adressLine1_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  adressLine1_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  adressLine1_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  adressLine1_starts_with?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  city_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  city_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  city_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  city_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  city_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  city_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  city_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  city_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  city_starts_with?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Country>;
  /** All values that are contained in given list. */
  country_in?: InputMaybe<Array<InputMaybe<Country>>>;
  /** All values that are not equal to given value. */
  country_not?: InputMaybe<Country>;
  /** All values that are not contained in given list. */
  country_not_in?: InputMaybe<Array<InputMaybe<Country>>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  phoneNumber_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  phoneNumber_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phoneNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  phoneNumber_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  phoneNumber_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  phoneNumber_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  phoneNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  phoneNumber_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  phoneNumber_starts_with?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  postalCode_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  postalCode_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  postalCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  postalCode_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  postalCode_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  postalCode_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  postalCode_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  postalCode_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  postalCode_starts_with?: InputMaybe<Scalars['String']>;
};

export enum AddressOrderByInput {
  AddressLine2Asc = 'addressLine2_ASC',
  AddressLine2Desc = 'addressLine2_DESC',
  AdressLine1Asc = 'adressLine1_ASC',
  AdressLine1Desc = 'adressLine1_DESC',
  CityAsc = 'city_ASC',
  CityDesc = 'city_DESC',
  CountryAsc = 'country_ASC',
  CountryDesc = 'country_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PhoneNumberAsc = 'phoneNumber_ASC',
  PhoneNumberDesc = 'phoneNumber_DESC',
  PostalCodeAsc = 'postalCode_ASC',
  PostalCodeDesc = 'postalCode_DESC',
}

export type AddressParent = Author;

export type AddressParentConnectInput = {
  Author?: InputMaybe<AuthorConnectInput>;
};

export type AddressParentCreateInput = {
  Author?: InputMaybe<AuthorCreateInput>;
};

export type AddressParentCreateManyInlineInput = {
  /** Connect multiple existing AddressParent documents */
  connect?: InputMaybe<Array<AddressParentWhereUniqueInput>>;
  /** Create and connect multiple existing AddressParent documents */
  create?: InputMaybe<Array<AddressParentCreateInput>>;
};

export type AddressParentCreateOneInlineInput = {
  /** Connect one existing AddressParent document */
  connect?: InputMaybe<AddressParentWhereUniqueInput>;
  /** Create and connect one AddressParent document */
  create?: InputMaybe<AddressParentCreateInput>;
};

export type AddressParentUpdateInput = {
  Author?: InputMaybe<AuthorUpdateInput>;
};

export type AddressParentUpdateManyInlineInput = {
  /** Connect multiple existing AddressParent documents */
  connect?: InputMaybe<Array<AddressParentConnectInput>>;
  /** Create and connect multiple AddressParent documents */
  create?: InputMaybe<Array<AddressParentCreateInput>>;
  /** Delete multiple AddressParent documents */
  delete?: InputMaybe<Array<AddressParentWhereUniqueInput>>;
  /** Disconnect multiple AddressParent documents */
  disconnect?: InputMaybe<Array<AddressParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing AddressParent documents */
  set?: InputMaybe<Array<AddressParentWhereUniqueInput>>;
  /** Update multiple AddressParent documents */
  update?: InputMaybe<Array<AddressParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple AddressParent documents */
  upsert?: InputMaybe<Array<AddressParentUpsertWithNestedWhereUniqueInput>>;
};

export type AddressParentUpdateManyWithNestedWhereInput = {
  Author?: InputMaybe<AuthorUpdateManyWithNestedWhereInput>;
};

export type AddressParentUpdateOneInlineInput = {
  /** Connect existing AddressParent document */
  connect?: InputMaybe<AddressParentWhereUniqueInput>;
  /** Create and connect one AddressParent document */
  create?: InputMaybe<AddressParentCreateInput>;
  /** Delete currently connected AddressParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected AddressParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single AddressParent document */
  update?: InputMaybe<AddressParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single AddressParent document */
  upsert?: InputMaybe<AddressParentUpsertWithNestedWhereUniqueInput>;
};

export type AddressParentUpdateWithNestedWhereUniqueInput = {
  Author?: InputMaybe<AuthorUpdateWithNestedWhereUniqueInput>;
};

export type AddressParentUpsertWithNestedWhereUniqueInput = {
  Author?: InputMaybe<AuthorUpsertWithNestedWhereUniqueInput>;
};

export type AddressParentWhereInput = {
  Author?: InputMaybe<AuthorWhereInput>;
};

export type AddressParentWhereUniqueInput = {
  Author?: InputMaybe<AuthorWhereUniqueInput>;
};

export type AddressUpdateInput = {
  addressLine2?: InputMaybe<Scalars['String']>;
  adressLine1?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Country>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  pic?: InputMaybe<Scalars['Json']>;
  postalCode?: InputMaybe<Scalars['String']>;
};

export type AddressUpdateManyInlineInput = {
  /** Create and connect multiple Address component instances */
  create?: InputMaybe<Array<AddressCreateWithPositionInput>>;
  /** Delete multiple Address documents */
  delete?: InputMaybe<Array<AddressWhereUniqueInput>>;
  /** Update multiple Address component instances */
  update?: InputMaybe<
    Array<AddressUpdateWithNestedWhereUniqueAndPositionInput>
  >;
  /** Upsert multiple Address component instances */
  upsert?: InputMaybe<
    Array<AddressUpsertWithNestedWhereUniqueAndPositionInput>
  >;
};

export type AddressUpdateManyInput = {
  addressLine2?: InputMaybe<Scalars['String']>;
  adressLine1?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Country>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  pic?: InputMaybe<Scalars['Json']>;
  postalCode?: InputMaybe<Scalars['String']>;
};

export type AddressUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AddressUpdateManyInput;
  /** Document search */
  where: AddressWhereInput;
};

export type AddressUpdateOneInlineInput = {
  /** Create and connect one Address document */
  create?: InputMaybe<AddressCreateInput>;
  /** Delete currently connected Address document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single Address document */
  update?: InputMaybe<AddressUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Address document */
  upsert?: InputMaybe<AddressUpsertWithNestedWhereUniqueInput>;
};

export type AddressUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<AddressUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: AddressWhereUniqueInput;
};

export type AddressUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AddressUpdateInput;
  /** Unique document search */
  where: AddressWhereUniqueInput;
};

export type AddressUpsertInput = {
  /** Create document if it didn't exist */
  create: AddressCreateInput;
  /** Update document if it exists */
  update: AddressUpdateInput;
};

export type AddressUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<AddressUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: AddressWhereUniqueInput;
};

export type AddressUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AddressUpsertInput;
  /** Unique document search */
  where: AddressWhereUniqueInput;
};

/** Identifies documents */
export type AddressWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AddressWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AddressWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AddressWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  addressLine2?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  addressLine2_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  addressLine2_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  addressLine2_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  addressLine2_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  addressLine2_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  addressLine2_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  addressLine2_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  addressLine2_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  addressLine2_starts_with?: InputMaybe<Scalars['String']>;
  adressLine1?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  adressLine1_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  adressLine1_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  adressLine1_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  adressLine1_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  adressLine1_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  adressLine1_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  adressLine1_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  adressLine1_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  adressLine1_starts_with?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  city_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  city_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  city_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  city_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  city_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  city_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  city_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  city_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  city_starts_with?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Country>;
  /** All values that are contained in given list. */
  country_in?: InputMaybe<Array<InputMaybe<Country>>>;
  /** All values that are not equal to given value. */
  country_not?: InputMaybe<Country>;
  /** All values that are not contained in given list. */
  country_not_in?: InputMaybe<Array<InputMaybe<Country>>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  phoneNumber_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  phoneNumber_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phoneNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  phoneNumber_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  phoneNumber_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  phoneNumber_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  phoneNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  phoneNumber_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  phoneNumber_starts_with?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  postalCode_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  postalCode_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  postalCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  postalCode_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  postalCode_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  postalCode_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  postalCode_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  postalCode_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  postalCode_starts_with?: InputMaybe<Scalars['String']>;
};

/** References Address record uniquely */
export type AddressWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  brand?: Maybe<Brand>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String'];
  /** The file handle */
  handle: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  imageModelSeo: Array<ModelSeo>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
  /** The file width */
  width?: Maybe<Scalars['Float']>;
};

/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};

/** Asset system model */
export type AssetImageModelSeoArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ModelSeoOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ModelSeoWhereInput>;
};

/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};

/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  brand?: InputMaybe<Brand>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  imageModelSeo?: InputMaybe<ModelSeoCreateManyInlineInput>;
  imageSeo?: InputMaybe<SeoCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  ogImageOpenGraphMetadata?: InputMaybe<OpenGraphMetadataCreateManyInlineInput>;
  size?: InputMaybe<Scalars['Float']>;
  twitterImageTwitterMetadata?: InputMaybe<TwitterMetadataCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  brand?: InputMaybe<Brand>;
  /** All values that are contained in given list. */
  brand_in?: InputMaybe<Array<InputMaybe<Brand>>>;
  /** All values that are not equal to given value. */
  brand_not?: InputMaybe<Brand>;
  /** All values that are not contained in given list. */
  brand_not_in?: InputMaybe<Array<InputMaybe<Brand>>>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imageModelSeo_every?: InputMaybe<ModelSeoWhereInput>;
  imageModelSeo_none?: InputMaybe<ModelSeoWhereInput>;
  imageModelSeo_some?: InputMaybe<ModelSeoWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  BrandAsc = 'brand_ASC',
  BrandDesc = 'brand_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  brand?: InputMaybe<Brand>;
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  imageModelSeo?: InputMaybe<ModelSeoUpdateManyInlineInput>;
  imageSeo?: InputMaybe<SeoUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  ogImageOpenGraphMetadata?: InputMaybe<OpenGraphMetadataUpdateManyInlineInput>;
  size?: InputMaybe<Scalars['Float']>;
  twitterImageTwitterMetadata?: InputMaybe<TwitterMetadataUpdateManyInlineInput>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  brand?: InputMaybe<Brand>;
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  brand?: InputMaybe<Brand>;
  /** All values that are contained in given list. */
  brand_in?: InputMaybe<Array<InputMaybe<Brand>>>;
  /** All values that are not equal to given value. */
  brand_not?: InputMaybe<Brand>;
  /** All values that are not contained in given list. */
  brand_not_in?: InputMaybe<Array<InputMaybe<Brand>>>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  fileName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  fileName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  handle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imageModelSeo_every?: InputMaybe<ModelSeoWhereInput>;
  imageModelSeo_none?: InputMaybe<ModelSeoWhereInput>;
  imageModelSeo_some?: InputMaybe<ModelSeoWhereInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  mimeType_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Author = Node & {
  __typename?: 'Author';
  address?: Maybe<Address>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<Author>;
  gitHubUserDetails?: Maybe<Github_User>;
  gitHubUserId?: Maybe<Scalars['String']>;
  /** List of Author versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  pages: Array<Page>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

export type AuthorAddressArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type AuthorCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type AuthorDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

export type AuthorHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};

export type AuthorPagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageWhereInput>;
};

export type AuthorPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type AuthorScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type AuthorUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type AuthorConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AuthorWhereUniqueInput;
};

/** A connection to a list of items. */
export type AuthorConnection = {
  __typename?: 'AuthorConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AuthorEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AuthorCreateInput = {
  address?: InputMaybe<AddressCreateOneInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  gitHubUserId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  pages?: InputMaybe<PageCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AuthorCreateManyInlineInput = {
  /** Connect multiple existing Author documents */
  connect?: InputMaybe<Array<AuthorWhereUniqueInput>>;
  /** Create and connect multiple existing Author documents */
  create?: InputMaybe<Array<AuthorCreateInput>>;
};

export type AuthorCreateOneInlineInput = {
  /** Connect one existing Author document */
  connect?: InputMaybe<AuthorWhereUniqueInput>;
  /** Create and connect one Author document */
  create?: InputMaybe<AuthorCreateInput>;
};

/** An edge in a connection. */
export type AuthorEdge = {
  __typename?: 'AuthorEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Author;
};

/** Identifies documents */
export type AuthorManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AuthorWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AuthorWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AuthorWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<AddressWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<AuthorWhereStageInput>;
  documentInStages_none?: InputMaybe<AuthorWhereStageInput>;
  documentInStages_some?: InputMaybe<AuthorWhereStageInput>;
  gitHubUserId?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  gitHubUserId_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  gitHubUserId_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  gitHubUserId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  gitHubUserId_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  gitHubUserId_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  gitHubUserId_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  gitHubUserId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  gitHubUserId_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  gitHubUserId_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  pages_every?: InputMaybe<PageWhereInput>;
  pages_none?: InputMaybe<PageWhereInput>;
  pages_some?: InputMaybe<PageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AuthorOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  GitHubUserIdAsc = 'gitHubUserId_ASC',
  GitHubUserIdDesc = 'gitHubUserId_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type AuthorUpdateInput = {
  address?: InputMaybe<AddressUpdateOneInlineInput>;
  description?: InputMaybe<Scalars['String']>;
  gitHubUserId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  pages?: InputMaybe<PageUpdateManyInlineInput>;
};

export type AuthorUpdateManyInlineInput = {
  /** Connect multiple existing Author documents */
  connect?: InputMaybe<Array<AuthorConnectInput>>;
  /** Create and connect multiple Author documents */
  create?: InputMaybe<Array<AuthorCreateInput>>;
  /** Delete multiple Author documents */
  delete?: InputMaybe<Array<AuthorWhereUniqueInput>>;
  /** Disconnect multiple Author documents */
  disconnect?: InputMaybe<Array<AuthorWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Author documents */
  set?: InputMaybe<Array<AuthorWhereUniqueInput>>;
  /** Update multiple Author documents */
  update?: InputMaybe<Array<AuthorUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Author documents */
  upsert?: InputMaybe<Array<AuthorUpsertWithNestedWhereUniqueInput>>;
};

export type AuthorUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  gitHubUserId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type AuthorUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AuthorUpdateManyInput;
  /** Document search */
  where: AuthorWhereInput;
};

export type AuthorUpdateOneInlineInput = {
  /** Connect existing Author document */
  connect?: InputMaybe<AuthorWhereUniqueInput>;
  /** Create and connect one Author document */
  create?: InputMaybe<AuthorCreateInput>;
  /** Delete currently connected Author document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Author document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Author document */
  update?: InputMaybe<AuthorUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Author document */
  upsert?: InputMaybe<AuthorUpsertWithNestedWhereUniqueInput>;
};

export type AuthorUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AuthorUpdateInput;
  /** Unique document search */
  where: AuthorWhereUniqueInput;
};

export type AuthorUpsertInput = {
  /** Create document if it didn't exist */
  create: AuthorCreateInput;
  /** Update document if it exists */
  update: AuthorUpdateInput;
};

export type AuthorUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AuthorUpsertInput;
  /** Unique document search */
  where: AuthorWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AuthorWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type AuthorWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AuthorWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AuthorWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AuthorWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<AddressWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<AuthorWhereStageInput>;
  documentInStages_none?: InputMaybe<AuthorWhereStageInput>;
  documentInStages_some?: InputMaybe<AuthorWhereStageInput>;
  gitHubUserId?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  gitHubUserId_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  gitHubUserId_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  gitHubUserId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  gitHubUserId_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  gitHubUserId_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  gitHubUserId_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  gitHubUserId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  gitHubUserId_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  gitHubUserId_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  pages_every?: InputMaybe<PageWhereInput>;
  pages_none?: InputMaybe<PageWhereInput>;
  pages_some?: InputMaybe<PageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AuthorWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AuthorWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AuthorWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AuthorWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AuthorWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Author record uniquely */
export type AuthorWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

export enum Brand {
  Mb = 'MB',
  Trucks = 'Trucks',
}

export type Chapter = Node & {
  __typename?: 'Chapter';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Chapter>;
  /** List of Chapter versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  navItem?: Maybe<Navigation>;
  pages: Array<Page>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug: Scalars['String'];
  /** System stage field */
  stage: Stage;
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

export type ChapterCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ChapterDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

export type ChapterHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};

export type ChapterNavItemArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ChapterPagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageWhereInput>;
};

export type ChapterPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ChapterScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type ChapterUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ChapterConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ChapterWhereUniqueInput;
};

/** A connection to a list of items. */
export type ChapterConnection = {
  __typename?: 'ChapterConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ChapterEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ChapterCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  navItem?: InputMaybe<NavigationCreateOneInlineInput>;
  pages?: InputMaybe<PageCreateManyInlineInput>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ChapterCreateManyInlineInput = {
  /** Connect multiple existing Chapter documents */
  connect?: InputMaybe<Array<ChapterWhereUniqueInput>>;
  /** Create and connect multiple existing Chapter documents */
  create?: InputMaybe<Array<ChapterCreateInput>>;
};

export type ChapterCreateOneInlineInput = {
  /** Connect one existing Chapter document */
  connect?: InputMaybe<ChapterWhereUniqueInput>;
  /** Create and connect one Chapter document */
  create?: InputMaybe<ChapterCreateInput>;
};

/** An edge in a connection. */
export type ChapterEdge = {
  __typename?: 'ChapterEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Chapter;
};

/** Identifies documents */
export type ChapterManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ChapterWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ChapterWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ChapterWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ChapterWhereStageInput>;
  documentInStages_none?: InputMaybe<ChapterWhereStageInput>;
  documentInStages_some?: InputMaybe<ChapterWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  navItem?: InputMaybe<NavigationWhereInput>;
  pages_every?: InputMaybe<PageWhereInput>;
  pages_none?: InputMaybe<PageWhereInput>;
  pages_some?: InputMaybe<PageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ChapterOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ChapterUpdateInput = {
  navItem?: InputMaybe<NavigationUpdateOneInlineInput>;
  pages?: InputMaybe<PageUpdateManyInlineInput>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ChapterUpdateManyInlineInput = {
  /** Connect multiple existing Chapter documents */
  connect?: InputMaybe<Array<ChapterConnectInput>>;
  /** Create and connect multiple Chapter documents */
  create?: InputMaybe<Array<ChapterCreateInput>>;
  /** Delete multiple Chapter documents */
  delete?: InputMaybe<Array<ChapterWhereUniqueInput>>;
  /** Disconnect multiple Chapter documents */
  disconnect?: InputMaybe<Array<ChapterWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Chapter documents */
  set?: InputMaybe<Array<ChapterWhereUniqueInput>>;
  /** Update multiple Chapter documents */
  update?: InputMaybe<Array<ChapterUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Chapter documents */
  upsert?: InputMaybe<Array<ChapterUpsertWithNestedWhereUniqueInput>>;
};

export type ChapterUpdateManyInput = {
  title?: InputMaybe<Scalars['String']>;
};

export type ChapterUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ChapterUpdateManyInput;
  /** Document search */
  where: ChapterWhereInput;
};

export type ChapterUpdateOneInlineInput = {
  /** Connect existing Chapter document */
  connect?: InputMaybe<ChapterWhereUniqueInput>;
  /** Create and connect one Chapter document */
  create?: InputMaybe<ChapterCreateInput>;
  /** Delete currently connected Chapter document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Chapter document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Chapter document */
  update?: InputMaybe<ChapterUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Chapter document */
  upsert?: InputMaybe<ChapterUpsertWithNestedWhereUniqueInput>;
};

export type ChapterUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ChapterUpdateInput;
  /** Unique document search */
  where: ChapterWhereUniqueInput;
};

export type ChapterUpsertInput = {
  /** Create document if it didn't exist */
  create: ChapterCreateInput;
  /** Update document if it exists */
  update: ChapterUpdateInput;
};

export type ChapterUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ChapterUpsertInput;
  /** Unique document search */
  where: ChapterWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ChapterWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ChapterWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ChapterWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ChapterWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ChapterWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ChapterWhereStageInput>;
  documentInStages_none?: InputMaybe<ChapterWhereStageInput>;
  documentInStages_some?: InputMaybe<ChapterWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  navItem?: InputMaybe<NavigationWhereInput>;
  pages_every?: InputMaybe<PageWhereInput>;
  pages_none?: InputMaybe<PageWhereInput>;
  pages_some?: InputMaybe<PageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ChapterWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ChapterWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ChapterWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ChapterWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ChapterWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Chapter record uniquely */
export type ChapterWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String'];
  hex: Scalars['Hex'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']>;
};

export enum Country {
  Bulgaria = 'Bulgaria',
  Canada = 'Canada',
  Estonia = 'Estonia',
  Finland = 'Finland',
  France = 'France',
  Germany = 'Germany',
  Italy = 'Italy',
  Nigeria = 'Nigeria',
  Norway = 'Norway',
  Poland = 'Poland',
  Romania = 'Romania',
  Serbia = 'Serbia',
  Spain = 'Spain',
  Sweden = 'Sweden',
  Usa = 'USA',
}

export type Dictionary = Node & {
  __typename?: 'Dictionary';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Dictionary>;
  /** List of Dictionary versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  key?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  value?: Maybe<Scalars['String']>;
};

export type DictionaryCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type DictionaryDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

export type DictionaryHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};

export type DictionaryPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type DictionaryScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type DictionaryUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type DictionaryConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: DictionaryWhereUniqueInput;
};

/** A connection to a list of items. */
export type DictionaryConnection = {
  __typename?: 'DictionaryConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<DictionaryEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type DictionaryCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  key?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  value?: InputMaybe<Scalars['String']>;
};

export type DictionaryCreateManyInlineInput = {
  /** Connect multiple existing Dictionary documents */
  connect?: InputMaybe<Array<DictionaryWhereUniqueInput>>;
  /** Create and connect multiple existing Dictionary documents */
  create?: InputMaybe<Array<DictionaryCreateInput>>;
};

export type DictionaryCreateOneInlineInput = {
  /** Connect one existing Dictionary document */
  connect?: InputMaybe<DictionaryWhereUniqueInput>;
  /** Create and connect one Dictionary document */
  create?: InputMaybe<DictionaryCreateInput>;
};

/** An edge in a connection. */
export type DictionaryEdge = {
  __typename?: 'DictionaryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Dictionary;
};

/** Identifies documents */
export type DictionaryManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<DictionaryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<DictionaryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<DictionaryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<DictionaryWhereStageInput>;
  documentInStages_none?: InputMaybe<DictionaryWhereStageInput>;
  documentInStages_some?: InputMaybe<DictionaryWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  key?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  key_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  key_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  key_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  key_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  key_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  key_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  key_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  key_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  key_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  value?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  value_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  value_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  value_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  value_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  value_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  value_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  value_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  value_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  value_starts_with?: InputMaybe<Scalars['String']>;
};

export enum DictionaryOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  KeyAsc = 'key_ASC',
  KeyDesc = 'key_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC',
}

export type DictionaryUpdateInput = {
  key?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type DictionaryUpdateManyInlineInput = {
  /** Connect multiple existing Dictionary documents */
  connect?: InputMaybe<Array<DictionaryConnectInput>>;
  /** Create and connect multiple Dictionary documents */
  create?: InputMaybe<Array<DictionaryCreateInput>>;
  /** Delete multiple Dictionary documents */
  delete?: InputMaybe<Array<DictionaryWhereUniqueInput>>;
  /** Disconnect multiple Dictionary documents */
  disconnect?: InputMaybe<Array<DictionaryWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Dictionary documents */
  set?: InputMaybe<Array<DictionaryWhereUniqueInput>>;
  /** Update multiple Dictionary documents */
  update?: InputMaybe<Array<DictionaryUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Dictionary documents */
  upsert?: InputMaybe<Array<DictionaryUpsertWithNestedWhereUniqueInput>>;
};

export type DictionaryUpdateManyInput = {
  key?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type DictionaryUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: DictionaryUpdateManyInput;
  /** Document search */
  where: DictionaryWhereInput;
};

export type DictionaryUpdateOneInlineInput = {
  /** Connect existing Dictionary document */
  connect?: InputMaybe<DictionaryWhereUniqueInput>;
  /** Create and connect one Dictionary document */
  create?: InputMaybe<DictionaryCreateInput>;
  /** Delete currently connected Dictionary document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Dictionary document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Dictionary document */
  update?: InputMaybe<DictionaryUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Dictionary document */
  upsert?: InputMaybe<DictionaryUpsertWithNestedWhereUniqueInput>;
};

export type DictionaryUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: DictionaryUpdateInput;
  /** Unique document search */
  where: DictionaryWhereUniqueInput;
};

export type DictionaryUpsertInput = {
  /** Create document if it didn't exist */
  create: DictionaryCreateInput;
  /** Update document if it exists */
  update: DictionaryUpdateInput;
};

export type DictionaryUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: DictionaryUpsertInput;
  /** Unique document search */
  where: DictionaryWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type DictionaryWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type DictionaryWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<DictionaryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<DictionaryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<DictionaryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<DictionaryWhereStageInput>;
  documentInStages_none?: InputMaybe<DictionaryWhereStageInput>;
  documentInStages_some?: InputMaybe<DictionaryWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  key?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  key_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  key_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  key_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  key_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  key_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  key_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  key_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  key_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  key_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  value?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  value_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  value_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  value_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  value_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  value_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  value_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  value_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  value_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  value_starts_with?: InputMaybe<Scalars['String']>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type DictionaryWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<DictionaryWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<DictionaryWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<DictionaryWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<DictionaryWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Dictionary record uniquely */
export type DictionaryWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx',
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type Drug = Node & {
  __typename?: 'Drug';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<Drug>;
  /** List of Drug versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

export type DrugCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type DrugDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

export type DrugHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};

export type DrugPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type DrugScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type DrugUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type DrugConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: DrugWhereUniqueInput;
};

/** A connection to a list of items. */
export type DrugConnection = {
  __typename?: 'DrugConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<DrugEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type DrugCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DrugCreateManyInlineInput = {
  /** Connect multiple existing Drug documents */
  connect?: InputMaybe<Array<DrugWhereUniqueInput>>;
  /** Create and connect multiple existing Drug documents */
  create?: InputMaybe<Array<DrugCreateInput>>;
};

export type DrugCreateOneInlineInput = {
  /** Connect one existing Drug document */
  connect?: InputMaybe<DrugWhereUniqueInput>;
  /** Create and connect one Drug document */
  create?: InputMaybe<DrugCreateInput>;
};

/** An edge in a connection. */
export type DrugEdge = {
  __typename?: 'DrugEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Drug;
};

/** Identifies documents */
export type DrugManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<DrugWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<DrugWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<DrugWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<DrugWhereStageInput>;
  documentInStages_none?: InputMaybe<DrugWhereStageInput>;
  documentInStages_some?: InputMaybe<DrugWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum DrugOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type DrugUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type DrugUpdateManyInlineInput = {
  /** Connect multiple existing Drug documents */
  connect?: InputMaybe<Array<DrugConnectInput>>;
  /** Create and connect multiple Drug documents */
  create?: InputMaybe<Array<DrugCreateInput>>;
  /** Delete multiple Drug documents */
  delete?: InputMaybe<Array<DrugWhereUniqueInput>>;
  /** Disconnect multiple Drug documents */
  disconnect?: InputMaybe<Array<DrugWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Drug documents */
  set?: InputMaybe<Array<DrugWhereUniqueInput>>;
  /** Update multiple Drug documents */
  update?: InputMaybe<Array<DrugUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Drug documents */
  upsert?: InputMaybe<Array<DrugUpsertWithNestedWhereUniqueInput>>;
};

export type DrugUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type DrugUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: DrugUpdateManyInput;
  /** Document search */
  where: DrugWhereInput;
};

export type DrugUpdateOneInlineInput = {
  /** Connect existing Drug document */
  connect?: InputMaybe<DrugWhereUniqueInput>;
  /** Create and connect one Drug document */
  create?: InputMaybe<DrugCreateInput>;
  /** Delete currently connected Drug document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Drug document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Drug document */
  update?: InputMaybe<DrugUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Drug document */
  upsert?: InputMaybe<DrugUpsertWithNestedWhereUniqueInput>;
};

export type DrugUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: DrugUpdateInput;
  /** Unique document search */
  where: DrugWhereUniqueInput;
};

export type DrugUpsertInput = {
  /** Create document if it didn't exist */
  create: DrugCreateInput;
  /** Update document if it exists */
  update: DrugUpdateInput;
};

export type DrugUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: DrugUpsertInput;
  /** Unique document search */
  where: DrugWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type DrugWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type DrugWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<DrugWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<DrugWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<DrugWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<DrugWhereStageInput>;
  documentInStages_none?: InputMaybe<DrugWhereStageInput>;
  documentInStages_some?: InputMaybe<DrugWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type DrugWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<DrugWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<DrugWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<DrugWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<DrugWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Drug record uniquely */
export type DrugWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type ExternalLink = Node & {
  __typename?: 'ExternalLink';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<ExternalLink>;
  /** List of ExternalLink versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  label: Scalars['String'];
  navItem?: Maybe<Navigation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  url: Scalars['String'];
};

export type ExternalLinkCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ExternalLinkDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

export type ExternalLinkHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};

export type ExternalLinkNavItemArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ExternalLinkPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ExternalLinkScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type ExternalLinkUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ExternalLinkConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ExternalLinkWhereUniqueInput;
};

/** A connection to a list of items. */
export type ExternalLinkConnection = {
  __typename?: 'ExternalLinkConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ExternalLinkEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ExternalLinkCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  label: Scalars['String'];
  navItem?: InputMaybe<NavigationCreateOneInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type ExternalLinkCreateManyInlineInput = {
  /** Connect multiple existing ExternalLink documents */
  connect?: InputMaybe<Array<ExternalLinkWhereUniqueInput>>;
  /** Create and connect multiple existing ExternalLink documents */
  create?: InputMaybe<Array<ExternalLinkCreateInput>>;
};

export type ExternalLinkCreateOneInlineInput = {
  /** Connect one existing ExternalLink document */
  connect?: InputMaybe<ExternalLinkWhereUniqueInput>;
  /** Create and connect one ExternalLink document */
  create?: InputMaybe<ExternalLinkCreateInput>;
};

/** An edge in a connection. */
export type ExternalLinkEdge = {
  __typename?: 'ExternalLinkEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ExternalLink;
};

/** Identifies documents */
export type ExternalLinkManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ExternalLinkWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ExternalLinkWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ExternalLinkWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ExternalLinkWhereStageInput>;
  documentInStages_none?: InputMaybe<ExternalLinkWhereStageInput>;
  documentInStages_some?: InputMaybe<ExternalLinkWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  label?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  label_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  label_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  label_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  label_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  label_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  label_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  label_starts_with?: InputMaybe<Scalars['String']>;
  navItem?: InputMaybe<NavigationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  url?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  url_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']>;
};

export enum ExternalLinkOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
}

export type ExternalLinkUpdateInput = {
  label?: InputMaybe<Scalars['String']>;
  navItem?: InputMaybe<NavigationUpdateOneInlineInput>;
  url?: InputMaybe<Scalars['String']>;
};

export type ExternalLinkUpdateManyInlineInput = {
  /** Connect multiple existing ExternalLink documents */
  connect?: InputMaybe<Array<ExternalLinkConnectInput>>;
  /** Create and connect multiple ExternalLink documents */
  create?: InputMaybe<Array<ExternalLinkCreateInput>>;
  /** Delete multiple ExternalLink documents */
  delete?: InputMaybe<Array<ExternalLinkWhereUniqueInput>>;
  /** Disconnect multiple ExternalLink documents */
  disconnect?: InputMaybe<Array<ExternalLinkWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ExternalLink documents */
  set?: InputMaybe<Array<ExternalLinkWhereUniqueInput>>;
  /** Update multiple ExternalLink documents */
  update?: InputMaybe<Array<ExternalLinkUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ExternalLink documents */
  upsert?: InputMaybe<Array<ExternalLinkUpsertWithNestedWhereUniqueInput>>;
};

export type ExternalLinkUpdateManyInput = {
  label?: InputMaybe<Scalars['String']>;
};

export type ExternalLinkUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ExternalLinkUpdateManyInput;
  /** Document search */
  where: ExternalLinkWhereInput;
};

export type ExternalLinkUpdateOneInlineInput = {
  /** Connect existing ExternalLink document */
  connect?: InputMaybe<ExternalLinkWhereUniqueInput>;
  /** Create and connect one ExternalLink document */
  create?: InputMaybe<ExternalLinkCreateInput>;
  /** Delete currently connected ExternalLink document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ExternalLink document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ExternalLink document */
  update?: InputMaybe<ExternalLinkUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ExternalLink document */
  upsert?: InputMaybe<ExternalLinkUpsertWithNestedWhereUniqueInput>;
};

export type ExternalLinkUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ExternalLinkUpdateInput;
  /** Unique document search */
  where: ExternalLinkWhereUniqueInput;
};

export type ExternalLinkUpsertInput = {
  /** Create document if it didn't exist */
  create: ExternalLinkCreateInput;
  /** Update document if it exists */
  update: ExternalLinkUpdateInput;
};

export type ExternalLinkUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ExternalLinkUpsertInput;
  /** Unique document search */
  where: ExternalLinkWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ExternalLinkWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ExternalLinkWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ExternalLinkWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ExternalLinkWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ExternalLinkWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ExternalLinkWhereStageInput>;
  documentInStages_none?: InputMaybe<ExternalLinkWhereStageInput>;
  documentInStages_some?: InputMaybe<ExternalLinkWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  label?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  label_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  label_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  label_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  label_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  label_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  label_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  label_starts_with?: InputMaybe<Scalars['String']>;
  navItem?: InputMaybe<NavigationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  url?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  url_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ExternalLinkWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ExternalLinkWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ExternalLinkWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ExternalLinkWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ExternalLinkWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References ExternalLink record uniquely */
export type ExternalLinkWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
};

export type Github_User = {
  __typename?: 'Github_User';
  avatar_url?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  blog?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['Json']>;
  events_url?: Maybe<Scalars['String']>;
  followers?: Maybe<Scalars['Int']>;
  followers_url?: Maybe<Scalars['String']>;
  following?: Maybe<Scalars['Int']>;
  following_url?: Maybe<Scalars['String']>;
  gists_url?: Maybe<Scalars['String']>;
  gravatar_id?: Maybe<Scalars['String']>;
  hireable?: Maybe<Scalars['Json']>;
  html_url?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['Json']>;
  login?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  node_id?: Maybe<Scalars['String']>;
  organizations_url?: Maybe<Scalars['String']>;
  public_gists?: Maybe<Scalars['Int']>;
  public_repos?: Maybe<Scalars['Int']>;
  received_events_url?: Maybe<Scalars['String']>;
  repos_url?: Maybe<Scalars['String']>;
  site_admin?: Maybe<Scalars['Boolean']>;
  starred_url?: Maybe<Scalars['String']>;
  subscriptions_url?: Maybe<Scalars['String']>;
  twitter_username?: Maybe<Scalars['Json']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale',
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

/** Locale system enumeration */
export enum Locale {
  De = 'de',
  /** System locale */
  En = 'en',
  Fr = 'fr',
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type ModelSeo = Node & {
  __typename?: 'ModelSeo';
  backupImage?: Maybe<Scalars['Json']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  detailedDescription?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ModelSeo>;
  /** List of ModelSeo versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  image?: Maybe<Asset>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<ModelSeo>;
  noindex?: Maybe<Scalars['Boolean']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

export type ModelSeoCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type ModelSeoCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ModelSeoDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

export type ModelSeoHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};

export type ModelSeoImageArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ModelSeoLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};

export type ModelSeoPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type ModelSeoPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ModelSeoScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type ModelSeoUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type ModelSeoUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ModelSeoConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ModelSeoWhereUniqueInput;
};

/** A connection to a list of items. */
export type ModelSeoConnection = {
  __typename?: 'ModelSeoConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ModelSeoEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ModelSeoCreateInput = {
  backupImage?: InputMaybe<Scalars['Json']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']>;
  /** detailedDescription input for default locale (en) */
  detailedDescription?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<AssetCreateOneInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<ModelSeoCreateLocalizationsInput>;
  noindex?: InputMaybe<Scalars['Boolean']>;
  /** title input for default locale (en) */
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ModelSeoCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  detailedDescription?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ModelSeoCreateLocalizationInput = {
  /** Localization input */
  data: ModelSeoCreateLocalizationDataInput;
  locale: Locale;
};

export type ModelSeoCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<ModelSeoCreateLocalizationInput>>;
};

export type ModelSeoCreateManyInlineInput = {
  /** Connect multiple existing ModelSeo documents */
  connect?: InputMaybe<Array<ModelSeoWhereUniqueInput>>;
  /** Create and connect multiple existing ModelSeo documents */
  create?: InputMaybe<Array<ModelSeoCreateInput>>;
};

export type ModelSeoCreateOneInlineInput = {
  /** Connect one existing ModelSeo document */
  connect?: InputMaybe<ModelSeoWhereUniqueInput>;
  /** Create and connect one ModelSeo document */
  create?: InputMaybe<ModelSeoCreateInput>;
};

/** An edge in a connection. */
export type ModelSeoEdge = {
  __typename?: 'ModelSeoEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ModelSeo;
};

/** Identifies documents */
export type ModelSeoManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ModelSeoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ModelSeoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ModelSeoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ModelSeoWhereStageInput>;
  documentInStages_none?: InputMaybe<ModelSeoWhereStageInput>;
  documentInStages_some?: InputMaybe<ModelSeoWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  noindex?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  noindex_not?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ModelSeoOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  DetailedDescriptionAsc = 'detailedDescription_ASC',
  DetailedDescriptionDesc = 'detailedDescription_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NoindexAsc = 'noindex_ASC',
  NoindexDesc = 'noindex_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ModelSeoUpdateInput = {
  backupImage?: InputMaybe<Scalars['Json']>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']>;
  /** detailedDescription input for default locale (en) */
  detailedDescription?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<ModelSeoUpdateLocalizationsInput>;
  noindex?: InputMaybe<Scalars['Boolean']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
};

export type ModelSeoUpdateLocalizationDataInput = {
  description?: InputMaybe<Scalars['String']>;
  detailedDescription?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ModelSeoUpdateLocalizationInput = {
  data: ModelSeoUpdateLocalizationDataInput;
  locale: Locale;
};

export type ModelSeoUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<ModelSeoCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<ModelSeoUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<ModelSeoUpsertLocalizationInput>>;
};

export type ModelSeoUpdateManyInlineInput = {
  /** Connect multiple existing ModelSeo documents */
  connect?: InputMaybe<Array<ModelSeoConnectInput>>;
  /** Create and connect multiple ModelSeo documents */
  create?: InputMaybe<Array<ModelSeoCreateInput>>;
  /** Delete multiple ModelSeo documents */
  delete?: InputMaybe<Array<ModelSeoWhereUniqueInput>>;
  /** Disconnect multiple ModelSeo documents */
  disconnect?: InputMaybe<Array<ModelSeoWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ModelSeo documents */
  set?: InputMaybe<Array<ModelSeoWhereUniqueInput>>;
  /** Update multiple ModelSeo documents */
  update?: InputMaybe<Array<ModelSeoUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ModelSeo documents */
  upsert?: InputMaybe<Array<ModelSeoUpsertWithNestedWhereUniqueInput>>;
};

export type ModelSeoUpdateManyInput = {
  backupImage?: InputMaybe<Scalars['Json']>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']>;
  /** detailedDescription input for default locale (en) */
  detailedDescription?: InputMaybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<ModelSeoUpdateManyLocalizationsInput>;
  noindex?: InputMaybe<Scalars['Boolean']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
};

export type ModelSeoUpdateManyLocalizationDataInput = {
  description?: InputMaybe<Scalars['String']>;
  detailedDescription?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ModelSeoUpdateManyLocalizationInput = {
  data: ModelSeoUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type ModelSeoUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<ModelSeoUpdateManyLocalizationInput>>;
};

export type ModelSeoUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ModelSeoUpdateManyInput;
  /** Document search */
  where: ModelSeoWhereInput;
};

export type ModelSeoUpdateOneInlineInput = {
  /** Connect existing ModelSeo document */
  connect?: InputMaybe<ModelSeoWhereUniqueInput>;
  /** Create and connect one ModelSeo document */
  create?: InputMaybe<ModelSeoCreateInput>;
  /** Delete currently connected ModelSeo document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ModelSeo document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ModelSeo document */
  update?: InputMaybe<ModelSeoUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ModelSeo document */
  upsert?: InputMaybe<ModelSeoUpsertWithNestedWhereUniqueInput>;
};

export type ModelSeoUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ModelSeoUpdateInput;
  /** Unique document search */
  where: ModelSeoWhereUniqueInput;
};

export type ModelSeoUpsertInput = {
  /** Create document if it didn't exist */
  create: ModelSeoCreateInput;
  /** Update document if it exists */
  update: ModelSeoUpdateInput;
};

export type ModelSeoUpsertLocalizationInput = {
  create: ModelSeoCreateLocalizationDataInput;
  locale: Locale;
  update: ModelSeoUpdateLocalizationDataInput;
};

export type ModelSeoUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ModelSeoUpsertInput;
  /** Unique document search */
  where: ModelSeoWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ModelSeoWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ModelSeoWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ModelSeoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ModelSeoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ModelSeoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  detailedDescription?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  detailedDescription_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  detailedDescription_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  detailedDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  detailedDescription_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  detailedDescription_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  detailedDescription_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  detailedDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  detailedDescription_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  detailedDescription_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<ModelSeoWhereStageInput>;
  documentInStages_none?: InputMaybe<ModelSeoWhereStageInput>;
  documentInStages_some?: InputMaybe<ModelSeoWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  noindex?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  noindex_not?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ModelSeoWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ModelSeoWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ModelSeoWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ModelSeoWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ModelSeoWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References ModelSeo record uniquely */
export type ModelSeoWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one author */
  createAuthor?: Maybe<Author>;
  /** Create one chapter */
  createChapter?: Maybe<Chapter>;
  /** Create one dictionary */
  createDictionary?: Maybe<Dictionary>;
  /** Create one drug */
  createDrug?: Maybe<Drug>;
  /** Create one externalLink */
  createExternalLink?: Maybe<ExternalLink>;
  /** Create one modelSeo */
  createModelSeo?: Maybe<ModelSeo>;
  /** Create one navigation */
  createNavigation?: Maybe<Navigation>;
  /** Create one page */
  createPage?: Maybe<Page>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Create one tag */
  createTag?: Maybe<Tag>;
  /** Create one widget */
  createWidget?: Maybe<Widget>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one author from _all_ existing stages. Returns deleted document. */
  deleteAuthor?: Maybe<Author>;
  /** Delete one chapter from _all_ existing stages. Returns deleted document. */
  deleteChapter?: Maybe<Chapter>;
  /** Delete one dictionary from _all_ existing stages. Returns deleted document. */
  deleteDictionary?: Maybe<Dictionary>;
  /** Delete one drug from _all_ existing stages. Returns deleted document. */
  deleteDrug?: Maybe<Drug>;
  /** Delete one externalLink from _all_ existing stages. Returns deleted document. */
  deleteExternalLink?: Maybe<ExternalLink>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Author documents
   * @deprecated Please use the new paginated many mutation (deleteManyAuthorsConnection)
   */
  deleteManyAuthors: BatchPayload;
  /** Delete many Author documents, return deleted documents */
  deleteManyAuthorsConnection: AuthorConnection;
  /**
   * Delete many Chapter documents
   * @deprecated Please use the new paginated many mutation (deleteManyChaptersConnection)
   */
  deleteManyChapters: BatchPayload;
  /** Delete many Chapter documents, return deleted documents */
  deleteManyChaptersConnection: ChapterConnection;
  /**
   * Delete many Dictionary documents
   * @deprecated Please use the new paginated many mutation (deleteManyDictionariesConnection)
   */
  deleteManyDictionaries: BatchPayload;
  /** Delete many Dictionary documents, return deleted documents */
  deleteManyDictionariesConnection: DictionaryConnection;
  /**
   * Delete many Drug documents
   * @deprecated Please use the new paginated many mutation (deleteManyDrugsConnection)
   */
  deleteManyDrugs: BatchPayload;
  /** Delete many Drug documents, return deleted documents */
  deleteManyDrugsConnection: DrugConnection;
  /**
   * Delete many ExternalLink documents
   * @deprecated Please use the new paginated many mutation (deleteManyExternalLinksConnection)
   */
  deleteManyExternalLinks: BatchPayload;
  /** Delete many ExternalLink documents, return deleted documents */
  deleteManyExternalLinksConnection: ExternalLinkConnection;
  /**
   * Delete many ModelSeo documents
   * @deprecated Please use the new paginated many mutation (deleteManyModelSeosConnection)
   */
  deleteManyModelSeos: BatchPayload;
  /** Delete many ModelSeo documents, return deleted documents */
  deleteManyModelSeosConnection: ModelSeoConnection;
  /**
   * Delete many Navigation documents
   * @deprecated Please use the new paginated many mutation (deleteManyNavigationsConnection)
   */
  deleteManyNavigations: BatchPayload;
  /** Delete many Navigation documents, return deleted documents */
  deleteManyNavigationsConnection: NavigationConnection;
  /**
   * Delete many Page documents
   * @deprecated Please use the new paginated many mutation (deleteManyPagesConnection)
   */
  deleteManyPages: BatchPayload;
  /** Delete many Page documents, return deleted documents */
  deleteManyPagesConnection: PageConnection;
  /**
   * Delete many Tag documents
   * @deprecated Please use the new paginated many mutation (deleteManyTagsConnection)
   */
  deleteManyTags: BatchPayload;
  /** Delete many Tag documents, return deleted documents */
  deleteManyTagsConnection: TagConnection;
  /**
   * Delete many Widget documents
   * @deprecated Please use the new paginated many mutation (deleteManyWidgetsConnection)
   */
  deleteManyWidgets: BatchPayload;
  /** Delete many Widget documents, return deleted documents */
  deleteManyWidgetsConnection: WidgetConnection;
  /** Delete one modelSeo from _all_ existing stages. Returns deleted document. */
  deleteModelSeo?: Maybe<ModelSeo>;
  /** Delete one navigation from _all_ existing stages. Returns deleted document. */
  deleteNavigation?: Maybe<Navigation>;
  /** Delete one page from _all_ existing stages. Returns deleted document. */
  deletePage?: Maybe<Page>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one tag from _all_ existing stages. Returns deleted document. */
  deleteTag?: Maybe<Tag>;
  /** Delete one widget from _all_ existing stages. Returns deleted document. */
  deleteWidget?: Maybe<Widget>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one author */
  publishAuthor?: Maybe<Author>;
  /** Publish one chapter */
  publishChapter?: Maybe<Chapter>;
  /** Publish one dictionary */
  publishDictionary?: Maybe<Dictionary>;
  /** Publish one drug */
  publishDrug?: Maybe<Drug>;
  /** Publish one externalLink */
  publishExternalLink?: Maybe<ExternalLink>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Author documents
   * @deprecated Please use the new paginated many mutation (publishManyAuthorsConnection)
   */
  publishManyAuthors: BatchPayload;
  /** Publish many Author documents */
  publishManyAuthorsConnection: AuthorConnection;
  /**
   * Publish many Chapter documents
   * @deprecated Please use the new paginated many mutation (publishManyChaptersConnection)
   */
  publishManyChapters: BatchPayload;
  /** Publish many Chapter documents */
  publishManyChaptersConnection: ChapterConnection;
  /**
   * Publish many Dictionary documents
   * @deprecated Please use the new paginated many mutation (publishManyDictionariesConnection)
   */
  publishManyDictionaries: BatchPayload;
  /** Publish many Dictionary documents */
  publishManyDictionariesConnection: DictionaryConnection;
  /**
   * Publish many Drug documents
   * @deprecated Please use the new paginated many mutation (publishManyDrugsConnection)
   */
  publishManyDrugs: BatchPayload;
  /** Publish many Drug documents */
  publishManyDrugsConnection: DrugConnection;
  /**
   * Publish many ExternalLink documents
   * @deprecated Please use the new paginated many mutation (publishManyExternalLinksConnection)
   */
  publishManyExternalLinks: BatchPayload;
  /** Publish many ExternalLink documents */
  publishManyExternalLinksConnection: ExternalLinkConnection;
  /**
   * Publish many ModelSeo documents
   * @deprecated Please use the new paginated many mutation (publishManyModelSeosConnection)
   */
  publishManyModelSeos: BatchPayload;
  /** Publish many ModelSeo documents */
  publishManyModelSeosConnection: ModelSeoConnection;
  /**
   * Publish many Navigation documents
   * @deprecated Please use the new paginated many mutation (publishManyNavigationsConnection)
   */
  publishManyNavigations: BatchPayload;
  /** Publish many Navigation documents */
  publishManyNavigationsConnection: NavigationConnection;
  /**
   * Publish many Page documents
   * @deprecated Please use the new paginated many mutation (publishManyPagesConnection)
   */
  publishManyPages: BatchPayload;
  /** Publish many Page documents */
  publishManyPagesConnection: PageConnection;
  /**
   * Publish many Tag documents
   * @deprecated Please use the new paginated many mutation (publishManyTagsConnection)
   */
  publishManyTags: BatchPayload;
  /** Publish many Tag documents */
  publishManyTagsConnection: TagConnection;
  /**
   * Publish many Widget documents
   * @deprecated Please use the new paginated many mutation (publishManyWidgetsConnection)
   */
  publishManyWidgets: BatchPayload;
  /** Publish many Widget documents */
  publishManyWidgetsConnection: WidgetConnection;
  /** Publish one modelSeo */
  publishModelSeo?: Maybe<ModelSeo>;
  /** Publish one navigation */
  publishNavigation?: Maybe<Navigation>;
  /** Publish one page */
  publishPage?: Maybe<Page>;
  /** Publish one tag */
  publishTag?: Maybe<Tag>;
  /** Publish one widget */
  publishWidget?: Maybe<Widget>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one author */
  schedulePublishAuthor?: Maybe<Author>;
  /** Schedule to publish one chapter */
  schedulePublishChapter?: Maybe<Chapter>;
  /** Schedule to publish one dictionary */
  schedulePublishDictionary?: Maybe<Dictionary>;
  /** Schedule to publish one drug */
  schedulePublishDrug?: Maybe<Drug>;
  /** Schedule to publish one externalLink */
  schedulePublishExternalLink?: Maybe<ExternalLink>;
  /** Schedule to publish one modelSeo */
  schedulePublishModelSeo?: Maybe<ModelSeo>;
  /** Schedule to publish one navigation */
  schedulePublishNavigation?: Maybe<Navigation>;
  /** Schedule to publish one page */
  schedulePublishPage?: Maybe<Page>;
  /** Schedule to publish one tag */
  schedulePublishTag?: Maybe<Tag>;
  /** Schedule to publish one widget */
  schedulePublishWidget?: Maybe<Widget>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one author from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAuthor?: Maybe<Author>;
  /** Unpublish one chapter from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishChapter?: Maybe<Chapter>;
  /** Unpublish one dictionary from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishDictionary?: Maybe<Dictionary>;
  /** Unpublish one drug from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishDrug?: Maybe<Drug>;
  /** Unpublish one externalLink from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishExternalLink?: Maybe<ExternalLink>;
  /** Unpublish one modelSeo from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishModelSeo?: Maybe<ModelSeo>;
  /** Unpublish one navigation from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishNavigation?: Maybe<Navigation>;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPage?: Maybe<Page>;
  /** Unpublish one tag from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishTag?: Maybe<Tag>;
  /** Unpublish one widget from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishWidget?: Maybe<Widget>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one author from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAuthor?: Maybe<Author>;
  /** Unpublish one chapter from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishChapter?: Maybe<Chapter>;
  /** Unpublish one dictionary from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishDictionary?: Maybe<Dictionary>;
  /** Unpublish one drug from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishDrug?: Maybe<Drug>;
  /** Unpublish one externalLink from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishExternalLink?: Maybe<ExternalLink>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Author documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAuthorsConnection)
   */
  unpublishManyAuthors: BatchPayload;
  /** Find many Author documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAuthorsConnection: AuthorConnection;
  /**
   * Unpublish many Chapter documents
   * @deprecated Please use the new paginated many mutation (unpublishManyChaptersConnection)
   */
  unpublishManyChapters: BatchPayload;
  /** Find many Chapter documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyChaptersConnection: ChapterConnection;
  /**
   * Unpublish many Dictionary documents
   * @deprecated Please use the new paginated many mutation (unpublishManyDictionariesConnection)
   */
  unpublishManyDictionaries: BatchPayload;
  /** Find many Dictionary documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyDictionariesConnection: DictionaryConnection;
  /**
   * Unpublish many Drug documents
   * @deprecated Please use the new paginated many mutation (unpublishManyDrugsConnection)
   */
  unpublishManyDrugs: BatchPayload;
  /** Find many Drug documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyDrugsConnection: DrugConnection;
  /**
   * Unpublish many ExternalLink documents
   * @deprecated Please use the new paginated many mutation (unpublishManyExternalLinksConnection)
   */
  unpublishManyExternalLinks: BatchPayload;
  /** Find many ExternalLink documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyExternalLinksConnection: ExternalLinkConnection;
  /**
   * Unpublish many ModelSeo documents
   * @deprecated Please use the new paginated many mutation (unpublishManyModelSeosConnection)
   */
  unpublishManyModelSeos: BatchPayload;
  /** Find many ModelSeo documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyModelSeosConnection: ModelSeoConnection;
  /**
   * Unpublish many Navigation documents
   * @deprecated Please use the new paginated many mutation (unpublishManyNavigationsConnection)
   */
  unpublishManyNavigations: BatchPayload;
  /** Find many Navigation documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyNavigationsConnection: NavigationConnection;
  /**
   * Unpublish many Page documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPagesConnection)
   */
  unpublishManyPages: BatchPayload;
  /** Find many Page documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPagesConnection: PageConnection;
  /**
   * Unpublish many Tag documents
   * @deprecated Please use the new paginated many mutation (unpublishManyTagsConnection)
   */
  unpublishManyTags: BatchPayload;
  /** Find many Tag documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyTagsConnection: TagConnection;
  /**
   * Unpublish many Widget documents
   * @deprecated Please use the new paginated many mutation (unpublishManyWidgetsConnection)
   */
  unpublishManyWidgets: BatchPayload;
  /** Find many Widget documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyWidgetsConnection: WidgetConnection;
  /** Unpublish one modelSeo from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishModelSeo?: Maybe<ModelSeo>;
  /** Unpublish one navigation from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishNavigation?: Maybe<Navigation>;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPage?: Maybe<Page>;
  /** Unpublish one tag from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishTag?: Maybe<Tag>;
  /** Unpublish one widget from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishWidget?: Maybe<Widget>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one author */
  updateAuthor?: Maybe<Author>;
  /** Update one chapter */
  updateChapter?: Maybe<Chapter>;
  /** Update one dictionary */
  updateDictionary?: Maybe<Dictionary>;
  /** Update one drug */
  updateDrug?: Maybe<Drug>;
  /** Update one externalLink */
  updateExternalLink?: Maybe<ExternalLink>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many authors
   * @deprecated Please use the new paginated many mutation (updateManyAuthorsConnection)
   */
  updateManyAuthors: BatchPayload;
  /** Update many Author documents */
  updateManyAuthorsConnection: AuthorConnection;
  /**
   * Update many chapters
   * @deprecated Please use the new paginated many mutation (updateManyChaptersConnection)
   */
  updateManyChapters: BatchPayload;
  /** Update many Chapter documents */
  updateManyChaptersConnection: ChapterConnection;
  /**
   * Update many dictionaries
   * @deprecated Please use the new paginated many mutation (updateManyDictionariesConnection)
   */
  updateManyDictionaries: BatchPayload;
  /** Update many Dictionary documents */
  updateManyDictionariesConnection: DictionaryConnection;
  /**
   * Update many drugs
   * @deprecated Please use the new paginated many mutation (updateManyDrugsConnection)
   */
  updateManyDrugs: BatchPayload;
  /** Update many Drug documents */
  updateManyDrugsConnection: DrugConnection;
  /**
   * Update many externalLinks
   * @deprecated Please use the new paginated many mutation (updateManyExternalLinksConnection)
   */
  updateManyExternalLinks: BatchPayload;
  /** Update many ExternalLink documents */
  updateManyExternalLinksConnection: ExternalLinkConnection;
  /**
   * Update many modelSeos
   * @deprecated Please use the new paginated many mutation (updateManyModelSeosConnection)
   */
  updateManyModelSeos: BatchPayload;
  /** Update many ModelSeo documents */
  updateManyModelSeosConnection: ModelSeoConnection;
  /**
   * Update many navigations
   * @deprecated Please use the new paginated many mutation (updateManyNavigationsConnection)
   */
  updateManyNavigations: BatchPayload;
  /** Update many Navigation documents */
  updateManyNavigationsConnection: NavigationConnection;
  /**
   * Update many pages
   * @deprecated Please use the new paginated many mutation (updateManyPagesConnection)
   */
  updateManyPages: BatchPayload;
  /** Update many Page documents */
  updateManyPagesConnection: PageConnection;
  /**
   * Update many tags
   * @deprecated Please use the new paginated many mutation (updateManyTagsConnection)
   */
  updateManyTags: BatchPayload;
  /** Update many Tag documents */
  updateManyTagsConnection: TagConnection;
  /**
   * Update many widgets
   * @deprecated Please use the new paginated many mutation (updateManyWidgetsConnection)
   */
  updateManyWidgets: BatchPayload;
  /** Update many Widget documents */
  updateManyWidgetsConnection: WidgetConnection;
  /** Update one modelSeo */
  updateModelSeo?: Maybe<ModelSeo>;
  /** Update one navigation */
  updateNavigation?: Maybe<Navigation>;
  /** Update one page */
  updatePage?: Maybe<Page>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Update one tag */
  updateTag?: Maybe<Tag>;
  /** Update one widget */
  updateWidget?: Maybe<Widget>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one author */
  upsertAuthor?: Maybe<Author>;
  /** Upsert one chapter */
  upsertChapter?: Maybe<Chapter>;
  /** Upsert one dictionary */
  upsertDictionary?: Maybe<Dictionary>;
  /** Upsert one drug */
  upsertDrug?: Maybe<Drug>;
  /** Upsert one externalLink */
  upsertExternalLink?: Maybe<ExternalLink>;
  /** Upsert one modelSeo */
  upsertModelSeo?: Maybe<ModelSeo>;
  /** Upsert one navigation */
  upsertNavigation?: Maybe<Navigation>;
  /** Upsert one page */
  upsertPage?: Maybe<Page>;
  /** Upsert one tag */
  upsertTag?: Maybe<Tag>;
  /** Upsert one widget */
  upsertWidget?: Maybe<Widget>;
};

export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};

export type MutationCreateAuthorArgs = {
  data: AuthorCreateInput;
};

export type MutationCreateChapterArgs = {
  data: ChapterCreateInput;
};

export type MutationCreateDictionaryArgs = {
  data: DictionaryCreateInput;
};

export type MutationCreateDrugArgs = {
  data: DrugCreateInput;
};

export type MutationCreateExternalLinkArgs = {
  data: ExternalLinkCreateInput;
};

export type MutationCreateModelSeoArgs = {
  data: ModelSeoCreateInput;
};

export type MutationCreateNavigationArgs = {
  data: NavigationCreateInput;
};

export type MutationCreatePageArgs = {
  data: PageCreateInput;
};

export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};

export type MutationCreateTagArgs = {
  data: TagCreateInput;
};

export type MutationCreateWidgetArgs = {
  data: WidgetCreateInput;
};

export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};

export type MutationDeleteAuthorArgs = {
  where: AuthorWhereUniqueInput;
};

export type MutationDeleteChapterArgs = {
  where: ChapterWhereUniqueInput;
};

export type MutationDeleteDictionaryArgs = {
  where: DictionaryWhereUniqueInput;
};

export type MutationDeleteDrugArgs = {
  where: DrugWhereUniqueInput;
};

export type MutationDeleteExternalLinkArgs = {
  where: ExternalLinkWhereUniqueInput;
};

export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationDeleteManyAuthorsArgs = {
  where?: InputMaybe<AuthorManyWhereInput>;
};

export type MutationDeleteManyAuthorsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AuthorManyWhereInput>;
};

export type MutationDeleteManyChaptersArgs = {
  where?: InputMaybe<ChapterManyWhereInput>;
};

export type MutationDeleteManyChaptersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChapterManyWhereInput>;
};

export type MutationDeleteManyDictionariesArgs = {
  where?: InputMaybe<DictionaryManyWhereInput>;
};

export type MutationDeleteManyDictionariesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DictionaryManyWhereInput>;
};

export type MutationDeleteManyDrugsArgs = {
  where?: InputMaybe<DrugManyWhereInput>;
};

export type MutationDeleteManyDrugsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DrugManyWhereInput>;
};

export type MutationDeleteManyExternalLinksArgs = {
  where?: InputMaybe<ExternalLinkManyWhereInput>;
};

export type MutationDeleteManyExternalLinksConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ExternalLinkManyWhereInput>;
};

export type MutationDeleteManyModelSeosArgs = {
  where?: InputMaybe<ModelSeoManyWhereInput>;
};

export type MutationDeleteManyModelSeosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ModelSeoManyWhereInput>;
};

export type MutationDeleteManyNavigationsArgs = {
  where?: InputMaybe<NavigationManyWhereInput>;
};

export type MutationDeleteManyNavigationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavigationManyWhereInput>;
};

export type MutationDeleteManyPagesArgs = {
  where?: InputMaybe<PageManyWhereInput>;
};

export type MutationDeleteManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageManyWhereInput>;
};

export type MutationDeleteManyTagsArgs = {
  where?: InputMaybe<TagManyWhereInput>;
};

export type MutationDeleteManyTagsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagManyWhereInput>;
};

export type MutationDeleteManyWidgetsArgs = {
  where?: InputMaybe<WidgetManyWhereInput>;
};

export type MutationDeleteManyWidgetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WidgetManyWhereInput>;
};

export type MutationDeleteModelSeoArgs = {
  where: ModelSeoWhereUniqueInput;
};

export type MutationDeleteNavigationArgs = {
  where: NavigationWhereUniqueInput;
};

export type MutationDeletePageArgs = {
  where: PageWhereUniqueInput;
};

export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};

export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};

export type MutationDeleteTagArgs = {
  where: TagWhereUniqueInput;
};

export type MutationDeleteWidgetArgs = {
  where: WidgetWhereUniqueInput;
};

export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};

export type MutationPublishAuthorArgs = {
  to?: Array<Stage>;
  where: AuthorWhereUniqueInput;
};

export type MutationPublishChapterArgs = {
  to?: Array<Stage>;
  where: ChapterWhereUniqueInput;
};

export type MutationPublishDictionaryArgs = {
  to?: Array<Stage>;
  where: DictionaryWhereUniqueInput;
};

export type MutationPublishDrugArgs = {
  to?: Array<Stage>;
  where: DrugWhereUniqueInput;
};

export type MutationPublishExternalLinkArgs = {
  to?: Array<Stage>;
  where: ExternalLinkWhereUniqueInput;
};

export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};

export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};

export type MutationPublishManyAuthorsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<AuthorManyWhereInput>;
};

export type MutationPublishManyAuthorsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<AuthorManyWhereInput>;
};

export type MutationPublishManyChaptersArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ChapterManyWhereInput>;
};

export type MutationPublishManyChaptersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<ChapterManyWhereInput>;
};

export type MutationPublishManyDictionariesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<DictionaryManyWhereInput>;
};

export type MutationPublishManyDictionariesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<DictionaryManyWhereInput>;
};

export type MutationPublishManyDrugsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<DrugManyWhereInput>;
};

export type MutationPublishManyDrugsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<DrugManyWhereInput>;
};

export type MutationPublishManyExternalLinksArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ExternalLinkManyWhereInput>;
};

export type MutationPublishManyExternalLinksConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<ExternalLinkManyWhereInput>;
};

export type MutationPublishManyModelSeosArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<ModelSeoManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};

export type MutationPublishManyModelSeosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<ModelSeoManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};

export type MutationPublishManyNavigationsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<NavigationManyWhereInput>;
};

export type MutationPublishManyNavigationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<NavigationManyWhereInput>;
};

export type MutationPublishManyPagesArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};

export type MutationPublishManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};

export type MutationPublishManyTagsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<TagManyWhereInput>;
};

export type MutationPublishManyTagsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<TagManyWhereInput>;
};

export type MutationPublishManyWidgetsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<WidgetManyWhereInput>;
};

export type MutationPublishManyWidgetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<WidgetManyWhereInput>;
};

export type MutationPublishModelSeoArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: ModelSeoWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};

export type MutationPublishNavigationArgs = {
  to?: Array<Stage>;
  where: NavigationWhereUniqueInput;
};

export type MutationPublishPageArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: PageWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};

export type MutationPublishTagArgs = {
  to?: Array<Stage>;
  where: TagWhereUniqueInput;
};

export type MutationPublishWidgetArgs = {
  to?: Array<Stage>;
  where: WidgetWhereUniqueInput;
};

export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};

export type MutationSchedulePublishAuthorArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: AuthorWhereUniqueInput;
};

export type MutationSchedulePublishChapterArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ChapterWhereUniqueInput;
};

export type MutationSchedulePublishDictionaryArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: DictionaryWhereUniqueInput;
};

export type MutationSchedulePublishDrugArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: DrugWhereUniqueInput;
};

export type MutationSchedulePublishExternalLinkArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ExternalLinkWhereUniqueInput;
};

export type MutationSchedulePublishModelSeoArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ModelSeoWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};

export type MutationSchedulePublishNavigationArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: NavigationWhereUniqueInput;
};

export type MutationSchedulePublishPageArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: PageWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};

export type MutationSchedulePublishTagArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: TagWhereUniqueInput;
};

export type MutationSchedulePublishWidgetArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: WidgetWhereUniqueInput;
};

export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};

export type MutationScheduleUnpublishAuthorArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: AuthorWhereUniqueInput;
};

export type MutationScheduleUnpublishChapterArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: ChapterWhereUniqueInput;
};

export type MutationScheduleUnpublishDictionaryArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: DictionaryWhereUniqueInput;
};

export type MutationScheduleUnpublishDrugArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: DrugWhereUniqueInput;
};

export type MutationScheduleUnpublishExternalLinkArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: ExternalLinkWhereUniqueInput;
};

export type MutationScheduleUnpublishModelSeoArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: ModelSeoWhereUniqueInput;
};

export type MutationScheduleUnpublishNavigationArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: NavigationWhereUniqueInput;
};

export type MutationScheduleUnpublishPageArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: PageWhereUniqueInput;
};

export type MutationScheduleUnpublishTagArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: TagWhereUniqueInput;
};

export type MutationScheduleUnpublishWidgetArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: WidgetWhereUniqueInput;
};

export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};

export type MutationUnpublishAuthorArgs = {
  from?: Array<Stage>;
  where: AuthorWhereUniqueInput;
};

export type MutationUnpublishChapterArgs = {
  from?: Array<Stage>;
  where: ChapterWhereUniqueInput;
};

export type MutationUnpublishDictionaryArgs = {
  from?: Array<Stage>;
  where: DictionaryWhereUniqueInput;
};

export type MutationUnpublishDrugArgs = {
  from?: Array<Stage>;
  where: DrugWhereUniqueInput;
};

export type MutationUnpublishExternalLinkArgs = {
  from?: Array<Stage>;
  where: ExternalLinkWhereUniqueInput;
};

export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUnpublishManyAuthorsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<AuthorManyWhereInput>;
};

export type MutationUnpublishManyAuthorsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<AuthorManyWhereInput>;
};

export type MutationUnpublishManyChaptersArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ChapterManyWhereInput>;
};

export type MutationUnpublishManyChaptersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ChapterManyWhereInput>;
};

export type MutationUnpublishManyDictionariesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<DictionaryManyWhereInput>;
};

export type MutationUnpublishManyDictionariesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<DictionaryManyWhereInput>;
};

export type MutationUnpublishManyDrugsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<DrugManyWhereInput>;
};

export type MutationUnpublishManyDrugsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<DrugManyWhereInput>;
};

export type MutationUnpublishManyExternalLinksArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ExternalLinkManyWhereInput>;
};

export type MutationUnpublishManyExternalLinksConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ExternalLinkManyWhereInput>;
};

export type MutationUnpublishManyModelSeosArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ModelSeoManyWhereInput>;
};

export type MutationUnpublishManyModelSeosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ModelSeoManyWhereInput>;
};

export type MutationUnpublishManyNavigationsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<NavigationManyWhereInput>;
};

export type MutationUnpublishManyNavigationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<NavigationManyWhereInput>;
};

export type MutationUnpublishManyPagesArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PageManyWhereInput>;
};

export type MutationUnpublishManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PageManyWhereInput>;
};

export type MutationUnpublishManyTagsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<TagManyWhereInput>;
};

export type MutationUnpublishManyTagsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<TagManyWhereInput>;
};

export type MutationUnpublishManyWidgetsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<WidgetManyWhereInput>;
};

export type MutationUnpublishManyWidgetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<WidgetManyWhereInput>;
};

export type MutationUnpublishModelSeoArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: ModelSeoWhereUniqueInput;
};

export type MutationUnpublishNavigationArgs = {
  from?: Array<Stage>;
  where: NavigationWhereUniqueInput;
};

export type MutationUnpublishPageArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: PageWhereUniqueInput;
};

export type MutationUnpublishTagArgs = {
  from?: Array<Stage>;
  where: TagWhereUniqueInput;
};

export type MutationUnpublishWidgetArgs = {
  from?: Array<Stage>;
  where: WidgetWhereUniqueInput;
};

export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};

export type MutationUpdateAuthorArgs = {
  data: AuthorUpdateInput;
  where: AuthorWhereUniqueInput;
};

export type MutationUpdateChapterArgs = {
  data: ChapterUpdateInput;
  where: ChapterWhereUniqueInput;
};

export type MutationUpdateDictionaryArgs = {
  data: DictionaryUpdateInput;
  where: DictionaryWhereUniqueInput;
};

export type MutationUpdateDrugArgs = {
  data: DrugUpdateInput;
  where: DrugWhereUniqueInput;
};

export type MutationUpdateExternalLinkArgs = {
  data: ExternalLinkUpdateInput;
  where: ExternalLinkWhereUniqueInput;
};

export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUpdateManyAuthorsArgs = {
  data: AuthorUpdateManyInput;
  where?: InputMaybe<AuthorManyWhereInput>;
};

export type MutationUpdateManyAuthorsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: AuthorUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AuthorManyWhereInput>;
};

export type MutationUpdateManyChaptersArgs = {
  data: ChapterUpdateManyInput;
  where?: InputMaybe<ChapterManyWhereInput>;
};

export type MutationUpdateManyChaptersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ChapterUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChapterManyWhereInput>;
};

export type MutationUpdateManyDictionariesArgs = {
  data: DictionaryUpdateManyInput;
  where?: InputMaybe<DictionaryManyWhereInput>;
};

export type MutationUpdateManyDictionariesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: DictionaryUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DictionaryManyWhereInput>;
};

export type MutationUpdateManyDrugsArgs = {
  data: DrugUpdateManyInput;
  where?: InputMaybe<DrugManyWhereInput>;
};

export type MutationUpdateManyDrugsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: DrugUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DrugManyWhereInput>;
};

export type MutationUpdateManyExternalLinksArgs = {
  data: ExternalLinkUpdateManyInput;
  where?: InputMaybe<ExternalLinkManyWhereInput>;
};

export type MutationUpdateManyExternalLinksConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ExternalLinkUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ExternalLinkManyWhereInput>;
};

export type MutationUpdateManyModelSeosArgs = {
  data: ModelSeoUpdateManyInput;
  where?: InputMaybe<ModelSeoManyWhereInput>;
};

export type MutationUpdateManyModelSeosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ModelSeoUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ModelSeoManyWhereInput>;
};

export type MutationUpdateManyNavigationsArgs = {
  data: NavigationUpdateManyInput;
  where?: InputMaybe<NavigationManyWhereInput>;
};

export type MutationUpdateManyNavigationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: NavigationUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavigationManyWhereInput>;
};

export type MutationUpdateManyPagesArgs = {
  data: PageUpdateManyInput;
  where?: InputMaybe<PageManyWhereInput>;
};

export type MutationUpdateManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: PageUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageManyWhereInput>;
};

export type MutationUpdateManyTagsArgs = {
  data: TagUpdateManyInput;
  where?: InputMaybe<TagManyWhereInput>;
};

export type MutationUpdateManyTagsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: TagUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagManyWhereInput>;
};

export type MutationUpdateManyWidgetsArgs = {
  data: WidgetUpdateManyInput;
  where?: InputMaybe<WidgetManyWhereInput>;
};

export type MutationUpdateManyWidgetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: WidgetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WidgetManyWhereInput>;
};

export type MutationUpdateModelSeoArgs = {
  data: ModelSeoUpdateInput;
  where: ModelSeoWhereUniqueInput;
};

export type MutationUpdateNavigationArgs = {
  data: NavigationUpdateInput;
  where: NavigationWhereUniqueInput;
};

export type MutationUpdatePageArgs = {
  data: PageUpdateInput;
  where: PageWhereUniqueInput;
};

export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};

export type MutationUpdateTagArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};

export type MutationUpdateWidgetArgs = {
  data: WidgetUpdateInput;
  where: WidgetWhereUniqueInput;
};

export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};

export type MutationUpsertAuthorArgs = {
  upsert: AuthorUpsertInput;
  where: AuthorWhereUniqueInput;
};

export type MutationUpsertChapterArgs = {
  upsert: ChapterUpsertInput;
  where: ChapterWhereUniqueInput;
};

export type MutationUpsertDictionaryArgs = {
  upsert: DictionaryUpsertInput;
  where: DictionaryWhereUniqueInput;
};

export type MutationUpsertDrugArgs = {
  upsert: DrugUpsertInput;
  where: DrugWhereUniqueInput;
};

export type MutationUpsertExternalLinkArgs = {
  upsert: ExternalLinkUpsertInput;
  where: ExternalLinkWhereUniqueInput;
};

export type MutationUpsertModelSeoArgs = {
  upsert: ModelSeoUpsertInput;
  where: ModelSeoWhereUniqueInput;
};

export type MutationUpsertNavigationArgs = {
  upsert: NavigationUpsertInput;
  where: NavigationWhereUniqueInput;
};

export type MutationUpsertPageArgs = {
  upsert: PageUpsertInput;
  where: PageWhereUniqueInput;
};

export type MutationUpsertTagArgs = {
  upsert: TagUpsertInput;
  where: TagWhereUniqueInput;
};

export type MutationUpsertWidgetArgs = {
  upsert: WidgetUpsertInput;
  where: WidgetWhereUniqueInput;
};

export type NavItemItem = Chapter | ExternalLink | Page;

export type NavItemItemConnectInput = {
  Chapter?: InputMaybe<ChapterConnectInput>;
  ExternalLink?: InputMaybe<ExternalLinkConnectInput>;
  Page?: InputMaybe<PageConnectInput>;
};

export type NavItemItemCreateInput = {
  Chapter?: InputMaybe<ChapterCreateInput>;
  ExternalLink?: InputMaybe<ExternalLinkCreateInput>;
  Page?: InputMaybe<PageCreateInput>;
};

export type NavItemItemCreateManyInlineInput = {
  /** Connect multiple existing NavItemItem documents */
  connect?: InputMaybe<Array<NavItemItemWhereUniqueInput>>;
  /** Create and connect multiple existing NavItemItem documents */
  create?: InputMaybe<Array<NavItemItemCreateInput>>;
};

export type NavItemItemCreateOneInlineInput = {
  /** Connect one existing NavItemItem document */
  connect?: InputMaybe<NavItemItemWhereUniqueInput>;
  /** Create and connect one NavItemItem document */
  create?: InputMaybe<NavItemItemCreateInput>;
};

export type NavItemItemUpdateInput = {
  Chapter?: InputMaybe<ChapterUpdateInput>;
  ExternalLink?: InputMaybe<ExternalLinkUpdateInput>;
  Page?: InputMaybe<PageUpdateInput>;
};

export type NavItemItemUpdateManyInlineInput = {
  /** Connect multiple existing NavItemItem documents */
  connect?: InputMaybe<Array<NavItemItemConnectInput>>;
  /** Create and connect multiple NavItemItem documents */
  create?: InputMaybe<Array<NavItemItemCreateInput>>;
  /** Delete multiple NavItemItem documents */
  delete?: InputMaybe<Array<NavItemItemWhereUniqueInput>>;
  /** Disconnect multiple NavItemItem documents */
  disconnect?: InputMaybe<Array<NavItemItemWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing NavItemItem documents */
  set?: InputMaybe<Array<NavItemItemWhereUniqueInput>>;
  /** Update multiple NavItemItem documents */
  update?: InputMaybe<Array<NavItemItemUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple NavItemItem documents */
  upsert?: InputMaybe<Array<NavItemItemUpsertWithNestedWhereUniqueInput>>;
};

export type NavItemItemUpdateManyWithNestedWhereInput = {
  Chapter?: InputMaybe<ChapterUpdateManyWithNestedWhereInput>;
  ExternalLink?: InputMaybe<ExternalLinkUpdateManyWithNestedWhereInput>;
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
};

export type NavItemItemUpdateOneInlineInput = {
  /** Connect existing NavItemItem document */
  connect?: InputMaybe<NavItemItemWhereUniqueInput>;
  /** Create and connect one NavItemItem document */
  create?: InputMaybe<NavItemItemCreateInput>;
  /** Delete currently connected NavItemItem document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected NavItemItem document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single NavItemItem document */
  update?: InputMaybe<NavItemItemUpdateWithNestedWhereUniqueInput>;
  /** Upsert single NavItemItem document */
  upsert?: InputMaybe<NavItemItemUpsertWithNestedWhereUniqueInput>;
};

export type NavItemItemUpdateWithNestedWhereUniqueInput = {
  Chapter?: InputMaybe<ChapterUpdateWithNestedWhereUniqueInput>;
  ExternalLink?: InputMaybe<ExternalLinkUpdateWithNestedWhereUniqueInput>;
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
};

export type NavItemItemUpsertWithNestedWhereUniqueInput = {
  Chapter?: InputMaybe<ChapterUpsertWithNestedWhereUniqueInput>;
  ExternalLink?: InputMaybe<ExternalLinkUpsertWithNestedWhereUniqueInput>;
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type NavItemItemWhereInput = {
  Chapter?: InputMaybe<ChapterWhereInput>;
  ExternalLink?: InputMaybe<ExternalLinkWhereInput>;
  Page?: InputMaybe<PageWhereInput>;
};

export type NavItemItemWhereUniqueInput = {
  Chapter?: InputMaybe<ChapterWhereUniqueInput>;
  ExternalLink?: InputMaybe<ExternalLinkWhereUniqueInput>;
  Page?: InputMaybe<PageWhereUniqueInput>;
};

export type Navigation = Node & {
  __typename?: 'Navigation';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Navigation>;
  /** List of Navigation versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  linkTo: Array<NavItemItem>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

export type NavigationCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type NavigationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

export type NavigationHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};

export type NavigationLinkToArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type NavigationPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type NavigationScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type NavigationUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type NavigationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: NavigationWhereUniqueInput;
};

/** A connection to a list of items. */
export type NavigationConnection = {
  __typename?: 'NavigationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<NavigationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type NavigationCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  linkTo?: InputMaybe<NavItemItemCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type NavigationCreateManyInlineInput = {
  /** Connect multiple existing Navigation documents */
  connect?: InputMaybe<Array<NavigationWhereUniqueInput>>;
  /** Create and connect multiple existing Navigation documents */
  create?: InputMaybe<Array<NavigationCreateInput>>;
};

export type NavigationCreateOneInlineInput = {
  /** Connect one existing Navigation document */
  connect?: InputMaybe<NavigationWhereUniqueInput>;
  /** Create and connect one Navigation document */
  create?: InputMaybe<NavigationCreateInput>;
};

/** An edge in a connection. */
export type NavigationEdge = {
  __typename?: 'NavigationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Navigation;
};

/** Identifies documents */
export type NavigationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavigationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavigationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavigationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<NavigationWhereStageInput>;
  documentInStages_none?: InputMaybe<NavigationWhereStageInput>;
  documentInStages_some?: InputMaybe<NavigationWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum NavigationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type NavigationUpdateInput = {
  linkTo?: InputMaybe<NavItemItemUpdateManyInlineInput>;
};

export type NavigationUpdateManyInlineInput = {
  /** Connect multiple existing Navigation documents */
  connect?: InputMaybe<Array<NavigationConnectInput>>;
  /** Create and connect multiple Navigation documents */
  create?: InputMaybe<Array<NavigationCreateInput>>;
  /** Delete multiple Navigation documents */
  delete?: InputMaybe<Array<NavigationWhereUniqueInput>>;
  /** Disconnect multiple Navigation documents */
  disconnect?: InputMaybe<Array<NavigationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Navigation documents */
  set?: InputMaybe<Array<NavigationWhereUniqueInput>>;
  /** Update multiple Navigation documents */
  update?: InputMaybe<Array<NavigationUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Navigation documents */
  upsert?: InputMaybe<Array<NavigationUpsertWithNestedWhereUniqueInput>>;
};

export type NavigationUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']>;
};

export type NavigationUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: NavigationUpdateManyInput;
  /** Document search */
  where: NavigationWhereInput;
};

export type NavigationUpdateOneInlineInput = {
  /** Connect existing Navigation document */
  connect?: InputMaybe<NavigationWhereUniqueInput>;
  /** Create and connect one Navigation document */
  create?: InputMaybe<NavigationCreateInput>;
  /** Delete currently connected Navigation document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Navigation document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Navigation document */
  update?: InputMaybe<NavigationUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Navigation document */
  upsert?: InputMaybe<NavigationUpsertWithNestedWhereUniqueInput>;
};

export type NavigationUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: NavigationUpdateInput;
  /** Unique document search */
  where: NavigationWhereUniqueInput;
};

export type NavigationUpsertInput = {
  /** Create document if it didn't exist */
  create: NavigationCreateInput;
  /** Update document if it exists */
  update: NavigationUpdateInput;
};

export type NavigationUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: NavigationUpsertInput;
  /** Unique document search */
  where: NavigationWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type NavigationWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type NavigationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavigationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavigationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavigationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<NavigationWhereStageInput>;
  documentInStages_none?: InputMaybe<NavigationWhereStageInput>;
  documentInStages_some?: InputMaybe<NavigationWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type NavigationWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavigationWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavigationWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavigationWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<NavigationWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Navigation record uniquely */
export type NavigationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

export enum OgType {
  Article = 'article',
  Book = 'book',
  Business = 'business',
  Place = 'place',
  Product = 'product',
  Profile = 'profile',
  Website = 'website',
}

export type OpenGraphMetadata = {
  __typename?: 'OpenGraphMetadata';
  /** The unique identifier */
  id: Scalars['ID'];
  ogDescription?: Maybe<Scalars['String']>;
  ogImage?: Maybe<Asset>;
  ogTitle?: Maybe<Scalars['String']>;
  ogType?: Maybe<OgType>;
  ogUrl?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
};

export type OpenGraphMetadataOgImageArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type OpenGraphMetadataConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: OpenGraphMetadataWhereUniqueInput;
};

/** A connection to a list of items. */
export type OpenGraphMetadataConnection = {
  __typename?: 'OpenGraphMetadataConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<OpenGraphMetadataEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type OpenGraphMetadataCreateInput = {
  ogDescription?: InputMaybe<Scalars['String']>;
  ogImage?: InputMaybe<AssetCreateOneInlineInput>;
  ogTitle?: InputMaybe<Scalars['String']>;
  ogType?: InputMaybe<OgType>;
  ogUrl?: InputMaybe<Scalars['String']>;
};

export type OpenGraphMetadataCreateManyInlineInput = {
  /** Create and connect multiple existing OpenGraphMetadata documents */
  create?: InputMaybe<Array<OpenGraphMetadataCreateInput>>;
};

export type OpenGraphMetadataCreateOneInlineInput = {
  /** Create and connect one OpenGraphMetadata document */
  create?: InputMaybe<OpenGraphMetadataCreateInput>;
};

export type OpenGraphMetadataCreateWithPositionInput = {
  /** Document to create */
  data: OpenGraphMetadataCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type OpenGraphMetadataEdge = {
  __typename?: 'OpenGraphMetadataEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: OpenGraphMetadata;
};

/** Identifies documents */
export type OpenGraphMetadataManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<OpenGraphMetadataWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<OpenGraphMetadataWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<OpenGraphMetadataWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  ogDescription?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  ogDescription_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  ogDescription_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  ogDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  ogDescription_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  ogDescription_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  ogDescription_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  ogDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  ogDescription_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  ogDescription_starts_with?: InputMaybe<Scalars['String']>;
  ogImage?: InputMaybe<AssetWhereInput>;
  ogTitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  ogTitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  ogTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  ogTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  ogTitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  ogTitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  ogTitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  ogTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  ogTitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  ogTitle_starts_with?: InputMaybe<Scalars['String']>;
  ogType?: InputMaybe<OgType>;
  /** All values that are contained in given list. */
  ogType_in?: InputMaybe<Array<InputMaybe<OgType>>>;
  /** All values that are not equal to given value. */
  ogType_not?: InputMaybe<OgType>;
  /** All values that are not contained in given list. */
  ogType_not_in?: InputMaybe<Array<InputMaybe<OgType>>>;
  ogUrl?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  ogUrl_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  ogUrl_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  ogUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  ogUrl_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  ogUrl_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  ogUrl_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  ogUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  ogUrl_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  ogUrl_starts_with?: InputMaybe<Scalars['String']>;
};

export enum OpenGraphMetadataOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  OgDescriptionAsc = 'ogDescription_ASC',
  OgDescriptionDesc = 'ogDescription_DESC',
  OgTitleAsc = 'ogTitle_ASC',
  OgTitleDesc = 'ogTitle_DESC',
  OgTypeAsc = 'ogType_ASC',
  OgTypeDesc = 'ogType_DESC',
  OgUrlAsc = 'ogUrl_ASC',
  OgUrlDesc = 'ogUrl_DESC',
}

export type OpenGraphMetadataParent = Seo;

export type OpenGraphMetadataParentConnectInput = {
  Seo?: InputMaybe<SeoConnectInput>;
};

export type OpenGraphMetadataParentCreateInput = {
  Seo?: InputMaybe<SeoCreateInput>;
};

export type OpenGraphMetadataParentCreateManyInlineInput = {
  /** Create and connect multiple existing OpenGraphMetadataParent documents */
  create?: InputMaybe<Array<OpenGraphMetadataParentCreateInput>>;
};

export type OpenGraphMetadataParentCreateOneInlineInput = {
  /** Create and connect one OpenGraphMetadataParent document */
  create?: InputMaybe<OpenGraphMetadataParentCreateInput>;
};

export type OpenGraphMetadataParentCreateWithPositionInput = {
  Seo?: InputMaybe<SeoCreateWithPositionInput>;
};

export type OpenGraphMetadataParentUpdateInput = {
  Seo?: InputMaybe<SeoUpdateInput>;
};

export type OpenGraphMetadataParentUpdateManyInlineInput = {
  /** Create and connect multiple OpenGraphMetadataParent component instances */
  create?: InputMaybe<Array<OpenGraphMetadataParentCreateWithPositionInput>>;
  /** Delete multiple OpenGraphMetadataParent documents */
  delete?: InputMaybe<Array<OpenGraphMetadataParentWhereUniqueInput>>;
  /** Update multiple OpenGraphMetadataParent component instances */
  update?: InputMaybe<
    Array<OpenGraphMetadataParentUpdateWithNestedWhereUniqueAndPositionInput>
  >;
  /** Upsert multiple OpenGraphMetadataParent component instances */
  upsert?: InputMaybe<
    Array<OpenGraphMetadataParentUpsertWithNestedWhereUniqueAndPositionInput>
  >;
};

export type OpenGraphMetadataParentUpdateManyWithNestedWhereInput = {
  Seo?: InputMaybe<SeoUpdateManyWithNestedWhereInput>;
};

export type OpenGraphMetadataParentUpdateOneInlineInput = {
  /** Create and connect one OpenGraphMetadataParent document */
  create?: InputMaybe<OpenGraphMetadataParentCreateInput>;
  /** Delete currently connected OpenGraphMetadataParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single OpenGraphMetadataParent document */
  update?: InputMaybe<OpenGraphMetadataParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single OpenGraphMetadataParent document */
  upsert?: InputMaybe<OpenGraphMetadataParentUpsertWithNestedWhereUniqueInput>;
};

export type OpenGraphMetadataParentUpdateWithNestedWhereUniqueAndPositionInput =
  {
    Seo?: InputMaybe<SeoUpdateWithNestedWhereUniqueAndPositionInput>;
  };

export type OpenGraphMetadataParentUpdateWithNestedWhereUniqueInput = {
  Seo?: InputMaybe<SeoUpdateWithNestedWhereUniqueInput>;
};

export type OpenGraphMetadataParentUpsertWithNestedWhereUniqueAndPositionInput =
  {
    Seo?: InputMaybe<SeoUpsertWithNestedWhereUniqueAndPositionInput>;
  };

export type OpenGraphMetadataParentUpsertWithNestedWhereUniqueInput = {
  Seo?: InputMaybe<SeoUpsertWithNestedWhereUniqueInput>;
};

export type OpenGraphMetadataParentWhereInput = {
  Seo?: InputMaybe<SeoWhereInput>;
};

export type OpenGraphMetadataParentWhereUniqueInput = {
  Seo?: InputMaybe<SeoWhereUniqueInput>;
};

export type OpenGraphMetadataUpdateInput = {
  ogDescription?: InputMaybe<Scalars['String']>;
  ogImage?: InputMaybe<AssetUpdateOneInlineInput>;
  ogTitle?: InputMaybe<Scalars['String']>;
  ogType?: InputMaybe<OgType>;
  ogUrl?: InputMaybe<Scalars['String']>;
};

export type OpenGraphMetadataUpdateManyInlineInput = {
  /** Create and connect multiple OpenGraphMetadata component instances */
  create?: InputMaybe<Array<OpenGraphMetadataCreateWithPositionInput>>;
  /** Delete multiple OpenGraphMetadata documents */
  delete?: InputMaybe<Array<OpenGraphMetadataWhereUniqueInput>>;
  /** Update multiple OpenGraphMetadata component instances */
  update?: InputMaybe<
    Array<OpenGraphMetadataUpdateWithNestedWhereUniqueAndPositionInput>
  >;
  /** Upsert multiple OpenGraphMetadata component instances */
  upsert?: InputMaybe<
    Array<OpenGraphMetadataUpsertWithNestedWhereUniqueAndPositionInput>
  >;
};

export type OpenGraphMetadataUpdateManyInput = {
  ogDescription?: InputMaybe<Scalars['String']>;
  ogTitle?: InputMaybe<Scalars['String']>;
  ogType?: InputMaybe<OgType>;
  ogUrl?: InputMaybe<Scalars['String']>;
};

export type OpenGraphMetadataUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: OpenGraphMetadataUpdateManyInput;
  /** Document search */
  where: OpenGraphMetadataWhereInput;
};

export type OpenGraphMetadataUpdateOneInlineInput = {
  /** Create and connect one OpenGraphMetadata document */
  create?: InputMaybe<OpenGraphMetadataCreateInput>;
  /** Delete currently connected OpenGraphMetadata document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single OpenGraphMetadata document */
  update?: InputMaybe<OpenGraphMetadataUpdateWithNestedWhereUniqueInput>;
  /** Upsert single OpenGraphMetadata document */
  upsert?: InputMaybe<OpenGraphMetadataUpsertWithNestedWhereUniqueInput>;
};

export type OpenGraphMetadataUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<OpenGraphMetadataUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: OpenGraphMetadataWhereUniqueInput;
};

export type OpenGraphMetadataUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: OpenGraphMetadataUpdateInput;
  /** Unique document search */
  where: OpenGraphMetadataWhereUniqueInput;
};

export type OpenGraphMetadataUpsertInput = {
  /** Create document if it didn't exist */
  create: OpenGraphMetadataCreateInput;
  /** Update document if it exists */
  update: OpenGraphMetadataUpdateInput;
};

export type OpenGraphMetadataUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<OpenGraphMetadataUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: OpenGraphMetadataWhereUniqueInput;
};

export type OpenGraphMetadataUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: OpenGraphMetadataUpsertInput;
  /** Unique document search */
  where: OpenGraphMetadataWhereUniqueInput;
};

/** Identifies documents */
export type OpenGraphMetadataWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<OpenGraphMetadataWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<OpenGraphMetadataWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<OpenGraphMetadataWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  ogDescription?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  ogDescription_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  ogDescription_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  ogDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  ogDescription_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  ogDescription_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  ogDescription_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  ogDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  ogDescription_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  ogDescription_starts_with?: InputMaybe<Scalars['String']>;
  ogImage?: InputMaybe<AssetWhereInput>;
  ogTitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  ogTitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  ogTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  ogTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  ogTitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  ogTitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  ogTitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  ogTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  ogTitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  ogTitle_starts_with?: InputMaybe<Scalars['String']>;
  ogType?: InputMaybe<OgType>;
  /** All values that are contained in given list. */
  ogType_in?: InputMaybe<Array<InputMaybe<OgType>>>;
  /** All values that are not equal to given value. */
  ogType_not?: InputMaybe<OgType>;
  /** All values that are not contained in given list. */
  ogType_not_in?: InputMaybe<Array<InputMaybe<OgType>>>;
  ogUrl?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  ogUrl_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  ogUrl_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  ogUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  ogUrl_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  ogUrl_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  ogUrl_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  ogUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  ogUrl_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  ogUrl_starts_with?: InputMaybe<Scalars['String']>;
};

/** References OpenGraphMetadata record uniquely */
export type OpenGraphMetadataWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Page = Node & {
  __typename?: 'Page';
  author?: Maybe<Author>;
  chapter?: Maybe<Chapter>;
  content?: Maybe<PageContentRichText>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Page>;
  /** List of Page versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Page>;
  navItem?: Maybe<Navigation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  seo?: Maybe<Seo>;
  slug: Scalars['String'];
  /** System stage field */
  stage: Stage;
  tags: Array<Tag>;
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

export type PageAuthorArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type PageChapterArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type PageCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type PageCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type PageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

export type PageHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};

export type PageLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};

export type PageNavItemArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type PagePublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type PagePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type PageScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type PageSeoArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type PageTagsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<TagOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagWhereInput>;
};

export type PageUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type PageUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type PageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PageWhereUniqueInput;
};

/** A connection to a list of items. */
export type PageConnection = {
  __typename?: 'PageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PageContentRichText = {
  __typename?: 'PageContentRichText';
  /** Returns HTMl representation */
  html: Scalars['String'];
  json: Scalars['RichTextAST'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** @deprecated Please use the 'json' field */
  raw: Scalars['RichTextAST'];
  references: Array<PageContentRichTextEmbeddedTypes>;
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

export type PageContentRichTextReferencesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type PageContentRichTextEmbeddedTypes = Asset | Dictionary | Page;

export type PageCreateInput = {
  author?: InputMaybe<AuthorCreateOneInlineInput>;
  chapter?: InputMaybe<ChapterCreateOneInlineInput>;
  content?: InputMaybe<Scalars['RichTextAST']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<PageCreateLocalizationsInput>;
  navItem?: InputMaybe<NavigationCreateOneInlineInput>;
  seo?: InputMaybe<SeoCreateOneInlineInput>;
  slug: Scalars['String'];
  tags?: InputMaybe<TagCreateManyInlineInput>;
  /** title input for default locale (en) */
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PageCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PageCreateLocalizationInput = {
  /** Localization input */
  data: PageCreateLocalizationDataInput;
  locale: Locale;
};

export type PageCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<PageCreateLocalizationInput>>;
};

export type PageCreateManyInlineInput = {
  /** Connect multiple existing Page documents */
  connect?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Create and connect multiple existing Page documents */
  create?: InputMaybe<Array<PageCreateInput>>;
};

export type PageCreateOneInlineInput = {
  /** Connect one existing Page document */
  connect?: InputMaybe<PageWhereUniqueInput>;
  /** Create and connect one Page document */
  create?: InputMaybe<PageCreateInput>;
};

/** An edge in a connection. */
export type PageEdge = {
  __typename?: 'PageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Page;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Identifies documents */
export type PageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<AuthorWhereInput>;
  chapter?: InputMaybe<ChapterWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PageWhereStageInput>;
  documentInStages_none?: InputMaybe<PageWhereStageInput>;
  documentInStages_some?: InputMaybe<PageWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  navItem?: InputMaybe<NavigationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  seo?: InputMaybe<SeoWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  tags_every?: InputMaybe<TagWhereInput>;
  tags_none?: InputMaybe<TagWhereInput>;
  tags_some?: InputMaybe<TagWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum PageOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type PageUpdateInput = {
  author?: InputMaybe<AuthorUpdateOneInlineInput>;
  chapter?: InputMaybe<ChapterUpdateOneInlineInput>;
  content?: InputMaybe<Scalars['RichTextAST']>;
  /** Manage document localizations */
  localizations?: InputMaybe<PageUpdateLocalizationsInput>;
  navItem?: InputMaybe<NavigationUpdateOneInlineInput>;
  seo?: InputMaybe<SeoUpdateOneInlineInput>;
  slug?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<TagUpdateManyInlineInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
};

export type PageUpdateLocalizationDataInput = {
  title?: InputMaybe<Scalars['String']>;
};

export type PageUpdateLocalizationInput = {
  data: PageUpdateLocalizationDataInput;
  locale: Locale;
};

export type PageUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<PageCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<PageUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<PageUpsertLocalizationInput>>;
};

export type PageUpdateManyInlineInput = {
  /** Connect multiple existing Page documents */
  connect?: InputMaybe<Array<PageConnectInput>>;
  /** Create and connect multiple Page documents */
  create?: InputMaybe<Array<PageCreateInput>>;
  /** Delete multiple Page documents */
  delete?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Disconnect multiple Page documents */
  disconnect?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Page documents */
  set?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Update multiple Page documents */
  update?: InputMaybe<Array<PageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Page documents */
  upsert?: InputMaybe<Array<PageUpsertWithNestedWhereUniqueInput>>;
};

export type PageUpdateManyInput = {
  content?: InputMaybe<Scalars['RichTextAST']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<PageUpdateManyLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
};

export type PageUpdateManyLocalizationDataInput = {
  title?: InputMaybe<Scalars['String']>;
};

export type PageUpdateManyLocalizationInput = {
  data: PageUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type PageUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<PageUpdateManyLocalizationInput>>;
};

export type PageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PageUpdateManyInput;
  /** Document search */
  where: PageWhereInput;
};

export type PageUpdateOneInlineInput = {
  /** Connect existing Page document */
  connect?: InputMaybe<PageWhereUniqueInput>;
  /** Create and connect one Page document */
  create?: InputMaybe<PageCreateInput>;
  /** Delete currently connected Page document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Page document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Page document */
  update?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Page document */
  upsert?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type PageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PageUpdateInput;
  /** Unique document search */
  where: PageWhereUniqueInput;
};

export type PageUpsertInput = {
  /** Create document if it didn't exist */
  create: PageCreateInput;
  /** Update document if it exists */
  update: PageUpdateInput;
};

export type PageUpsertLocalizationInput = {
  create: PageCreateLocalizationDataInput;
  locale: Locale;
  update: PageUpdateLocalizationDataInput;
};

export type PageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PageUpsertInput;
  /** Unique document search */
  where: PageWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type PageWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type PageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<AuthorWhereInput>;
  chapter?: InputMaybe<ChapterWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PageWhereStageInput>;
  documentInStages_none?: InputMaybe<PageWhereStageInput>;
  documentInStages_some?: InputMaybe<PageWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  navItem?: InputMaybe<NavigationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  seo?: InputMaybe<SeoWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  tags_every?: InputMaybe<TagWhereInput>;
  tags_none?: InputMaybe<TagWhereInput>;
  tags_some?: InputMaybe<TagWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PageWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PageWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Page record uniquely */
export type PageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single author */
  author?: Maybe<Author>;
  /** Retrieve document version */
  authorVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple authors */
  authors: Array<Author>;
  /** Retrieve multiple authors using the Relay connection interface */
  authorsConnection: AuthorConnection;
  /** Retrieve a single chapter */
  chapter?: Maybe<Chapter>;
  /** Retrieve document version */
  chapterVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple chapters */
  chapters: Array<Chapter>;
  /** Retrieve multiple chapters using the Relay connection interface */
  chaptersConnection: ChapterConnection;
  /** Retrieve multiple dictionaries */
  dictionaries: Array<Dictionary>;
  /** Retrieve multiple dictionaries using the Relay connection interface */
  dictionariesConnection: DictionaryConnection;
  /** Retrieve a single dictionary */
  dictionary?: Maybe<Dictionary>;
  /** Retrieve document version */
  dictionaryVersion?: Maybe<DocumentVersion>;
  /** Retrieve a single drug */
  drug?: Maybe<Drug>;
  /** Retrieve document version */
  drugVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple drugs */
  drugs: Array<Drug>;
  /** Retrieve multiple drugs using the Relay connection interface */
  drugsConnection: DrugConnection;
  /** Retrieve a single externalLink */
  externalLink?: Maybe<ExternalLink>;
  /** Retrieve document version */
  externalLinkVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple externalLinks */
  externalLinks: Array<ExternalLink>;
  /** Retrieve multiple externalLinks using the Relay connection interface */
  externalLinksConnection: ExternalLinkConnection;
  /** Retrieve a single modelSeo */
  modelSeo?: Maybe<ModelSeo>;
  /** Retrieve document version */
  modelSeoVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple modelSeos */
  modelSeos: Array<ModelSeo>;
  /** Retrieve multiple modelSeos using the Relay connection interface */
  modelSeosConnection: ModelSeoConnection;
  /** Retrieve a single navigation */
  navigation?: Maybe<Navigation>;
  /** Retrieve document version */
  navigationVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple navigations */
  navigations: Array<Navigation>;
  /** Retrieve multiple navigations using the Relay connection interface */
  navigationsConnection: NavigationConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single page */
  page?: Maybe<Page>;
  /** Retrieve document version */
  pageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pages */
  pages: Array<Page>;
  /** Retrieve multiple pages using the Relay connection interface */
  pagesConnection: PageConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single tag */
  tag?: Maybe<Tag>;
  /** Retrieve document version */
  tagVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple tags */
  tags: Array<Tag>;
  /** Retrieve multiple tags using the Relay connection interface */
  tagsConnection: TagConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
  /** Retrieve a single widget */
  widget?: Maybe<Widget>;
  /** Retrieve document version */
  widgetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple widgets */
  widgets: Array<Widget>;
  /** Retrieve multiple widgets using the Relay connection interface */
  widgetsConnection: WidgetConnection;
};

export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};

export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};

export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};

export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};

export type QueryAuthorArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AuthorWhereUniqueInput;
};

export type QueryAuthorVersionArgs = {
  where: VersionWhereInput;
};

export type QueryAuthorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AuthorOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AuthorWhereInput>;
};

export type QueryAuthorsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AuthorOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AuthorWhereInput>;
};

export type QueryChapterArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ChapterWhereUniqueInput;
};

export type QueryChapterVersionArgs = {
  where: VersionWhereInput;
};

export type QueryChaptersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ChapterOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ChapterWhereInput>;
};

export type QueryChaptersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ChapterOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ChapterWhereInput>;
};

export type QueryDictionariesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<DictionaryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<DictionaryWhereInput>;
};

export type QueryDictionariesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<DictionaryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<DictionaryWhereInput>;
};

export type QueryDictionaryArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: DictionaryWhereUniqueInput;
};

export type QueryDictionaryVersionArgs = {
  where: VersionWhereInput;
};

export type QueryDrugArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: DrugWhereUniqueInput;
};

export type QueryDrugVersionArgs = {
  where: VersionWhereInput;
};

export type QueryDrugsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<DrugOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<DrugWhereInput>;
};

export type QueryDrugsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<DrugOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<DrugWhereInput>;
};

export type QueryExternalLinkArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ExternalLinkWhereUniqueInput;
};

export type QueryExternalLinkVersionArgs = {
  where: VersionWhereInput;
};

export type QueryExternalLinksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ExternalLinkOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ExternalLinkWhereInput>;
};

export type QueryExternalLinksConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ExternalLinkOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ExternalLinkWhereInput>;
};

export type QueryModelSeoArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ModelSeoWhereUniqueInput;
};

export type QueryModelSeoVersionArgs = {
  where: VersionWhereInput;
};

export type QueryModelSeosArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ModelSeoOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ModelSeoWhereInput>;
};

export type QueryModelSeosConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ModelSeoOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ModelSeoWhereInput>;
};

export type QueryNavigationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: NavigationWhereUniqueInput;
};

export type QueryNavigationVersionArgs = {
  where: VersionWhereInput;
};

export type QueryNavigationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<NavigationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<NavigationWhereInput>;
};

export type QueryNavigationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<NavigationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<NavigationWhereInput>;
};

export type QueryNodeArgs = {
  id: Scalars['ID'];
  locales?: Array<Locale>;
  stage?: Stage;
};

export type QueryPageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PageWhereUniqueInput;
};

export type QueryPageVersionArgs = {
  where: VersionWhereInput;
};

export type QueryPagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PageWhereInput>;
};

export type QueryPagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PageWhereInput>;
};

export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};

export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};

export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};

export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};

export type QueryTagArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: TagWhereUniqueInput;
};

export type QueryTagVersionArgs = {
  where: VersionWhereInput;
};

export type QueryTagsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TagOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<TagWhereInput>;
};

export type QueryTagsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TagOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<TagWhereInput>;
};

export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

export type QueryWidgetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: WidgetWhereUniqueInput;
};

export type QueryWidgetVersionArgs = {
  where: VersionWhereInput;
};

export type QueryWidgetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<WidgetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<WidgetWhereInput>;
};

export type QueryWidgetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<WidgetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<WidgetWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};

/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument =
  | Asset
  | Author
  | Chapter
  | Dictionary
  | Drug
  | ExternalLink
  | ModelSeo
  | Navigation
  | Page
  | Tag
  | Widget;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING',
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING',
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Seo = {
  __typename?: 'Seo';
  backupImage?: Maybe<Scalars['Json']>;
  description?: Maybe<Scalars['String']>;
  detailedDescription?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  image?: Maybe<Asset>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Seo>;
  noindex?: Maybe<Scalars['Boolean']>;
  openGraphMetadata?: Maybe<OpenGraphMetadata>;
  /** System stage field */
  stage: Stage;
  title: Scalars['String'];
  twitterMetadata?: Maybe<TwitterMetadata>;
};

export type SeoImageArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type SeoLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};

export type SeoOpenGraphMetadataArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type SeoTwitterMetadataArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type SeoConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: SeoWhereUniqueInput;
};

/** A connection to a list of items. */
export type SeoConnection = {
  __typename?: 'SeoConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<SeoEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type SeoCreateInput = {
  backupImage?: InputMaybe<Scalars['Json']>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']>;
  /** detailedDescription input for default locale (en) */
  detailedDescription?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<AssetCreateOneInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<SeoCreateLocalizationsInput>;
  noindex?: InputMaybe<Scalars['Boolean']>;
  openGraphMetadata?: InputMaybe<OpenGraphMetadataCreateOneInlineInput>;
  /** title input for default locale (en) */
  title: Scalars['String'];
  twitterMetadata?: InputMaybe<TwitterMetadataCreateOneInlineInput>;
};

export type SeoCreateLocalizationDataInput = {
  description?: InputMaybe<Scalars['String']>;
  detailedDescription?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type SeoCreateLocalizationInput = {
  /** Localization input */
  data: SeoCreateLocalizationDataInput;
  locale: Locale;
};

export type SeoCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<SeoCreateLocalizationInput>>;
};

export type SeoCreateManyInlineInput = {
  /** Create and connect multiple existing Seo documents */
  create?: InputMaybe<Array<SeoCreateInput>>;
};

export type SeoCreateOneInlineInput = {
  /** Create and connect one Seo document */
  create?: InputMaybe<SeoCreateInput>;
};

export type SeoCreateWithPositionInput = {
  /** Document to create */
  data: SeoCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type SeoEdge = {
  __typename?: 'SeoEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Seo;
};

/** Identifies documents */
export type SeoManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SeoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SeoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SeoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  noindex?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  noindex_not?: InputMaybe<Scalars['Boolean']>;
  openGraphMetadata?: InputMaybe<OpenGraphMetadataWhereInput>;
  twitterMetadata?: InputMaybe<TwitterMetadataWhereInput>;
};

export enum SeoOrderByInput {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  DetailedDescriptionAsc = 'detailedDescription_ASC',
  DetailedDescriptionDesc = 'detailedDescription_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NoindexAsc = 'noindex_ASC',
  NoindexDesc = 'noindex_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export type SeoParent = Page;

export type SeoParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>;
};

export type SeoParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>;
};

export type SeoParentCreateManyInlineInput = {
  /** Connect multiple existing SeoParent documents */
  connect?: InputMaybe<Array<SeoParentWhereUniqueInput>>;
  /** Create and connect multiple existing SeoParent documents */
  create?: InputMaybe<Array<SeoParentCreateInput>>;
};

export type SeoParentCreateOneInlineInput = {
  /** Connect one existing SeoParent document */
  connect?: InputMaybe<SeoParentWhereUniqueInput>;
  /** Create and connect one SeoParent document */
  create?: InputMaybe<SeoParentCreateInput>;
};

export type SeoParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>;
};

export type SeoParentUpdateManyInlineInput = {
  /** Connect multiple existing SeoParent documents */
  connect?: InputMaybe<Array<SeoParentConnectInput>>;
  /** Create and connect multiple SeoParent documents */
  create?: InputMaybe<Array<SeoParentCreateInput>>;
  /** Delete multiple SeoParent documents */
  delete?: InputMaybe<Array<SeoParentWhereUniqueInput>>;
  /** Disconnect multiple SeoParent documents */
  disconnect?: InputMaybe<Array<SeoParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing SeoParent documents */
  set?: InputMaybe<Array<SeoParentWhereUniqueInput>>;
  /** Update multiple SeoParent documents */
  update?: InputMaybe<Array<SeoParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple SeoParent documents */
  upsert?: InputMaybe<Array<SeoParentUpsertWithNestedWhereUniqueInput>>;
};

export type SeoParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
};

export type SeoParentUpdateOneInlineInput = {
  /** Connect existing SeoParent document */
  connect?: InputMaybe<SeoParentWhereUniqueInput>;
  /** Create and connect one SeoParent document */
  create?: InputMaybe<SeoParentCreateInput>;
  /** Delete currently connected SeoParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected SeoParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single SeoParent document */
  update?: InputMaybe<SeoParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SeoParent document */
  upsert?: InputMaybe<SeoParentUpsertWithNestedWhereUniqueInput>;
};

export type SeoParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
};

export type SeoParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type SeoParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>;
};

export type SeoParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>;
};

export type SeoUpdateInput = {
  backupImage?: InputMaybe<Scalars['Json']>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']>;
  /** detailedDescription input for default locale (en) */
  detailedDescription?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<SeoUpdateLocalizationsInput>;
  noindex?: InputMaybe<Scalars['Boolean']>;
  openGraphMetadata?: InputMaybe<OpenGraphMetadataUpdateOneInlineInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
  twitterMetadata?: InputMaybe<TwitterMetadataUpdateOneInlineInput>;
};

export type SeoUpdateLocalizationDataInput = {
  description?: InputMaybe<Scalars['String']>;
  detailedDescription?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type SeoUpdateLocalizationInput = {
  data: SeoUpdateLocalizationDataInput;
  locale: Locale;
};

export type SeoUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<SeoCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<SeoUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<SeoUpsertLocalizationInput>>;
};

export type SeoUpdateManyInlineInput = {
  /** Create and connect multiple Seo component instances */
  create?: InputMaybe<Array<SeoCreateWithPositionInput>>;
  /** Delete multiple Seo documents */
  delete?: InputMaybe<Array<SeoWhereUniqueInput>>;
  /** Update multiple Seo component instances */
  update?: InputMaybe<Array<SeoUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Seo component instances */
  upsert?: InputMaybe<Array<SeoUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type SeoUpdateManyInput = {
  backupImage?: InputMaybe<Scalars['Json']>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']>;
  /** detailedDescription input for default locale (en) */
  detailedDescription?: InputMaybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<SeoUpdateManyLocalizationsInput>;
  noindex?: InputMaybe<Scalars['Boolean']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
};

export type SeoUpdateManyLocalizationDataInput = {
  description?: InputMaybe<Scalars['String']>;
  detailedDescription?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type SeoUpdateManyLocalizationInput = {
  data: SeoUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type SeoUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<SeoUpdateManyLocalizationInput>>;
};

export type SeoUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SeoUpdateManyInput;
  /** Document search */
  where: SeoWhereInput;
};

export type SeoUpdateOneInlineInput = {
  /** Create and connect one Seo document */
  create?: InputMaybe<SeoCreateInput>;
  /** Delete currently connected Seo document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single Seo document */
  update?: InputMaybe<SeoUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Seo document */
  upsert?: InputMaybe<SeoUpsertWithNestedWhereUniqueInput>;
};

export type SeoUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<SeoUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: SeoWhereUniqueInput;
};

export type SeoUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SeoUpdateInput;
  /** Unique document search */
  where: SeoWhereUniqueInput;
};

export type SeoUpsertInput = {
  /** Create document if it didn't exist */
  create: SeoCreateInput;
  /** Update document if it exists */
  update: SeoUpdateInput;
};

export type SeoUpsertLocalizationInput = {
  create: SeoCreateLocalizationDataInput;
  locale: Locale;
  update: SeoUpdateLocalizationDataInput;
};

export type SeoUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<SeoUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: SeoWhereUniqueInput;
};

export type SeoUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SeoUpsertInput;
  /** Unique document search */
  where: SeoWhereUniqueInput;
};

/** Identifies documents */
export type SeoWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SeoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SeoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SeoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  detailedDescription?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  detailedDescription_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  detailedDescription_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  detailedDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  detailedDescription_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  detailedDescription_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  detailedDescription_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  detailedDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  detailedDescription_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  detailedDescription_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  noindex?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  noindex_not?: InputMaybe<Scalars['Boolean']>;
  openGraphMetadata?: InputMaybe<OpenGraphMetadataWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  twitterMetadata?: InputMaybe<TwitterMetadataWhereInput>;
};

/** References Seo record uniquely */
export type SeoWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum Stage {
  Approval = 'APPROVAL',
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED',
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION',
}

export type Tag = Node & {
  __typename?: 'Tag';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Tag>;
  /** List of Tag versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  pages: Array<Page>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  tageName?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

export type TagCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type TagDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

export type TagHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};

export type TagPagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageWhereInput>;
};

export type TagPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type TagScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type TagUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type TagConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TagWhereUniqueInput;
};

/** A connection to a list of items. */
export type TagConnection = {
  __typename?: 'TagConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TagEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TagCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  pages?: InputMaybe<PageCreateManyInlineInput>;
  tageName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TagCreateManyInlineInput = {
  /** Connect multiple existing Tag documents */
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  /** Create and connect multiple existing Tag documents */
  create?: InputMaybe<Array<TagCreateInput>>;
};

export type TagCreateOneInlineInput = {
  /** Connect one existing Tag document */
  connect?: InputMaybe<TagWhereUniqueInput>;
  /** Create and connect one Tag document */
  create?: InputMaybe<TagCreateInput>;
};

/** An edge in a connection. */
export type TagEdge = {
  __typename?: 'TagEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Tag;
};

/** Identifies documents */
export type TagManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TagWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TagWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TagWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<TagWhereStageInput>;
  documentInStages_none?: InputMaybe<TagWhereStageInput>;
  documentInStages_some?: InputMaybe<TagWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  pages_every?: InputMaybe<PageWhereInput>;
  pages_none?: InputMaybe<PageWhereInput>;
  pages_some?: InputMaybe<PageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  tageName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  tageName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  tageName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  tageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  tageName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  tageName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  tageName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  tageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  tageName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  tageName_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum TagOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TageNameAsc = 'tageName_ASC',
  TageNameDesc = 'tageName_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type TagUpdateInput = {
  pages?: InputMaybe<PageUpdateManyInlineInput>;
  tageName?: InputMaybe<Scalars['String']>;
};

export type TagUpdateManyInlineInput = {
  /** Connect multiple existing Tag documents */
  connect?: InputMaybe<Array<TagConnectInput>>;
  /** Create and connect multiple Tag documents */
  create?: InputMaybe<Array<TagCreateInput>>;
  /** Delete multiple Tag documents */
  delete?: InputMaybe<Array<TagWhereUniqueInput>>;
  /** Disconnect multiple Tag documents */
  disconnect?: InputMaybe<Array<TagWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Tag documents */
  set?: InputMaybe<Array<TagWhereUniqueInput>>;
  /** Update multiple Tag documents */
  update?: InputMaybe<Array<TagUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Tag documents */
  upsert?: InputMaybe<Array<TagUpsertWithNestedWhereUniqueInput>>;
};

export type TagUpdateManyInput = {
  tageName?: InputMaybe<Scalars['String']>;
};

export type TagUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TagUpdateManyInput;
  /** Document search */
  where: TagWhereInput;
};

export type TagUpdateOneInlineInput = {
  /** Connect existing Tag document */
  connect?: InputMaybe<TagWhereUniqueInput>;
  /** Create and connect one Tag document */
  create?: InputMaybe<TagCreateInput>;
  /** Delete currently connected Tag document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Tag document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Tag document */
  update?: InputMaybe<TagUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Tag document */
  upsert?: InputMaybe<TagUpsertWithNestedWhereUniqueInput>;
};

export type TagUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TagUpdateInput;
  /** Unique document search */
  where: TagWhereUniqueInput;
};

export type TagUpsertInput = {
  /** Create document if it didn't exist */
  create: TagCreateInput;
  /** Update document if it exists */
  update: TagUpdateInput;
};

export type TagUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TagUpsertInput;
  /** Unique document search */
  where: TagWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type TagWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type TagWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TagWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TagWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TagWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<TagWhereStageInput>;
  documentInStages_none?: InputMaybe<TagWhereStageInput>;
  documentInStages_some?: InputMaybe<TagWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  pages_every?: InputMaybe<PageWhereInput>;
  pages_none?: InputMaybe<PageWhereInput>;
  pages_some?: InputMaybe<PageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  tageName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  tageName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  tageName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  tageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  tageName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  tageName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  tageName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  tageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  tageName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  tageName_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type TagWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TagWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TagWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TagWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<TagWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Tag record uniquely */
export type TagWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum TwitterCardType {
  App = 'app',
  Player = 'player',
  Summary = 'summary',
  SummaryLargeImage = 'summary_large_image',
}

export type TwitterMetadata = {
  __typename?: 'TwitterMetadata';
  /** The unique identifier */
  id: Scalars['ID'];
  /** System stage field */
  stage: Stage;
  twitterCardType?: Maybe<TwitterCardType>;
  twitterDescription?: Maybe<Scalars['String']>;
  twitterImage?: Maybe<Asset>;
  twitterTitle?: Maybe<Scalars['String']>;
};

export type TwitterMetadataTwitterImageArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type TwitterMetadataConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TwitterMetadataWhereUniqueInput;
};

/** A connection to a list of items. */
export type TwitterMetadataConnection = {
  __typename?: 'TwitterMetadataConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TwitterMetadataEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TwitterMetadataCreateInput = {
  twitterCardType?: InputMaybe<TwitterCardType>;
  twitterDescription?: InputMaybe<Scalars['String']>;
  twitterImage?: InputMaybe<AssetCreateOneInlineInput>;
  twitterTitle?: InputMaybe<Scalars['String']>;
};

export type TwitterMetadataCreateManyInlineInput = {
  /** Create and connect multiple existing TwitterMetadata documents */
  create?: InputMaybe<Array<TwitterMetadataCreateInput>>;
};

export type TwitterMetadataCreateOneInlineInput = {
  /** Create and connect one TwitterMetadata document */
  create?: InputMaybe<TwitterMetadataCreateInput>;
};

export type TwitterMetadataCreateWithPositionInput = {
  /** Document to create */
  data: TwitterMetadataCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type TwitterMetadataEdge = {
  __typename?: 'TwitterMetadataEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: TwitterMetadata;
};

/** Identifies documents */
export type TwitterMetadataManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TwitterMetadataWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TwitterMetadataWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TwitterMetadataWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  twitterCardType?: InputMaybe<TwitterCardType>;
  /** All values that are contained in given list. */
  twitterCardType_in?: InputMaybe<Array<InputMaybe<TwitterCardType>>>;
  /** All values that are not equal to given value. */
  twitterCardType_not?: InputMaybe<TwitterCardType>;
  /** All values that are not contained in given list. */
  twitterCardType_not_in?: InputMaybe<Array<InputMaybe<TwitterCardType>>>;
  twitterDescription?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  twitterDescription_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  twitterDescription_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  twitterDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  twitterDescription_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  twitterDescription_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  twitterDescription_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  twitterDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  twitterDescription_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  twitterDescription_starts_with?: InputMaybe<Scalars['String']>;
  twitterImage?: InputMaybe<AssetWhereInput>;
  twitterTitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  twitterTitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  twitterTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  twitterTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  twitterTitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  twitterTitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  twitterTitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  twitterTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  twitterTitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  twitterTitle_starts_with?: InputMaybe<Scalars['String']>;
};

export enum TwitterMetadataOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TwitterCardTypeAsc = 'twitterCardType_ASC',
  TwitterCardTypeDesc = 'twitterCardType_DESC',
  TwitterDescriptionAsc = 'twitterDescription_ASC',
  TwitterDescriptionDesc = 'twitterDescription_DESC',
  TwitterTitleAsc = 'twitterTitle_ASC',
  TwitterTitleDesc = 'twitterTitle_DESC',
}

export type TwitterMetadataParent = Seo;

export type TwitterMetadataParentConnectInput = {
  Seo?: InputMaybe<SeoConnectInput>;
};

export type TwitterMetadataParentCreateInput = {
  Seo?: InputMaybe<SeoCreateInput>;
};

export type TwitterMetadataParentCreateManyInlineInput = {
  /** Create and connect multiple existing TwitterMetadataParent documents */
  create?: InputMaybe<Array<TwitterMetadataParentCreateInput>>;
};

export type TwitterMetadataParentCreateOneInlineInput = {
  /** Create and connect one TwitterMetadataParent document */
  create?: InputMaybe<TwitterMetadataParentCreateInput>;
};

export type TwitterMetadataParentCreateWithPositionInput = {
  Seo?: InputMaybe<SeoCreateWithPositionInput>;
};

export type TwitterMetadataParentUpdateInput = {
  Seo?: InputMaybe<SeoUpdateInput>;
};

export type TwitterMetadataParentUpdateManyInlineInput = {
  /** Create and connect multiple TwitterMetadataParent component instances */
  create?: InputMaybe<Array<TwitterMetadataParentCreateWithPositionInput>>;
  /** Delete multiple TwitterMetadataParent documents */
  delete?: InputMaybe<Array<TwitterMetadataParentWhereUniqueInput>>;
  /** Update multiple TwitterMetadataParent component instances */
  update?: InputMaybe<
    Array<TwitterMetadataParentUpdateWithNestedWhereUniqueAndPositionInput>
  >;
  /** Upsert multiple TwitterMetadataParent component instances */
  upsert?: InputMaybe<
    Array<TwitterMetadataParentUpsertWithNestedWhereUniqueAndPositionInput>
  >;
};

export type TwitterMetadataParentUpdateManyWithNestedWhereInput = {
  Seo?: InputMaybe<SeoUpdateManyWithNestedWhereInput>;
};

export type TwitterMetadataParentUpdateOneInlineInput = {
  /** Create and connect one TwitterMetadataParent document */
  create?: InputMaybe<TwitterMetadataParentCreateInput>;
  /** Delete currently connected TwitterMetadataParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single TwitterMetadataParent document */
  update?: InputMaybe<TwitterMetadataParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TwitterMetadataParent document */
  upsert?: InputMaybe<TwitterMetadataParentUpsertWithNestedWhereUniqueInput>;
};

export type TwitterMetadataParentUpdateWithNestedWhereUniqueAndPositionInput = {
  Seo?: InputMaybe<SeoUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type TwitterMetadataParentUpdateWithNestedWhereUniqueInput = {
  Seo?: InputMaybe<SeoUpdateWithNestedWhereUniqueInput>;
};

export type TwitterMetadataParentUpsertWithNestedWhereUniqueAndPositionInput = {
  Seo?: InputMaybe<SeoUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type TwitterMetadataParentUpsertWithNestedWhereUniqueInput = {
  Seo?: InputMaybe<SeoUpsertWithNestedWhereUniqueInput>;
};

export type TwitterMetadataParentWhereInput = {
  Seo?: InputMaybe<SeoWhereInput>;
};

export type TwitterMetadataParentWhereUniqueInput = {
  Seo?: InputMaybe<SeoWhereUniqueInput>;
};

export type TwitterMetadataUpdateInput = {
  twitterCardType?: InputMaybe<TwitterCardType>;
  twitterDescription?: InputMaybe<Scalars['String']>;
  twitterImage?: InputMaybe<AssetUpdateOneInlineInput>;
  twitterTitle?: InputMaybe<Scalars['String']>;
};

export type TwitterMetadataUpdateManyInlineInput = {
  /** Create and connect multiple TwitterMetadata component instances */
  create?: InputMaybe<Array<TwitterMetadataCreateWithPositionInput>>;
  /** Delete multiple TwitterMetadata documents */
  delete?: InputMaybe<Array<TwitterMetadataWhereUniqueInput>>;
  /** Update multiple TwitterMetadata component instances */
  update?: InputMaybe<
    Array<TwitterMetadataUpdateWithNestedWhereUniqueAndPositionInput>
  >;
  /** Upsert multiple TwitterMetadata component instances */
  upsert?: InputMaybe<
    Array<TwitterMetadataUpsertWithNestedWhereUniqueAndPositionInput>
  >;
};

export type TwitterMetadataUpdateManyInput = {
  twitterCardType?: InputMaybe<TwitterCardType>;
  twitterDescription?: InputMaybe<Scalars['String']>;
  twitterTitle?: InputMaybe<Scalars['String']>;
};

export type TwitterMetadataUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TwitterMetadataUpdateManyInput;
  /** Document search */
  where: TwitterMetadataWhereInput;
};

export type TwitterMetadataUpdateOneInlineInput = {
  /** Create and connect one TwitterMetadata document */
  create?: InputMaybe<TwitterMetadataCreateInput>;
  /** Delete currently connected TwitterMetadata document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single TwitterMetadata document */
  update?: InputMaybe<TwitterMetadataUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TwitterMetadata document */
  upsert?: InputMaybe<TwitterMetadataUpsertWithNestedWhereUniqueInput>;
};

export type TwitterMetadataUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<TwitterMetadataUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TwitterMetadataWhereUniqueInput;
};

export type TwitterMetadataUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TwitterMetadataUpdateInput;
  /** Unique document search */
  where: TwitterMetadataWhereUniqueInput;
};

export type TwitterMetadataUpsertInput = {
  /** Create document if it didn't exist */
  create: TwitterMetadataCreateInput;
  /** Update document if it exists */
  update: TwitterMetadataUpdateInput;
};

export type TwitterMetadataUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<TwitterMetadataUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TwitterMetadataWhereUniqueInput;
};

export type TwitterMetadataUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TwitterMetadataUpsertInput;
  /** Unique document search */
  where: TwitterMetadataWhereUniqueInput;
};

/** Identifies documents */
export type TwitterMetadataWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TwitterMetadataWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TwitterMetadataWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TwitterMetadataWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  twitterCardType?: InputMaybe<TwitterCardType>;
  /** All values that are contained in given list. */
  twitterCardType_in?: InputMaybe<Array<InputMaybe<TwitterCardType>>>;
  /** All values that are not equal to given value. */
  twitterCardType_not?: InputMaybe<TwitterCardType>;
  /** All values that are not contained in given list. */
  twitterCardType_not_in?: InputMaybe<Array<InputMaybe<TwitterCardType>>>;
  twitterDescription?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  twitterDescription_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  twitterDescription_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  twitterDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  twitterDescription_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  twitterDescription_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  twitterDescription_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  twitterDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  twitterDescription_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  twitterDescription_starts_with?: InputMaybe<Scalars['String']>;
  twitterImage?: InputMaybe<AssetWhereInput>;
  twitterTitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  twitterTitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  twitterTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  twitterTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  twitterTitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  twitterTitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  twitterTitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  twitterTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  twitterTitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  twitterTitle_starts_with?: InputMaybe<Scalars['String']>;
};

/** References TwitterMetadata record uniquely */
export type TwitterMetadataWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
};

/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK',
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type Widget = Node & {
  __typename?: 'Widget';
  content?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Widget>;
  /** List of Widget versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

export type WidgetCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type WidgetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

export type WidgetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};

export type WidgetPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type WidgetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type WidgetUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type WidgetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: WidgetWhereUniqueInput;
};

/** A connection to a list of items. */
export type WidgetConnection = {
  __typename?: 'WidgetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<WidgetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type WidgetCreateInput = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type WidgetCreateManyInlineInput = {
  /** Connect multiple existing Widget documents */
  connect?: InputMaybe<Array<WidgetWhereUniqueInput>>;
  /** Create and connect multiple existing Widget documents */
  create?: InputMaybe<Array<WidgetCreateInput>>;
};

export type WidgetCreateOneInlineInput = {
  /** Connect one existing Widget document */
  connect?: InputMaybe<WidgetWhereUniqueInput>;
  /** Create and connect one Widget document */
  create?: InputMaybe<WidgetCreateInput>;
};

/** An edge in a connection. */
export type WidgetEdge = {
  __typename?: 'WidgetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Widget;
};

/** Identifies documents */
export type WidgetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<WidgetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<WidgetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<WidgetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  content_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  content_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  content_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  content_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  content_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  content_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  content_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  content_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<WidgetWhereStageInput>;
  documentInStages_none?: InputMaybe<WidgetWhereStageInput>;
  documentInStages_some?: InputMaybe<WidgetWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum WidgetOrderByInput {
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type WidgetUpdateInput = {
  content?: InputMaybe<Scalars['String']>;
};

export type WidgetUpdateManyInlineInput = {
  /** Connect multiple existing Widget documents */
  connect?: InputMaybe<Array<WidgetConnectInput>>;
  /** Create and connect multiple Widget documents */
  create?: InputMaybe<Array<WidgetCreateInput>>;
  /** Delete multiple Widget documents */
  delete?: InputMaybe<Array<WidgetWhereUniqueInput>>;
  /** Disconnect multiple Widget documents */
  disconnect?: InputMaybe<Array<WidgetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Widget documents */
  set?: InputMaybe<Array<WidgetWhereUniqueInput>>;
  /** Update multiple Widget documents */
  update?: InputMaybe<Array<WidgetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Widget documents */
  upsert?: InputMaybe<Array<WidgetUpsertWithNestedWhereUniqueInput>>;
};

export type WidgetUpdateManyInput = {
  content?: InputMaybe<Scalars['String']>;
};

export type WidgetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: WidgetUpdateManyInput;
  /** Document search */
  where: WidgetWhereInput;
};

export type WidgetUpdateOneInlineInput = {
  /** Connect existing Widget document */
  connect?: InputMaybe<WidgetWhereUniqueInput>;
  /** Create and connect one Widget document */
  create?: InputMaybe<WidgetCreateInput>;
  /** Delete currently connected Widget document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Widget document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Widget document */
  update?: InputMaybe<WidgetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Widget document */
  upsert?: InputMaybe<WidgetUpsertWithNestedWhereUniqueInput>;
};

export type WidgetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: WidgetUpdateInput;
  /** Unique document search */
  where: WidgetWhereUniqueInput;
};

export type WidgetUpsertInput = {
  /** Create document if it didn't exist */
  create: WidgetCreateInput;
  /** Update document if it exists */
  update: WidgetUpdateInput;
};

export type WidgetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: WidgetUpsertInput;
  /** Unique document search */
  where: WidgetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type WidgetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type WidgetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<WidgetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<WidgetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<WidgetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  content_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  content_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  content_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  content_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  content_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  content_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  content_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  content_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<WidgetWhereStageInput>;
  documentInStages_none?: InputMaybe<WidgetWhereStageInput>;
  documentInStages_some?: InputMaybe<WidgetWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type WidgetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<WidgetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<WidgetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<WidgetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<WidgetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Widget record uniquely */
export type WidgetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with',
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual',
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert',
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one',
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update',
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union',
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization',
}

export type NavChapterFragment = {
  __typename?: 'Chapter';
  id: string;
  title: string;
  slug: string;
  pages: Array<{ __typename?: 'Page'; title: string; slug: string }>;
};

export type NavExternalLinkFragment = {
  __typename?: 'ExternalLink';
  id: string;
  label: string;
  url: string;
};

export type NavPageFragment = {
  __typename?: 'Page';
  id: string;
  title: string;
  slug: string;
};

export type EmbeddedAssetFragment = {
  __typename?: 'Asset';
  id: string;
  url: string;
  mimeType?: string | null | undefined;
};

export type EmbeddedPageFragment = {
  __typename?: 'Page';
  id: string;
  slug: string;
  title: string;
};

export type GetAllNavItemsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllNavItemsQuery = {
  __typename?: 'Query';
  navigations: Array<{
    __typename?: 'Navigation';
    id: string;
    linkTo: Array<
      | {
          __typename: 'Chapter';
          id: string;
          title: string;
          slug: string;
          pages: Array<{ __typename?: 'Page'; title: string; slug: string }>;
        }
      | { __typename: 'ExternalLink'; id: string; label: string; url: string }
      | { __typename: 'Page'; id: string; title: string; slug: string }
    >;
  }>;
};

export type GetAllPagesQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllPagesQuery = {
  __typename?: 'Query';
  pages: Array<{ __typename?: 'Page'; slug: string; updatedAt: any }>;
};

export type GetFirstPageFromChapterQueryVariables = Exact<{
  slug: Scalars['String'];
}>;

export type GetFirstPageFromChapterQuery = {
  __typename?: 'Query';
  chapter?:
    | {
        __typename?: 'Chapter';
        pages: Array<{ __typename?: 'Page'; slug: string }>;
      }
    | null
    | undefined;
};

export type GetPageQueryVariables = Exact<{
  slug: Scalars['String'];
}>;

export type GetPageQueryNoRemote = {
  __typename?: 'Query';
  page?:
    | {
        __typename?: 'Page';
        title: string;
        slug: string;
        chapter?: { __typename?: 'Chapter'; slug: string } | null | undefined;
        content?:
          | {
              __typename?: 'PageContentRichText';
              json: any;
              markdown: string;
              references: Array<
                | {
                    __typename?: 'Asset';
                    id: string;
                    url: string;
                    mimeType?: string | null | undefined;
                  }
                | { __typename?: 'Dictionary' }
                | {
                    __typename?: 'Page';
                    id: string;
                    slug: string;
                    title: string;
                  }
              >;
            }
          | null
          | undefined;
        seo?:
          | {
              __typename?: 'Seo';
              title: string;
              description?: string | null | undefined;
              noindex?: boolean | null | undefined;
              image?: { __typename?: 'Asset'; url: string } | null | undefined;
            }
          | null
          | undefined;
        author?:
          | {
              __typename?: 'Author';
              name?: string | null | undefined;
              gitHubUserId?: string | null | undefined;
          }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type GetPageQuery = {
  __typename?: 'Query';
  page?:
    | {
        __typename?: 'Page';
        title: string;
        slug: string;
        chapter?: { __typename?: 'Chapter'; slug: string } | null | undefined;
        content?:
          | {
              __typename?: 'PageContentRichText';
              json: any;
              markdown: string;
              references: Array<
                | {
                    __typename?: 'Asset';
                    id: string;
                    url: string;
                    mimeType?: string | null | undefined;
                  }
                | { __typename?: 'Dictionary' }
                | {
                    __typename?: 'Page';
                    id: string;
                    slug: string;
                    title: string;
                  }
              >;
            }
          | null
          | undefined;
        seo?:
          | {
              __typename?: 'Seo';
              title: string;
              description?: string | null | undefined;
              noindex?: boolean | null | undefined;
              image?: { __typename?: 'Asset'; url: string } | null | undefined;
            }
          | null
          | undefined;
        author?:
          | {
              __typename?: 'Author';
              name?: string | null | undefined;
              gitHubUserId?: string | null | undefined;
              gitHubUserDetails?:
                | {
                    __typename?: 'Github_User';
                    html_url?: string | null | undefined;
                  }
                | null
                | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type PageFragment = {
  __typename?: 'Page';
  title: string;
  slug: string;
  content?:
    | {
        __typename?: 'PageContentRichText';
        json: any;
        markdown: string;
        references: Array<
          | {
              __typename?: 'Asset';
              id: string;
              url: string;
              mimeType?: string | null | undefined;
            }
          | { __typename?: 'Dictionary' }
          | { __typename?: 'Page'; id: string; slug: string; title: string }
        >;
      }
    | null
    | undefined;
  seo?:
    | {
        __typename?: 'Seo';
        title: string;
        description?: string | null | undefined;
        noindex?: boolean | null | undefined;
        image?: { __typename?: 'Asset'; url: string } | null | undefined;
      }
    | null
    | undefined;
  author?:
    | {
        __typename?: 'Author';
        name?: string | null | undefined;
        gitHubUserId?: string | null | undefined;
        gitHubUserDetails?:
          | { __typename?: 'Github_User'; html_url?: string | null | undefined }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export const NavChapterFragmentDoc = gql`
  fragment NavChapter on Chapter {
    id
    title
    slug
    pages {
      title
      slug
    }
  }
`;
export const NavExternalLinkFragmentDoc = gql`
  fragment NavExternalLink on ExternalLink {
    id
    label
    url
  }
`;
export const NavPageFragmentDoc = gql`
  fragment NavPage on Page {
    id
    title
    slug
  }
`;
export const EmbeddedAssetFragmentDoc = gql`
  fragment EmbeddedAsset on Asset {
    id
    url
    mimeType
  }
`;
export const EmbeddedPageFragmentDoc = gql`
  fragment EmbeddedPage on Page {
    id
    slug
    title
  }
`;
export const PageFragmentDoc = gql`
  fragment Page on Page {
    title
    slug
    content {
      markdown
      ... on PageContentRichText {
        json
        references {
          ...EmbeddedAsset
          ...EmbeddedPage
        }
      }
    }
    seo {
      title
      description
      noindex
      image {
        url
      }
    }
    author {
      name
      gitHubUserId
      gitHubUserDetails {
        html_url
      }
    }
  }
  ${EmbeddedAssetFragmentDoc}
  ${EmbeddedPageFragmentDoc}
`;
export const GetAllNavItemsDocument = gql`
  query GetAllNavItems {
    navigations(first: 1) {
      id
      linkTo {
        __typename
        ... on Page {
          ...NavPage
        }
        ... on Chapter {
          ...NavChapter
        }
        ... on ExternalLink {
          ...NavExternalLink
        }
      }
    }
  }
  ${NavPageFragmentDoc}
  ${NavChapterFragmentDoc}
  ${NavExternalLinkFragmentDoc}
`;
export const GetAllPagesDocument = gql`
  query GetAllPages {
    pages {
      slug
      updatedAt
    }
  }
`;
export const GetFirstPageFromChapterDocument = gql`
  query GetFirstPageFromChapter($slug: String!) {
    chapter(where: { slug: $slug }) {
      pages(first: 1) {
        slug
      }
    }
  }
`;
export const GetPageDocument = gql`
  query GetPage($slug: String!) {
    page(where: { slug: $slug }) {
      chapter {
        slug
      }
      ...Page
    }
  }
  ${PageFragmentDoc}
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {
    GetAllNavItems(
      variables?: GetAllNavItemsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<GetAllNavItemsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetAllNavItemsQuery>(
            GetAllNavItemsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'GetAllNavItems',
      );
    },
    GetAllPages(
      variables?: GetAllPagesQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<GetAllPagesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetAllPagesQuery>(GetAllPagesDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'GetAllPages',
      );
    },
    GetFirstPageFromChapter(
      variables: GetFirstPageFromChapterQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<GetFirstPageFromChapterQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetFirstPageFromChapterQuery>(
            GetFirstPageFromChapterDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'GetFirstPageFromChapter',
      );
    },
    GetPage(
      variables: GetPageQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<GetPageQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetPageQuery>(GetPageDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'GetPage',
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {
    AddressParent: ['Author'],
    NavItemItem: ['Chapter', 'ExternalLink', 'Page'],
    Node: [
      'Asset',
      'Author',
      'Chapter',
      'Dictionary',
      'Drug',
      'ExternalLink',
      'ModelSeo',
      'Navigation',
      'Page',
      'ScheduledOperation',
      'ScheduledRelease',
      'Tag',
      'User',
      'Widget',
    ],
    OpenGraphMetadataParent: ['Seo'],
    PageContentRichTextEmbeddedTypes: ['Asset', 'Dictionary', 'Page'],
    ScheduledOperationAffectedDocument: [
      'Asset',
      'Author',
      'Chapter',
      'Dictionary',
      'Drug',
      'ExternalLink',
      'ModelSeo',
      'Navigation',
      'Page',
      'Tag',
      'Widget',
    ],
    SeoParent: ['Page'],
    TwitterMetadataParent: ['Seo'],
  },
};
export default result;
