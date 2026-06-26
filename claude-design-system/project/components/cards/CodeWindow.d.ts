import * as React from 'react';

export interface TokProps {
  /** Token color role. @default "plain" */
  kind?: 'keyword' | 'string' | 'comment' | 'func' | 'num' | 'plain';
  children?: React.ReactNode;
}
/** A syntax token for use inside CodeWindow lines. */
export function Tok(props: TokProps): React.JSX.Element;

/**
 * The signature dark code-editor mockup card with line numbers, syntax
 * highlighting and an optional status bar.
 * @startingPoint section="Cards" subtitle="Dark code-editor product mockup" viewport="700x420"
 */
export interface CodeWindowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Filename shown in the title bar. @default "main.py" */
  filename?: string;
  /** One React node per code row (build with <Tok>). */
  lines?: React.ReactNode[];
  /** @default true */
  showLineNumbers?: boolean;
  /** Optional status-bar content. */
  status?: React.ReactNode;
}

export function CodeWindow(props: CodeWindowProps): React.JSX.Element;
