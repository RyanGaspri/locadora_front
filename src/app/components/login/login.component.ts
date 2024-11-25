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

  constructor(private router: Router) {}

  login() {
    // Lógica de autenticação (simulação)
    console.log('Login attempt:', { username: this.username, password: this.password });

    // Simulação de autenticação
    setTimeout(() => {
      // Após a autenticação, redireciona para a página "read-all"
      this.router.navigate(['/read-all']);
    }, 2000);
  }
}
