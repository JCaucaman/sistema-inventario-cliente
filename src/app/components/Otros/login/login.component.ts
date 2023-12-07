import { Component } from '@angular/core';
import { AutentificacionService } from 'src/app/services/seguridad/autentificacion.service';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',]
})
export class LoginComponent {

  usuario = {
    name: '',
    password: ''
  }

  constructor(
    private autentificacionServise : AutentificacionService,
    private router : Router,
    private toastr: ToastrService){}

  login(){
    this.autentificacionServise.loginAdmin(this.usuario)
    .subscribe(
      res => {

        this.usuario = {
          name: '',
          password: ''
        }

        this.toastr.success('Hello world!', res);

        localStorage.setItem('token', res.token)
        this.router.navigate(['/menu'])
      },
      err => {
        console.log(err)
        this.toastr.success('Hello world!', err.send);
      }
    )
  }
}
