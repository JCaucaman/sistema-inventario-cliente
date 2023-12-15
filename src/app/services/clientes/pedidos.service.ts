import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RutaService } from "../ruta.service";

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(
    private http: HttpClient,
    private URL : RutaService
    ) { }

    pedidoCrear(pedido: object, id_cliente : string) {
      return this.http.post<any>(this.URL + '/api/pedidos/', [pedido, id_cliente]);
    }

    pedidoEliminar(id : string){
      return this.http.delete<any>(this.URL + '/api/pedidos/' + id);
    }

    pedidoModificar(id: string, pedido: any){
      return this.http.put<any>(this.URL + '/api/pedidos/' + id, pedido);
    }

    pedidoCalceModificar(id: string, pedido: any){
      return this.http.put<any>(this.URL + '/api/pedidos/calce/' + id, pedido);
    }
}
