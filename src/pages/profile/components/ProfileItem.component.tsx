import React from 'react';

import { Input } from '@/components';

import styles from './ProfileItem.module.scss';

interface ProfileItemProps<T> {
  name: string;
  isEditAble?: boolean;
  item: T;
  setItem: (item: string) => void;
  children?: React.ReactNode;
}

function ProfileItem<T extends React.ReactNode>({ name, item, setItem, isEditAble, children }: ProfileItemProps<T>) {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{name}</span>
      {isEditAble ? (
        <Input
          value={(item as string) ?? ''}
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
      ) : (
        <>{children}</>
      )}
    </div>
  );
}

export default React.memo(ProfileItem);
