import { Routes } from '@angular/router';
import { PageDoctorComponent } from '../components/page-doctor/page-doctor.component';
import { doctorGuard } from '../guards/doctor.guard';

export const doctorRoutes: Routes = [
  {
    path: '',
    component: PageDoctorComponent,
    canActivate: [doctorGuard],
  },
];
