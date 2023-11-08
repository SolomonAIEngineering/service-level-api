import React from 'react';;
import { PieChart, Pie } from 'recharts';
import { cn } from 'src/lib-utils/utils';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

/**
 * `CustomPieChart` Props Interface
 * @interface ICustomPieChartProps
 * @property {Array<Object>} data01 - The data for the first pie chart.
 * @property {Array<Object> | undefined} [data02] - The data for the second pie chart. Optional.
 */
export interface ICustomPieChartProps {
  data01: { name: string; value: number }[];
  data02?: { name: string; value: number }[]; // data02 is now optional
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
const CustomPieChart: React.FC<ICustomPieChartProps> = ({
  data01,
  data02,
  label,
  className,
}) => {
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
    index: number;
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <Card className={cn('w-full')}>
      <CardHeader>
        <CardTitle className="text-sm sm:text-base">{label}</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <PieChart width={730} height={250} className={className}>
          <Pie
            data={data01}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#000000"
            label={renderCustomizedLabel}
          />
          {data02 && (
            <Pie
              data={data02}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#708090"
              label={renderCustomizedLabel}
            />
          )}
        </PieChart>
      </CardContent>
    </Card>
  );
};

export default CustomPieChart;
