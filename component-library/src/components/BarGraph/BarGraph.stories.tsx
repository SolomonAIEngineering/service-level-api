import type { Meta, Story } from '@storybook/react';
import { BarGraph, BarGraphProps } from './BarGraph';

const meta: Meta<BarGraphProps> = {
  title: 'Component/BarGraph',
  component: BarGraph,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    // Customize the controls for the properties of your component as needed
    // Example:
    // backgroundColor: { control: 'color' },
  },
};

export default meta;

const Template: Story<BarGraphProps> = (args) => <BarGraph {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Bar Graph',
  data: [
    { name: 'A', total: 100 },
    { name: 'B', total: 200 },
    { name: 'C', total: 300 },
    { name: 'D', total: 400 },
  ],
};
