import { ErrorResponse } from '../error';
import { UserAccount } from '../user/user-account';
import { IRequest } from './IRequest';
/**
 * UpdateUserRequest: Represents the request object invoked against the user
 * service to update a given user account
 */
export declare class UpdateUserAccountRequest implements IRequest {
    /**
     * UserAccount to update
     * Validation:
     * - cannot nil hence required
     */
    account: UserAccount | undefined;
    constructor(data?: Partial<UpdateUserAccountRequest>);
    isValid(): boolean;
}
export declare class UpdateUserAccountResponse extends ErrorResponse {
    accountUpdated: boolean;
    account: UserAccount | undefined;
    constructor(data?: Partial<UpdateUserAccountResponse>);
}
