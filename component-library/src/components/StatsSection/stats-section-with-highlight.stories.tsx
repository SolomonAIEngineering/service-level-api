// StatsSectionHighlight.stories.tsx

import { Meta, Story } from "@storybook/react";
import StatsSectionHighlight, {
  StatsSectionHighlightProps,
} from "./stats-section-with-highlight";

export default {
  title: "StatsSection/StatsSectionHighlight",
  component: StatsSectionHighlight,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

const Template: Story<StatsSectionHighlightProps> = (args) => (
  <StatsSectionHighlight {...args} />
);

export const StatsSectionHighlightDefaultView = Template.bind({});
StatsSectionHighlightDefaultView.args = {
  mainTitle:
    "We approach the workplace as something that adds to our lives and adds value to world.",
  mainDescription:
    "Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod lacus. Est non placerat nam arcu. Cras purus nibh cursus sit eu in id. Integer vel nibh.",
  stats: [
    {
      title: "Users on the platform",
      value: "250k",
      description: "Vel labore deleniti veniam consequuntur sunt nobis.",
      bgColor: "bg-gray-50",
      textColor: "text-gray-900",
      secondaryTextColor: "text-gray-600",
    },
    {
      title:
        "We’re proud that our customers have made over $8 billion in total revenue.",
      value: "$8.9 billion",
      description:
        "Eu duis porta aliquam ornare. Elementum eget magna egestas.",
      bgColor: "bg-gray-900",
      textColor: "text-white",
      secondaryTextColor: "text-gray-400",
    },
    {
      title: "Transactions this year",
      value: "401,093",
      description:
        "Eu duis porta aliquam ornare. Elementum eget magna egestas. Eu duis porta aliquam ornare.",
      bgColor: "bg-indigo-600",
      textColor: "text-white",
      secondaryTextColor: "text-indigo-200",
    },
  ],
};
