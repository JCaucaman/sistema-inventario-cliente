import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from 'src/app/services/seguridad/autentificacion.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private autentificacionServise : AutentificacionService,
    private router : Router
    ) { }

  ngOnInit(){
    this.autentificacionServise.autoLogin()
    .subscribe(
      res => {
        if(!res){
          this.router.navigate(['/'])
        } else {}
      }
    )
  }


    logout(){
        localStorage.removeItem('token')
        this.router.navigate(['/'])
      }

}
