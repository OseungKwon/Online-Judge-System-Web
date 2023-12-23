import React from 'react';

import styles from './Input.module.scss';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ type, ...props }, ref) => {
  return (
    <div className={styles.wrapper}>
      <input type={type} ref={ref} {...props} />
    </div>
  );
});
Input.displayName = 'Input';

export { Input };
