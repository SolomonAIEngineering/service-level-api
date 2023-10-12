import { ReactNode, Component } from 'react';
import { SmartGoal, Transaction } from 'src/data-contracts/financial-service/data-contracts';
import { TimelineEvent } from './GoalTimeline';
export type GoalsViewProps<T extends SmartGoal> = {
    /** Primary data to be displayed or processed by the component. */
    goal: T;
    /** Optional CSS classes for styling the component. */
    className?: string;
    enableDemoMode?: boolean;
    transactions?: Transaction[];
    timeline?: TimelineEvent[];
    addBudgetCallback: () => void;
    addMilestoneCallback: () => void;
};
export type GoalsViewState<T extends SmartGoal> = {
    /** Counter to keep track of the number of button clicks. */
    goal: T;
};
/**
 * @class GoalsView
 * @extends {Component<GoalsViewProps, GoalsViewState>}
 *
 * @description
 * This is a templated advanced React class component written in TypeScript.
 * It demonstrates context usage, dynamic styles, generic props, and more.
 */
export declare class GoalsView<T extends SmartGoal> extends Component<GoalsViewProps<T>, GoalsViewState<T>> {
    /** Reference to the main div element of the component. */
    private myRef;
    static defaultProps: {};
    constructor(props: GoalsViewProps<T>);
    /**
     * Lifecycle method that runs after the component has been mounted.
     */
    componentDidMount(): void;
    getMilestones(): import("src/data-contracts/financial-service/data-contracts").Milestone[] | undefined;
    getBudgets(): (import("src/data-contracts/financial-service/data-contracts").Budget | undefined)[];
    /**
     * Computes the percentage of two numbers represented as strings, potentially prefixed with `$`.
     *
     * @param numeratorStr - The numerator as a string.
     * @param denominatorStr - The denominator as a string.
     * @returns The percentage (numerator/denominator * 100) or NaN if inputs are not valid numbers.
     */
    computePercentage(numeratorStr: string, denominatorStr: string): number;
    /**
     * Renders the component.
     * @returns {ReactNode}
     */
    render(): ReactNode;
}
