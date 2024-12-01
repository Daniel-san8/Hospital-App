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

  constructor(private reqHttp: ReqHttpService) {}

  fazerLogin() {
    this.reqHttp.login(this.form.value).subscribe({
      next: (value: IAuthLogin) => {
        // console.log(`login funcionou ${JSON.stringify(value)}`),
        if (value && value.token) {
          const expires = new Date();
          expires.setDate(expires.getDate() + 7);
          document.cookie = `authToken=${value.token}; expires=${expires.toUTCString()}; path=/`;
        }
      },
      error: (err: any) => console.log(err),
    });
  }
}
