import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RutaService } from "../ruta.service";

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(
    private http: HttpClient,
    private URL : RutaService
    ) { }

    materialCrear(material: object) {
      return this.http.post<any>(this.URL.ruta + '/api/materiales', material);
    }

    materialEliminar(id : string){
      return this.http.delete<any>(this.URL.ruta + '/api/materiales/' + id);
    }

    materialModificar(id: string, material: object){
      return this.http.put<any>(this.URL.ruta + '/api/materiales/' + id, material);
    }

    materialMostrar(){
      return this.http.get<any>(this.URL.ruta + '/api/materiales/');
    }

    materialAgregarEtiqueta(id : string, etiquetas : any){
      return this.http.put<any>(this.URL.ruta + '/api/materiales/Etiqueta/' + id, etiquetas)
    }

  }