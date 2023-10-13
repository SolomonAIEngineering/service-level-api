import {
  MelodyFinancialContext,
  FinancialUserProfile,
} from 'src/data-contracts/financial-service/data-contracts';
import { ErrorResponse } from '../error';
import { IRequest } from './IRequest';
import { MelodyFinancialContextClass } from '../financial/melody-financial-context';
import { FinancialProfileClass } from '../financial/financial-profile';
import { SocialUserProfileClass } from '../social';
import { UserProfile } from 'src/data-contracts/social-service/data-contracts';
import { UserAccountClass } from '../user/user-account';
/**
 * @description The request to authenticate a user
 * @author Yoan Yomba
 * @export
 * @class AuthenticateRequest
 */
class AuthenticateRequest implements IRequest {
  Username = '';
  Password = '';

  constructor(data?: Partial<AuthenticateRequest>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  /*
   * Validates the authenticate request object.
   * Ensures the username and password fields are not empty
   *
   * @returns {boolean}
   *
   * @memberOf AuthenticateRequest
   * */
  isValid(): boolean {
    return this.Username !== '' && this.Password !== '';
  }
}

type FinancialProfileResponse = {
  profile: FinancialUserProfile;
  financialContext: MelodyFinancialContext;
};

/**
 * @description The response when a user is authenticated
 * @author Yoan Yomba
 * @export
 * @class AuthenticationResponse
 * @extends {ErrorResponse}
 */
class AuthenticationResponse extends ErrorResponse {
  code = 0;
  err = '';
  token = '';
  user_account: UserAccountClass = new UserAccountClass({});
  user_profile: UserProfile = new SocialUserProfileClass({});
  user_financial_profile: FinancialProfileResponse = {
    profile: new FinancialProfileClass(),
    financialContext: new MelodyFinancialContextClass({}),
  };

  constructor(data?: Partial<AuthenticationResponse>) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
        user_account: data?.user_account ?? {},
        user_profile:
          data.user_profile !== undefined
            ? new SocialUserProfileClass(data.user_profile)
            : new SocialUserProfileClass({}),
        user_financial_profile: {
          profile: new FinancialProfileClass(
            data?.user_financial_profile?.profile,
          ),
          financialContext: new MelodyFinancialContextClass(
            data?.user_financial_profile?.financialContext ?? {},
          ),
        },
      });
    }
  }
}

export { AuthenticateRequest, AuthenticationResponse };
