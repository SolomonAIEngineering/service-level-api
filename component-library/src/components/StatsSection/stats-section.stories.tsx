import type { Meta, StoryObj } from "@storybook/react";
import StatsSection from "./stats-section";

const meta = {
  title: "StatsSection/StatsSection",
  component: StatsSection,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof StatsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StatsSectionLeftAligned: Story = {
  args: {
    theme: "light",
    stats: [
      { id: 1, name: "Transactions every 24 hours", value: "44 million" },
      { id: 2, name: "Assets under holding", value: "$119 trillion" },
      { id: 3, name: "New users annually", value: "46,000" },
    ],
  },
};

export const StatsSectionCenterAligned: Story = {
  args: {
    theme: "dark",
    stats: [
      { id: 1, name: "Transactions every 24 hours", value: "44 million" },
      { id: 2, name: "Assets under holding", value: "$119 trillion" },
      { id: 3, name: "New users annually", value: "46,000" },
    ],
  },
};
