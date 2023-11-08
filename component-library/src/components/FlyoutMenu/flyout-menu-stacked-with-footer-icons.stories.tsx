import { Story, Meta } from '@storybook/react';
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline';
import { PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import {
  FlyoutMenuWithStackedFooterIcons,
  FooterOption,
  Options,
} from './flyout-menu-stacked-with-footer-icons';

export default {
  title: 'FlyoutMenu/FlyoutMenuWithStackedFooterIcons',
  component: FlyoutMenuWithStackedFooterIcons,
} as Meta;

// Define solutions and callsToAction data using the defined types
const solutions: Options[] = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of your traffic',
    href: '#',
    icon: ChartPieIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Security',
    description: "Your customers' data will be safe and secure",
    href: '#',
    icon: FingerPrintIcon,
  },
  {
    name: 'Integrations',
    description: 'Connect with third-party tools',
    href: '#',
    icon: SquaresPlusIcon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will convert',
    href: '#',
    icon: ArrowPathIcon,
  },
];

const callsToAction: FooterOption[] = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
];

const Template: Story = (args) => (
  <FlyoutMenuWithStackedFooterIcons
    options={solutions}
    footerOptions={callsToAction}
    title={'calling to action'}
    {...args}
  />
);

export const Default = Template.bind({});
Default.args = {
  solutions: [
    {
      name: 'Analytics',
      description: 'Get a better understanding of your traffic',
      href: '#',
      icon: ChartPieIcon,
    },
    {
      name: 'Engagement',
      description: 'Speak directly to your customers',
      href: '#',
      icon: CursorArrowRaysIcon,
    },
    {
      name: 'Security',
      description: "Your customers' data will be safe and secure",
      href: '#',
      icon: FingerPrintIcon,
    },
    {
      name: 'Integrations',
      description: 'Connect with third-party tools',
      href: '#',
      icon: SquaresPlusIcon,
    },
    {
      name: 'Automations',
      description: 'Build strategic funnels that will convert',
      href: '#',
      icon: ArrowPathIcon,
    },
  ],
  callsToAction: [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
  ],
};
