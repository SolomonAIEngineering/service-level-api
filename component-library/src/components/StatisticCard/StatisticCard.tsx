import React from 'react';

/**
 * Type definition for the stats data to be displayed in the StatsCard component.
 */
interface Stat {
  /** A unique key for the stat */
  key: string;

  /** The label of the statistic */
  label: string;

  /** The value of the statistic */
  value: string | number;
}

interface StatsCardProps {
  /** The title of the card */
  title: string;

  /** An array of Stat objects that represent each statistic */
  stats: Stat[];

  /** Optional CSS class to be applied on the card */
  className?: string;
}

/**
 * The `StatsCard` component provides a clean and consistent way to display statistics.
 * It accepts a title and an array of statistics, where each statistic is defined with
 * a label and a value.
 *
 * It's styled with Tailwind CSS for a modern look, and is highly customizable through props.
 *
 * @remarks
 * This component adheres to the best coding patterns and has detailed TypeScript documentation
 * to ensure code maintainability and understanding for future developers.
 *
 * @param props - An object containing title, stats array, and an optional className.
 *
 * @example
 * ```tsx
 * <StatsCard
 *   title="User Statistics"
 *   stats={[
 *     { key: 'active', label: 'Active Users', value: 150 },
 *     { key: 'inactive', label: 'Inactive Users', value: 20 }
 *   ]}
 * />
 * ```
 */
const StatsCard: React.FC<StatsCardProps> = ({ title, stats, className }) => (
  <div
    className={`rounded-lg border marker:shadow-md bg-white p-4 md:p-6 space-y-3 md:space-y-4 ${
      className || ''
    }`}
  >
    <h2 className="text-lg md:text-xl font-semibold">{title}</h2>
    <ul className="space-y-1 md:space-y-2">
      {stats.map((stat) => (
        <li key={stat.key} className="flex justify-between">
          <span className="text-gray-600 md:text-gray-700">{stat.label}</span>
          <span className="font-medium md:font-bold">{stat.value}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default StatsCard;
