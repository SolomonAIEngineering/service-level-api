import {
  BusinessAccount,
  CreateUserV2Request,
  CreateUserV2Response,
  UserAccount,
} from 'src/data-contracts/user-service/data-contracts';
import { IRequest } from './IRequest';
import { BusinessAccountClass } from '../financial/business-account';
import { UserAccountClass } from '../user';
import { getRandomString } from 'src/lib-utils/utils';
import { ErrorResponse } from '../error/error-response';

/**
 * Represents a request to create a user account or a business account.
 * @implements {IRequest} {CreateUserV2Request}
 * @class {CreateAccountV2RequestClass}
 * @extends {CreateUserV2Request}
 * @param {Partial<CreateUserV2Request>} request
 * @property {BusinessAccount} businessAccount
 * @property {Array<string>} communityIdsToFollow
 * @property {string} password
 * @property {string} profileImage
 * @property {UserAccount} userAccount
 * @method {isValid} {boolean}
 * @method {randomInstance} {CreateUserV2Request}
 * @returns {CreateAccountV2RequestClass}
 * @example
 * import { CreateAccountV2RequestClass } from 'src/types/request-response/create-account-v2';
 * const request = new CreateAccountV2RequestClass({
 *  businessAccount: BusinessAccountClass.randomInstance(),
 * communityIdsToFollow: [
 * getRandomString(10),
 * getRandomString(10),
 * getRandomString(10),
 * getRandomString(10),
 * getRandomString(10),
 * ],
 * password: getRandomString(10),
 * profileImage: getRandomString(10),
 * userAccount: UserAccountClass.randomInstance(),
 * });
 * console.log(request.isValid()); // Outputs: true
 * console.log(request.randomInstance()); // Outputs: CreateAccountV2RequestClass
 */
export class CreateAccountV2RequestClass
  implements IRequest, CreateUserV2Request
{
  businessAccount?: BusinessAccount;
  communityIdsToFollow?: Array<string>;
  password: string = '';
  profileImage: string = '';
  userAccount?: UserAccount;

  constructor(request: Partial<CreateUserV2Request>) {
    if (request) {
      Object.assign(this, {
        ...request,
      });
    }
  }

  isValid(): boolean {
    // either business account or user account must be present
    if (!this.businessAccount && !this.userAccount) {
      return false;
    }

    // password must be present
    if (!this.password) {
      return false;
    }

    // profile image must be present
    if (!this.profileImage) {
      return false;
    }

    return true;
  }

  static randomInstance(): CreateUserV2Request {
    return new CreateAccountV2RequestClass({
      businessAccount: BusinessAccountClass.randomInstance(),
      communityIdsToFollow: [
        getRandomString(10),
        getRandomString(10),
        getRandomString(10),
        getRandomString(10),
        getRandomString(10),
      ],
      password: getRandomString(10),
      profileImage: getRandomString(10),
      userAccount: UserAccountClass.randomInstance(),
    });
  }
}

export class CreateUserV2ResponseClass
  extends ErrorResponse
  implements CreateUserV2Response
{
  /** @format uint64 */
  userId?: string;

  constructor(data?: Partial<CreateUserV2Response>) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  static randomInstance(): CreateUserV2Response {
    return new CreateUserV2ResponseClass({
      userId: getRandomString(10),
    });
  }
}
