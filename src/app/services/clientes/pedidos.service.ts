import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  private URL = 'http://localhost:3000' // cambiar

  constructor(
    private http: HttpClient,
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
}
