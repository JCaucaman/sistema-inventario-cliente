import { Component } from '@angular/core';
import { AutentificacionService } from 'src/app/services/autentificacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario = {
    name: '',
    password: ''
  }

  constructor(private autentificacionServise : AutentificacionService) { }

  login(){
    this.autentificacionServise.login(this.usuario)
    .subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    )
  }
}
