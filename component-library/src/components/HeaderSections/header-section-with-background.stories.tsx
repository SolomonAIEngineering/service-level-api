import { HeaderSectionWithBackground } from "./header-section-with-background";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "HeaderSections/HeaderSectionWithBackground",
  component: HeaderSectionWithBackground,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    alignment: {
      control: {
        type: "radio",
        options: ["left", "center"],
      },
    },
    backgroundImage: { control: "text" },
    title: { control: "text" },
    description: { control: "text" },
  },
} satisfies Meta<typeof HeaderSectionWithBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LeftAligned: Story = {
  args: {
    alignment: "left",
    backgroundImage:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply",
    title: "Support center",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
  },
};

export const CenterAligned: Story = {
  args: {
    alignment: "center",
    backgroundImage:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply",
    title: "Support center",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
  },
};
