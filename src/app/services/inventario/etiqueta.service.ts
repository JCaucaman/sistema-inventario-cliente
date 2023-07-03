import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EtiquetaService {

  private URL = 'http://localhost:3000'

  constructor(
    private http: HttpClient
    ) { }

    etiquetaCrear(etiqueta: any) {
      return this.http.post<any>(this.URL + '/api/etiqueta', etiqueta);
    }

    etiquetaEliminar(id : string){
      return this.http.delete<any>(this.URL + '/api/etiqueta/' + id);
    }

    etiquetaModificar(id: string, etiqueta: any){
      return this.http.put<any>(this.URL + '/api/etiqueta/' + id, etiqueta);
    }

    etiquetaMostrar(){
      return this.http.get<any>(this.URL + '/api/etiqueta/');
    }
}
