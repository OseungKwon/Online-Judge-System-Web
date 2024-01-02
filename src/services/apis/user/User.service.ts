import { ApiFormatter } from '@/utils';
import { InnerApi } from '@/values';

import { axiosHandler, AxiosResponseInterface, customAxios } from '../CustomAxios.service.ts';
import {
  UserRequestInterface,
  UserResponseInterface,
  UserUpdateRequestInterface,
  UserUpdateResponseInterface,
} from './User.model.ts';

export const fetchGetUserProfile = (): Promise<AxiosResponseInterface<UserResponseInterface, undefined>> => {
  return axiosHandler<UserResponseInterface, undefined>(
    customAxios.get,
    ApiFormatter(InnerApi.USER_PROFILE),
    undefined,
  );
};

export const fetchGetOtherUserProfile = (
  requestData: UserRequestInterface,
): Promise<AxiosResponseInterface<UserResponseInterface, UserRequestInterface>> => {
  return axiosHandler<UserResponseInterface, UserRequestInterface>(
    customAxios.get,
    ApiFormatter(InnerApi.USER_PROFILE, requestData.uid),
    requestData,
    {
      params: requestData,
    },
  );
};

export const fetchUpdateUserProfile = (
  requestData: UserUpdateRequestInterface,
): Promise<AxiosResponseInterface<UserUpdateResponseInterface, UserUpdateRequestInterface>> => {
  return axiosHandler<UserUpdateResponseInterface, UserUpdateRequestInterface>(
    customAxios.patch,
    ApiFormatter(InnerApi.USER_PROFILE),
    requestData,
  );
};
