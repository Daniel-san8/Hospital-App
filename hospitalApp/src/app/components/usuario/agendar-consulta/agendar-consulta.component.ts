import { Component, EventEmitter, Output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

import { ReqHttpService } from '../../../services/req-http.service';
import { NgClass, NgIf } from '@angular/common';
import { IPostConsulta } from '../../../models/postConsulta.interface';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-agendar-consulta',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgxMaskDirective, NgIf],
  templateUrl: './agendar-consulta.component.html',
  styleUrls: ['./agendar-consulta.component.css', '/src/styles.css'],
})
export class AgendarConsultaComponent {
  isLoading = false;

  form = new FormGroup({
    specialty: new FormControl(null, [Validators.required]),
    doctor: new FormControl(null, [Validators.required]),
    date: new FormControl(null, [Validators.required]),
    time: new FormControl(null, [Validators.required, this.validateHours()]),
    obs: new FormControl(null, [Validators.required]),
  });

  @Output() dispareGetAppointments = new EventEmitter<void>();

  constructor(private reqHttp: ReqHttpService) {}
  agendarConsulta() {
    this.isLoading = true;
    const paylod: IPostConsulta = this.form.value;

    this.reqHttp.postAgendarConsulta({ ...paylod }).subscribe({
      next: () => {
        this.dispareGetAppointments.emit();
        this.form.reset();
      },
      error: (err: any) => {
        this.isLoading = false;
        console.log(err);
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  validateHours(): ValidatorFn {
    const formatTime = /^(2[0-3]|[01][0-9]):([0-5][0-9])$/;
    return (control: AbstractControl): ValidationErrors | null => {
      if (formatTime.test(control.value)) {
        return null;
      }
      return { errorTime: 'Limite de hora 23:59' };
    };
  }
}
