// export const fetchSignUp = async (
//   request: SignUpRequestInterface,
//   config?: AxiosRequestConfig<SignUpRequestInterface>,
// ): Promise<SignUpResponseInterface> => {
//   try {
//     const response: AxiosResponse<
//       SignUpResponseInterface,
//       AxiosRequestConfig<SignUpRequestInterface>
//     > = await customAxios.post(InnerApi.SIGN_UP, request, config);
//     return response.data;
//   } catch (error) {
//     if (error instanceof AxiosError) {
//       throw new Error(error.message);
//     } else {
//       throw new Error('An unknown error occurred.');
//     }
//   }
// };

import { InnerApi } from '../../../values';
import { axiosHandler, AxiosResponseInterface, customAxios } from '../CustomAxios.service.ts';
import {
  SignInRequestInterface,
  SignInResponseInterface,
  SignUpRequestInterface,
  SignUpResponseInterface,
} from './Authenticatoin.model.ts';

export const fetchSignUp = (
  request: SignUpRequestInterface,
): Promise<AxiosResponseInterface<SignUpResponseInterface, SignUpRequestInterface>> => {
  return axiosHandler<SignUpResponseInterface, SignUpRequestInterface>(customAxios.post, InnerApi.SIGN_UP, request);
};

export const fetchSignIn = (
  request: SignInRequestInterface,
): Promise<AxiosResponseInterface<SignInResponseInterface, SignInRequestInterface>> => {
  return axiosHandler<SignInResponseInterface, SignInRequestInterface>(customAxios.post, InnerApi.SIGN_IN, request);
};
