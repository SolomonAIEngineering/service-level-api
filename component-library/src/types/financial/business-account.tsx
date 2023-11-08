import {
  Address,
  BusinessAccount,
  BusinessAccountSettings,
  ProfileType,
  Tags,
} from 'src/data-contracts/user-service/data-contracts';
import { getRandomString } from 'src/lib-utils/utils';
import { AddressClass, TagClass } from '../common';
import { BusinessAccountSettingsClass } from './business-account-settings';

export class BusinessAccountClass implements BusinessAccount {
  accountType?: ProfileType;
  address?: Address;
  authnAccountId?: string;
  bio?: string;
  businessAccountSettings?: BusinessAccountSettings;
  companyDescription?: string;
  companyEstablishedDate?: string;
  companyIndustryType?: string;
  companyName?: string;
  companyWebsiteUrl?: string;
  createdAt?: string;
  email?: string;
  headline?: string;
  id?: string;
  isActive?: boolean;
  isEmailVerified?: boolean;
  isPrivate?: boolean;
  phoneNumber?: string;
  tags?: Array<Tags>;
  username?: string;
  verifiedAt?: string;

  constructor(data: Partial<BusinessAccount>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  static randomInstance(): BusinessAccount {
    return new BusinessAccountClass({
      accountType: 'PROFILE_TYPE_BUSINESS',
      address: AddressClass.randomInstance(),
      authnAccountId: getRandomString(10),
      bio: getRandomString(10),
      businessAccountSettings: BusinessAccountSettingsClass.randomInstance(),
      companyDescription: getRandomString(10),
      companyEstablishedDate: getRandomString(10),
      companyIndustryType: getRandomString(10),
      companyName: getRandomString(10),
      companyWebsiteUrl: getRandomString(10),
      createdAt: getRandomString(10),
      email: getRandomString(10),
      headline: getRandomString(10),
      id: getRandomString(10),
      isActive: true,
      isEmailVerified: true,
      isPrivate: true,
      phoneNumber: getRandomString(10),
      tags: [
        TagClass.randomInstance(),
        TagClass.randomInstance(),
        TagClass.randomInstance(),
        TagClass.randomInstance(),
        TagClass.randomInstance(),
        TagClass.randomInstance(),
      ],
      username: getRandomString(10),
      verifiedAt: getRandomString(10),
    });
  }
}
