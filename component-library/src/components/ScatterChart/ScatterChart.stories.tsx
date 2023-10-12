import { Story, Meta } from '@storybook/react';

import CustomScatterChart, { ICustomScatterChartProps } from './ScatterChart'; // Update the import path accordingly

export default {
  title: 'Component/ScatterChart',
  component: CustomScatterChart,
} as Meta;

const Template: Story<ICustomScatterChartProps> = (args) => (
  <CustomScatterChart {...args} />
);

// Sample data
const data01 = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
];

const data02 = [
  { x: 200, y: 260, z: 240 },
  { x: 240, y: 290, z: 220 },
  { x: 190, y: 290, z: 250 },
  { x: 198, y: 250, z: 210 },
];

export const Default = Template.bind({});
Default.args = {
  data01: data01,
  data01Title: 'School A',
  data02: data02,
  label: 'Single School A',
};

export const SingleSchool = Template.bind({});
SingleSchool.args = {
  data01: data01,
  data01Title: 'Single School A',
  label: 'Single School A',
};
