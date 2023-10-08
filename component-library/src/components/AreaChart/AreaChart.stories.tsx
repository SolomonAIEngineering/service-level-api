import { Story, Meta } from '@storybook/react';
import CustomAreaChart, { CustomAreaChartProps } from './AreaChart';

export default {
  title: 'Component/AreaChart',
  component: CustomAreaChart,
} as Meta;

const Template: Story<CustomAreaChartProps> = (args) => (
  <CustomAreaChart {...args} />
);

export const Example1 = Template.bind({});
Example1.args = {
  data: [
    { name: 'Jan', uv: 4000 },
    { name: 'Feb', uv: 3000 },
    // ... more data
  ],
  className:
    'border rounded-2xl shadown-md p-5 w-full sm:min-w-[250px] md:min-w-[300px] pt-[15%]',
};

export const Example2 = Template.bind({});
Example2.args = {
  data: [
    { name: 'Week1', uv: 2500, pv: 1600 },
    { name: 'Week2', uv: 3500, pv: 2400 },
    // ... more data
  ],
};

export const Example3 = Template.bind({});
Example3.args = {
  data: [
    { name: 'Day1', uv: 500, pv: 400 },
    { name: 'Day2', uv: 600, pv: 500 },
    // ... more data
  ],
  className: 'border-2 border-blue-500',
};

export const Example4 = Template.bind({});
Example4.args = {
  data: [
    { name: 'Q1', uv: 10000, pv: 8000 },
    { name: 'Q2', uv: 11000, pv: 8500 },
    // ... more data
  ],
};

export const Example5 = Template.bind({});
Example5.args = {
  data: [
    { name: 'Mon', uv: 200, pv: 100 },
    { name: 'Tue', uv: 300, pv: 150 },
    // ... more data
  ],
  className: 'shadow-lg',
};
