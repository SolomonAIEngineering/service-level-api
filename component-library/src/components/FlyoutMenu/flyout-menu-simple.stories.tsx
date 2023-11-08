import type { Meta, StoryObj } from "@storybook/react";
import { FlyoutMenuOption, FlyoutMenuSimple } from "./flyout-menu-simple";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "FlyoutMenu/FlyoutMenuSimple",
  component: FlyoutMenuSimple,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof FlyoutMenuSimple>;

const solutions: FlyoutMenuOption[] = [
  { name: "Analytics", href: "#" },
  { name: "Engagement", href: "#" },
  { name: "Security", href: "#" },
  { name: "Integrations", href: "#" },
  { name: "Automations", href: "#" },
  { name: "Reports", href: "#" },
];

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    options: solutions,
    title: "Open",
  },
};

export const Secondary: Story = {
  args: {
    options: solutions,
    title: "Open",
  },
};
