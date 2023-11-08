import { FC, ReactNode } from 'react';

export interface PanelLayoutProps {
  /** Define the background color of the card */
  bgColor?: 'white' | 'gray-50';
  /** Use rounded corners */
  useRounded?: boolean;
  /** Use shadow on the card */
  useShadow?: boolean;
  /** Divide sections of the card with a gray line */
  useDivider?: boolean;
  /** Less vertical padding for card headers on desktop */
  headerPadding?: boolean;
  /** Less vertical padding for card footers at all sizes */
  footerPadding?: boolean;
  /** Children elements */
  children?: ReactNode;
}

/**
 * A flexible card template component.
 *
 * @param bgColor - The background color of the card.
 * @param useRounded - Use rounded corners.
 * @param useShadow - Use shadow on the card.
 * @param useDivider - Divide sections of the card with a gray line.
 * @param headerPadding - Use less vertical padding on card headers on desktop.
 * @param footerPadding - Use less vertical padding on card footers at all sizes.
 * @param children - The content of the card.
 *
 * @example
 * ```tsx
 * <PanelLayout bgColor="white" useRounded useShadow>
 *   Content goes here
 * </PanelLayout>
 * ```
 */
const PanelLayout: FC<PanelLayoutProps> = ({
  bgColor = 'white',
  useRounded = false,
  useShadow = false,
  useDivider = false,
  headerPadding = false,
  footerPadding = false,
  children,
}) => {
  const baseStyles = `overflow-hidden ${
    bgColor === 'gray-50' ? 'bg-gray-50' : 'bg-white'
  }`;
  const roundedClass = useRounded ? 'rounded-lg' : '';
  const shadowClass = useShadow ? 'shadow' : '';
  const dividerClass = useDivider ? 'divide-y divide-gray-200' : '';
  const headerPaddingClass = headerPadding ? 'py-5' : 'py-6';
  const footerPaddingClass = footerPadding ? 'py-4' : 'py-6';

  return (
    <div
      className={`${baseStyles} ${roundedClass} ${shadowClass} ${dividerClass}`}
    >
      <div className={`px-4 ${headerPaddingClass} sm:px-6`}>{children}</div>
      {useDivider && (
        <div className={`px-4 ${footerPaddingClass} sm:px-6`}>{children}</div>
      )}
    </div>
  );
};

export default PanelLayout;
