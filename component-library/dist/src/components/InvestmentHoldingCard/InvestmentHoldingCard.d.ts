import { ReactNode, Component } from 'react';
import { AccountBalanceHistory, InvesmentHolding } from 'src/data-contracts/financial-service/data-contracts';
export type InvestmentHoldingCardProps = {
    holdings: InvesmentHolding[];
    accountName: string;
    className?: string;
    historicalAccountBalance?: AccountBalanceHistory[];
};
export type InvestmentHoldingCardState = {
    holdings: InvesmentHolding[];
};
/**
 * @class InvestmentHoldingCard
 * @extends {Component<InvestmentHoldingCardProps, InvestmentHoldingCardState>}
 *
 * @description
 * This is a templated advanced React class component written in TypeScript
 * with TSDoc annotations. It has various features like context usage,
 * dynamic styles, generic props, and more.
 */
export declare class InvestmentHoldingCard extends Component<InvestmentHoldingCardProps, InvestmentHoldingCardState> {
    private myRef;
    static defaultProps: {
        accountName: string;
    };
    constructor(props: InvestmentHoldingCardProps);
    /** Lifecycle method when the component is about to mount. */
    componentWillMount(): void;
    /**
     * Lifecycle method that runs after the component has been mounted.
     */
    componentDidMount(): void;
    private computeTotalCostBasis;
    private computeAverageCostBasis;
    private computeTotalInstitutionValue;
    private computeTotalProfitLoss;
    private findLargestHolding;
    private findSmallestHolding;
    /**
     * Renders the component.
     * @returns {ReactNode}
     */
    render(): ReactNode;
}
