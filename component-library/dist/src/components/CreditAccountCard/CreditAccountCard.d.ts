import * as React from 'react';
import { ReactNode, Component } from 'react';
import { AccountBalanceHistory, CreditAccount, FinancialProfile } from 'src/data-contracts/financial-service/data-contracts';
import { CreditAccountClass, FinancialProfileClass } from 'src/index';
export type CreditAccountCardProps<CreditAccount> = {
    creditAccount: CreditAccount;
    financialProfile: FinancialProfile;
    institutionName: string;
    className?: string;
    contextQuestions?: string[];
    enableDemoMode?: boolean;
    children?: ReactNode;
    historicalAccountBalance?: AccountBalanceHistory[];
};
export type CreditAccountCardState<T extends CreditAccount> = {
    creditAccount: T;
};
/**
 * @class CreditAccountCard
 * @extends {Component<CreditAccountCardProps, CreditAccountCardState>}
 *
 * @description
 * This is a templated advanced React class component written in TypeScript
 * with TSDoc annotations. It has various features like context usage,
 * dynamic styles, generic props, and more.
 */
export declare class CreditAccountCard<T extends CreditAccount> extends Component<CreditAccountCardProps<T>, CreditAccountCardState<T>> {
    private myRef;
    static defaultProps: {
        creditAccount: CreditAccountClass;
        financialProfile: FinancialProfileClass;
        contextQuestions: string[];
        enableDemoMode: boolean;
        children: null;
    };
    constructor(props: CreditAccountCardProps<T>);
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
declare const CreditAccountMiniCard: React.FC<{
    creditAccount: CreditAccount;
    institutionName: string;
    className?: string;
}>;
export { CreditAccountMiniCard };
