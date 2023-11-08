import type { Meta, StoryObj } from "@storybook/react";
import HeaderSectionWithEyebrow from "./header-section-with-eyebrow";

const meta = {
  title: "HeaderSections/HeaderSectionWithEyebrow",
  component: HeaderSectionWithEyebrow,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
    description: { control: "text" },
    hasPadding: { control: "boolean" },
    centered: { control: "boolean" },
  },
} satisfies Meta<typeof HeaderSectionWithEyebrow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithPaddingAndCentered: Story = {
  args: {
    title: "Support center",
    subtitle: "Get the help you need",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
    hasPadding: true,
    centered: true,
  },
};

export const WithoutPaddingAndNotCentered: Story = {
  args: {
    title: "Support center",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
    hasPadding: false,
    centered: false,
  },
};
