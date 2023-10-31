import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {

  private URL = 'http://localhost:3000'

  constructor(
    private http: HttpClient
    ) { }

  login(usuario: object) {
    return this.http.post<any>(this.URL + '/usuario', usuario); 
  }

  autoLogin(){
    return this.http.post<any>(this.URL + '/token', {})
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
