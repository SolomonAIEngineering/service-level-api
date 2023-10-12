import { ReactNode, Component } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { BankAccount, CreditAccount, Transaction } from 'src/data-contracts/financial-service/data-contracts';
export type TransactionDataTableProps = {
    transactions: Transaction[];
    className?: string;
    account?: BankAccount | CreditAccount;
};
export type TransactionDataTableState = {
    transactions: Transaction[];
};
/**
 * @class TransactionDataTable
 * @extends {Component<TransactionDataTableProps, TransactionDataTableState>}
 *
 * @description
 * This is a templated advanced React class component written in TypeScript
 * with TSDoc annotations. It has various features like context usage,
 * dynamic styles, generic props, and more.
 */
export declare class TransactionDataTable extends Component<TransactionDataTableProps, TransactionDataTableState> {
    private myRef;
    static defaultProps: {
        className: string;
    };
    constructor(props: TransactionDataTableProps);
    /**
     * Lifecycle method that runs after the component has been mounted.
     */
    componentDidMount(): void;
    /**
     * Renders the component.
     * @returns {ReactNode}
     */
    render(): ReactNode;
}
export declare const columns: ColumnDef<Transaction>[];
