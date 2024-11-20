import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {ConsultasComponent} from "./consultas/consultas.component";

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [
    HeaderComponent,
    ConsultasComponent
  ],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {

}
