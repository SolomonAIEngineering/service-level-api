// StatsSectionWithTimeline.stories.tsx

import { Meta, Story } from '@storybook/react';
import StatsSectionWithTimeline, {
  StatsSectionWithTimelineProps,
} from './stats-section-with-timeline';

export default {
  title: 'StatsSection/StatsSectionWithTimeline',
  component: StatsSectionWithTimeline,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<StatsSectionWithTimelineProps> = (args) => (
  <StatsSectionWithTimeline {...args} />
);

export const StatsSectionWithTimelineDefaultView = Template.bind({});
StatsSectionWithTimelineDefaultView.args = {
  timeline: [
    {
      name: 'Founded company',
      description:
        'Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.',
      date: 'Aug 2021',
      dateTime: '2021-08',
    },
    {
      name: 'Secured $65m in funding',
      description:
        'Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.',
      date: 'Dec 2021',
      dateTime: '2021-12',
    },
    {
      name: 'Released beta',
      description:
        'Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.',
      date: 'Feb 2022',
      dateTime: '2022-02',
    },
    {
      name: 'Global launch of product',
      description:
        'Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.',
      date: 'Dec 2022',
      dateTime: '2022-12',
    },
  ],
};
