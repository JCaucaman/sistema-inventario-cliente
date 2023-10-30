import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from "@angular/router";
import { AutentificacionService } from 'src/app/services/seguridad/autentificacion.service';
import { HeaderMenuService } from "src/app/services/otros/header-menu.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private autentificacionServise : AutentificacionService,
    public HeaderMenuService : HeaderMenuService,
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


  @ViewChild('menudropdown') menudropdown! :ElementRef

  menuDrop(){
    console.log('menu Drop')
    if(this.menudropdown.nativeElement.style.display !== "block"){
      this.menudropdown.nativeElement.style.display = "block";
    } else {
      this.menudropdown.nativeElement.style.display = "none";
    }
  }

  click(event: MouseEvent){
    this.menudropdown.nativeElement.style.display = "none";
  }

}
