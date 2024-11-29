import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginDados = {
    email: '',
    senha: ''
  };

  constructor(private http: HttpClient) {}

  fazerLogin() {
    const url = '#'; //adicionar url da api
    this.http.post<any>(url, this.loginDados).subscribe({
      next: (response: any) => {
        console.log('Login realizado com sucesso!', response);
        alert('Login realizado com sucesso!');
      },
      error: (error: any) => {
        console.error('Erro ao fazer login:', error);
        alert('Erro ao realizar o login.');
      }
    });
  }
}
