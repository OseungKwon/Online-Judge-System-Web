export enum UserType {
  ADMIN = 'Admin',
  CONTRIBUTER = 'Contributer',
  USER = 'User',
}

export interface UserResponseInterface {
  id: string;
  nickname: string;
  password: string;
  email: string;
  message: string;
  github: string;
  blog: string;
  type: UserType;
  createdAt: string;
}

export interface UserRequestInterface {
  uid: string;
}

export interface User {
  id: string;
  email: string;
  nickname: string;
}
