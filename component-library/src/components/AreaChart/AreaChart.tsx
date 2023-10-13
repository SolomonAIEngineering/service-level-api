import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { cn } from 'src/lib-utils/utils';

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
const CustomAreaChart: React.FC<CustomAreaChartProps> = ({
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
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          className="w-full"
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#000000" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#000000" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#708090" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#708090" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          {enableGrid && <CartesianGrid strokeDasharray="3 3" />}
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          {data.some((item) => typeof item.pv !== 'undefined') && (
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#708090"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          )}
        </AreaChart>
      </CardContent>
    </Card>
  );
};

export default CustomAreaChart;
