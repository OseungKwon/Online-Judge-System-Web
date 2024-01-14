import { fetchSignIn, fetchSignUp } from './authentication/Authentication.service.ts';
import {
  SignInRequestInterface,
  SignInResponseInterface,
  SignUpRequestInterface,
  SignUpResponseInterface,
} from './authentication/Authenticatoin.model.ts';
import { AxiosResponseInterface } from './CustomAxios.service.ts';
import {
  fetchCreateProblem,
  fetchDeleteProblem,
  fetchGetProblem,
  fetchGetProblems,
  fetchUpdateProblem,
} from './judge/Judge.service.ts';
import {
  ProblemCreateResponseInterface,
  ProblemDeleteRequestInterface,
  ProblemDeleteResponseInterface,
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
export { fetchCreateProblem, fetchDeleteProblem, fetchGetProblem, fetchGetProblems, fetchUpdateProblem };
export type {
  ProblemCreateResponseInterface,
  ProblemDeleteRequestInterface,
  ProblemDeleteResponseInterface,
  ProblemRequestInterface,
  ProblemResponseInterface,
  ProblemsRequestInterface,
  ProblemUpdateRequestInterface,
};
