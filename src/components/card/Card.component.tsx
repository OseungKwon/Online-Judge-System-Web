import React, { CSSProperties } from 'react';

import styles from './Card.module.scss';

interface CardProps {
  children?: React.ReactNode;
  style?: CSSProperties;
}

const Card = ({ style, children }: CardProps) => {
  return (
    <div className={styles.container} style={style}>
      {children}
    </div>
  );
};
Card.displayName = 'Card';

export { Card };
