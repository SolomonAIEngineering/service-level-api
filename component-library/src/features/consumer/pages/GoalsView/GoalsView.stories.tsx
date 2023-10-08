/* eslint-disable import/order */
/* eslint-disable import/no-default-export */

import type { Meta, StoryObj } from '@storybook/react';

import { GoalsView } from './GoalsView';
import { SmartGoalClass, TransactionClass } from 'src/types';
import { Building, LampDesk, Mic2, BriefcaseIcon } from 'lucide-react'; // Using react-icons for demonstration purposes
import { TimelineEvent } from './GoalTimeline';

const meta: Meta<typeof GoalsView> = {
  title: 'Features/GoalsView',
  component: GoalsView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Customize the controls for the properties of your component as needed
    // Example:
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof GoalsView>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleTimeline: TimelineEvent[] = [
  {
    id: '1',
    icon: <Building />,
    content: 'Opened a new bank account at',
    href: 'https://examplebank.com',
    target: 'Example Bank',
    datetime: '2023-01-01T12:00:00Z',
    date: 'January 1, 2023',
  },
  {
    id: '2',
    icon: <LampDesk />,
    content: 'Applied for a credit card at',
    href: 'https://creditcard.example.com',
    target: 'CreditCard Co.',
    datetime: '2023-01-15T12:00:00Z',
    date: 'January 15, 2023',
  },
  {
    id: '3',
    icon: <Mic2 />,
    content: 'Made a large purchase at',
    href: 'https://store.example.com',
    target: 'Example Store',
    datetime: '2023-01-20T12:00:00Z',
    date: 'January 20, 2023',
  },
  {
    id: '4',
    icon: <BriefcaseIcon />,
    content: 'Received a gift voucher from',
    href: 'https://gift.example.com',
    target: 'GiftShop',
    datetime: '2023-02-01T12:00:00Z',
    date: 'February 1, 2023',
  },
];

export const Primary: Story = {
  args: {
    // Adjust the default properties for each variant of your component
    // primary: true,
    // label: 'GoalsView',
    goal: SmartGoalClass.randomInstance(),
    timeline: sampleTimeline,
    transactions: Array.from({ length: 20 }, () =>
      TransactionClass.randomInstance(),
    ).sort((a, b) => new Date(a.time!).getTime() - new Date(b.time!).getTime()),
    addBudgetCallback: () => {},
    addMilestoneCallback: () => {},
  },
};

// ... Repeat for other variants like Secondary, Large, Small, etc.
