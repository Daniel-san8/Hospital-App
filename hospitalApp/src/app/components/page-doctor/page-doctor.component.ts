import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../usuario/header/header.component';
import { ReqHttpService } from '../../services/req-http.service';
import { IListAppointments } from '../../models/listAppointments.interface';
import { NgFor } from '@angular/common';
import { AgendamentoPipe } from '../../pipes/agendamento.pipe';
import { StatusAppointmentPipe } from '../../pipes/status-appointment.pipe';

@Component({
  selector: 'app-page-doctor',
  standalone: true,
  imports: [HeaderComponent, NgFor, AgendamentoPipe, StatusAppointmentPipe],
  templateUrl: './page-doctor.component.html',
  styleUrl: './page-doctor.component.css',
})
export class PageDoctorComponent implements OnInit {
  appointmentsDoctor: IListAppointments[] = [];

  constructor(private reqHttp: ReqHttpService) {}

  buscarConsultas() {
    this.reqHttp.getConsultas().subscribe({
      next: (value: IListAppointments[]) => {
        const nameDoctor = localStorage.getItem('nameUser');
        const appointmentsFiltered = value.filter(
          (appointment) => appointment.doctor === nameDoctor
        );
        this.appointmentsDoctor = appointmentsFiltered;
      },
    });
  }

  ngOnInit() {
    this.buscarConsultas();
  }

  cancelarConsulta(idAppointment: string) {
    const payload = { id: idAppointment };
    this.reqHttp.putCancelAppointment(payload, idAppointment).subscribe({
      next: (value: any) => {
        this.buscarConsultas();
        console.log(value);
      },
      error: (err: any) => console.log(err),
    });
  }
  concluirConsulta(idAppointment: string) {
    const payload = { id: idAppointment };
    this.reqHttp.putDoneAppointment(payload, idAppointment).subscribe({
      next: (value: any) => {
        this.buscarConsultas();
        console.log(value);
      },
      error: (err: any) => console.log(err),
    });
  }
}
