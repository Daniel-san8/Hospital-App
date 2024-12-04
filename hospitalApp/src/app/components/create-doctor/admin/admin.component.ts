import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  @Output() authorized = new EventEmitter<void>();

  formAdmin = new FormGroup({
    nameAdmin: new FormControl('', [Validators.required]),
    passwordAdmin: new FormControl('', [Validators.required]),
  });

  authAdmin(): boolean {
    const isAuth =
      this.formAdmin.get('nameAdmin')?.value === 'admin' &&
      this.formAdmin.get('passwordAdmin')?.value === 'senha';

    if (isAuth) this.authorized.emit();

    return false;
  }
}
