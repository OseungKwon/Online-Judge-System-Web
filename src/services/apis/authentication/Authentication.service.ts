import {
  SignInRequestInterface,
  SignInResponseInterface,
  SignUpRequestInterface,
  SignUpResponseInterface,
} from '@/services/apis';
import { ApiFormatter } from '@/utils';
import { InnerApi } from '@/values';

import { axiosHandler, AxiosResponseInterface, customAxios } from '../CustomAxios.service.ts';

export const fetchSignUp = (
  request: SignUpRequestInterface,
): Promise<AxiosResponseInterface<SignUpResponseInterface, SignUpRequestInterface>> => {
  return axiosHandler<SignUpResponseInterface, SignUpRequestInterface>(
    customAxios.post,
    ApiFormatter(InnerApi.SIGN_UP),
    request,
  );
};

export const fetchSignIn = (
  request: SignInRequestInterface,
): Promise<AxiosResponseInterface<SignInResponseInterface, SignInRequestInterface>> => {
  return axiosHandler<SignInResponseInterface, SignInRequestInterface>(
    customAxios.post,
    ApiFormatter(InnerApi.SIGN_IN),
    request,
  );
};
