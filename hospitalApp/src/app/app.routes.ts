import { Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {CadastrarComponent} from "./components/cadastrar/cadastrar.component";

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
    component: CadastrarComponent
  }
];
