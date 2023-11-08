import { ContactInformation } from 'src/data-contracts/user-service/data-contracts';
import { getRandomString } from 'src/lib-utils/utils';

// Placeholder for ContactInformation
export class ContactInformationClass implements ContactInformation {
  address?: string;
  email?: string;
  /**
   * address id
   * @format uint64
   */
  id?: string;
  phoneNumber?: string;

  constructor(data: Partial<ContactInformation>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  static randomInstance(): ContactInformation {
    // Placeholder implementation for generating a random ContactInformation
    // You will need to create an actual instance with random data here
    return new ContactInformationClass({
      address: getRandomString(10),
      email: getRandomString(10),
      id: getRandomString(10),
      phoneNumber: getRandomString(10),
    });
  }
}
