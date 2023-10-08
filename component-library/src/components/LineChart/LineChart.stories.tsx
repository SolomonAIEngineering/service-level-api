import { Story, Meta } from '@storybook/react';
import CustomLineChart, { CustomLineChartProps } from './LineChart';

export default {
  title: 'Component/LineChart',
  component: CustomLineChart,
} as Meta;

const Template: Story<CustomLineChartProps> = (args) => (
  <CustomLineChart {...args} />
);

export const BasicLineChart = Template.bind({});
BasicLineChart.args = {
  data: [
    { name: 'Jan', uv: 4000, pv: 2400 },
    { name: 'Feb', uv: 3000, pv: 2200 },
    { name: 'Mar', uv: 2000 },
  ],
  className:
    'border rounded-2xl shadown-md w-full sm:min-w-[250px] md:min-w-[300px] m-4',
};

export const SingleDataLineChart = Template.bind({});
SingleDataLineChart.args = {
  data: [
    { name: 'Week1', uv: 2500 },
    { name: 'Week2', uv: 3000 },
    { name: 'Week3', uv: 3200 },
  ],
};

export const CombinedLineChart = Template.bind({});
CombinedLineChart.args = {
  data: [
    { name: 'Q1', uv: 1000, pv: 800 },
    { name: 'Q2', uv: 1200, pv: 900 },
  ],
};

export const GradualIncrease = Template.bind({});
GradualIncrease.args = {
  data: [
    { name: 'Mon', uv: 200, pv: 100 },
    { name: 'Tue', uv: 250, pv: 150 },
    { name: 'Wed', uv: 300, pv: 175 },
  ],
};

export const NoSecondaryData = Template.bind({});
NoSecondaryData.args = {
  data: [
    { name: 'Task1', uv: 5 },
    { name: 'Task2', uv: 10 },
    { name: 'Task3', uv: 15 },
  ],
};
