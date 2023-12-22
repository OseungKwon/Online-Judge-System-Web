import React from 'react';

import styles from './Button.module.scss';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }, ref) => {
  return (
    <button ref={ref} className={styles.wrapper} {...props}>
      {children}
    </button>
  );
});
Button.displayName = 'Button';

export { Button };
