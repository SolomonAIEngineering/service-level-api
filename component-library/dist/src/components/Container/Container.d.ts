import React from 'react';
/**
 * Props definition for the `Container` component.
 */
interface ContainerProps extends React.ComponentPropsWithoutRef<'div'> {
    /**
     * Sets the max width of the container. This prop allows for more flexible widths.
     * Defaults to `max-w-7xl`.
     *
     * @example
     * maxWidth="max-w-5xl"
     */
    maxWidth?: string;
}
/**
 * A responsive container component that centers its content and provides consistent padding.
 *
 * The `Container` component is a versatile wrapper that controls the maximum width of its content across different screen sizes. By default, it sets the maximum width to `7xl` and provides responsive horizontal padding.
 *
 * Usage:
 *
 * ```tsx
 * <Container>
 *   Your content here...
 * </Container>
 * ```
 *
 * @param props The properties of the `Container` component.
 * @returns A React element with content wrapped inside the container.
 */
export declare function Container({ className, maxWidth, ...props }: ContainerProps): import("react/jsx-runtime").JSX.Element;
export {};
