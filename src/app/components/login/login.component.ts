import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
event: any;
onUsernameChange(_event: any) {
  this.username = _event.target.value;
throw new Error('Method not implemented.');
}
  username: string | undefined;
  password: string | undefined;
  newUsername: string | undefined;
  newPassword: string | undefined;
  error: string | undefined;

  constructor(private router: Router) {}

  login() {
    if (this.username === 'usuario' && this.password === 'contrasena') {
      this.router.navigate(['/pagina']); // aqui te redirige a la pagina de inicio que esta en proceso chicos.
    } else {
      this.error = 'Usuario o contraseña incorrectos';
    }
  }

  register() {
    if (this.newUsername && this.newPassword) {
      // Aquí estaba pensando en implementar la lógica para registrar nuevos usuarios y los que ya existen claro y guardarlos en la base de datos que les parece, esta parte la pueden implementar ustedes ya que el mongodb no me funciona.
      if (this.newUsername === 'usuario_existente') {
        this.error = 'El nombre de usuario ya está en uso, por favor, elige otro.';
      } else {

        // Aquí lo mismo debería realizar guardado en la base de datos.
        this.error = 'Registro exitoso, redirigiendo a la página de inicio de sesión...';
        setTimeout(() => {
          this.router.navigate(['/pagina']); // aqui iria la pagina de inicio de sesion, ya que te redirige a iniciar sesion con tu cuenta recien creada, pummmm.
        }, 2000); // estos 2 mil son 2 segundos osea que al crear tu cuenta te redirige a los 2 segundos xd no se asusten.
      }
    } else {
      this.error = 'Por favor, completa todos los campos para registrarte.';
    }
  }
}