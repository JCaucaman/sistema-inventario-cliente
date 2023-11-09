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
    precio : Number,
    detalles : ''
  }

  constructor(
    private PedidosService: PedidosService,
    private ClientesCompartirService: ClientesCompartirService,
    public PedidosCompartirService: PedidosCompartirService,
  ){}

  crearPedido(){
    console.log(this.ClientesCompartirService.id)
    console.log(this.Pedido)

    this.PedidosService.clienteCrear(this.Pedido, this.ClientesCompartirService.id)
    .subscribe(
      res => {
        console.log("Pedido Creado")
        this.cerrar()

        this.Pedido = {
          abono : Number,
          precio : Number,
          detalles : ''
        }

        this.ClientesCompartirService.agregarPedido(res)

      },err =>{
        console.log(err)
      }

    )
  }

  cerrar(){
    this.PedidosCompartirService.modalPedidos = false;
  }
}
