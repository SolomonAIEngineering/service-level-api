import type { Meta, StoryObj } from '@storybook/react';
import {
  CalendarIcon,
  TicketIcon,
  MegaphoneIcon,
  ClockIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';
import NotificationBanner from './notification-banner';

const meta = {
  title: 'Banner/NotificationBanner',
  component: NotificationBanner,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof NotificationBanner>;

const notifications = [
  {
    message: 'GeneriCon 2023',
    link: '#',
    eventDate: 'June 7 – 9',
    location: 'Denver',
    bgColor: 'bg-gray-900',
    textColor: 'text-white',
    icon: CalendarIcon,
  },
  {
    message: 'Maintenance Schedule',
    link: '#',
    eventDate: 'August 1 – 3',
    location: 'Systemwide',
    bgColor: 'bg-red-600',
    textColor: 'text-white',
    icon: ClockIcon,
  },
  {
    message: 'Winter Sale!',
    link: '#',
    eventDate: 'December 1 – 25',
    location: 'Online Shop',
    bgColor: 'bg-green-500',
    textColor: 'text-white',
    icon: TicketIcon,
  },
  {
    message: 'Join Our Webinar',
    link: '#',
    eventDate: 'September 12',
    location: 'Zoom',
    bgColor: 'bg-blue-600',
    textColor: 'text-white',
    icon: MegaphoneIcon,
  },
  {
    message: 'Important Announcement',
    link: '#',
    eventDate: 'May 5',
    location: 'Website',
    bgColor: 'bg-orange-500',
    textColor: 'text-black',
    icon: InformationCircleIcon,
  },
];

export default meta;
type Story = StoryObj<typeof meta>;

export const GeneriCon = {
  args: notifications[0],
} satisfies Story;

export const FeatureRelease = {
  args: notifications[1],
} satisfies Story;

export const Maintenance = {
  args: notifications[2],
} satisfies Story;

export const WinterSale = {
  args: notifications[3],
} satisfies Story;

export const Webinar = {
  args: notifications[4],
} satisfies Story;

export const LocationChange = {
  args: notifications[5],
} satisfies Story;

export const SpecialEvent = {
  args: notifications[6],
} satisfies Story;

export const ImportantAnnouncement = {
  args: notifications[7],
} satisfies Story;
