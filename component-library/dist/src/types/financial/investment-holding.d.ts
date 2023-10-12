import { InvesmentHolding as InvesmentHolding } from 'src/data-contracts/financial-service/data-contracts';
export declare class InvesmentHoldingClass implements InvesmentHolding {
    /** id */
    id: string;
    /** The name of the investment holding */
    name: string;
    /** plaid account id */
    plaidAccountId: string;
    costBasis: number;
    institutionPrice: number;
    institutionPriceAsOf: string;
    institutionPriceDatetime: string;
    institutionValue: number;
    isoCurrencyCode: string;
    quantity: number;
    securityId: string;
    unofficialCurrencyCode: string;
    constructor(data: Partial<InvesmentHolding>);
    static randomInstance(): InvesmentHolding;
}
