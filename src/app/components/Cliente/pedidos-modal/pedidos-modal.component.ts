import { Component } from '@angular/core';
import { PedidosService } from 'src/app/services/clientes/pedidos.service';
import { ClientesCompartirService } from 'src/app/services/clientes/clientes-compartir.service';
import { PedidosCompartirService } from 'src/app/services/clientes/pedidos-compartir.service'

@Component({
  selector: 'app-pedidos-modal',
  templateUrl: './pedidos-modal.component.html',
  styleUrls: ['./pedidos-modal.component.css']
})
export class PedidosModalComponent {

  Pedido = {
    abono : Number,
    pedido_precio : Number,
    pedido_detalles : '',
    completado : false
  }

  PedidoN : any

  constructor(
    private PedidosService: PedidosService,
    private ClientesCompartirService: ClientesCompartirService,
    public PedidosCompartirService: PedidosCompartirService,
  ){}

  crearPedido(){
    this.PedidosService.pedidoCrear(this.Pedido, this.ClientesCompartirService.id)
    .subscribe(
      res => {
        console.log("Pedido Creado")
        this.cerrar()

        this.Pedido = {
          abono : Number,
          pedido_precio : Number,
          pedido_detalles : '',
          completado : false
        }

        this.ClientesCompartirService.agregarPedido(res)

      },err =>{
        console.log(err)
      }

    )
  }

  modificarPedido(){
    console.log("Modificar")
  }

  cerrar(){
    this.PedidosCompartirService.modalPedidos = false;
  }
}
