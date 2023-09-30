/* eslint-disable import/order */
/* eslint-disable import/no-default-export */

import type { Meta, StoryObj } from '@storybook/react';

import { StudentLoanAccountCard } from './StudentLoanAccountCard';
import { StudentLoanAccount } from 'src/types';

const meta: Meta<typeof StudentLoanAccountCard> = {
  title: 'Component/StudentLoanAccountCard',
  component: StudentLoanAccountCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Customize the controls for the properties of your component as needed
    // Example:
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof StudentLoanAccountCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StudentLoanAccountDefault: Story = {
  args: {
    // Adjust the default properties for each variant of your component
    // primary: true,
    // label: 'StudentLoanAccountCard',
    studentLoanAccount: StudentLoanAccount.randomInstance(),
  },
};
