import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  // String fixa para simular a conexão
  private readonly correctUsername: string = 'admin';
  private readonly correctPassword: string = '12345';

  constructor(private router: Router) {}

  login() {
    console.log('Login attempt:', { username: this.username, password: this.password });

    // Verifica se os dados inseridos correspondem aos valores fixos
    if (this.username === this.correctUsername && this.password === this.correctPassword) {
      console.log('Login successful!');
      
      // Simulação de autenticação (com atraso, opcional)
      setTimeout(() => {
        // Após a autenticação, redireciona para a página "read-all"
        this.router.navigate(['/read-all']);
      }, 2000);
    } else {
      console.log('Login failed. Invalid credentials.');
      alert('Usuário ou senha incorretos.');
    }
  }
}
