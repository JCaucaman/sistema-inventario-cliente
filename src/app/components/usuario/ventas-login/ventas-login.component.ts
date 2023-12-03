import { Component } from '@angular/core';
import { AutentificacionService } from 'src/app/services/seguridad/autentificacion.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-ventas-login',
  templateUrl: './ventas-login.component.html',
  styleUrls: ['./ventas-login.component.css']
})
export class VentasLoginComponent {

  usuario = {
    name: '',
    password: ''
  }

  usuarioRegristro = {
    name: '',
    password: ''
  }


  constructor(
    public autentificacionService : AutentificacionService,
    private router : Router
    ) { }

  loginUsuario(){
    this.autentificacionService.login(this.usuario)
    .subscribe(
      res => {
        console.log(res)
        
        this.usuario = {
          name: '',
          password: ''
        }
      
        localStorage.setItem('token', res.token)
        this.router.navigate(['/'])
      },
      err => {
        console.log(err)
      }
    )
  }

  registroUsuario(){
    this.autentificacionService.register(this.usuarioRegristro)
    .subscribe(
      res => {
        console.log(res)
        
        this.usuarioRegristro = {
          name: '',
          password: ''
        }

        this.router.navigate(['/'])
      },
      err => {
        console.log(err)
      }
    )
  }

  changeIsRegister(){
    this.autentificacionService.isregister = !this.autentificacionService.isregister
  }

}
