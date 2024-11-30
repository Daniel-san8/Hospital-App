import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReqHttpService } from '../../services/req-http.service';
import { ICadastro } from '../../models/postCadastro.interface';

@Component({
  selector: 'app-cadastrar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css'],
})
export class CadastrarComponent {
  cadastroDados: ICadastro = {
    email: '',
    password: '',
    nome: '',
    cpf: '',
    dataNascimento: '',
    contato: '',
    cartaoConvenio: '',
    tipoUsuario: 'Usuario', // Valor padrão
  };

  constructor(private reqHttp: ReqHttpService) {}

  fazerCadastro() {
    this.reqHttp.cadastrar(this.cadastroDados).subscribe(
      (response) => {
        console.log('Cadastro realizado com sucesso:', response);
        alert('Cadastro realizado com sucesso!')
      },
      (error) => {
        console.error('Erro ao realizar cadastro:', error);
        alert('Erro ao realizar ao cadastrar.')
      }
    );
  }
}

