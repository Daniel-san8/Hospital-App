import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusAppointment',
  standalone: true,
})
export class StatusAppointmentPipe implements PipeTransform {
  transform(value: string): string {
    let status = '';
    switch (value) {
      case 'SCHEDULED':
        return (status = 'Agendado');
      case 'CANCELED':
        return (status = 'Cancelado');
      case 'DONE':
        return (status = 'Concluída');
    }
    return status;
  }
}
