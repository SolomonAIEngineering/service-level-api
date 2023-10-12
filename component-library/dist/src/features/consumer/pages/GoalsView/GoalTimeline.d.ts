import { FC, ReactElement } from 'react';
export type TimelineEvent = {
    id: string;
    icon: ReactElement;
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
declare const GoalTimeline: FC<GoalTimelineProps>;
export default GoalTimeline;
