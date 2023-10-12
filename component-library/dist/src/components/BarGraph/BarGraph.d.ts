import React from 'react';
interface BarGraphProps {
    data: {
        name: string;
        total: number;
    }[];
    label: string;
    className?: string;
}
export declare const BarGraph: React.FC<BarGraphProps>;
export type { BarGraphProps };
