import React from 'react';
interface Transaction {
    transactionID: string;
    amount: string;
    date: string;
    description: string;
}
interface TransactionCardProps {
    transactions: Transaction[];
}
/**
 * The `TransactionCard` component displays a list of transactions in a table format.
 */
declare const TransactionCard: React.FC<TransactionCardProps>;
export default TransactionCard;
