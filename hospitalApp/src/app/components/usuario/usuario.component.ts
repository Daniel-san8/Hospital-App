import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { AgendarConsultaComponent } from './agendar-consulta/agendar-consulta.component';
import { ReqHttpService } from '../../services/req-http.service';
import { IListAppointments } from '../../models/listAppointments.interface';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [HeaderComponent, ConsultasComponent, AgendarConsultaComponent],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css',
})
export class UsuarioComponent implements OnInit {
  listAppointments: IListAppointments[] = [];

  constructor(private http: ReqHttpService) {}

  getAppointments() {
    this.http.getConsultas().subscribe({
      next: (value: IListAppointments[]) => {
        this.listAppointments = value;
      },
      error: (err: any) => console.log(err),
    });
  }

  ngOnInit() {
    this.getAppointments();
  }
}
