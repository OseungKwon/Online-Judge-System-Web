import React from 'react';

import { ProblemResponseInterface } from '@/services/apis';

import styles from './ProblemList.module.scss';

interface ProblemListProps {
  datas: ProblemResponseInterface[];
}

function ProblemList({ datas }: ProblemListProps) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.main}>문제</div>
        <div className={styles.timeLimit}>제한 시간</div>
        <div className={styles.memoryLimit}>제한 메모리</div>
      </div>
      <div className={styles.body}>
        {datas.map((data) => {
          return (
            <div key={data.id} className={styles.row}>
              <div className={styles.main}>
                <div className={styles.title}>{data.title}</div>
                <div className={styles.tagContainer}>
                  {data.tags.map((tag) => {
                    return (
                      <div key={tag} className={styles.tagItem}>
                        {tag}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={styles.timeLimit}>{data.timeLimit}</div>
              <div className={styles.memoryLimit}>{data.memoryLimit}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProblemList;
