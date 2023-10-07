import type { Meta, StoryObj } from '@storybook/react';
import CalendarComponent from './CalendarCard';

const meta: Meta<typeof CalendarComponent> = {
  title: 'Component/CalendarCard',
  component: CalendarComponent,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    date: { control: 'date' }, // Adding date control for storybook
  },
} satisfies Meta<typeof CalendarComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// This story will display the current month by default
export const CurrentMonth: Story = {
  args: {
    date: new Date(),
  },
};

// Displaying calendar for another month, e.g., December 2022
export const December2022: Story = {
  args: {
    date: new Date(2022, 11, 1),
  },
};

// Another month, e.g., July 2023
export const July2023: Story = {
  args: {
    date: new Date(2023, 6, 1),
  },
};

// You can add more stories as you see fit.
