import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ICadastrar } from '../../models/cadastrar.interface';
import { ERole } from '../../models/role.enum';
import { ReqHttpService } from '../../services/req-http.service';
import { Router } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

@Component({
  selector: 'app-create-doctor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AdminComponent],
  templateUrl: './create-doctor.component.html',
  styleUrl: './create-doctor.component.css',
})
export class CreateDoctorComponent {
  form = new FormGroup({
    name: new FormControl('', [Validators.minLength(3), Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.minLength(3),
      Validators.required,
    ]),
  });

  authorized = false;

  authLogin() {
    this.authorized = true;
  }

  constructor(private reqHttp: ReqHttpService, private router: Router) {}

  cadastrarUsuario() {
    const paylod: ICadastrar = this.form.value;
    this.reqHttp.postCadastrar({ ...paylod, role: ERole.ADMIN }).subscribe({
      next: () => this.router.navigate(['/login']),
      error: (err: any) => console.log('isso é um erro ' + JSON.stringify(err)),
    });
  }
}
