import { Component } from '@angular/core';
import { AutentificacionService } from 'src/app/services/seguridad/autentificacion.service';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

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
    private router : Router,
    private toastr: ToastrService){}

  loginUsuario(){
    this.autentificacionService.login(this.usuario)
    .subscribe(
      res => {
        
        this.toastr.success(this.usuario.name,'Bienvenido', {
          timeOut: 1000
        });

        this.usuario = {
          name: '',
          password: ''
        }

        localStorage.setItem('token', res.token)
        this.router.navigate(['/'])
      },
      err => {
        this.toastr.error(err.error, 'ERROR', {
          timeOut: 1000
        });

      }
    )
  }

  registroUsuario(){
    this.autentificacionService.register(this.usuarioRegristro)
    .subscribe(
      res => {

        this.toastr.success(this.usuarioRegristro.name,'Registrado exitosamente', {
          timeOut: 1000
        });
        
        this.usuarioRegristro = {
          name: '',
          password: ''
        }

        this.router.navigate(['/'])
      },
      err => {
        this.toastr.error(err.error, 'ERROR', {
          timeOut: 1000
        });
      }
    )
  }

  changeIsRegister(){
    this.autentificacionService.isregister = !this.autentificacionService.isregister
  }

}
