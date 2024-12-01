import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ReqHttpService } from '../../../services/req-http.service';
import { NgClass } from '@angular/common';
import { IPostConsulta } from '../../../models/postConsulta.interface';
import { NgxMaskDirective } from 'ngx-mask';
@Component({
  selector: 'app-agendar-consulta',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgClass, NgxMaskDirective],
  templateUrl: './agendar-consulta.component.html',
  styleUrls: ['./agendar-consulta.component.css', '/src/styles.css'],
})
export class AgendarConsultaComponent {
  form = new FormGroup({
    specialty: new FormControl(null, [Validators.required]),
    doctor: new FormControl(null, [Validators.required]),
    date: new FormControl(null, [Validators.required]),
    time: new FormControl(null, [Validators.required]),
    obs: new FormControl(null, [Validators.required]),
  });

  constructor(private reqHttp: ReqHttpService, private router: Router) {}
  agendarConsulta() {
    const paylod: IPostConsulta = this.form.value;
    const authToken = this.getAuthToken();
    const headers = authToken
      ? new HttpHeaders().set('Authorization', `Bearer ${authToken}`)
      : undefined;

    this.reqHttp.postAgendarConsulta({ ...paylod }, { headers }).subscribe({
      next: () => {
        console.log(this.form.get('date'));
        this.router.navigate(['/registerAdmin']);
      },
      error: (err: any) => console.log('isso é um erro ' + JSON.stringify(err)),
    });
  }

  private getAuthToken(): string | null {
    const name = 'authToken=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');

    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i].trim();
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return null;
  }
}
