import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { AxiosResponseInterface, fetchGetUserProfile, UserResponseInterface } from '@/services/apis';
import { ApiFormatter } from '@/utils';
import { InnerApi } from '@/values';

export default function useGetUserProfileQuery(
  accessToken: string,
  options?: Partial<
    UseQueryOptions<
      AxiosResponseInterface<UserResponseInterface, undefined>,
      AxiosError,
      AxiosResponseInterface<UserResponseInterface, undefined>
    >
  >,
) {
  return useQuery({
    queryKey: [ApiFormatter(InnerApi.USER_PROFILE), accessToken],
    queryFn: async () => {
      return await fetchGetUserProfile();
    },
    ...options,
  });
}
