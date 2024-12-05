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
import { ERole } from '../../models/role.enum';
import { chaveSecreta } from '../../key';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgClass],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '/src/styles.css'],
})
export class LoginComponent {
  isLoading = false;

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
    private router: Router
  ) {}

  fazerLogin() {
    const date = new Date();
    const expireToken = date.getHours() + 2;
    this.isLoading = true;

    this.reqHttp.login(this.form.value).subscribe({
      next: (value: IAuthLogin) => {
        const cookieEncrypted = CryptoJS.AES.encrypt(
          value.token,
          chaveSecreta
        ).toString();

        this.cookies.set('token', cookieEncrypted, {
          secure: true,
          expires: expireToken,
          sameSite: 'Strict',
        });

        this.cookies.set('ROLE', value.user.role, {
          secure: true,
          expires: expireToken,
          sameSite: 'Strict',
        });

        localStorage.setItem('nameUser', value.user.name);
        if (value.user.role === ERole.ADMIN) {
          this.router.navigate(['/doctor']);
        } else {
          this.router.navigate(['/usuario']);
        }
      },
      error: (err: any) => {
        this.isLoading = false;
        console.log(err);
      },
      complete: () => (this.isLoading = false),
    });
  }
}
