import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ReqHttpService } from '../../services/req-http.service';
import { ICadastrar } from '../../models/cadastrar.interface';
import { ERole } from '../../models/role.enum';

@Component({
  selector: 'app-cadastrar',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NgClass],
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css', '/src/styles.css'],
})
export class CadastrarComponent {
  form = new FormGroup({
    name: new FormControl('', [Validators.minLength(3), Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.minLength(3),
      Validators.required,
    ]),
  });

  constructor(private reqHttp: ReqHttpService, private router: Router) {}
  cadastrarUsuario() {
    const paylod: ICadastrar = this.form.value;
    this.reqHttp.postCadastrar({ ...paylod, role: ERole.USER }).subscribe({
      next: () => this.router.navigate(['/login']),
      error: (err: any) => console.log('isso é um erro ' + JSON.stringify(err)),
    });
  }
}
