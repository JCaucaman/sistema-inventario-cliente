import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoUsuarioService {

  private URL = 'http://localhost:3000'

  constructor(
    private http: HttpClient
  ) { }

  productoMostrar(){
    return this.http.get<any>(this.URL + '/api/productos/usuario/');
  }
}
