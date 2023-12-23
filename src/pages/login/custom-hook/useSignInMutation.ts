import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { SignInRequestInterface, SignInResponseInterface } from '@/services/apis';
import { fetchSignIn } from '@/services/apis';
import { AxiosResponseInterface } from '@/services/apis';

export default function useSignInMutation(
  options?: UseMutationOptions<
    AxiosResponseInterface<SignInResponseInterface, SignInRequestInterface>,
    AxiosError,
    SignInRequestInterface
  >,
) {
  return useMutation({
    mutationFn: async (request) => {
      return fetchSignIn(request);
    },
    ...options,
  });
}
