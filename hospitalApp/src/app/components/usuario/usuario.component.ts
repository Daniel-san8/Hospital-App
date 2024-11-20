import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {ConsultasComponent} from "./consultas/consultas.component";
import {AgendarConsultaComponent} from "./agendar-consulta/agendar-consulta.component";

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [
    HeaderComponent,
    ConsultasComponent,
    AgendarConsultaComponent
  ],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {

}
