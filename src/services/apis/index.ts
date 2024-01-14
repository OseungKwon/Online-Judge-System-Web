import { fetchSignIn, fetchSignUp } from './authentication/Authentication.service.ts';
import {
  SignInRequestInterface,
  SignInResponseInterface,
  SignUpRequestInterface,
  SignUpResponseInterface,
} from './authentication/Authenticatoin.model.ts';
import { AxiosResponseInterface } from './CustomAxios.service.ts';
import { fetchCreateProblem, fetchGetProblem, fetchGetProblems } from './judge/Judge.service.ts';
import {
  ProblemRequestInterface,
  ProblemResponseInterface,
  ProblemsRequestInterface,
  ProblemUpdateRequestInterface,
} from './judge/Problem.model.ts';
import {
  User,
  UserRequestInterface,
  UserResponseInterface,
  UserType,
  UserUpdateRequestInterface,
  UserUpdateResponseInterface,
} from './user/User.model.ts';
import { fetchGetOtherUserProfile, fetchGetUserProfile, fetchUpdateUserProfile } from './user/User.service.ts';

// common
export type { AxiosResponseInterface };

// authentication
export { fetchSignIn, fetchSignUp };
export type { SignInRequestInterface, SignInResponseInterface, SignUpRequestInterface, SignUpResponseInterface };

// user
export { fetchGetOtherUserProfile, fetchGetUserProfile, fetchUpdateUserProfile, UserType };
export type {
  User,
  UserRequestInterface,
  UserResponseInterface,
  UserUpdateRequestInterface,
  UserUpdateResponseInterface,
};

// judge
export { fetchCreateProblem, fetchGetProblem, fetchGetProblems };
export type {
  ProblemRequestInterface,
  ProblemResponseInterface,
  ProblemsRequestInterface,
  ProblemUpdateRequestInterface,
};
