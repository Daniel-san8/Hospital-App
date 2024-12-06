import { Routes } from '@angular/router';
import { CreateDoctorComponent } from '../components/create-doctor/create-doctor.component';

export const registerDoctorRoutes: Routes = [
  {
    path: '',
    component: CreateDoctorComponent,
  },
];
