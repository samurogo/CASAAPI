// src/domain/user/User.ts

export interface User {
  id: string;
  email: string;
  password: string;
  role: UserRole;
}

export enum UserRole {
  ADMIN = 'admin',
  FAMILIAR = 'familiar',
  THIEF = 'thief',
}
