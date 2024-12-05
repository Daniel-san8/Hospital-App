import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  ngOnInit() {
    this.buscarConsultas();
  }

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

  cancelarConsulta(idAppointment: string) {
    this.reqHttp.putCancelAppointment(idAppointment).subscribe({
      next: () => {
        this.buscarConsultas();
      },
      error: (err: any) => console.log(err),
    });
  }

  concluirConsulta(idAppointment: string) {
    this.reqHttp.putDoneAppointment(idAppointment).subscribe({
      next: () => {
        this.buscarConsultas();
      },
      error: (err: any) => console.log(err),
    });
  }

  limparConsultas() {
    const clearList = this.appointmentsDoctor.filter(
      (appointment) => appointment.status !== 'SCHEDULED'
    );

    clearList.forEach((appointment) => {
      this.reqHttp.deleteConsultas(appointment.id).subscribe({
        error: (err: any) => console.log(err),
      });
    });

    this.buscarConsultas();
  }
}
