import * as React from 'react';
import { createContext, ReactNode, RefObject, Component } from 'react';

/** @type {React.Context<string>} */
const MortgageAccountCardContext = createContext<string>(
  'MortgageAccountCardContextValue',
);

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
export class MortgageAccountCard<T> extends Component<
  MortgageAccountCardProps<T>,
  MortgageAccountCardState
> {
  private myRef: RefObject<HTMLDivElement>;

  static defaultProps = {
    greeting: 'Hello',
  };

  constructor(props: MortgageAccountCardProps<T>) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.myRef = React.createRef();
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  /** Lifecycle method when the component is about to mount. */
  componentWillMount() {
    // Deprecated lifecycle, use with caution!
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
  private incrementCounter(): void {
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
      <MortgageAccountCardContext.Consumer>
        {(contextValue) => (
          <div className={className} ref={this.myRef}>
            {greeting} from MortgageAccountCard! Context Value: {contextValue}
            <p>Counter: {counter}</p>
            <p>{`Data Prop Value: ${data}`}</p>
            <button onClick={this.incrementCounter}>Increment</button>
          </div>
        )}
      </MortgageAccountCardContext.Consumer>
    );
  }
}
