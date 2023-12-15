import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RutaService } from "../ruta.service";

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {

  isregister = false;

  constructor(
    private http: HttpClient,
    private URL : RutaService
    ) { }

  login(usuario: object) {
    console.log(usuario)
    return this.http.post<any>(this.URL.ruta + '/api/usuario/', usuario); 
  }

  register(usuario: object) {
    console.log(usuario)
    return this.http.post<any>(this.URL.ruta + '/api/usuario/register', usuario); 
  }

  loginAdmin(admin: object) {
    return this.http.post<any>(this.URL.ruta + '/api/usuario/admin', admin); 
  }

  autoLogin(){
    return this.http.post<any>(this.URL.ruta + '/api/usuario/token', {})
  }

  loggedIn() : Boolean{
    if(localStorage.getItem('token')){ 
      return true
    } else {
      return false
    }
  }

  obtenerToken(){
    return localStorage.getItem('token');
  }

}
