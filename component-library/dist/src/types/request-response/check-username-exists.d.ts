import { ErrorResponse } from '../error';
import { IRequest } from './IRequest';
export declare class CheckUsernameExistsRequest implements IRequest {
    /** The username of the user of interest */
    username: string;
    constructor(data?: Partial<CheckUsernameExistsRequest>);
    isValid(): boolean;
}
export declare class CheckUsernameExistsResponse extends ErrorResponse {
    exists: boolean;
    constructor(data?: Partial<CheckUsernameExistsResponse>);
    private create;
    private fromPartial;
}
