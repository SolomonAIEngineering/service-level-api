import React from 'react';
/**
 * Props for the CalendarCard.
 */
interface CalendarProps {
    /**
     * The date to display in the calendar.
     * This prop determines which month and year the calendar will show.
     */
    date: Date;
}
/**
 * React component to display a month view of a calendar.
 *
 * This component will render the specified month's days based on the input date and highlight today's date if it falls in the same month.
 *
 * Usage:
 *
 * ```tsx
 * <CalendarCard date={new Date()} />
 * ```
 *
 * @param props The props containing the date to display.
 * @returns A React element displaying the month view of a calendar.
 */
declare const CalendarCard: React.FC<CalendarProps>;
export default CalendarCard;
