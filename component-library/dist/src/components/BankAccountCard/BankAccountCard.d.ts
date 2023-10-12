import * as React from 'react';
import { ReactNode, Component } from 'react';
import { AccountBalanceHistory, FinancialProfile, BankAccount as IBankAccount } from 'src/data-contracts/financial-service/data-contracts';
import { FinancialProfileClass } from 'src/types/financial/financial-profile';
import { BankAccountClass } from 'src/types';
/** @type {React.Context<T extends IBankAccount>} */
declare const BankAccountContext: React.Context<IBankAccount | undefined>;
declare const FinancialProfileContext: React.Context<FinancialProfile>;
declare const AccountBalanceHistoryContext: React.Context<AccountBalanceHistory[]>;
export type BankAccountCardProps<T extends IBankAccount> = {
    bankAccount: T;
    financialProfile: FinancialProfile;
    className?: string;
    contextQuestions?: string[];
    enableDemoMode?: boolean;
    children?: ReactNode;
    historicalAccountBalance?: AccountBalanceHistory[];
};
export type BankAccountCardState<T extends IBankAccount> = {
    bankAccount: T;
};
/**
 * @class BankAccountCard
 * @extends {Component<BankAccountCardProps, BankAccountCardState>}
 *
 * @description
 * This is a templated advanced React class component written in TypeScript
 * with TSDoc annotations. It has various features like context usage,
 * dynamic styles, generic props, and more.
 */
export declare class BankAccountCard<T extends IBankAccount> extends Component<BankAccountCardProps<T>, BankAccountCardState<T>> {
    private myRef;
    static defaultProps: {
        bankAccount: BankAccountClass;
        financialProfile: FinancialProfileClass;
        contextQuestions: string[];
        enableDemoMode: boolean;
        children: null;
    };
    constructor(props: BankAccountCardProps<T>);
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
export { BankAccountContext, FinancialProfileContext, AccountBalanceHistoryContext, };
