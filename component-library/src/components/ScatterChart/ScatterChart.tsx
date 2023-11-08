import React from 'react';;
import {
  ScatterChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  Legend,
  Scatter,
} from 'recharts';
import { cn } from 'src/lib-utils/utils';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';

/**
 * `CustomScatterChart` Props Interface
 * @interface ICustomScatterChartProps
 * @property {Array<Object>} data01 - The data for the "A school" scatter plot.
 * @property {Array<Object> | undefined} [data02] - The data for the "B school" scatter plot. Optional.
 */
export interface ICustomScatterChartProps {
  data01: { x: number; y: number; z: number }[];
  data01Title: string;
  data02?: { x: number; y: number; z: number }[]; // data02 is optional
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
const CustomScatterChart: React.FC<ICustomScatterChartProps> = ({
  data01,
  data01Title,
  data02,
  data02Title,
  className,
  label,
  xAxisName,
  yAxisName,
  zAxisName,
  xAxisUnit,
  yAxisUnit,
  zAxisUnit,
}) => {
  return (
    <Card className={cn('w-full sm:min-w-[250px] md:min-w-[400px]', className)}>
      <CardHeader>
        <CardTitle className="text-sm sm:text-base">{label}</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <ScatterChart
          width={730}
          height={250}
          margin={{
            top: 20,
            right: 20,
            bottom: 10,
            left: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" type="number" name={xAxisName} unit={xAxisUnit} />
          <YAxis dataKey="y" type="number" name={yAxisName} unit={yAxisUnit} />
          <ZAxis
            dataKey="z"
            type="number"
            range={[64, 144]}
            name={zAxisName}
            unit={zAxisUnit}
          />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <Scatter name={data01Title} data={data01} fill="#000000" />
          {data02 && (
            <Scatter
              name={data02Title ?? 'No Title'}
              data={data02}
              fill="#708090"
            />
          )}
        </ScatterChart>
      </CardContent>
    </Card>
  );
};

export default CustomScatterChart;
