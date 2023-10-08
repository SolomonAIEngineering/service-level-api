import React, { FC, ReactElement } from 'react';
import { Label } from 'src/components/ui/label';

// Define the event type, assuming each event in the timeline has these properties
export type TimelineEvent = {
  id: string;
  icon: ReactElement; // We'll use ReactElement for the icon type
  content: string;
  href: string;
  target: string;
  datetime: string;
  date: string;
};

type GoalTimelineProps = {
  timeline: TimelineEvent[];
};

/**
 * `GoalTimeline` component displays a timeline of events.
 *
 * It provides a visual representation of a series of events, each with an icon,
 * content description, target link, and date.
 *
 * @param timeline - List of events to display in the timeline.
 *
 * @GoalTimeline
 * ```tsx
 * import { MyIcon } from './path-to-icons';
 *
 * const myTimeline = [
 *   {
 *     id: '1',
 *     iconBackground: 'bg-blue-500',
 *     icon: <MyIcon />,
 *     content: 'Event content here',
 *     href: '/event-link',
 *     target: 'Event Target',
 *     datetime: '2023-01-01T12:00:00Z',
 *     date: 'January 1, 2023'
 *   },
 *   ...
 * ];
 *
 * <GoalTimeline timeline={myTimeline} />
 * ```
 */
const GoalTimeline: FC<GoalTimelineProps> = ({ timeline }) => {
  return (
    <div className="w-fit flow-root max-w-md py-[5%]">
      <Label className="text-2xl font-bold pb-3">Timeline</Label>
      <ul role="list" className="-mb-8 border rounded-2xl p-4">
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== timeline.length - 1 ? (
                <span
                  className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={
                      ' h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white bg-black text-white font-bold m-0.5'
                    }
                  >
                    {event.icon}
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm text-gray-500">
                      {event.content}{' '}
                      <a
                        href={event.href}
                        className="font-medium text-gray-900"
                      >
                        {event.target}
                      </a>
                    </p>
                  </div>
                  <div className="whitespace-nowrap text-right text-sm text-gray-500">
                    <time dateTime={event.datetime}>{event.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoalTimeline;
