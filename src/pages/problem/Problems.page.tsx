import React, { useState } from 'react';

import { Card, Input } from '@/components';

import useGetProblemsQuery from './custom-hook/useGetProblemsQuery';
import styles from './Problems.module.scss';
function ProblemsPage() {
  const [query, setQuery] = useState('');

  const { data: getProblemsData } = useGetProblemsQuery({ search: query, offset: 20 });
  return (
    <div className={styles.container}>
      <Card>
        <Input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </Card>
      <Card>
        <div className={styles.cardWrapper}>
          {(getProblemsData?.pages.flatMap((page) => page.responseData) ?? []).map((data) => {
            return <div key={data.id}>{data.id}</div>;
          })}
        </div>
      </Card>
    </div>
  );
}

export default ProblemsPage;
