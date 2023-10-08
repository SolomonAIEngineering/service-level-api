import React from 'react';
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
} from 'recharts';
import { cn } from 'src/lib-utils/utils';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

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
const CustomLineChart: React.FC<CustomLineChartProps> = ({
  data,
  className,
  label,
  enableGrid,
}) => {
  return (
    <Card className={cn('w-full sm:min-w-[250px] md:min-w-[400px]', className)}>
      <CardHeader>
        <CardTitle className="text-sm sm:text-base">{label}</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <LineChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          {enableGrid && <CartesianGrid strokeDasharray="3 3" />}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="uv" stroke="#000000" />
          {data.some((item) => typeof item.pv !== 'undefined') && (
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
          )}
        </LineChart>
      </CardContent>
    </Card>
  );
};

export default CustomLineChart;
