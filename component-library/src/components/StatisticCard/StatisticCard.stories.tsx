// StatsCard.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import StatsCard from './StatisticCard';

const meta: Meta<typeof StatsCard> = {
  title: 'Component/StatsCard',
  component: StatsCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Customize the controls for the properties of your component as needed
    // Example:
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof StatsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicStats: Story = {
  args: {
    title: 'Basic Stats',
    stats: [
      { key: 'view', label: 'Views', value: 120 },
      { key: 'clicks', label: 'Clicks', value: 45 },
    ],
  },
};

export const UserStatistics: Story = {
  args: {
    title: 'User Statistics',
    stats: [
      { key: 'active', label: 'Active Users', value: 200 },
      { key: 'inactive', label: 'Inactive Users', value: 35 },
    ],
  },
};

export const SalesStatistics: Story = {
  args: {
    title: 'Sales Statistics',
    stats: [
      { key: 'total', label: 'Total Sales', value: '$5,000' },
      { key: 'returns', label: 'Returns', value: '$500' },
    ],
  },
};

export const PerformanceMetrics: Story = {
  args: {
    title: 'Performance Metrics',
    stats: [
      { key: 'loadTime', label: 'Load Time', value: '2s' },
      { key: 'uptime', label: 'Uptime', value: '99%' },
    ],
  },
};

export const EnvironmentalData: Story = {
  args: {
    title: 'Environmental Data',
    stats: [
      { key: 'temperature', label: 'Temperature', value: '22°C' },
      { key: 'humidity', label: 'Humidity', value: '80%' },
    ],
  },
};
