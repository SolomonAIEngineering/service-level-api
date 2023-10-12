import { MelodyFinancialContext } from 'src/data-contracts/financial-service/data-contracts';
import { ErrorResponse } from '../error';
/**
 * Represents the response for getting melody financial context.
 */
export declare class GetMelodyFinancialContextResponse extends ErrorResponse {
    /**
     * Melody financial context information.
     */
    melodyFinancialContext: MelodyFinancialContext | undefined;
    /**
     * Creates a new instance of GetMelodyFinancialContextResponse.
     * @param melodyFinancialContext Melody financial context information.
     */
    constructor(data?: Partial<GetMelodyFinancialContextResponse>);
}
/**
 * Represents the request for getting Melody financial context.
 */
export declare class GetMelodyFinancialContextRequest {
    /**
     * The user ID associated with the request.
     */
    userId: number;
    /**
     * Creates a new instance of GetMelodyFinancialContextRequest.
     * @param userId The user ID associated with the request.
     */
    constructor(userId: number);
}
