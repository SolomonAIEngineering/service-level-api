import React from "react";
import { Card } from "../ui/card";

// Define the prop types for our combined component
interface HeaderSectionWithEyebrowProps {
  /**
   * The main title of the support center section.
   */
  title: string;

  /**
   * The subtitle or smaller text above the main title.
   */
  subtitle?: string;

  /**
   * The description paragraph under the main title.
   */
  description: string;

  /**
   * Whether the component should have padding around it.
   */
  hasPadding?: boolean;

  /**
   * Whether the component should be centered in a max-width container.
   */
  centered?: boolean;
}

/**
 * `HeaderSectionWithEyebrow` is a specialized section to display support center related info.
 *
 * @param {HeaderSectionWithEyebrowProps} props The props to configure the section.
 * @returns {JSX.Element} The rendered section.
 */
const HeaderSectionWithEyebrow: React.FC<HeaderSectionWithEyebrowProps> = ({
  title,
  subtitle,
  description,
  hasPadding = true,
  centered = false,
}) => {
  return (
    <Card
      className={`bg-white ${hasPadding ? "px-6 py-24 sm:py-32 lg:px-8" : ""}`}
    >
      <div className={`mx-auto ${centered ? "max-w-7xl px-6 lg:px-8" : ""}`}>
        <div className="mx-auto max-w-2xl lg:mx-0 text-center">
          {subtitle && (
            <p className="text-base font-semibold leading-7 text-indigo-600">
              {subtitle}
            </p>
          )}
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
        </div>
      </div>
    </Card>
  );
};

export default HeaderSectionWithEyebrow;

// Example usage:
// <HeaderSectionWithEyebrow
//   title="Support center"
//   subtitle="Get the help you need"
//   description="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
//   hasPadding={true}
//   centered={true}
// />
