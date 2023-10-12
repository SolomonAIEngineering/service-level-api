import React from 'react';
import { Transaction } from 'src/data-contracts/financial-service/data-contracts';
type Props = {
    transactions: Transaction[];
    children?: React.ReactNode;
};
declare const MonthlyExpenditureCard: React.FC<Props>;
export { MonthlyExpenditureCard };
