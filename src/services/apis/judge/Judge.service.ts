import { AxiosResponseInterface } from '@/services/apis';
import { ApiFormatter } from '@/utils';
import { InnerApi } from '@/values';

import { axiosHandler, customAxios } from '../CustomAxios.service';
import { ProblemRequestInterface, ProblemResponseInterface, ProblemsRequestInterface } from './Problem.model';

/**
 * `Contributer`가 출제한 문제 목록을 가져옵니다.
 * @param requestData
 */
export const fetchGetProblems = (
  requestData: ProblemsRequestInterface,
): Promise<AxiosResponseInterface<ProblemResponseInterface[], ProblemsRequestInterface>> => {
  return axiosHandler<ProblemResponseInterface[], ProblemsRequestInterface>(
    customAxios.get,
    ApiFormatter(InnerApi.PROBLEM),
    requestData,
    {
      params: {
        ...requestData,
      },
    },
  );
};

/**
 * 단일 문제 조회
 * @param requestData
 */
export const fetchGetProblem = (
  requestData: ProblemRequestInterface,
): Promise<AxiosResponseInterface<ProblemResponseInterface, ProblemRequestInterface>> => {
  return axiosHandler<ProblemResponseInterface, ProblemRequestInterface>(
    customAxios.get,
    ApiFormatter(InnerApi.PROBLEM, requestData.pid),
    requestData,
  );
};

export const fetchCreateProblem = (
  requestData: ProblemRequestInterface,
): Promise<AxiosResponseInterface<ProblemResponseInterface, ProblemRequestInterface>> => {
  return axiosHandler<ProblemResponseInterface, ProblemRequestInterface>(
    customAxios.post,
    ApiFormatter(InnerApi.PROBLEM),
    requestData,
    {
      params: {
        ...requestData,
      },
    },
  );
};
