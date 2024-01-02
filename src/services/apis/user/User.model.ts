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
  message: string;
}

export interface UserUpdateRequestInterface {
  nickname?: string;
  password: string;
  message?: string;
  github?: string;
  blog?: string;
}

export interface UserUpdateResponseInterface {
  id: string;
  nickname: string;
  password: string;
  email: string;
  message?: string;
  github?: string;
  blog?: string;
  type: UserType;
  createdAt: string;
  updatedAt: string;
}
