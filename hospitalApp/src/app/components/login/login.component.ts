import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ReqHttpService } from '../../services/req-http.service';
import { NgClass } from '@angular/common';
import { IAuthLogin } from '../../models/authLogin.interface';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgClass],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '/src/styles.css'],
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [
      Validators.minLength(3),
      Validators.required,
    ]),
  });

  constructor(
    private reqHttp: ReqHttpService,
    private cookies: CookieService,
    private router: Router,
    private user: UserService
  ) {}

  fazerLogin() {
    const date = new Date();
    const expireToken = date.getHours() + 2;

    this.reqHttp.login(this.form.value).subscribe({
      next: (value: IAuthLogin) => {
        this.cookies.set('token', value.token, {
          secure: true,
          expires: expireToken,
          sameSite: 'Strict',
        });

        this.cookies.set('ROLE', value.user.role, {
          secure: true,
          expires: expireToken,
          sameSite: 'Strict',
        });

        this.user.nameUser = value.user.name;
        this.router.navigate(['/usuario']);
      },
      error: (err: any) => console.log(err),
    });
  }
}
