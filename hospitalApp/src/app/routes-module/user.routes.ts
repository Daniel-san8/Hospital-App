import { Routes } from '@angular/router';
import { UsuarioComponent } from '../components/usuario/usuario.component';
import { usuarioGuard } from '../guards/usuario.guard';

export const componentsRoutes: Routes = [
  {
    path: '',
    component: UsuarioComponent,
    canActivate: [usuarioGuard],
  },
];
