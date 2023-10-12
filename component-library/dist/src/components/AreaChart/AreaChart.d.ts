import React from 'react';
/**
 * Represents individual data points for the chart.
 */
interface ChartData {
    /** The name for this data point (typically represents a unit on the X-axis, like month or day). */
    name: string;
    /** Value for the 'uv' metric. */
    uv: number;
    /** Optional value for the 'pv' metric. */
    pv?: number;
}
/**
 * Props for the CustomAreaChart component.
 */
export interface CustomAreaChartProps {
    /** Array of data points to plot on the chart. */
    data: ChartData[];
    /** Optional CSS class to be applied to the chart's outermost container. */
    className?: string;
    label: string;
    enableGrid?: boolean;
}
/**
 * CustomAreaChart is a reusable React component that renders an area chart.
 * It's built on top of the 'recharts' library and has predefined styles and gradients.
 *
 * @param data The dataset for the chart, consisting of names and their corresponding uv and optional pv values.
 * @returns A React element displaying an area chart.
 *
 * @example
 * ```tsx
 * const sampleData = [
 *   { name: 'Jan', uv: 4000, pv: 2400 },
 *   { name: 'Feb', uv: 3000 },
 * ];
 *
 * <CustomAreaChart data={sampleData} />
 * ```
 */
declare const CustomAreaChart: React.FC<CustomAreaChartProps>;
export default CustomAreaChart;
