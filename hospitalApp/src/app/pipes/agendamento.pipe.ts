import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agendamento',
  standalone: true,
})
export class AgendamentoPipe implements PipeTransform {
  transform(value: string): string {
    return value.substring(0, 10);
  }
}
