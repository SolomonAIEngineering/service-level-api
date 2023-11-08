import {
  AccountInformation,
  BusinessType,
  ContactInformation,
} from 'src/data-contracts/user-service/data-contracts';
import { ContactInformationClass } from './contact-information';

export class AccountInformationClass implements AccountInformation {
  businessName?: string;
  businessRegistrationNumber?: string;
  businessType?: BusinessType;
  contactInfo?: ContactInformation;
  /**
   * address id
   * @format uint64
   */
  id?: string;

  constructor(data: Partial<AccountInformation>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  // This static method generates a random instance of AccountInformation
  static randomInstance(): AccountInformation {
    // Assuming that BusinessType and ContactInformation are enums or other types that have a 'random' static method or a way to generate a random instance
    // You would need to implement the logic of generating a random value according to the type and structure of BusinessType and ContactInformation

    const randomBusinessName = `Business-${Math.random()
      .toString(36)
      .substring(2)}`;
    const randomBusinessRegistrationNumber = Math.floor(
      Math.random() * 1000000,
    ).toString();
    const randomBusinessType = 'BUSINESS_TYPE_LLC'; // This needs to be implemented in the BusinessType class/enum
    const randomContactInfo = ContactInformationClass.randomInstance(); // This needs to be implemented in the ContactInformation class
    const randomId = Math.floor(
      Math.random() * Number.MAX_SAFE_INTEGER,
    ).toString();

    return new AccountInformationClass({
      businessName: randomBusinessName,
      businessRegistrationNumber: randomBusinessRegistrationNumber,
      businessType: randomBusinessType,
      contactInfo: randomContactInfo,
      id: randomId,
    });
  }
}
