/* eslint-disable import/order */
/* eslint-disable import/no-default-export */

import type { Meta, StoryObj } from '@storybook/react';

import { HistoricalAccountBalanceChart } from './HistoricalAccountBalanceChart';
import { AccountBalanceHistory } from 'src/types';

const meta: Meta<typeof HistoricalAccountBalanceChart> = {
  title: 'Component/HistoricalAccountBalanceChart',
  component: HistoricalAccountBalanceChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Customize the controls for the properties of your component as needed
    // Example:
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof HistoricalAccountBalanceChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    historicalAccountBalance: Array.from({ length: 20 }, () =>
      AccountBalanceHistory.randomInstance(),
    ).sort((a, b) => a.time!.getTime() - b.time!.getTime()),
  },
};
