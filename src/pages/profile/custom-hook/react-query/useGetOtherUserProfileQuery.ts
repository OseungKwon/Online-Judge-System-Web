import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { fetchGetOtherUserProfile, UserRequestInterface } from '@/services/apis';
import { ApiFormatter } from '@/utils';
import { InnerApi } from '@/values';

interface UserDisplayableInterface {
  nickname: string;
  email: string;
  message: string;
  github: string;
  blog: string;
  createdAt: string;
}

export default function useGetOtherUserProfileQuery(
  requestData: UserRequestInterface,
  options?: Partial<UseQueryOptions<UserDisplayableInterface, AxiosError, UserDisplayableInterface>>,
) {
  return useQuery({
    queryKey: [ApiFormatter(InnerApi.USER_PROFILE), requestData.uid],
    queryFn: async () => {
      const getOtherUserProfile = await fetchGetOtherUserProfile(requestData);
      return getOtherUserProfile.responseData;
    },
    ...options,
  });
}
