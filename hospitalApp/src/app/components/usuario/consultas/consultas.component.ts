import { Component, Input } from '@angular/core';
import { IListAppointments } from '../../../models/listAppointments.interface';

@Component({
  selector: 'app-consultas',
  standalone: true,
  imports: [],
  templateUrl: './consultas.component.html',
  styleUrl: './consultas.component.css',
})
export class ConsultasComponent {
  @Input({ required: true, alias: 'listAppointments' })
  listAppointments: IListAppointments[] = [];
}
