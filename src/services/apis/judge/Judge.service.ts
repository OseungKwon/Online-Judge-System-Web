import { AxiosResponseInterface, ProblemUpdateRequestInterface } from '@/services/apis';
import { ApiFormatter } from '@/utils';
import { InnerApi } from '@/values';

import { axiosHandler, customAxios } from '../CustomAxios.service';
import {
  ProblemCreateResponseInterface,
  ProblemDeleteRequestInterface,
  ProblemDeleteResponseInterface,
  ProblemRequestInterface,
  ProblemResponseInterface,
  ProblemsRequestInterface,
} from './Problem.model';

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

/**
 * 문제 생성하기
 */
export const fetchCreateProblem = (): Promise<AxiosResponseInterface<ProblemCreateResponseInterface, undefined>> => {
  return axiosHandler<ProblemCreateResponseInterface, undefined>(
    customAxios.post,
    ApiFormatter(InnerApi.PROBLEM),
    undefined,
  );
};

/**
 * 문제 수정하기
 * @param requestData
 */
export const fetchUpdateProblem = (
  requestData: ProblemUpdateRequestInterface,
): Promise<AxiosResponseInterface<ProblemResponseInterface, ProblemUpdateRequestInterface>> => {
  return axiosHandler<ProblemResponseInterface, ProblemUpdateRequestInterface>(
    customAxios.patch,
    ApiFormatter(InnerApi.PROBLEM),
    requestData,
  );
};

/**
 * 문제 삭제하기
 * @param requestData
 */
export const fetchDeleteProblem = (
  requestData: ProblemDeleteRequestInterface,
): Promise<AxiosResponseInterface<ProblemDeleteResponseInterface, ProblemDeleteRequestInterface>> => {
  return axiosHandler<ProblemDeleteResponseInterface, ProblemDeleteRequestInterface>(
    customAxios.delete,
    ApiFormatter(InnerApi.PROBLEM),
    requestData,
    {
      params: {
        ...requestData,
      },
    },
  );
};
