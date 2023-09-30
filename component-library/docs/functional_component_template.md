# Functional Component Templates

## Simple Functional Component

```typescript
import React, {
  useState,
  useRef,
  useEffect,
  useContext,
  ReactNode,
} from 'react';

/** @type {React.Context<string>} */
const MyContext = createContext<string>('defaultContextValue');

/**
 * @typedef {Object} Props
 * @template T
 * @property {T} data - Generic prop to handle various data types.
 * @property {string} [greeting='Hello'] - An optional greeting string.
 */

/**
 * An advanced functional component written in TypeScript with TSDoc annotations.
 *
 * @function MyComponent
 * @param {Props<T>} props
 * @returns {ReactNode}
 *
 * @example
 * <MyComponent data="SomeData" />
 *
 * @description
 * This component showcases various features like context usage,
 * dynamic styles, generic props, and hooks.
 */
function MyComponent<T>({ greeting = 'Hello', data }: Props<T>): ReactNode {
  const [counter, setCounter] = useState<number>(0);
  const [backgroundColor, setBackgroundColor] = useState<string>('white');
  const myRef = useRef<HTMLDivElement>(null);
  const contextValue = useContext(MyContext);

  useEffect(() => {
    // Equivalent to componentDidMount and componentDidUpdate:
    if (myRef.current) {
      myRef.current.focus();
    }

    // Equivalent to componentWillUnmount:
    return () => {
      // Cleanup code here if needed.
    };
  }, []);

  const incrementCounter = () => {
    setCounter((prev) => prev + 1);
  };

  const changeBackgroundColor = (color: string) => {
    setBackgroundColor(color);
  };

  return (
    <div ref={myRef} style={{ backgroundColor }}>
      {greeting} from MyComponent! Context Value: {contextValue}
      <p>Counter: {counter}</p>
      <p>Data Prop Value: {data}</p>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}

export default MyComponent;
```

- Functional Component with Generics: We use TypeScript generics in the function signature.
- useState: This hook replaces this.state and this.setState from class components.
- useRef: This hook replaces React.createRef for obtaining a reference to a DOM element.
- useEffect: This hook can mimic various lifecycle methods. The above usage mimics both componentDidMount and componentWillUnmount.
- useContext: This hook is a simpler way to consume context values.

Functional components, combined with hooks, provide a more concise way to write React components and are currently recommended by the React team

### Storybook

```tsx
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import MyComponent from './MyComponent'; // Adjust path accordingly

export default {
  title: 'MyComponent',
  component: MyComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
    greeting: { control: 'text' },
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

This creates a basic story where you can adjust the greeting prop and see changes live. It assumes you're using Storybook 6 or above

### Testing

Using @testing-library/react and Jest:

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
});
```

Make sure you have the following libraries installed:

@storybook/react for Storybook.
@testing-library/react and jest for testing.

### Running

Run your tests typically with:

```bash
npm test
```

and start storybookd using

```bash
npm run storybook
```
