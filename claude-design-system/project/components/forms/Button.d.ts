import * as React from 'react';

/**
 * The system's CTA primitive. Coral primary is scarce and signature.
 * @startingPoint section="Forms" subtitle="Primary / secondary / text CTAs" viewport="700x280"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual style.
   * - primary: coral CTA (the signature)
   * - secondary: cream with hairline outline
   * - secondary-on-dark: dark elevated, for use over dark surfaces
   * - on-coral: cream button placed inside a coral callout card
   * - text: bare inline link button
   * @default "primary"
   */
  variant?: 'primary' | 'secondary' | 'secondary-on-dark' | 'on-coral' | 'text';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

export function Button(props: ButtonProps): React.JSX.Element;
