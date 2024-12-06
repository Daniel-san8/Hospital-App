import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'login',
    loadChildren: () =>
      import('./routes-module/auth.routes').then((rota) => rota.authRoutes),
  },

  {
    path: 'cadastrar',
    loadChildren: () =>
      import('./routes-module/cadastrar.routes').then(
        (rota) => rota.cadastrarRoute
      ),
  },

  {
    path: 'register-doctor',
    loadChildren: () =>
      import('./routes-module/register-doctor.routes').then(
        (rota) => rota.registerDoctorRoutes
      ),
  },
  {
    path: 'doctor',
    loadChildren: () =>
      import('./routes-module/doctor.routes').then((rota) => rota.doctorRoutes),
  },
  {
    path: 'usuario',
    loadChildren: () =>
      import('./routes-module/user.routes').then(
        (rota) => rota.componentsRoutes
      ),
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];
