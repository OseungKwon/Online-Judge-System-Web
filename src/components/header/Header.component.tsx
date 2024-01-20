import React, { useMemo } from 'react';

import { useUserStore } from '@/stores';
import { RoutePath } from '@/values';

import styles from './Header.module.scss';

function Header() {
  const nickname = useUserStore((state) => state.nickname);

  const menuList = useMemo(() => {
    return [
      // {
      //   name: RoutePath.PROFILE,
      // },
    ];
  }, []);
  return (
    <header className={styles.container}>
      <div className={styles.title}>Online Judge</div>
      <div className={styles.menus}>
        {menuList.map((menu) => {
          return <div>{menuList} 수정중</div>;
        })}
      </div>
      {!!nickname && (
        <div className={styles.profileWrapper}>
          <span className={styles.nickname}>{nickname}</span>
          <div className={styles.profileIcon}></div>
        </div>
      )}
    </header>
  );
}

export { Header };
