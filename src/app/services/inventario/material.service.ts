import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  private URL = 'http://localhost:3000'

  constructor(
    private http: HttpClient
    ) { }

    materialCrear(material: object) {
      return this.http.post<any>(this.URL + '/api/materiales', material);
    }

    materialEliminar(id : string){
      return this.http.delete<any>(this.URL + '/api/materiales/' + id);
    }

    materialModificar(id: string, material: object){
      return this.http.put<any>(this.URL + '/api/materiales/' + id, material);
    }

    materialMostrar(){
      return this.http.get<object>(this.URL + '/api/materiales/');
    }

  }