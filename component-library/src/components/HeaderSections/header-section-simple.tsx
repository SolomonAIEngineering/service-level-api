import { cn } from 'src/lib-utils/utils';
import { Card } from '../ui/card';

interface HeaderSectionSimpleProps {
  theme: 'light' | 'dark';
  title: string;
  description: string;
  className?: string;
}

const HeaderSectionSimple: React.FC<HeaderSectionSimpleProps> = ({
  theme = 'light',
  title,
  description,
  className,
}) => {
  const isDark = theme === 'dark';

  return (
    <Card
      className={cn(
        `py-24 sm:py-32 ${isDark ? 'bg-black' : 'bg-white'}`,
        className,
      )}
    >
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2
            className={`text-4xl font-bold tracking-tight sm:text-6xl ${
              isDark ? 'text-white' : 'text-black'
            }`}
          >
            {title}
          </h2>
          <p
            className={`mt-6 text-lg leading-8 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
};

export { HeaderSectionSimple };
