import { Story, Meta } from '@storybook/react';

import CustomPieChart, { ICustomPieChartProps } from './PieChart'; // Update the import path accordingly

export default {
  title: 'Component/PieChart',
  component: CustomPieChart,
} as Meta;

const Template: Story<ICustomPieChartProps> = (args) => (
  <CustomPieChart {...args} />
);

// Sample data
const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
];

const data02 = [
  { name: 'Group A', value: 200 },
  { name: 'Group B', value: 280 },
  { name: 'Group C', value: 220 },
];

export const Primary = Template.bind({});
Primary.args = {
  data01: data01,
  data02: data02,
};

export const SinglePie = Template.bind({});
SinglePie.args = {
  data01: data01,
};
