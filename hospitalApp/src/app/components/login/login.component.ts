import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReqHttpService } from '../../services/req-http.service';
import { ILogin } from '../../models/postLogin.interface';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginDados: ILogin = {
    email: '',
    password: '',
  };

  constructor(private reqHttp: ReqHttpService) {}

  fazerLogin() {
    this.reqHttp.login(this.loginDados).subscribe(
      (response) => {
        console.log('Login bem-sucedido:', response);
        alert('Login realizado com sucesso!');
      },
      (error) => {
        console.error('Erro ao fazer login:', error);
        alert('Erro ao realizar o login.');
      }
    );
  }
}
