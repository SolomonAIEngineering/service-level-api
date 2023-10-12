/// <reference types="react" />
interface SimpleStatsCardProps {
    /** The title of the card */
    title: string;
    /** The main metric to be displayed */
    metric: string | number;
    /** Optional subtext or label for the metric */
    subtext?: string;
    /** Optional CSS class to be applied on the card */
    className?: string;
}
/**
 * The `SimpleStatsCard` component provides a minimalistic and clean way to display a key metric.
 * It presents a title followed by a large metric value.
 *
 * @remarks
 * This component is particularly suitable for dashboard interfaces or any context where the emphasis is on a single key data point.
 *
 * @param props - An object containing title, metric, an optional subtext, and an optional className.
 *
 * @example
 * ```tsx
 * <SimpleStatsCard
 *   title="Active Users"
 *   metric={200}
 *   subtext="This Month"
 * />
 * ```
 */
declare const SimpleStatsCard: React.FC<SimpleStatsCardProps>;
export default SimpleStatsCard;
