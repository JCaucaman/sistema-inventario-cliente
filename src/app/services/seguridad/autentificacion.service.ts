import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {


  private URL = 'http://3.80.191.237:3000'

  constructor(
    private http: HttpClient
    ) { }

  login(usuario: object) {
    return this.http.post<any>(this.URL + '/api/usuario/', usuario); 
  }

  loginAdmin(admin: object) {
    return this.http.post<any>(this.URL + '/api/usuario/admin', admin); 
  }

  autoLogin(){
    return this.http.post<any>(this.URL + '/api/usuario/token', {})
  }

  loggedIn() : Boolean{
    if(localStorage.getItem('token')){ // cambiar
      return true
    } else {
      return false
    }
  }

  obtenerToken(){
    return localStorage.getItem('token');
  }

}
