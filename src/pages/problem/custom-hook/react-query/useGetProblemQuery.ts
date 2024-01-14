import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { fetchGetProblem, ProblemRequestInterface, ProblemResponseInterface } from '@/services/apis';
import { ApiFormatter } from '@/utils';
import { InnerApi } from '@/values';

export default function useGetProblemQuery(
  requestData: ProblemRequestInterface,
  options?: Partial<UseQueryOptions<ProblemResponseInterface, AxiosError, ProblemResponseInterface>>,
) {
  return useQuery({
    queryKey: [ApiFormatter(InnerApi.USER_PROFILE, requestData)],
    queryFn: async () => {
      const getOtherUserProfile = await fetchGetProblem(requestData);
      return getOtherUserProfile.responseData;
    },
    ...options,
  });
}
