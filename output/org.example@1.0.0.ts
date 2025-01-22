/* eslint-disable @typescript-eslint/no-empty-interface */
// Generated code for namespace: org.example@1.0.0

// imports
import {IConcept} from './concerto@1.0.0';

// interfaces
export enum AccountType_Enum {
   Prospect = 'Prospect',
   Customer_Direct = 'Customer_Direct',
   Customer_Channel = 'Customer_Channel',
   Channel_Partner_Reseller = 'Channel_Partner_Reseller',
   Installation_Partner = 'Installation_Partner',
   Technology_Partner = 'Technology_Partner',
   Other = 'Other',
}

export interface IAccount extends IConcept {
   Id: string;
   Name?: string;
   ShippingLatitude?: number;
   _61?: boolean;
   MasterRecordId?: string;
   PushCount?: number;
   Type?: AccountType_Enum;
   ChildAccounts?: IAccount[];
   time?: Date;
   msRecord?: IMasterRecordId;
   msRecord2?: IMasterRecordId;
}

export enum MasterRecordIdType_Enum {
   Prospect = 'Prospect',
   Customer_Direct = 'Customer_Direct',
   Customer_Channel = 'Customer_Channel',
   Channel_Partner_Reseller = 'Channel_Partner_Reseller',
   Installation_Partner = 'Installation_Partner',
   Technology_Partner = 'Technology_Partner',
   Other = 'Other',
}

export interface IMasterRecordId extends IConcept {
   Id: string;
   Deleted: boolean;
   AccountId?: IAccount;
   PushCount?: number;
   Type?: MasterRecordIdType_Enum;
   ShippingLatitude?: number;
   ChildMasterRecordIds?: IMasterRecordId[];
   addy: IAddress;
   addy2: IAddress;
}

export interface IAddress extends IConcept {
   Id: string;
   Name?: string;
   street1?: string;
   street2?: string;
   locality?: string;
   subdivision?: string;
   countryOrRegion?: string;
   postalCode?: string;
}

export interface IContact extends IConcept {
   Id: string;
   person?: IContactPerson;
   contactAddresses?: IContactAddress[];
   bankAccount?: IBankAccount;
}

export interface IPersonDetail extends IConcept {
   Id: string;
   dateOfBirth?: Date;
}

export interface IBankAccount extends IConcept {
   Id: string;
   sortCode?: string;
   clearAccountNumber?: string;
}

export interface IContactAddress extends IConcept {
   Id: string;
   addressIdentifier?: string;
   indicator?: string;
   addressType?: string;
   poBoxNumber?: string;
   subBuilding?: string;
   buildingName?: string;
   buildingNumber?: string;
   street?: string;
   street2?: string;
   subLocality?: string;
   locality?: string;
   postTown?: string;
   county?: string;
   postal?: string;
   countryCode?: string;
   residentFrom?: IResidentFrom;
   residentTo?: IResidentTo;
}

export interface IResidentFrom extends IConcept {
   fullDateFrom?: Date;
   yearFrom?: string;
   monthFrom?: string;
   dayFrom?: string;
}

export interface IResidentTo extends IConcept {
   fullDateTo?: Date;
   yearTo?: string;
   monthTo?: string;
   dayTo?: string;
}

export enum Country {
   UK = 'UK',
   USA = 'USA',
   FRANCE = 'FRANCE',
   GERMANY = 'GERMANY',
   JAPAN = 'JAPAN',
}

export interface IContactName extends IConcept {
   contactNameId: string;
   title?: string;
   firstName?: string;
   middleNames?: string;
   surName?: string;
   nameSuffix?: string;
}

export interface IContactPerson extends IConcept {
   contactPersonId: string;
   typeOfPerson?: string;
   personDetails?: IPersonDetail;
   names?: IContactName[];
   dateOfBirth?: Date;
}

