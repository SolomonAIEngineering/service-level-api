import React from "react";
import { Card } from "../ui/card";

type Stat = {
  id: number;
  name: string;
  value: string;
};

interface StatsSectionStackedGridProps {
  theme?: "light" | "dark";
  stats?: Stat[];
  title?: string;
  description?: string;
}

export const StatsSectionStackedGrid: React.FC<
  StatsSectionStackedGridProps
> = ({
  theme = "light",
  stats = [],
  title = "Trusted by creators worldwide",
  description = "Lorem ipsum dolor sit amet consect adipisicing possimus.",
}) => {
  const bgColorClass = theme === "light" ? "bg-white" : "bg-gray-900";
  const titleColor = theme === "light" ? "text-gray-900" : "text-white";
  const descriptionColor =
    theme === "light" ? "text-gray-600" : "text-gray-300";
  const statsBgColor = theme === "light" ? "bg-gray-400/5" : "bg-white/5";
  const statsNameColor = theme === "light" ? "text-gray-600" : "text-gray-300";
  const statsValueColor = theme === "light" ? "text-gray-900" : "text-white";

  return (
    <Card className={`${bgColorClass} py-24 sm:py-32`}>
      <div className="mx-auto  max-w-7xl px-6 lg:px-8">
        <div className="mx-auto  max-w-2xl lg:max-w-none">
          <div className="flex flex-col items-center justify-center text-center">
            <h2
              className={`text-3xl font-bold tracking-tight ${titleColor} sm:text-4xl`}
            >
              {title}
            </h2>
            <p className={`mt-4 text-lg leading-8 ${descriptionColor}`}>
              {description}
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className={`flex flex-col ${statsBgColor} p-8`}
              >
                <dt
                  className={`text-sm font-semibold leading-6 ${statsNameColor}`}
                >
                  {stat.name}
                </dt>
                <dd
                  className={`order-first text-3xl font-semibold tracking-tight ${statsValueColor}`}
                >
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Card>
  );
};

export default StatsSectionStackedGrid;
