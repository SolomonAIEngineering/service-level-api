import { ReactNode, Component } from 'react';
import { BankAccount, CreditAccount, ReOccuringTransaction, Transaction } from 'src/data-contracts/financial-service/data-contracts';
export type RecurringTransactionCardProps = {
    recurringTransaction: ReOccuringTransaction;
    className?: string;
    nextTransactionDate?: string;
    enableDetailedDisplay?: boolean;
    participantTransactions?: Transaction[];
    account?: BankAccount | CreditAccount;
};
export type RecurringTransactionCardState = {
    transaction: ReOccuringTransaction;
};
/**
 * @class RecurringTransactionCard
 * @extends {Component<RecurringTransactionCardProps, RecurringTransactionCardState>}
 *
 * @description
 * This is a templated advanced React class component written in TypeScript
 * with TSDoc annotations. It has various features like context usage,
 * dynamic styles, generic props, and more.
 */
export declare class RecurringTransactionCard extends Component<RecurringTransactionCardProps, RecurringTransactionCardState> {
    private myRef;
    static defaultProps: {
        nextTransactionDate: string;
        enableDetailedDisplay: boolean;
        className: string;
        participantTransactions: never[];
    };
    constructor(props: RecurringTransactionCardProps);
    /**
     * Lifecycle method that runs after the component has been mounted.
     */
    componentDidMount(): void;
    private isTransactionFrequencyInvalid;
    /**
     * Renders the component.
     * @returns {ReactNode}
     */
    render(): ReactNode;
}
