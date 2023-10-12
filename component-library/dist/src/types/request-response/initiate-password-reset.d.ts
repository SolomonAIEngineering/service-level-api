import { ErrorResponse } from '../error';
export interface RequestPasswordResetRequest {
    email: string;
}
export declare class RequestPasswordResetResponse extends ErrorResponse {
    success: boolean;
    constructor(data: Partial<RequestPasswordResetResponse>);
}
