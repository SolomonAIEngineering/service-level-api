import { ReactNode, Component } from 'react';
import { InvestmentSecurity } from 'src/data-contracts/financial-service/data-contracts';
import { InvestmentSecurityClass } from 'src/types';
export type InvestmentSecurityCardProps = {
    security: InvestmentSecurity;
    className?: string;
};
export type InvestmentSecurityCardState = {
    security: InvestmentSecurity;
};
/**
 * @class InvestmentSecurityCard
 * @extends {Component<InvestmentSecurityCardProps, InvestmentSecurityCardState>}
 *
 * @description
 * This is a templated advanced React class component written in TypeScript
 * with TSDoc annotations. It has various features like context usage,
 * dynamic styles, generic props, and more.
 */
export declare class InvestmentSecurityCard extends Component<InvestmentSecurityCardProps, InvestmentSecurityCardState> {
    private myRef;
    static defaultProps: {
        security: InvestmentSecurityClass;
    };
    constructor(props: InvestmentSecurityCardProps);
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
