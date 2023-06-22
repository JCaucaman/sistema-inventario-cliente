import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {

  private URL = 'http://localhost:3000'

  constructor(
    private http: HttpClient,
    private Router : Router
    ) { }

  login(user: object) {
    return this.http.post<any>(this.URL + '/', user);
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
