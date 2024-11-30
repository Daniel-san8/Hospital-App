import { ERole } from './role.enum';

export interface ICadastrar {
  name?: string | null;
  email?: string | null;
  password?: string | null;
  role?: ERole;
}
