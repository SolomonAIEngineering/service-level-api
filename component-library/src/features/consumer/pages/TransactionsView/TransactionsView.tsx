import React from 'react';;
import { createContext, ReactNode, RefObject, Component } from 'react';

/** Context to provide a default value for the component. */
const TransactionsViewContext = createContext<string>(
  'TransactionsViewContextDefaultValue',
);

export type TransactionsViewProps<T> = {
  /** Primary data to be displayed or processed by the component. */
  data: T;

  /** Optional greeting text. Defaults to 'Hello'. */
  greeting?: string;

  /** Optional CSS classes for styling the component. */
  className?: string;
};

export type TransactionsViewState = {
  /** Counter to keep track of the number of button clicks. */
  counter: number;
};

/**
 * @class TransactionsView
 * @extends {Component<TransactionsViewProps, TransactionsViewState>}
 *
 * @description
 * This is a templated advanced React class component written in TypeScript.
 * It demonstrates context usage, dynamic styles, generic props, and more.
 */
export class TransactionsView<T> extends Component<
  TransactionsViewProps<T>,
  TransactionsViewState
> {
  /** Reference to the main div element of the component. */
  private myRef: RefObject<HTMLDivElement>;

  static defaultProps = {
    greeting: 'Hello',
  };

  constructor(props: TransactionsViewProps<T>) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.myRef = React.createRef();
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  /**
   * Lifecycle method that runs after the component has been mounted.
   */
  componentDidMount() {
    // You can use the ref here, for example:
    if (this.myRef.current) {
      this.myRef.current.focus();
    }
  }

  /**
   * Increments the counter state property.
   * @private
   */
  private incrementCounter(event: React.MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  }

  /**
   * Renders the component.
   * @returns {ReactNode}
   */
  render(): ReactNode {
    const { greeting, data, className } = this.props;
    const { counter } = this.state;

    return (
      <TransactionsViewContext.Consumer>
        {(contextValue) => (
          <div role="presentation" className={className} ref={this.myRef}>
            {greeting} from TransactionsView! Context Value: {contextValue}
            <p>Counter: {counter}</p>
            <p>Data Prop Value: {JSON.stringify(data)}</p>
            <button
              onClick={this.incrementCounter}
              aria-label="Increment counter"
            >
              Increment
            </button>
          </div>
        )}
      </TransactionsViewContext.Consumer>
    );
  }
}
