// DonutStatistic.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import DonutStatistic from './DonutStatisticCard';

const meta: Meta<typeof DonutStatistic> = {
  title: 'Component/DonutStatisticCard',
  component: DonutStatistic,
  parameters: {
    layout: 'centered',
  },
  tags: ['Visualization', 'Donut', 'Statistics'],
} satisfies Meta<typeof DonutStatistic>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FiftyPercent: Story = {
  args: {
    percentage: 50,
    color: 'blue',
    label: 'Storage Used',
  },
};

export const SeventyFivePercent: Story = {
  args: {
    percentage: 75,
    color: 'red',
    label: 'Battery Life',
  },
};

export const TwentyFivePercent: Story = {
  args: {
    percentage: 25,
    color: 'black',
    label: 'Tasks Completed',
  },
};
