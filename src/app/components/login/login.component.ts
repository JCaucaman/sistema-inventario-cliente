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
  error: string | undefined;
  

  constructor(private router: Router) {}
  

  login() {
    if (this.username === 'usuario' && this.password === 'contrasena') {
      this.router.navigate(['/pagina']);//aqui iria la ruta de la pagina de inicio chicos que es a donde te mandaria despues de ingresar, pero que pagina pongo xd
    } else {
      this.error = 'Usuario o contraseña incorrectos';
    }
  }
}