import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RutaService } from "../ruta.service";

@Injectable({
  providedIn: 'root'
})
export class ProductoUsuarioService {

  constructor(
    private http: HttpClient,
    private URL : RutaService
  ) { }

  productoMostrar(){
    return this.http.get<any>(this.URL.ruta + '/api/productos/usuario/');
  }

  productoMostrarId(id : string | null){
    return this.http.get<any>(this.URL.ruta + '/api/productos/usuario/' + id);
  }
}
