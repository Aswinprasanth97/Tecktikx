import * as React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  src?: string;
  alt?: string;
  /** Initials shown when no src. */
  initials?: string;
  /** Diameter in px. @default 40 */
  size?: number;
}

/** Circular avatar; crops photo to a circle or shows cream-surface initials. */
export function Avatar(props: AvatarProps): React.JSX.Element;
