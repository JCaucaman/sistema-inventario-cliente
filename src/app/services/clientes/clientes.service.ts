import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RutaService } from "../ruta.service";

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(
    private http: HttpClient,
    private URL : RutaService
    ) { }

    clienteCrear(cliente: object) {
      return this.http.post<any>(this.URL.ruta + '/api/cliente/', cliente);
    }

    clienteEliminar(id : string){
      return this.http.delete<any>(this.URL.ruta + '/api/cliente/' + id);
    }

    clienteModificar(id: string, cliente: object){
      return this.http.put<any>(this.URL.ruta + '/api/cliente/' + id, cliente);
    }

    clienteMostrar(){
      return this.http.get<any>(this.URL.ruta + '/api/cliente/');
    }

  }
