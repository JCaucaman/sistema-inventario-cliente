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
      return this.http.post<any>(this.URL + '/material/crear', material);
    }

    materialEliminar(id : string){
      return this.http.delete<any>(this.URL + '/material/' + id);
    }

    materialModificar(material: object){
      return this.http.put<any>(this.URL + '/material/modificar', material);
    }

    materialMostrar(){
      return this.http.get<any>(this.URL + '/material/mostrar');
    }

  }