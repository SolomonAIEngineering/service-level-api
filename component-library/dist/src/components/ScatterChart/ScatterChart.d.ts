import React from 'react';
/**
 * `CustomScatterChart` Props Interface
 * @interface ICustomScatterChartProps
 * @property {Array<Object>} data01 - The data for the "A school" scatter plot.
 * @property {Array<Object> | undefined} [data02] - The data for the "B school" scatter plot. Optional.
 */
export interface ICustomScatterChartProps {
    data01: {
        x: number;
        y: number;
        z: number;
    }[];
    data01Title: string;
    data02?: {
        x: number;
        y: number;
        z: number;
    }[];
    data02Title?: string;
    className?: string;
    label: string;
    xAxisName: string;
    yAxisName: string;
    zAxisName: string;
    xAxisUnit: string;
    yAxisUnit: string;
    zAxisUnit: string;
}
/**
 * CustomScatterChart Component
 *
 * A scatter chart component that displays data points from two schools "A school" and "B school".
 * Each school's data plot can be differentiated using different colors.
 * The chart features axes for stature (x-axis), weight (y-axis), and a score (z-axis).
 *
 * Usage:
 * ```jsx
 * <CustomScatterChart data01={schoolAData} />
 * // or
 * <CustomScatterChart data01={schoolAData} data02={schoolBData} />
 * ```
 *
 * @param {ICustomScatterChartProps} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered Scatter Chart.
 */
declare const CustomScatterChart: React.FC<ICustomScatterChartProps>;
export default CustomScatterChart;
