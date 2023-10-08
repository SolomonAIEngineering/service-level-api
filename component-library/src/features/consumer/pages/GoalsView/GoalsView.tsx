import * as React from 'react';
import { createContext, ReactNode, RefObject, Component } from 'react';

/** Context to provide a default value for the component. */
const GoalsViewContext = createContext<string>('GoalsViewContextDefaultValue');

export type GoalsViewProps<T> = {
  /** Primary data to be displayed or processed by the component. */
  data: T;

  /** Optional greeting text. Defaults to 'Hello'. */
  greeting?: string;

  /** Optional CSS classes for styling the component. */
  className?: string;
};

export type GoalsViewState = {
  /** Counter to keep track of the number of button clicks. */
  counter: number;
};

/**
 * @class GoalsView
 * @extends {Component<GoalsViewProps, GoalsViewState>}
 *
 * @description
 * This is a templated advanced React class component written in TypeScript.
 * It demonstrates context usage, dynamic styles, generic props, and more.
 */
export class GoalsView<T> extends Component<GoalsViewProps<T>, GoalsViewState> {
  /** Reference to the main div element of the component. */
  private myRef: RefObject<HTMLDivElement>;

  static defaultProps = {
    greeting: 'Hello',
  };

  constructor(props: GoalsViewProps<T>) {
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
      <GoalsViewContext.Consumer>
        {(contextValue) => (
          <div role="presentation" className={className} ref={this.myRef}>
            {greeting} from GoalsView! Context Value: {contextValue}
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
      </GoalsViewContext.Consumer>
    );
  }
}
