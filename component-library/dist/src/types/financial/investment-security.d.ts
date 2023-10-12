import { InvestmentSecurity as InvestmentSecurity } from 'src/data-contracts/financial-service/data-contracts';
export declare class InvestmentSecurityClass implements InvestmentSecurity {
    /** id */
    id: string;
    closePrice: number;
    closePriceAsOf: string;
    cusip: string;
    institutionId: string;
    institutionSecurityId: string;
    isCashEquivalent: boolean;
    isin: string;
    isoCurrencyCode: string;
    name: string;
    proxySecurityId: string;
    securityId: string;
    sedol: string;
    tickerSymbol: string;
    type: string;
    unofficialCurrencyCode: string;
    updateDatetime: string;
    constructor(data: Partial<InvestmentSecurity>);
    static randomInstance(): InvestmentSecurity;
}
