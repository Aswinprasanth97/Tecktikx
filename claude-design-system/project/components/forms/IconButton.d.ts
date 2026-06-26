import * as React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Diameter in px. @default 36 */
  size?: number;
  /** @default "default" */
  variant?: 'default' | 'on-dark';
  ariaLabel?: string;
}

/** 36px circular icon button — carousel arrows, share, view-more. */
export function IconButton(props: IconButtonProps): React.JSX.Element;
