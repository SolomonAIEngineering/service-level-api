# Component Templates

## Simple Component

```typescript
import React, { Component } from 'react';

/**
 * @typedef {Object} Props
 * @property {string} [greeting='Hello'] - An optional greeting string.
 *
 * @typedef {Object} State
 * @property {number} counter - A simple counter.
 */

/**
 * @class MyComponent
 * @extends {Component<Props, State>}
 *
 * @example
 * <MyComponent greeting="Hey" />
 *
 * @description
 * This is a demonstration of an advanced React class component
 * written in TypeScript with TSDoc annotations. It showcases
 * lifecycle methods, event handling, and more.
 */
class MyComponent extends Component<Props, State> {
  static defaultProps = {
    greeting: 'Hello',
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.incrementCounter = this.incrementCounter.bind(this);
  }

  /**
   * Lifecycle method that runs after the component has been mounted.
   */
  componentDidMount() {
    // Code to execute after mount
  }

  /**
   * Increments the counter state property.
   */
  incrementCounter() {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  }

  /**
   * Renders the component.
   *
   * @returns {JSX.Element}
   */
  render(): JSX.Element {
    const { greeting } = this.props;
    const { counter } = this.state;

    return (
      <div>
        {greeting} from MyComponent!
        <p>Counter: {counter}</p>
        <button onClick={this.incrementCounter}>Increment</button>
      </div>
    );
  }
}

export default MyComponent;
```

- TypeScript Annotations: Props and State are clearly typed, ensuring better safety and clarity.
- TSDoc: Annotations describe the component, its methods, props, and state. This provides valuable context and documentation for developers.
- Lifecycle Methods: componentDidMount is demonstrated here, but you can add any lifecycle method in a similar fashion.
- Static Properties: defaultProps is a static property that sets default prop values.
- Advanced Features: A simple increment function is included, illustrating state changes and event handling.

## Advanced Component

```typescript
import React, { Component, createContext, ReactNode } from 'react';

/** @type {React.Context<string>} */
const MyContext = createContext<string>('defaultContextValue');

/**
 * @typedef {Object} Props
 * @template T
 * @property {T} data - Generic prop to handle various data types.
 * @property {string} [greeting='Hello'] - An optional greeting string.
 * @property {string} [className] - Optional className for styling.
 *
 * @typedef {Object} State
 * @property {number} counter - A simple counter.
 * @property {string} backgroundColor - Background color of the component.
 */

/**
 * @class MyComponent
 * @extends {Component<Props, State>}
 *
 * @example
 * <MyComponent data="SomeData" />
 *
 * @description
 * This is an advanced React class component written in TypeScript
 * with TSDoc annotations. It has various features like context usage,
 * dynamic styles, generic props, and more.
 */
class MyComponent<T> extends Component<Props<T>, State> {
  private myRef: React.RefObject<HTMLDivElement>;

  static defaultProps = {
    greeting: 'Hello',
  };

  constructor(props: Props<T>) {
    super(props);
    this.state = {
      counter: 0,
      backgroundColor: 'white',
    };

    this.myRef = React.createRef();
    this.incrementCounter = this.incrementCounter.bind(this);
    this.changeBackgroundColor = this.changeBackgroundColor.bind(this);
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
   * Dynamically changes the background color of the component.
   * @public
   */
  public changeBackgroundColor(color: string): void {
    this.setState({ backgroundColor: color });
  }

  /**
   * Renders the component.
   * @returns {ReactNode}
   */
  render(): ReactNode {
    const { greeting, data, className } = this.props;
    const { counter, backgroundColor } = this.state;

    return (
      <MyContext.Consumer>
        {(contextValue) => (
          <div
            className={className}
            ref={this.myRef}
            style={{ backgroundColor }}
          >
            {greeting} from MyComponent! Context Value: {contextValue}
            <p>Counter: {counter}</p>
            <p>Data Prop Value: {data}</p>
            <button onClick={this.incrementCounter}>Increment</button>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}

export default MyComponent;
```

- Generic Prop Types: The data prop can be of any type.
- Private and Public Class Methods: Private methods are meant for internal use in the class, while public methods can be accessed from outside the component.
- Use of React's context: This provides a way to pass data through the component tree without having to pass props down manually at every level.
- React's Lifecycle methods: The deprecated componentWillMount is introduced (although it's generally best to avoid deprecated methods).
- Dynamic style handling: This changes the component's background color.
- Use of React Refs: A ref is created and attached to the div, allowing direct DOM manipulations.

Keep in mind that with advanced patterns come potential pitfalls, like overcomplicating your components or using deprecated methods. Always evaluate the necessity of each advanced feature based on the specific needs of your applicatio

### Storybook

```typescript
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import MyComponent from './MyComponent'; // Adjust path accordingly

export default {
  title: 'MyComponent',
  component: MyComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
    greeting: { control: 'text' },
    className: { control: 'text' },
  },
} as Meta;

const Template: Story = (args) => (
  <MyComponent {...args} data="Storybook Data" />
);

export const Default = Template.bind({});
Default.args = {
  greeting: 'Hello from Storybook',
  data: 'Default Data',
};
```

### Testing

```typescript
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MyComponent from './MyComponent'; // Adjust path accordingly

describe('MyComponent', () => {
  test('renders greeting and default counter', () => {
    render(<MyComponent data="Test Data" />);
    expect(screen.getByText(/Hello from MyComponent!/i)).toBeInTheDocument();
    expect(screen.getByText(/Counter: 0/i)).toBeInTheDocument();
  });

  test('increments counter on button click', () => {
    render(<MyComponent data="Test Data" />);
    const button = screen.getByText(/Increment/i);
    fireEvent.click(button);
    expect(screen.getByText(/Counter: 1/i)).toBeInTheDocument();
  });

  test('renders passed data prop', () => {
    render(<MyComponent data="Custom Test Data" />);
    expect(screen.getByText(/Custom Test Data/i)).toBeInTheDocument();
  });

  test('uses default context value', () => {
    render(<MyComponent data="Test Data" />);
    expect(screen.getByText(/defaultContextValue/i)).toBeInTheDocument();
  });

  test('applies custom className', () => {
    render(<MyComponent data="Test Data" className="custom-class" />);
    const divElement = screen.getByText(
      /Hello from MyComponent!/i,
    ).parentElement;
    expect(divElement).toHaveClass('custom-class');
  });
});
```
