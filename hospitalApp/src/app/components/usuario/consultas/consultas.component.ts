import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IListAppointments } from '../../../models/listAppointments.interface';
import { NgFor } from '@angular/common';
import { ReqHttpService } from '../../../services/req-http.service';
import { AgendamentoPipe } from '../../../pipes/agendamento.pipe';

@Component({
  selector: 'app-consultas',
  standalone: true,
  imports: [NgFor, AgendamentoPipe],
  templateUrl: './consultas.component.html',
  styleUrl: './consultas.component.css',
})
export class ConsultasComponent {
  @Input({ required: true, alias: 'listAppointments' })
  listAppointments: IListAppointments[] = [];

  @Output() dispareGetAppointments = new EventEmitter<void>();

  constructor(private http: ReqHttpService) {}
  excluirAppointments(idUser: string) {
    this.http.deleteConsultas(idUser).subscribe({
      next: () => {
        this.dispareGetAppointments.emit();
      },
      error: (err: any) => console.log(err),
    });
  }
}
