import * as React from 'react';

/**
 * The system's surface container — feature, outline, dark, and coral modes.
 * @startingPoint section="Cards" subtitle="Cream, dark and coral surfaces" viewport="700x420"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Surface mode. Depth comes from surface color, not shadow.
   * - feature: cream content card (default)
   * - soft: very-soft cream band
   * - outline: canvas + hairline (pricing, model-comparison)
   * - dark: navy product-mockup surface
   * - dark-elevated: elevated card inside a dark band
   * - coral: full-bleed coral callout
   * @default "feature"
   */
  variant?: 'feature' | 'soft' | 'outline' | 'dark' | 'dark-elevated' | 'coral';
  /** Internal padding from the spacing scale. @default "xl" */
  pad?: 'none' | 'lg' | 'xl' | 'xxl' | 'band';
  /** @default "lg" */
  radius?: 'md' | 'lg' | 'xl';
}

export function Card(props: CardProps): React.JSX.Element;
