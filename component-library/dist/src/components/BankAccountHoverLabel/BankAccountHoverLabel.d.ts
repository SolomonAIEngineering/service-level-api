import { ReactNode, Component } from 'react';
import { AccountBalanceHistory, BankAccount } from 'src/data-contracts/financial-service/data-contracts';
export type BankAccountHoverLabelProps<T extends BankAccount> = {
    bankAccount: T;
    className?: string;
    enableDemoMode?: boolean;
    children?: ReactNode;
    historicalAccountBalance?: AccountBalanceHistory[];
};
export type BankAccountHoverLabelState<T extends BankAccount> = {
    bankAccount: T;
};
/**
 * The `BankAccountHoverLabel` is a specialized React class component
 * designed to provide detailed hover information about a bank account.
 * It is built with TypeScript and extends the React `Component` class,
 * with types specified for both props and state.
 *
 * @template T - Specifies the type of bank account this component works with,
 * extending a base BankAccount.
 *
 * @example
 * ```tsx
 * import { BankAccountHoverLabel } from './BankAccountHoverLabel';
 *
 * <BankAccountHoverLabel
 *    bankAccount={new BankAccount({
 *      name: 'Savings Account',
 *      currentFunds: 5000,
 *      goals: [{name: 'Vacation', amount: 1000}]
 *    })}
 *    enableDemoMode={false}
 * />
 * ```
 *
 * @class
 * @extends {Component<BankAccountHoverLabelProps<T>, BankAccountHoverLabelState<T>>}
 */
export declare class BankAccountHoverLabel<T extends BankAccount> extends Component<BankAccountHoverLabelProps<T>, BankAccountHoverLabelState<T>> {
    /**
     * A reference to the DOM element of the component.
     * Useful for direct DOM manipulations.
     */
    private myRef;
    /**
     * Default properties for the BankAccountHoverLabel component.
     */
    static defaultProps: {
        contextQuestions: string[];
        enableDemoMode: boolean;
        children: null;
    };
    /**
     * Constructs a new `BankAccountHoverLabel` component.
     *
     * @param props - The properties passed to the component.
     */
    constructor(props: BankAccountHoverLabelProps<T>);
    /**
     * Lifecycle method that triggers immediately after the component is added to the DOM.
     * This method focuses the current component if it has a valid reference.
     */
    componentDidMount(): void;
    /**
     * Renders the `BankAccountHoverLabel` component.
     *
     * @returns {ReactNode} The React Node representing the component's UI.
     */
    render(): ReactNode;
}
