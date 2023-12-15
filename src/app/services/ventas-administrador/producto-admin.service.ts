import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RutaService } from "../ruta.service";

@Injectable({
  providedIn: 'root'
})
export class ProductoAdminService {

  constructor(
    private http: HttpClient,
    private URL : RutaService
  ) { }

  productoCrear(producto: FormData){
    return this.http.post<any>(this.URL.ruta + '/api/productos/', producto);
  }

  productoEliminar(id: string){
    return this.http.delete<any>(this.URL.ruta + '/api/productos/' + id);
  }

  productoModificar(id: string, producto: FormData | object){
    return this.http.put<any>(this.URL.ruta + '/api/productos/'+ id, producto);
  }

  productoMostrar(){
    return this.http.get<any>(this.URL.ruta + '/api/productos/');
  }

} 
