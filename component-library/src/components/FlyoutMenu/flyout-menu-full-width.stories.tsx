import type { Meta, StoryObj } from "@storybook/react";
import {
  ChartPieIcon,
  SquaresPlusIcon,
  CursorArrowRaysIcon,
  ArrowPathIcon,
  FingerPrintIcon,
  DocumentChartBarIcon,
  PlayCircleIcon,
  PhoneIcon,
  RectangleGroupIcon,
} from "@heroicons/react/24/outline";
import { FlyoutMenuFullWidth } from "./flyout-menu-full-width";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "FlyoutMenu/FlyoutMenuFullWidth",
  component: FlyoutMenuFullWidth,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof FlyoutMenuFullWidth>;

const solutions = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools and find out expectations",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers with our engagement tool",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Reports",
    description: "Edit, manage and create newly informed decisions",
    href: "#",
    icon: DocumentChartBarIcon,
  },
];

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
  { name: "View all products", href: "#", icon: RectangleGroupIcon },
];

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    options: solutions,
    title: "Open",
    footerOptions: callsToAction,
  },
};

export const WithFooterOption: Story = {
  args: {
    options: solutions,
    title: "Open",
    footerOptions: callsToAction,
  },
};
