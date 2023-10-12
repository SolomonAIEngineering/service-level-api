import { ReactNode, Component } from 'react';
export type CopilotViewProps<T> = {
    /** Primary data to be displayed or processed by the component. */
    data: T;
    /** Optional greeting text. Defaults to 'Hello'. */
    greeting?: string;
    /** Optional CSS classes for styling the component. */
    className?: string;
};
export type CopilotViewState = {
    /** Counter to keep track of the number of button clicks. */
    counter: number;
};
/**
 * @class CopilotView
 * @extends {Component<CopilotViewProps, CopilotViewState>}
 *
 * @description
 * This is a templated advanced React class component written in TypeScript.
 * It demonstrates context usage, dynamic styles, generic props, and more.
 */
export declare class CopilotView<T> extends Component<CopilotViewProps<T>, CopilotViewState> {
    /** Reference to the main div element of the component. */
    private myRef;
    static defaultProps: {
        greeting: string;
    };
    constructor(props: CopilotViewProps<T>);
    /**
     * Lifecycle method that runs after the component has been mounted.
     */
    componentDidMount(): void;
    /**
     * Increments the counter state property.
     * @private
     */
    private incrementCounter;
    /**
     * Renders the component.
     * @returns {ReactNode}
     */
    render(): ReactNode;
}
