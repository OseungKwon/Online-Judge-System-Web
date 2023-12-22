import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { fetchSignUp } from '../../../services/apis';
import {
  SignUpRequestInterface,
  SignUpResponseInterface,
} from '../../../services/apis/authentication/Authenticatoin.model.ts';
import { AxiosResponseInterface } from '../../../services/apis/CustomAxios.service.ts';

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
