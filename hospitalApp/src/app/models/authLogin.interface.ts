import { ERole } from './role.enum';

export interface IAuthLogin {
  user: {
    name: string;
    email: string;
    password: null;
    role: ERole;
  };
  token: string;
}
