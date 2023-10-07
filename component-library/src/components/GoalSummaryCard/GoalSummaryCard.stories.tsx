// GoalSummaryCard.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import GoalSummaryCard from './GoalSummaryCard';

const meta: Meta<typeof GoalSummaryCard> = {
  title: 'Component/GoalSummaryCard',
  component: GoalSummaryCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['Card', 'Goal', 'Summary'],
} satisfies Meta<typeof GoalSummaryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CarGoal: Story = {
  args: {
    goal: {
      name: 'Buy a car',
      description: 'Save money to buy a new car',
      currentAmount: '5000',
      targetAmount: '20000',
      endDate: '2024-12-31',
      isCompleted: false,
    },
    currentAmount: 5000,
    targetAmount: 20000,
  },
};

export const VacationGoal: Story = {
  args: {
    goal: {
      name: 'Vacation',
      description: 'Save for a summer vacation in Europe',
      currentAmount: '2000',
      targetAmount: '8000',
      endDate: '2023-06-01',
      isCompleted: false,
    },
    currentAmount: 2000,
    targetAmount: 8000,
  },
};

// You can add more goals in a similar manner...
