import type { Meta, Story } from "@storybook/react";
import StatsSectionStackedGrid from "./stats-section-stacked-grid";

const meta: Meta = {
  title: "StatsSection/StatsSectionStackedGrid",
  component: StatsSectionStackedGrid,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    theme: {
      control: {
        type: "radio",
        options: ["light", "dark"],
      },
    },
    stats: {
      control: "object",
    },
    title: {
      control: "text",
    },
    description: {
      control: "text",
    },
  },
};

export default meta;

export const StatsSectionStackedGridLightTheme: Story = (args) => (
  <StatsSectionStackedGrid {...args} />
);
StatsSectionStackedGridLightTheme.args = {
  theme: "light",
  stats: [
    { id: 1, name: "Transactions every 24 hours", value: "44 million" },
    { id: 2, name: "Assets under holding", value: "$119 trillion" },
    { id: 3, name: "New users annually", value: "46,000" },
  ],
};

export const StatsSectionStackedGridDarkTheme: Story = (args) => (
  <StatsSectionStackedGrid {...args} />
);
StatsSectionStackedGridDarkTheme.args = {
  theme: "dark",
  stats: [
    { id: 1, name: "Transactions every 24 hours", value: "44 million" },
    { id: 2, name: "Assets under holding", value: "$119 trillion" },
    { id: 3, name: "New users annually", value: "46,000" },
  ],
};
