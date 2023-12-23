import { fetchSignIn, fetchSignUp } from './authentication/Authentication.service.ts';
import {
  SignInRequestInterface,
  SignInResponseInterface,
  SignUpRequestInterface,
  SignUpResponseInterface,
} from './authentication/Authenticatoin.model.ts';
import { AxiosResponseInterface } from './CustomAxios.service.ts';
import { User, UserRequestInterface, UserResponseInterface, UserType } from './user/User.model.ts';
import { fetchGetOtherUserProfile, fetchGetUserProfile } from './user/User.service.ts';

// common
export type { AxiosResponseInterface };

// authentication
export { fetchSignIn, fetchSignUp };
export type { SignInRequestInterface, SignInResponseInterface, SignUpRequestInterface, SignUpResponseInterface };

// user
export { fetchGetOtherUserProfile, fetchGetUserProfile, UserType };
export type { User, UserRequestInterface, UserResponseInterface };
