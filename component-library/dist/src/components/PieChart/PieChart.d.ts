import React from 'react';
/**
 * `CustomPieChart` Props Interface
 * @interface ICustomPieChartProps
 * @property {Array<Object>} data01 - The data for the first pie chart.
 * @property {Array<Object> | undefined} [data02] - The data for the second pie chart. Optional.
 */
export interface ICustomPieChartProps {
    data01: {
        name: string;
        value: number;
    }[];
    data02?: {
        name: string;
        value: number;
    }[];
    label: string;
    className?: string;
}
/**
 * CustomPieChart Component
 *
 * A compound Pie Chart component that displays two pie charts overlayed on top of each other.
 * The first pie chart is smaller and does not have any labels.
 * The second pie chart is optional, larger, and has labels.
 *
 * Usage:
 * ```jsx
 * <CustomPieChart data01={someData} />
 * // or
 * <CustomPieChart data01={someData} data02={someOtherData} />
 * ```
 *
 * @param {ICustomPieChartProps} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered Pie Chart.
 */
declare const CustomPieChart: React.FC<ICustomPieChartProps>;
export default CustomPieChart;
