/* eslint-disable import/order */
/* eslint-disable import/no-default-export */

import type { Meta, StoryObj } from '@storybook/react';

import { InvestmentAccountHoverLabel } from './InvestmentAccountHoverLabel';
import { AccountBalanceHistoryClass, InvestmentAccountClass } from 'src/index';

const meta: Meta<typeof InvestmentAccountHoverLabel> = {
  title: 'Component/InvestmentAccountHoverLabel',
  component: InvestmentAccountHoverLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Customize the controls for the properties of your component as needed
    // Example:
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof InvestmentAccountHoverLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InvestmentAccountDefault: Story = {
  args: {
    // Adjust the default properties for each variant of your component
    // primary: true,
    // label: 'InvestmentAccountHoverLabel',
    investmentAccount: InvestmentAccountClass.randomInstance(),
    enableDemoMode: false,
  },
};

export const InvestmentAccountWithBalance: Story = {
  args: {
    investmentAccount: InvestmentAccountClass.randomInstance(),
    historicalAccountBalance: Array.from({ length: 20 }, () =>
      AccountBalanceHistoryClass.randomInstance(),
    ).sort((a, b) => new Date(a.time!).getTime() - new Date(b.time!).getTime()),
  },
};

// ... Repeat for other variants like Secondary, Large, Small, etc.
