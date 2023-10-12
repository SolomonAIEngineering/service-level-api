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
declare const StatsCard: React.FC<StatsCardProps>;
export default StatsCard;
