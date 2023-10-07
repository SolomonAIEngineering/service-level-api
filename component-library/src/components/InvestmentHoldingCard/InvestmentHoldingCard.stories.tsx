/* eslint-disable import/order */
/* eslint-disable import/no-default-export */

import type { Meta, StoryObj } from '@storybook/react';

import { InvestmentHoldingCard } from './InvestmentHoldingCard';
import { InvesmentHoldingClass } from 'src/index';

const meta: Meta<typeof InvestmentHoldingCard> = {
  title: 'Component/InvestmentHoldingCard',
  component: InvestmentHoldingCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Customize the controls for the properties of your component as needed
    // Example:
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof InvestmentHoldingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InvesmentHoldingDefault: Story = {
  args: {
    // Adjust the default properties for each variant of your component
    // primary: true,
    // label: 'InvestmentHoldingCard',
    holdings: Array.from({ length: 20 }, () =>
      InvesmentHoldingClass.randomInstance(),
    ),
  },
};

export const InvesmentHoldingWithAccountBalance: Story = {
  args: {
    // Adjust the default properties for each variant of your component
    // primary: true,
    // label: 'InvestmentHoldingCard',
    holdings: Array.from({ length: 20 }, () =>
      InvesmentHoldingClass.randomInstance(),
    ),
    historicalAccountBalance: Array.from({ length: 20 }, () =>
      InvesmentHoldingClass.randomInstance(),
    ),
  },
};

// ... Repeat for other variants like Secondary, Large, Small, etc.
