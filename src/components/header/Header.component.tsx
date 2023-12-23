import React from 'react';

import { useUserStore } from '@/stores';

import styles from './Header.module.scss';

// interface HeaderProps {}

function Header() {
  const nickname = useUserStore((state) => state.nickname);
  return (
    <header className={styles.container}>
      <div className={styles.title}>Online judge</div>
      <div className={styles.profileWrapper}>
        <span className={styles.nickname}>{nickname}</span>
        <div className={styles.profileIcon}></div>
      </div>
    </header>
  );
}

export { Header };
