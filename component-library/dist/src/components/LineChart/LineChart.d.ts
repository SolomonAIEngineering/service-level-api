import React from 'react';
/**
 * Represents individual data points for the chart.
 */
export interface ChartData {
    /** The name for this data point (typically represents a unit on the X-axis, like month or day). */
    name: string;
    /** Value for the 'uv' metric. */
    uv: number;
    /** Optional value for the 'pv' metric. */
    pv?: number;
}
/**
 * Props for the CustomLineChart component.
 */
export interface CustomLineChartProps {
    /** Array of data points to plot on the chart. */
    data: ChartData[];
    /** Optional CSS class to be applied to the chart's outermost container. */
    className?: string;
    label: string;
    enableGrid?: boolean;
}
/**
 * CustomLineChart is a reusable React component that renders a line chart.
 * It's built on top of the 'recharts' library and has predefined styles.
 *
 * @param data The dataset for the chart, consisting of names and their corresponding uv and optional pv values.
 * @returns A React element displaying a line chart.
 *
 * @example
 * ```tsx
 * const sampleData = [
 *   { name: 'Jan', uv: 4000, pv: 2400 },
 *   { name: 'Feb', uv: 3000 },
 * ];
 *
 * <CustomLineChart data={sampleData} />
 * ```
 */
declare const CustomLineChart: React.FC<CustomLineChartProps>;
export default CustomLineChart;
