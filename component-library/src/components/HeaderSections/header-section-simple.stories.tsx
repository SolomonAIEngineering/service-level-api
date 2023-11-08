import type { Meta, StoryObj } from "@storybook/react";
import { HeaderSectionSimple } from "./header-section-simple";

const meta = {
  title: "HeaderSections/HeaderSectionSimple",
  component: HeaderSectionSimple,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    theme: {
      control: {
        type: "radio",
        options: ["light", "dark"],
      },
    },
  },
} satisfies Meta<typeof HeaderSectionSimple>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightTheme: Story = {
  args: {
    theme: "light",
    title: "Hello World",
    description: "This is a description",
  },
};

export const DarkTheme: Story = {
  args: {
    theme: "dark",
    title: "Hello World",
    description: "This is a description",
  },
};
