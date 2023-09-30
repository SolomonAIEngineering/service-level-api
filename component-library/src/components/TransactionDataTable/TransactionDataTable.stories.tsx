/* eslint-disable import/order */
/* eslint-disable import/no-default-export */

import type { Meta, StoryObj } from '@storybook/react';

import { TransactionDataTable } from './TransactionDataTable';
import { BankAccount, CreditAccount, Transaction } from 'src/types';

const meta: Meta<typeof TransactionDataTable> = {
  title: 'Component/TransactionDataTable',
  component: TransactionDataTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Customize the controls for the properties of your component as needed
    // Example:
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof TransactionDataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TransactionDataTableDefault: Story = {
  args: {
    // Adjust the default properties for each variant of your component
    // primary: true,
    // label: 'TransactionDataTable',
    transactions: Array.from({ length: 20 }, () =>
      Transaction.randomInstance(),
    ).sort((a, b) => a.time!.getTime() - b.time!.getTime()),
  },
};

export const TransactionDataTableWithBankAccount: Story = {
  args: {
    // Adjust the default properties for each variant of your component
    // primary: true,
    // label: 'TransactionDataTable',
    transactions: Array.from({ length: 20 }, () =>
      Transaction.randomInstance(),
    ).sort((a, b) => a.time!.getTime() - b.time!.getTime()),
    account: BankAccount.randomInstance(),
  },
};

export const TransactionDataTableWithCreditAccount: Story = {
  args: {
    // Adjust the default properties for each variant of your component
    // primary: true,
    // label: 'TransactionDataTable',
    transactions: Array.from({ length: 20 }, () =>
      Transaction.randomInstance(),
    ).sort((a, b) => a.time!.getTime() - b.time!.getTime()),
    account: CreditAccount.randomInstance(),
  },
};
// ... Repeat for other variants like Secondary, Large, Small, etc.
