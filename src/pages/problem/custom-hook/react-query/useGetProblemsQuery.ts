import { useInfiniteQuery, UseInfiniteQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import {
  AxiosResponseInterface,
  fetchGetProblems,
  ProblemResponseInterface,
  ProblemsRequestInterface,
} from '@/services/apis';
import { ApiFormatter } from '@/utils';
import { InnerApi } from '@/values';

function useGetProblemsQuery(
  requestData: ProblemsRequestInterface,
  options?: UseInfiniteQueryOptions<
    AxiosResponseInterface<ProblemResponseInterface[], ProblemsRequestInterface>,
    AxiosError
  >,
) {
  return useInfiniteQuery<AxiosResponseInterface<ProblemResponseInterface[], ProblemsRequestInterface>, AxiosError>({
    queryKey: [ApiFormatter(InnerApi.PROBLEM), 'infinite', requestData.search],
    queryFn: async ({ pageParam = 1 }) => {
      return await fetchGetProblems({
        ...requestData,
        page: pageParam as number,
        offset: 20,
      });
    },
    getNextPageParam(lastPage, allPages) {
      const nextPage = allPages.length + 1;
      return lastPage.responseData.length < requestData.offset ? undefined : nextPage;
    },
    initialPageParam: undefined,
    staleTime: 1000 * 5,
  });
}

export default useGetProblemsQuery;
