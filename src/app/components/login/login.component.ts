import { Component } from '@angular/core';
import { AutentificacionService } from 'src/app/services/autentificacion.service';
import { Router } from "@angular/router";

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

  constructor(
    private autentificacionServise : AutentificacionService,
    private router : Router
    ) { }

  login(){
    this.autentificacionServise.login(this.usuario)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this.router.navigate(['/menu'])
      },
      err => console.log(err)
    )
  }
}
