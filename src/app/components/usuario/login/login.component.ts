import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  event: any;
  username: string = '';
  password: string = '';
  Username: string = '';
  Password: string = '';
  error: string = '';
  showRegisterForm: boolean = false;
  showRegisterSection: boolean = false;

  constructor(private router: Router) {}

  login() {
    if (this.username === 'usuario' && this.password === 'contraseña') {
      this.router.navigate(['/pag']);
    } else {
      this.error = 'Usuario o contraseña incorrectos';
    }
  }

  register() {
    if (this.showRegisterForm && this.Username && this.Password) {

      if (this.Username === 'usuario_existente') {
        this.error = 'El nombre de usuario ya está en uso, por favor, elige otro.';
      } else {
        // Aquí debería realizar el guardado en la base de datos.
        this.error = 'Registro exitoso, redirigiendo a la página de inicio de sesión...';
        setTimeout(() => {
          this.showRegisterForm = false; 
          this.router.navigate(['/pagina']);
        }, 2000); // Espera de 2 segundos 
      }
    } else {
      this.error = 'Por favor, completa todos los campos para registrarte.';
    }
  }

  toggleRegisterForm() {
    this.showRegisterForm = !this.showRegisterForm;
    if (this.showRegisterForm) {
      this.router.navigate(['/']); 
    console.log('showRegisterForm:', this.showRegisterForm);
  }}}