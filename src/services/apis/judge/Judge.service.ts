import { AxiosResponseInterface } from '@/services/apis';
import { ApiFormatter } from '@/utils';
import { InnerApi } from '@/values';

import { axiosHandler, customAxios } from '../CustomAxios.service';
import { ProblemResponseInterface, ProblemsRequestInterface } from './Problem.model';

/**
 * `Contributer`가 출제한 문제 목록을 가져옵니다.
 * @param requestData
 */
export const fetchGetProblems = (
  requestData: ProblemsRequestInterface,
): Promise<AxiosResponseInterface<ProblemResponseInterface[], ProblemsRequestInterface>> => {
  try {
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
  } catch (error) {
    throw error;
  }
};
