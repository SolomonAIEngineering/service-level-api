import { ErrorResponse } from '../error';
import { UserAccount } from '../user/user-account';
export declare class GetUpdatedUserAccountResponse extends ErrorResponse {
    account: UserAccount | undefined;
    constructor(data: Partial<GetUpdatedUserAccountResponse>);
}
