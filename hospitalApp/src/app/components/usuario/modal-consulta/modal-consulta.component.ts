import { CommonModule } from '@angular/common';
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
import { NgxMaskDirective } from 'ngx-mask';
import { ReqHttpService } from '../../../services/req-http.service';
import { IPostConsulta } from '../../../models/postConsulta.interface';

@Component({
  selector: 'app-modal-consulta',
  standalone: true,
  imports: [NgxMaskDirective, CommonModule, ReactiveFormsModule],
  templateUrl: './modal-consulta.component.html',
  styleUrls: ['./modal-consulta.component.css', '/src/styles.css'],
})
export class ModalConsultaComponent {
  form = new FormGroup({
    doctor: new FormControl(null, [Validators.required]),
    date: new FormControl(null, [Validators.required]),
    time: new FormControl(null, [Validators.required, this.validateHours()]),
    obs: new FormControl(null, [Validators.required]),
  });

  @Output() dispareGetAppointments = new EventEmitter<void>();

  constructor(private reqHttp: ReqHttpService) {}
  agendarConsulta() {
    const paylod: IPostConsulta = this.form.value;

    this.reqHttp.postAgendarConsulta({ ...paylod }).subscribe({
      next: () => {
        this.dispareGetAppointments.emit();
        this.form.reset();
      },
      error: (err: any) => console.log('isso é um erro ' + JSON.stringify(err)),
    });
  }

  validateHours(): ValidatorFn {
    const formatTime = /^\d{2}:\d{2}$/;
    return (control: AbstractControl): ValidationErrors | null => {
      if (formatTime.test(control.value)) {
        return null;
      }
      return { errorTime: 'Limite de hora 23:59' };
    };
  }
}
