import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import {
  AxiosResponseInterface,
  fetchUpdateUserProfile,
  UserUpdateRequestInterface,
  UserUpdateResponseInterface,
} from '@/services/apis';

export default function useUpdateUserProfileMutation(
  options?: UseMutationOptions<
    AxiosResponseInterface<UserUpdateResponseInterface, UserUpdateRequestInterface>,
    AxiosError,
    UserUpdateRequestInterface
  >,
) {
  return useMutation({
    mutationFn: async (request) => {
      return fetchUpdateUserProfile(request);
    },
    ...options,
  });
}
