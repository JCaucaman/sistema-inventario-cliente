import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  private URL = 'http://localhost:3000'

  constructor(
    private http: HttpClient,
    ) { }

    clienteCrear(pedido: object, id_cliente : string) {
      return this.http.post<any>(this.URL + '/api/pedidos/', [pedido, id_cliente]);
    }

}
