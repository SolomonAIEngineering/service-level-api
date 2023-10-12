import { ReactNode, Component } from 'react';
import { AccountBalanceHistory, CreditAccount } from 'src/data-contracts/financial-service/data-contracts';
export type CreditAccountHoverLabelProps<T extends CreditAccount> = {
    creditAccount: T;
    institutionName: string;
    className?: string;
    enableDemoMode?: boolean;
    children?: ReactNode;
    historicalAccountBalance?: AccountBalanceHistory[];
};
export type CreditAccountHoverLabelState<T extends CreditAccount> = {
    creditAccount: T;
};
/**
 * The `CreditAccountHoverLabel` is a specialized React class component
 * designed to provide detailed hover information about a credit account.
 * It is built with TypeScript and extends the React `Component` class,
 * with types specified for both props and state.
 *
 * @template T - Specifies the type of bank account this component works with,
 * extending a base CreditAccount.
 *
 * @example
 * ```tsx
 * import { CreditAccountHoverLabel } from './CreditAccountHoverLabel';
 *
 * <CreditAccountHoverLabel
 *    creditAccount={new CreditAccount({
 *      name: 'Savings Account',
 *      currentFunds: 5000,
 *      goals: [{name: 'Vacation', amount: 1000}]
 *    })}
 *    enableDemoMode={false}
 * />
 * ```
 *
 * @class
 * @extends {Component<CreditAccountHoverLabelProps<T>, CreditAccountHoverLabelState<T>>}
 */
export declare class CreditAccountHoverLabel<T extends CreditAccount> extends Component<CreditAccountHoverLabelProps<T>, CreditAccountHoverLabelState<T>> {
    /**
     * A reference to the DOM element of the component.
     * Useful for direct DOM manipulations.
     */
    private myRef;
    /**
     * Default properties for the CreditAccountHoverLabel component.
     */
    static defaultProps: {
        contextQuestions: string[];
        enableDemoMode: boolean;
        children: null;
        institutionName: string;
    };
    /**
     * Constructs a new `CreditAccountHoverLabel` component.
     *
     * @param props - The properties passed to the component.
     */
    constructor(props: CreditAccountHoverLabelProps<T>);
    /**
     * Lifecycle method that triggers immediately after the component is added to the DOM.
     * This method focuses the current component if it has a valid reference.
     */
    componentDidMount(): void;
    /**
     * Renders the `CreditAccountHoverLabel` component.
     *
     * @returns {ReactNode} The React Node representing the component's UI.
     */
    render(): ReactNode;
}
