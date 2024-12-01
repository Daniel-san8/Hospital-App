import { ERole } from './role.enum';

export interface IAuthLogin {
  user: {
    id: string;
    name: string;
    email: string;
    password: null;
    role: ERole;
    createdAt: string;
    updateAt: string;
  };
  token: string;
}
