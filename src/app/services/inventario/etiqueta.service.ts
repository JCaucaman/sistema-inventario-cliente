import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RutaService } from "../ruta.service";

@Injectable({
  providedIn: 'root'
})
export class EtiquetaService {

  constructor(
    private http: HttpClient,
    private URL : RutaService
    ) { }

    etiquetaCrear(etiqueta: object) {
      return this.http.post<any>(this.URL.ruta + '/api/etiqueta', etiqueta);
    }

    etiquetaEliminar(id : string){
      return this.http.delete<any>(this.URL.ruta + '/api/etiqueta/' + id);
    }

    etiquetaModificar(id: string, etiqueta: object){
      return this.http.put<any>(this.URL.ruta + '/api/etiqueta/' + id, etiqueta);
    }

    etiquetaMostrar(){
      return this.http.get<any>(this.URL.ruta + '/api/etiqueta/');
    }
}
