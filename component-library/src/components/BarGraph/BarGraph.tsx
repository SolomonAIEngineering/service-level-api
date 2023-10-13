import * as React from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { cn } from 'src/lib-utils/utils';

interface BarGraphProps {
  data: { name: string; total: number }[];
  label: string;
  className?: string;
}

export const BarGraph: React.FC<BarGraphProps> = ({
  label,
  data,
  className,
}) => {
  return (
    <Card className={cn('w-full sm:min-w-[250px] md:min-w-[400px]', className)}>
      <CardHeader>
        <CardTitle className="text-sm sm:text-base">{label}</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis
              dataKey="name"
              stroke="#888888"
              fontSize="10px"
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize="10px"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Bar dataKey="total" fill="#000000" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export type { BarGraphProps };
