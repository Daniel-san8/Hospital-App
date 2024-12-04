import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IListAppointments } from '../../../models/listAppointments.interface';
import { NgFor } from '@angular/common';
import { ReqHttpService } from '../../../services/req-http.service';
import { AgendamentoPipe } from '../../../pipes/agendamento.pipe';
import { ModalConsultaComponent } from '../modal-consulta/modal-consulta.component';

@Component({
  selector: 'app-consultas',
  standalone: true,
  imports: [NgFor, AgendamentoPipe, ModalConsultaComponent],
  templateUrl: './consultas.component.html',
  styleUrl: './consultas.component.css',
})
export class ConsultasComponent {
  @Input({ required: true, alias: 'listAppointments' })
  listAppointments: IListAppointments[] = [];
  modalIsOpen = false;
  idUserModal = '';

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

  toggleModal() {
    this.modalIsOpen = !this.modalIsOpen;
    this.dispareGetAppointments.emit();
  }

  enviarId(idUser: string) {
    this.idUserModal = idUser;
    this.toggleModal();
  }
}
