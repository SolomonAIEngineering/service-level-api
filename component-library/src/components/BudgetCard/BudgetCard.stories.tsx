import type { Meta, StoryObj } from '@storybook/react';
import BudgetComponent from './BudgetCard';

const meta: Meta<typeof BudgetComponent> = {
  title: 'Component/BudgetCard',
  component: BudgetComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Customize the controls for the properties of your component as needed
    // Example:
    // startDate: { control: 'date' },
  },
} satisfies Meta<typeof BudgetComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VacationBudget: Story = {
  args: {
    budget: {
      name: 'Vacation Trip',
      description: 'Budget for the end of year vacation trip',
      startDate: '2023-01-01',
      endDate: '2023-12-31',
      category: {
        name: 'Entertainment',
        description: 'Expenses related to entertainment',
        subcategories: ['Travel', 'Movies', 'Sports'],
      },
    },
  },
};

export const HomeBudget: Story = {
  args: {
    budget: {
      name: 'Home Renovation',
      description: 'Budget for renovating the house',
      startDate: '2023-02-01',
      endDate: '2023-08-31',
      category: {
        name: 'Housing',
        description: 'Expenses related to housing',
        subcategories: ['Rent', 'Utilities', 'Home Maintenance'],
      },
    },
  },
};

export const EducationBudget: Story = {
  args: {
    budget: {
      name: 'College Tuition',
      description: 'Budget for college tuition fees',
      startDate: '2023-06-01',
      endDate: '2024-05-31',
      category: {
        name: 'Education',
        description: 'Expenses related to education',
        subcategories: ['Tuition Fee', 'Books', 'Accommodation'],
      },
    },
  },
};

// You can continue to add more stories as required.
