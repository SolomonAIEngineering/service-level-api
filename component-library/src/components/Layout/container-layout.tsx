import { FC, ReactNode } from 'react';
import { Card } from 'src/components/ui/card';

export interface ContainerLayoutProps {
  /** Use max width of 7xl or container */
  useMaxWidth7xl?: boolean;
  /** Use a container class */
  useContainer?: boolean;
  /** Use an inner div with max width of 3xl */
  useInnerMaxWidth3xl?: boolean;
  /** Padding along the x-axis */
  paddingX?: string;
  /** Children elements */
  children?: ReactNode;
}

/**
 * A flexible container template component.
 *
 * @param useMaxWidth7xl - To use the max width of 7xl or the container.
 * @param useContainer - To use the container class.
 * @param useInnerMaxWidth3xl - To use an inner div with max width of 3xl.
 * @param paddingX - Specifies the padding along the x-axis.
 * @param children - The content of the container.
 *
 * @example
 * ```tsx
 * <ContainerLayout paddingX="sm:px-6 lg:px-8">
 *   Content goes here
 * </ContainerLayout>
 * ```
 */
const ContainerLayout: FC<ContainerLayoutProps> = ({
  useContainer = false,
  useInnerMaxWidth3xl = false,
  paddingX = '',
  children,
}) => {
  const baseClass = useContainer ? 'container' : 'max-w-7xl';

  return (
    <Card className={`mx-auto border-4 border-white ${baseClass} ${paddingX}`}>
      {useInnerMaxWidth3xl ? (
        <div className="max-w-3xl mx-auto">{children}</div>
      ) : (
        children
      )}
    </Card>
  );
};

export default ContainerLayout;
