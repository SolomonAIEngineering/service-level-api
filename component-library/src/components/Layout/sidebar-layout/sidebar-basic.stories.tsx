import { Story, Meta } from '@storybook/react';

import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import { SidebarBasicProps, SidebarBasic } from './sidebar-basic';
import { SidebarSimple } from './sidebar-simple';

export default {
  title: 'SidebarLayout/SidebarBasic',
  component: SidebarSimple,
} as Meta;

const Template: Story<SidebarBasicProps> = (args) => <SidebarBasic {...args} />;

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
];

export const DefaultSidebarBasic = Template.bind({});
DefaultSidebarBasic.args = {
  navigationItems: navigation,
  userName: 'John Doe',
  userProfileImage: 'http://placekitten.com/200/200',
};

// If you have other variants of the Example component, you can add them in a similar manner to how the PanelLayout variations were added.
