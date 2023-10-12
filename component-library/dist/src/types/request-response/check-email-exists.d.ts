import { ErrorResponse } from '../error';
declare class CheckEmailExistsRequest {
    /** The email of the user of interest */
    email: string;
    constructor(data?: Partial<CheckEmailExistsRequest>);
}
declare class CheckEmailExistsResponse extends ErrorResponse {
    exists: boolean;
    constructor(data?: Partial<CheckEmailExistsResponse>);
    private create;
    private fromPartial;
}
export { CheckEmailExistsResponse, CheckEmailExistsRequest };
