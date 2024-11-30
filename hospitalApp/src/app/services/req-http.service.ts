import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILogin } from '../models/postLogin.interface';
import { ICadastro } from '../models/postCadastro.interface';

export interface ILoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class ReqHttpService {
  private baseUrl = 'http://localhost:3000/auth';

  constructor(private http: HttpClient) {}

  login(loginData: ILogin): Observable<ILoginResponse> {
    return this.http.post<ILoginResponse>(`${this.baseUrl}/login`, loginData);
  }

  cadastrar(cadastroData: ICadastro): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, cadastroData);
  }
}

