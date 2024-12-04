import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { AgendarConsultaComponent } from './agendar-consulta/agendar-consulta.component';
import { ReqHttpService } from '../../services/req-http.service';
import { IListAppointments } from '../../models/listAppointments.interface';
import { IUser } from '../../models/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [HeaderComponent, ConsultasComponent, AgendarConsultaComponent],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css',
})
export class UsuarioComponent implements AfterViewInit {
  listAppointments: IListAppointments[] = [];

  constructor(private reqHttp: ReqHttpService, private router: Router) {}

  getAppointments() {
    this.reqHttp.getConsultas().subscribe({
      next: (value: IListAppointments[]) => {
        this.listAppointments = value;
      },
      error: (err: any) => {
        console.log(err);
        this.router.navigate(['/login']);
      },
    });
  }

  ngAfterViewInit() {
    this.getAppointments();
  }
}
