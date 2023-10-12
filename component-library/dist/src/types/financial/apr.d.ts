import { Apr } from 'src/data-contracts/financial-service/data-contracts';
export declare class AprClass implements Apr {
    id: string;
    percentage: number;
    type: string;
    balanceSubjectToApr: number;
    interestChargeAmount: number;
    constructor(data: Partial<Apr>);
    static randomInstance(): Apr;
}
