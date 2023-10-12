import React from 'react';
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
declare const DonutStatisticCard: React.FC<DonutStatisticCardProps>;
export default DonutStatisticCard;
