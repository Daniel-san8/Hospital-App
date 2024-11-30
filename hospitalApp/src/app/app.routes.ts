import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cadastrar',
    component: CadastrarComponent,
  },
  {
    path: 'usuario',
    component: UsuarioComponent,
  },
  {
    // não esquecer de alinhar o component correto
    path: 'registerAdmin',
    component: UsuarioComponent,
  },
];
