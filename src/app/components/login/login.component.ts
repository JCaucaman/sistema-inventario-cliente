import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  event: any;
  username: string = '';
  password: string = '';
  newUsername: string = '';
  newPassword: string = '';
  error: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'usuario' && this.password === 'contraseña') {
      this.router.navigate(['/pagina']); // Aquí te redirige a la página de inicio que está en proceso.
    } else {
      this.error = 'Usuario o contraseña incorrectos';
    }
  }

  register() {
    if (this.newUsername && this.newPassword) {
      // Lógica para registrar nuevos usuarios y guardarlos en la base de datos
      if (this.newUsername === 'usuario_existente') {
        this.error = 'El nombre de usuario ya está en uso, por favor, elige otro.';
      } else {
        // Aquí deberia realizar el guardado en la base de datos.
        this.error = 'Registro exitoso, redirigiendo a la página de inicio de sesión...';
        setTimeout(() => {
          this.router.navigate(['/pagina']); // Aquí iría la página de inicio de sesión.
        }, 2000); // Espera de 2 segundos antes de redirigir.
      }
    } else {
      this.error = 'Por favor, completa todos los campos para registrarte.';
    }
  }
}
