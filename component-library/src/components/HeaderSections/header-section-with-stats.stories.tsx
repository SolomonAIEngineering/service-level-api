import type { Meta, StoryObj } from "@storybook/react";
import HeaderSectionWithStats from "./header-section-with-stats";

const meta = {
  title: "HeaderSections/HeaderSectionWithStats",
  component: HeaderSectionWithStats,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    links: { control: "object" },
    stats: { control: "object" },
    title: { control: "text" },
    description: { control: "text" },
    bgImageSrc: { control: "text" },
  },
} satisfies Meta<typeof HeaderSectionWithStats>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    links: [
      { name: "Open roles", href: "#" },
      { name: "Internship program", href: "#" },
      { name: "Our values", href: "#" },
      { name: "Meet our leadership", href: "#" },
    ],
    stats: [
      { name: "Offices worldwide", value: "12" },
      { name: "Full-time colleagues", value: "300+" },
      { name: "Hours per week", value: "40" },
      { name: "Paid time off", value: "Unlimited" },
    ],
    title: "Work with us",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
    bgImageSrc:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply",
  },
};
