import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { fetchSignIn } from '../../../services/apis';
import {
  SignInRequestInterface,
  SignInResponseInterface,
} from '../../../services/apis/authentication/Authenticatoin.model.ts';
import { AxiosResponseInterface } from '../../../services/apis/CustomAxios.service.ts';

export default function useSignInMutation(
  options?: UseMutationOptions<
    AxiosResponseInterface<SignInResponseInterface, SignInRequestInterface>,
    AxiosError,
    SignInRequestInterface
  >,
) {
  return useMutation({
    mutationFn: fetchSignIn,
    ...options,
  });
}
