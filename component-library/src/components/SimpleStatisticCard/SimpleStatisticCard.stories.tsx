// SimpleStatsCard.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { SimpleStatsCard } from './SimpleStatisticCard';

const meta: Meta<typeof SimpleStatsCard> = {
  title: 'Component/SimpleStatsCard',
  component: SimpleStatsCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Customize the controls for the properties of your component as needed
    // Example:
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof SimpleStatsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DailyUsers: Story = {
  args: {
    title: 'Daily Users',
    metric: 452,
    subtext: 'Today',
  },
};

export const MonthlySales: Story = {
  args: {
    title: 'Monthly Sales',
    metric: '$12,500',
    subtext: 'This Month',
  },
};

export const ActiveSubscriptions: Story = {
  args: {
    title: 'Active Subscriptions',
    metric: 1250,
    subtext: 'Active Subs',
  },
};

export const BounceRate: Story = {
  args: {
    title: 'Bounce Rate',
    metric: '23%',
    subtext: 'Past 7 days',
  },
};

export const TotalDownloads: Story = {
  args: {
    title: 'Total Downloads',
    metric: '52K',
    subtext: 'Since Launch',
  },
};
