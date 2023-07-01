import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AutentificacionService } from "../services/seguridad/autentificacion.service";
import {  Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AutenticacionGuard implements CanActivate {
  constructor(
    private Autentifica : AutentificacionService,
    private router : Router
    ) {}

  canActivate(): boolean{
    if(this.Autentifica.loggedIn()){
      return true;
    }
    this.router.navigate(['/'])
    return false
  }
}