import React from 'react';;
import { Calendar } from '../ui/calendar';

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
const CalendarCard: React.FC<CalendarProps> = ({ date }) => {
  const [currentDate, setDate] = React.useState<Date | undefined>(date);

  return (
    <div className="p-4 md:p-5 border border-gray-300 rounded-md">
      <Calendar
        mode="single"
        selected={currentDate}
        onSelect={setDate}
        className="rounded-md"
      />
    </div>
  );
};

export default CalendarCard;
