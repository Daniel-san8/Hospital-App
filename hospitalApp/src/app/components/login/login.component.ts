import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ReqHttpService } from '../../services/req-http.service';
import { ILogin } from '../../models/postLogin.interface';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgClass],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '/src/styles.css'],
})
export class LoginComponent {
  loginDados: ILogin = {
    email: '',
    password: '',
  };

  form = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [
      Validators.minLength(3),
      Validators.required,
    ]),
  });

  constructor(private reqHttp: ReqHttpService) {}

  fazerLogin() {
    this.reqHttp.login(this.loginDados).subscribe(
      (response) => {
        console.log('Login bem-sucedido:', response);
        alert('Login realizado com sucesso!');
      },
      (error) => {
        console.error('Erro ao fazer login:', error);
        alert('Erro ao realizar o login.');
      }
    );
  }
}
