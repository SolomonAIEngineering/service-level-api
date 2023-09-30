/* eslint-disable import/order */
/* eslint-disable import/no-default-export */

import type { Meta, StoryObj } from '@storybook/react';

import { InvestmentSecurityCard } from './InvestmentSecurityCard';
import { InvestmentSecurity } from 'src/types';

const meta: Meta<typeof InvestmentSecurityCard> = {
  title: 'Component/InvestmentSecurityCard',
  component: InvestmentSecurityCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Customize the controls for the properties of your component as needed
    // Example:
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof InvestmentSecurityCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InvestmentSecurityCardDefault: Story = {
  args: {
    // Adjust the default properties for each variant of your component
    // primary: true,
    // label: 'InvestmentSecurityCard',
    security: InvestmentSecurity.randomInstance(),
  },
};

// ... Repeat for other variants like Secondary, Large, Small, etc.
