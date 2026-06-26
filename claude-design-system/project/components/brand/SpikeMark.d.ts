import * as React from 'react';

export interface SpikeMarkProps extends React.SVGAttributes<SVGElement> {
  /** Pixel size of the square glyph. @default 20 */
  size?: number;
  /** Override color (defaults to currentColor). */
  color?: string;
}

/**
 * The Anthropic radial-burst brand glyph. Inherits color via currentColor.
 */
export function SpikeMark(props: SpikeMarkProps): React.JSX.Element;

/**
 * SpikeMark + label — the standard brand lockup.
 * @startingPoint section="Brand" subtitle="Spike-mark + wordmark lockup" viewport="700x150"
 */
export interface WordmarkProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Wordmark label. @default "Claude" */
  label?: string;
  /** Glyph size in px; label scales with it. @default 20 */
  size?: number;
  /** Lockup color. @default var(--color-ink) */
  color?: string;
}

export function Wordmark(props: WordmarkProps): React.JSX.Element;
