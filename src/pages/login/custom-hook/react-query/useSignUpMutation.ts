import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { fetchSignUp } from '@/services/apis';
import { SignUpRequestInterface, SignUpResponseInterface } from '@/services/apis';
import { AxiosResponseInterface } from '@/services/apis';

export default function useSignUpMutation(
  options?: UseMutationOptions<
    AxiosResponseInterface<SignUpResponseInterface, SignUpRequestInterface>,
    AxiosError,
    SignUpRequestInterface
  >,
) {
  return useMutation({
    mutationFn: fetchSignUp,
    ...options,
  });
}
