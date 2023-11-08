// StatsSectionHighlight.tsx

import React from "react";
import { Card } from "../ui/card";

export type StatBlock = {
  title: string;
  value: string;
  description: string;
  bgColor: string;
  textColor: string;
  secondaryTextColor: string;
};

export interface StatsSectionHighlightProps {
  mainTitle: string;
  mainDescription: string;
  stats: StatBlock[];
}

const StatsSectionHighlight: React.FC<StatsSectionHighlightProps> = ({
  mainTitle,
  mainDescription,
  stats,
}) => {
  return (
    <Card className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {mainTitle}
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-600">
            {mainDescription}
          </p>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl ${stat.bgColor} p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start`}
            >
              <p
                className={`flex-none text-3xl font-bold tracking-tight ${stat.textColor}`}
              >
                {stat.value}
              </p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p
                  className={`text-lg font-semibold tracking-tight ${stat.textColor}`}
                >
                  {stat.title}
                </p>
                <p
                  className={`mt-2 text-base leading-7 ${stat.secondaryTextColor}`}
                >
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default StatsSectionHighlight;
