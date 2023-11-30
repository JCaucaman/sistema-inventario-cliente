import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {


  private URL = 'http://localhost:3000' // cambiar

  constructor(
    private http: HttpClient,
    ) { }

    clienteCrear(cliente: object) {
      return this.http.post<any>(this.URL + '/api/cliente/', cliente);
    }

    clienteEliminar(id : string){
      return this.http.delete<any>(this.URL + '/api/cliente/' + id);
    }

    clienteModificar(id: string, cliente: object){
      return this.http.put<any>(this.URL + '/api/cliente/' + id, cliente);
    }

    clienteMostrar(){
      return this.http.get<any>(this.URL + '/api/cliente/');
    }

  }
