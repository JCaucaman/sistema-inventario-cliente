import { Component } from '@angular/core';
import { PedidosCompartirService } from "../../../services/clientes/pedidos-compartir.service";
import { PedidosService } from "../../../services/clientes/pedidos.service";

@Component({
  selector: 'app-prueba-calce-modal',
  templateUrl: './prueba-calce-modal.component.html',
  styleUrls: ['./prueba-calce-modal.component.css']
})
export class PruebaCalceModalComponent {

  PruebaCalce = {
    fecha : Date,
    anotacion: ""
  }

  constructor(
    public pedidosCompartirService : PedidosCompartirService,
    private pedidosService : PedidosService
  ){

  }

  DesaparecerModalCalce(){
    this.pedidosCompartirService.modalPedidosCalce = false
  }

  crearPruebacalce(){
    console.log(this.PruebaCalce)
    console.log(this.pedidosCompartirService.idCliente)
    console.log(this.pedidosCompartirService.idPedido)

    this.pedidosService.pedidoModificar(this.pedidosCompartirService.idPedido,this.PruebaCalce)
    .subscribe(
      res => {
        console.log(res)
      },
      err => {
        console.log(err)
      }
    )
  }

  formatearFecha(fecha: string): string {

    const fechaOriginal = new Date(fecha);
    const formatoFecha = new Intl.DateTimeFormat('es-ES', 
      { day: '2-digit', month: '2-digit', year: 'numeric' }
    );

    return formatoFecha.format(fechaOriginal);
  }

  formatearHora(fecha: string): string {

    const fechaOriginal = new Date(fecha);
    const formatoFecha = new Intl.DateTimeFormat('es-ES', 
      {  hour: '2-digit',minute: '2-digit'}
    );

    return formatoFecha.format(fechaOriginal);
  }

  modificarPruebacalce(){

    let pruebasFiltrada = this.pedidosCompartirService.copyPruebas.filter((item : any) => item != this.pedidosCompartirService.copyCalceOld)

    pruebasFiltrada.push(this.pedidosCompartirService.copyCalce)
    
    this.pedidosService.pedidoCalceModificar(this.pedidosCompartirService.idPedido, pruebasFiltrada)
    .subscribe(
      res => {
        console.log(res)
      },
      err => {
        console.log(err)
      }
    )
  }

}
