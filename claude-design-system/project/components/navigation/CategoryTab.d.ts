import * as React from 'react';

export interface CategoryTabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

/** Sub-nav filter tab — transparent when inactive, cream-filled when active. */
export function CategoryTab(props: CategoryTabProps): React.JSX.Element;
