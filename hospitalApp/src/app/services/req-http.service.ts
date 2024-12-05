import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILogin } from '../models/postLogin.interface';
import { ICadastrar } from '../models/cadastrar.interface';
import { IAuthLogin } from '../models/authLogin.interface';
import { IPostConsulta } from '../models/postConsulta.interface';
import { IListAppointments } from '../models/listAppointments.interface';
import { IPutConsulta } from '../models/putConsulta.interface';
import { IUser } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class ReqHttpService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  login(loginData: ILogin) {
    return this.http.post<IAuthLogin>(`${this.baseUrl}/auth/login`, loginData);
  }

  postCadastrar(cadastroData: ICadastrar) {
    return this.http.post<null>(`${this.baseUrl}/auth/register`, cadastroData);
  }

  postAgendarConsulta(consultaData: IPostConsulta) {
    return this.http.post<null>(`${this.baseUrl}/appointments`, consultaData);
  }

  getConsultas() {
    return this.http.get<IListAppointments[]>(`${this.baseUrl}/appointments`);
  }

  deleteConsultas(idUser: string) {
    return this.http.delete<null>(`${this.baseUrl}/appointments/${idUser}`);
  }

  putConsultas(paylod: IPutConsulta, idAppointment: string) {
    return this.http.put<null>(
      `${this.baseUrl}/appointments/${idAppointment}`,
      paylod
    );
  }

  getUsuarios() {
    return this.http.get<IUser[]>(`${this.baseUrl}/users`);
  }

  putCancelAppointment(idAppointment: string) {
    return this.http.put<null>(
      `${this.baseUrl}/appointments/cancel/${idAppointment}`,
      {}
    );
  }

  putDoneAppointment(idAppointment: string) {
    return this.http.put<null>(
      `${this.baseUrl}/appointments/done/${idAppointment}`,
      {}
    );
  }
}
