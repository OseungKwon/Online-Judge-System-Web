import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Button, Card, Input, QuillEditor } from '@/components';
import { ProblemUpdateRequestInterface } from '@/services/apis';

import useGetProblemQuery from './custom-hook/react-query/useGetProblemQuery';
import styles from './Problem.module.scss';

function ProblemPage() {
  const location = useLocation();
  const { data: problem } = useGetProblemQuery(
    { pid: Number(location.pathname.split('/')[2]) },
    { enabled: location.pathname.split('/')[2] !== 'new' },
  );

  const [problemForm, setProblemForm] = useState<ProblemUpdateRequestInterface>({
    title: problem?.problem ?? '',
    problem: problem?.problem ?? '',
    input: problem?.input ?? '',
    output: problem?.output ?? '',
    timeLimit: problem?.timeLimit ?? 0,
    memoryLimit: problem?.memoryLimit ?? 0,
    tags: problem?.tags ?? [],
  });

  const [content, setContent] = useState<string>('');
  const [isEditForm, setIsEditForm] = useState<boolean>(false);
  return (
    <div className={styles.container}>
      <Card>
        <div className={styles.cardWrapper}>
          <Input
            placeholder={'타이틀'}
            value={problemForm.title}
            onChange={(e) => {
              setProblemForm((prev) => {
                return {
                  ...prev,
                  title: e.target.value,
                };
              });
            }}
          />
          <div>
            <div>문제</div>
            <QuillEditor content={content} setContent={setContent} />
          </div>
          <div className={styles.row}>
            <Input
              placeholder={'input'}
              value={problemForm.input}
              onChange={(e) => {
                setProblemForm((prev) => {
                  return {
                    ...prev,
                    input: e.target.value,
                  };
                });
              }}
            />
            <Input placeholder={'output'} value={problemForm.output} />
          </div>
          <div className={styles.row}>
            <Input
              placeholder={'시간 제한'}
              value={problemForm.timeLimit}
              onChange={(e) => {
                setProblemForm((prev) => {
                  return {
                    ...prev,
                    timeLimit: Number(e.target.value),
                  };
                });
              }}
            />
            <Input
              placeholder={'메모리 제한'}
              value={problemForm.memoryLimit}
              onChange={(e) => {
                setProblemForm((prev) => {
                  return {
                    ...prev,
                    memoryLimit: Number(e.target.value),
                  };
                });
              }}
            />
          </div>

          <div>
            {problem?.tags &&
              problem?.tags.map((tag) => {
                return <div key={tag}>{tag}</div>;
              })}
          </div>
        </div>

        <div className={styles.submitArea}>
          <Button
            onClick={() => {
              setIsEditForm((prev) => !prev);
            }}
          >
            수정
          </Button>
          <Button>저장</Button>
        </div>
      </Card>
    </div>
  );
}

export default ProblemPage;
