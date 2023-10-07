import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';

const meta: Meta<typeof Container> = {
  title: 'Component/Container',
  component: Container,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'This is container content', // Default content for the stories
  },
  argTypes: {
    maxWidth: {
      control: {
        type: 'select',
        options: [
          'max-w-xs',
          'max-w-sm',
          'max-w-md',
          'max-w-lg',
          'max-w-xl',
          'max-w-2xl',
          'max-w-3xl',
          'max-w-4xl',
          'max-w-5xl',
          'max-w-6xl',
          'max-w-7xl',
        ],
      },
    },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SmallWidth: Story = {
  args: {
    maxWidth: 'max-w-xs',
  },
};

export const MediumWidth: Story = {
  args: {
    maxWidth: 'max-w-md',
  },
};

export const LargeWidth: Story = {
  args: {
    maxWidth: 'max-w-7xl',
  },
};

// You can add more stories as you see fit.
