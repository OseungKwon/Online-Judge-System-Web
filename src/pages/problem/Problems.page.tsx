import React, { useState } from 'react';

import { Button, Card, Input } from '@/components';

import ProblemList from './components/ProblemList.component';
import useCreateProblemMutation from './custom-hook/react-query/useCreateProblemMutation.ts';
import useGetProblemsQuery from './custom-hook/react-query/useGetProblemsQuery.ts';
import styles from './Problems.module.scss';

function ProblemsPage() {
  const { mutate: mutateCreateProblem } = useCreateProblemMutation();

  const [searchQuery, setSearchQuery] = useState<string>('');

  const [submitQuery, setSubmitQuery] = useState<string>('');
  const { data: getProblemsData } = useGetProblemsQuery({ search: submitQuery, offset: 20 });

  return (
    <div className={styles.container}>
      <Card>
        <div className={styles.row}>
          <div className={styles.searchInput}>
            <Input
              placeholder={'문제 검색'}
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
            />
          </div>
          <Button
            onClick={() => {
              setSubmitQuery(searchQuery);
            }}
          >
            검색
          </Button>
          <Button
            onClick={() => {
              mutateCreateProblem();
            }}
          >
            문제 생성하기
          </Button>
        </div>
      </Card>
      <Card>
        <div className={styles.cardWrapper}>
          <ProblemList datas={getProblemsData?.pages.flatMap((page) => page.responseData) ?? []} />
        </div>
      </Card>
    </div>
  );
}

export default ProblemsPage;
