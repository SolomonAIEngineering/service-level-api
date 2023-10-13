// DonutStatisticCard.tsx
import * as React from 'react';

interface DonutStatisticCardProps {
  percentage: number;
  color?: string;
  label: string;
}

/**
 * @description The DonutStatisticCard component represents data as a part of a donut.
 * @param percentage - The percentage of the data metric.
 * @param color - The color of the donut section.
 * @param label - The label for the data metric.
 * @returns JSX Element
 */
const DonutStatisticCard: React.FC<DonutStatisticCardProps> = ({
  percentage,
  color = 'black',
  label,
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`w-24 h-24 rounded-full border-8 border-${color}-700`}
        style={{
          background: `conic-gradient(${color} ${percentage}%, transparent 0 100%)`,
        }}
      ></div>
      <p className="mt-2 text-center font-bold">
        {label}: {percentage}%
      </p>
    </div>
  );
};

export default DonutStatisticCard;
