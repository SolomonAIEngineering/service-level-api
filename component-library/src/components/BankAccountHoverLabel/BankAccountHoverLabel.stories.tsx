/* eslint-disable import/order */
/* eslint-disable import/no-default-export */

import type { Meta, StoryObj } from '@storybook/react';

import { BankAccountHoverLabel } from './BankAccountHoverLabel';
import { AccountBalanceHistory, BankAccount } from '../..';

const meta: Meta<typeof BankAccountHoverLabel> = {
  title: 'Component/BankAccountHoverLabel',
  component: BankAccountHoverLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Customize the controls for the properties of your component as needed
    // Example:
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof BankAccountHoverLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RegularHoverLabel: Story = {
  args: {
    // Adjust the default properties for each variant of your component
    // primary: true,
    // label: 'BankAccountHoverCard',
    bankAccount: BankAccount.randomInstance(),
    enableDemoMode: false,
  },
};

export const RegularHoverLabelWithHistoricalAccountBalance: Story = {
  args: {
    bankAccount: BankAccount.randomInstance(),
    historicalAccountBalance: Array.from({ length: 20 }, () =>
      AccountBalanceHistory.randomInstance(),
    ).sort((a, b) => a.time!.getTime() - b.time!.getTime()),
  },
};

// ... Repeat for other variants like Secondary, Large, Small, etc.
