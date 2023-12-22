export interface SignUpRequestInterface {
  nickname: string;
  password: string;
  email: string;
}

export interface SignUpResponseInterface {
  accessToken: string;
}

export interface SignInRequestInterface {
  password: string;
  email: string;
}

export interface SignInResponseInterface {
  accessToken: string;
}
