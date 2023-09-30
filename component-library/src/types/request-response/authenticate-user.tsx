import { ErrorResponse } from '../error';
import { FinancialProfile, MelodyFinancialContext } from '../financial';
import { SocialUserProfile } from '../social';
import { UserAccount } from '../user';
import { IRequest } from './IRequest';

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
  profile: FinancialProfile;
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
  user_account: UserAccount = new UserAccount();
  user_profile: SocialUserProfile = new SocialUserProfile({});
  user_financial_profile: FinancialProfileResponse = {
    profile: new FinancialProfile(),
    financialContext: new MelodyFinancialContext({}),
  };

  constructor(data?: Partial<AuthenticationResponse>) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
        user_account: new UserAccount(data?.user_account),
        user_profile:
          data.user_profile !== undefined
            ? new SocialUserProfile(data.user_profile)
            : new SocialUserProfile({}),
        user_financial_profile: {
          profile: new FinancialProfile(data?.user_financial_profile?.profile),
          financialContext: new MelodyFinancialContext(
            data?.user_financial_profile?.financialContext ?? {},
          ),
        },
      });
    }
  }
}

export { AuthenticateRequest, AuthenticationResponse };
