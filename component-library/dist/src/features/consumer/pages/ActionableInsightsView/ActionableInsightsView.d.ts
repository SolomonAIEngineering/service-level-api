import * as React from 'react';
import { ReactNode, Component } from 'react';
import { FinancialProfile, PersonalActionableInsight } from 'src/data-contracts/financial-service/data-contracts';
export type ActionableInsightsViewProps<T extends PersonalActionableInsight> = {
    /** Primary data to be displayed or processed by the component. */
    insights: T[];
    /** Optional CSS classes for styling the component. */
    className?: string;
    historicalFinancialProfile: FinancialProfile[];
};
export type ActionableInsightsViewState<T extends PersonalActionableInsight> = {
    /** Counter to keep track of the number of button clicks. */
    insights: T[];
    historicalFinancialProfile: FinancialProfile[];
};
/**
 * @class ActionableInsightsView
 * @extends {Component<ActionableInsightsViewProps, ActionableInsightsViewState>}
 *
 * @description
 * This is a templated advanced React class component written in TypeScript.
 * It demonstrates context usage, dynamic styles, generic props, and more.
 */
export declare class ActionableInsightsView<T extends PersonalActionableInsight> extends Component<ActionableInsightsViewProps<T>, ActionableInsightsViewState<T>> {
    /** Reference to the main div element of the component. */
    private myRef;
    static defaultProps: {
        greeting: string;
    };
    constructor(props: ActionableInsightsViewProps<T>);
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
export declare const FinancialProfileThroughTimeChart: React.FC<{
    data: FinancialProfile[];
}>;
