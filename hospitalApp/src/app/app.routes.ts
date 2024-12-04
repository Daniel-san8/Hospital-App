import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { CreateDoctorComponent } from './components/create-doctor/create-doctor.component';
import { doctorGuard } from './guards/doctor.guard';
import { usuarioGuard } from './guards/usuario.guard';
import { PageDoctorComponent } from './components/page-doctor/page-doctor.component';

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
    canActivate: [usuarioGuard],
  },
  {
    path: 'register-doctor',
    component: CreateDoctorComponent,
  },
  {
    path: 'doctor',
    component: PageDoctorComponent,
    canActivate: [doctorGuard],
  },
];
