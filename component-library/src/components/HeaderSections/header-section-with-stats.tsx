import React from 'react';
import { Card } from '../ui/card';

// Define the prop types for our component
interface HeaderSectionWithStatsProps {
  /**
   * Array of links with name and href attributes.
   */
  links: {
    name: string;
    href: string;
  }[];

  /**
   * Array of stats with name and value attributes.
   */
  stats: {
    name: string;
    value: string;
  }[];

  /**
   * The main title of the section.
   */
  title: string;

  /**
   * The description paragraph under the main title.
   */
  description: string;

  /**
   * Image source URL for the background.
   */
  bgImageSrc: string;
}

/**
 * `HeaderSectionWithStats` is a specialized section to display work related info.
 *
 * @param {HeaderSectionWithStatsProps} props The props to configure the section.
 * @returns {JSX.Element} The rendered section.
 */
const HeaderSectionWithStats: React.FC<HeaderSectionWithStatsProps> = ({
  links,
  stats,
  title,
  description,
  bgImageSrc,
}) => {
  return (
    <Card className="relative py-24 overflow-hidden bg-gray-900 isolate sm:py-32">
      <img
        src={bgImageSrc}
        alt=""
        className="absolute inset-0 object-cover object-right w-full h-full -z-10 md:object-center"
      />
      {/* ... rest of the JSX ... */}
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">{description}</p>
        </div>
        <div className="max-w-2xl mx-auto mt-10 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 text-base font-semibold leading-7 text-white gap-x-8 gap-y-6 sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="grid grid-cols-1 gap-8 mt-16 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">
                  {stat.name}
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Card>
  );
};

export default HeaderSectionWithStats;

// Example usage:
// <HeaderSectionWithStats
//   links={[
//     { name: 'Open roles', href: '#' },
//     { name: 'Internship program', href: '#' },
//     { name: 'Our values', href: '#' },
//     { name: 'Meet our leadership', href: '#' },
//   ]}
//   stats={[
//     { name: 'Offices worldwide', value: '12' },
//     { name: 'Full-time colleagues', value: '300+' },
//     { name: 'Hours per week', value: '40' },
//     { name: 'Paid time off', value: 'Unlimited' },
//   ]}
//   title="Work with us"
//   description="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
//   bgImageSrc="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
// />
