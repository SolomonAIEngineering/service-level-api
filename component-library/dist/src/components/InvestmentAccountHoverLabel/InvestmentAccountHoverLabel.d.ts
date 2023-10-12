import { ReactNode, Component } from 'react';
import { AccountBalanceHistory, InvestmentAccount } from 'src/data-contracts/financial-service/data-contracts';
import { BankAccountClass } from 'src/index';
export type InvestmentAccountHoverLabelProps<T extends InvestmentAccount> = {
    investmentAccount: T;
    className?: string;
    enableDemoMode?: boolean;
    children?: ReactNode;
    historicalAccountBalance?: AccountBalanceHistory[];
};
export type InvestmentAccountHoverLabelState<T extends InvestmentAccount> = {
    investmentAccount: T;
};
/**
 * The `InvestmentAccountHoverLabel` is a specialized React class component
 * designed to provide detailed hover information about an investment account.
 * It is built with TypeScript and extends the React `Component` class,
 * with types specified for both props and state.
 *
 * @template T - Specifies the type of bank account this component works with,
 * extending a base Investment Account.
 *
 * @example
 * ```tsx
 * import { InvestmentAccountHoverLabel } from './InvestmentAccountHoverLabel';
import { InvestmentAccount } from '../../types/financial/investment-account';
 *
 * <InvestmentAccountHoverLabel
 *    investmentAccount={new InvestmentAccount({
 *      name: 'Savings Account',
 *      currentFunds: 5000,
 *      goals: [{name: 'Vacation', amount: 1000}]
 *    })}
 *    enableDemoMode={false}
 * />
 * ```
 *
 * @class
 * @extends {Component<InvestmentAccountHoverLabelProps<T>, InvestmentAccountHoverLabelState<T>>}
 */
export declare class InvestmentAccountHoverLabel<T extends InvestmentAccount> extends Component<InvestmentAccountHoverLabelProps<T>, InvestmentAccountHoverLabelState<T>> {
    /**
     * A reference to the DOM element of the component.
     * Useful for direct DOM manipulations.
     */
    private myRef;
    /**
     * Default properties for the InvestmentAccountHoverLabel component.
     */
    static defaultProps: {
        bankAccount: BankAccountClass;
        contextQuestions: string[];
        enableDemoMode: boolean;
        children: null;
    };
    /**
     * Constructs a new `InvestmentAccountHoverLabel` component.
     *
     * @param props - The properties passed to the component.
     */
    constructor(props: InvestmentAccountHoverLabelProps<T>);
    /**
     * Lifecycle method that triggers immediately after the component is added to the DOM.
     * This method focuses the current component if it has a valid reference.
     */
    componentDidMount(): void;
    /**
     * Renders the `InvestmentAccountHoverLabel` component.
     *
     * @returns {ReactNode} The React Node representing the component's UI.
     */
    render(): ReactNode;
}
