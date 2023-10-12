import { ReactNode, Component } from 'react';
import { AccountBalanceHistory, InvestmentAccount } from 'src/data-contracts/financial-service/data-contracts';
import { InvestmentAccountClass } from 'src/index';
export type InvestmentAccountCardProps = {
    investmentAccount: InvestmentAccount;
    historicalAccountBalance?: AccountBalanceHistory[];
    enableDemoMode?: boolean;
    className?: string;
};
export type InvestmentAccountCardState = {
    investmentAccount: InvestmentAccount;
};
/**
 * @class InvestmentAccountCard
 * @extends {Component<InvestmentAccountCardProps, InvestmentAccountCardState>}
 *
 * @description
 * This is a templated advanced React class component written in TypeScript
 * with TSDoc annotations. It has various features like context usage,
 * dynamic styles, generic props, and more.
 */
export declare class InvestmentAccountCard extends Component<InvestmentAccountCardProps, InvestmentAccountCardState> {
    private myRef;
    static defaultProps: {
        InvestmentAccount: InvestmentAccountClass;
        historicalAccountBalance: never[];
    };
    constructor(props: InvestmentAccountCardProps);
    /** Lifecycle method when the component is about to mount. */
    componentWillMount(): void;
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
