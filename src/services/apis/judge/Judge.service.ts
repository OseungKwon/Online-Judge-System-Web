import { AxiosResponseInterface } from '@/services/apis';
import { ApiFormatter } from '@/utils';
import { InnerApi } from '@/values';

import { axiosHandler, customAxios } from '../CustomAxios.service';
import { ProblemRequestInterface, ProblemResponseInterface } from './Problem.model';

/**
 * `Contributer`가 출제한 문제 목록을 가져옵니다.
 * @param requestData
 */
export const fetchGetProblems = (
  requestData: ProblemRequestInterface,
): Promise<AxiosResponseInterface<ProblemResponseInterface[], ProblemRequestInterface>> => {
  try {
    return axiosHandler<ProblemResponseInterface[], ProblemRequestInterface>(
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
