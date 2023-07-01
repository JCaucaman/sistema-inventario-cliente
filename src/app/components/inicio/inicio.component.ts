import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from 'src/app/services/seguridad/autentificacion.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(
    private autentificacionServise : AutentificacionService,
    private router : Router
    ) { }

  ngOnInit(){
    this.autentificacionServise.autoLogin()
    .subscribe(
      res => {
        if(res){
          this.router.navigate(['/menu'])
        } else {}
      }
    )
  }

}
