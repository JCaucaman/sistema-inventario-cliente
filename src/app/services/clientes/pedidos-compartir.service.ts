import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidosCompartirService {

  id = ''

  modalPedidos : Boolean = false

  modalPedidosModificar : Boolean = false

  modalPedidosCalceModificar : Boolean = false
  modalPedidosCalce : Boolean = false

  modalPedidosMaterialesModificar : Boolean = false

  copyPedido :any

  copyCalce : any
  copyCalceOld : any

  copyPruebas: any

  idCliente = ''
  idPedido = ''

  constructor() { }

}
