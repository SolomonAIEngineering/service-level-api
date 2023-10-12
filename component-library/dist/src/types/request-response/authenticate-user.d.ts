import { FinancialProfile, MelodyFinancialContext } from 'src/data-contracts/financial-service/data-contracts';
import { ErrorResponse } from '../error';
import { UserAccount } from '../user';
import { IRequest } from './IRequest';
import { UserProfile } from 'src/data-contracts/social-service/data-contracts';
/**
 * @description The request to authenticate a user
 * @author Yoan Yomba
 * @export
 * @class AuthenticateRequest
 */
declare class AuthenticateRequest implements IRequest {
    Username: string;
    Password: string;
    constructor(data?: Partial<AuthenticateRequest>);
    isValid(): boolean;
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
declare class AuthenticationResponse extends ErrorResponse {
    code: number;
    err: string;
    token: string;
    user_account: UserAccount;
    user_profile: UserProfile;
    user_financial_profile: FinancialProfileResponse;
    constructor(data?: Partial<AuthenticationResponse>);
}
export { AuthenticateRequest, AuthenticationResponse };
