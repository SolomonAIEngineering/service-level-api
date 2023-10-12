import { ReactNode, Component } from 'react';
import { StudentLoanAccount } from 'src/data-contracts/financial-service/data-contracts';
import { StudentLoanAccountClass } from 'src/index';
export type StudentLoanAccountCardProps = {
    studentLoanAccount: StudentLoanAccount;
    className?: string;
    children?: ReactNode;
};
export type StudentLoanAccountCardState = {
    studentLoanAccount: StudentLoanAccount;
};
/**
 * @class StudentLoanAccountCard
 * @extends {Component<StudentLoanAccountCardProps, StudentLoanAccountCardState>}
 *
 * @description
 * This is a templated advanced React class component written in TypeScript
 * with TSDoc annotations. It has various features like context usage,
 * dynamic styles, generic props, and more.
 */
export declare class StudentLoanAccountCard extends Component<StudentLoanAccountCardProps, StudentLoanAccountCardState> {
    private myRef;
    static defaultProps: {
        studentLoanAccount: StudentLoanAccountClass;
        children: null;
        className: string;
    };
    constructor(props: StudentLoanAccountCardProps);
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
