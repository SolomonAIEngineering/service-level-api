import { ReactNode, Component } from 'react';
export type MortgageAccountCardProps<T> = {
    data: T;
    greeting?: string;
    className?: string;
};
export type MortgageAccountCardState = {
    counter: number;
};
/**
 * @class MortgageAccountCard
 * @extends {Component<MortgageAccountCardProps, MortgageAccountCardState>}
 *
 * @description
 * This is a templated advanced React class component written in TypeScript
 * with TSDoc annotations. It has various features like context usage,
 * dynamic styles, generic props, and more.
 */
export declare class MortgageAccountCard<T> extends Component<MortgageAccountCardProps<T>, MortgageAccountCardState> {
    private myRef;
    static defaultProps: {
        greeting: string;
    };
    constructor(props: MortgageAccountCardProps<T>);
    /** Lifecycle method when the component is about to mount. */
    componentWillMount(): void;
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
