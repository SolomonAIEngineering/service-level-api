// TransactionCard.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import TransactionCard from './TransactionCard';

const meta: Meta<typeof TransactionCard> = {
  title: 'Component/TransactionCard',
  component: TransactionCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TransactionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SampleTransactions: Story = {
  args: {
    transactions: [
      {
        transactionID: 'TX12345',
        amount: '$120',
        date: '12/04/2023',
        description: 'Purchase at Amazon',
      },
      {
        transactionID: 'TX12346',
        amount: '-$50',
        date: '13/04/2023',
        description: 'Refund from Amazon',
      },
      {
        transactionID: 'TX12347',
        amount: '$250',
        date: '14/04/2023',
        description: 'Purchase at Apple Store',
      },
    ],
  },
};

export const AnotherTransactionsSample: Story = {
  args: {
    transactions: [
      {
        transactionID: 'TX12348',
        amount: '$20',
        date: '15/04/2023',
        description: 'Coffee at Starbucks',
      },
      {
        transactionID: 'TX12349',
        amount: '$75',
        date: '16/04/2023',
        description: 'Dinner at Olive Garden',
      },
      {
        transactionID: 'TX12350',
        amount: '$10',
        date: '17/04/2023',
        description: 'Online donation',
      },
    ],
  },
};
