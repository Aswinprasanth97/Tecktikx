import * as React from 'react';

/**
 * Small pill label for category tags and NEW / BETA flags.
 * @startingPoint section="Data display" subtitle="Pill, coral, amber badges" viewport="700x180"
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * - pill: neutral cream tag
   * - coral: filled accent for NEW / BETA (uppercase, tracked)
   * - amber: warm companion accent
   * - outline: hairline outline
   * - on-dark: for dark surfaces
   * @default "pill"
   */
  variant?: 'pill' | 'coral' | 'amber' | 'outline' | 'on-dark';
}

export function Badge(props: BadgeProps): React.JSX.Element;
