import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILogin } from '../models/postLogin.interface';
import { ICadastrar } from '../models/cadastrar.interface';
import { IAuthLogin } from '../models/authLogin.interface';
import { IPostConsulta } from '../models/postConsulta.interface';
export interface ILoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class ReqHttpService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  login(loginData: ILogin): Observable<IAuthLogin> {
    return this.http.post<IAuthLogin>(`${this.baseUrl}/auth/login`, loginData);
  }

  postCadastrar(cadastroData: ICadastrar) {
    return this.http.post<null>(`${this.baseUrl}/auth/register`, cadastroData);
  }

  postAgendarConsulta(consultaData: IPostConsulta, options?: { headers?: HttpHeaders }) {
    return this.http.post<null>(`${this.baseUrl}/appointments`, consultaData, options);
  }
}
