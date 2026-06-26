import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  /** Error message — also flips the border to the error color. */
  error?: string;
}

/** Standard text input: cream field, hairline border, coral focus ring. */
export function Input(props: InputProps): React.JSX.Element;
