/* eslint-disable import/order */
/* eslint-disable import/no-default-export */

import type { Meta, StoryObj } from '@storybook/react';

import { InvestmentAccountCard } from './InvestmentAccountCard';
import { AccountBalanceHistoryClass, InvestmentAccountClass } from 'src/index';

const meta: Meta<typeof InvestmentAccountCard> = {
  title: 'Component/InvestmentAccountCard',
  component: InvestmentAccountCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Customize the controls for the properties of your component as needed
    // Example:
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof InvestmentAccountCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithoutBalance: Story = {
  args: {
    // Adjust the default properties for each variant of your component
    // primary: true,
    // label: 'InvestmentAccountCard',
    investmentAccount: InvestmentAccountClass.randomInstance(),
  },
};

export const WithAccountBalance: Story = {
  args: {
    // Adjust the default properties for each variant of your component
    // primary: true,
    // label: 'InvestmentAccountCard',
    investmentAccount: InvestmentAccountClass.randomInstance(),
    historicalAccountBalance: Array.from({ length: 20 }, () =>
      AccountBalanceHistoryClass.randomInstance(),
    ).sort((a, b) => new Date(a.time!).getTime() - new Date(b.time!).getTime()),
  },
};

// ... Repeat for other variants like Secondary, Large, Small, etc.
