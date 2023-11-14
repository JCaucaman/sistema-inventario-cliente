import { Component, ViewChild, ElementRef } from '@angular/core';
import { ClientesService } from "../../../services/clientes/clientes.service";
import { ClientesCompartirService } from "../../../services/clientes/clientes-compartir.service";
import { PedidosCompartirService } from 'src/app/services/clientes/pedidos-compartir.service'
import { PedidosService } from "src/app/services/clientes/pedidos.service";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent {

  idC: string = ''

  idPedido : any

  clicksC = 0

  scrollAtBottom: boolean = false;

  constructor(
    private ClientesService: ClientesService,
    private PedidosService : PedidosService,
    public ClientesCompartirService: ClientesCompartirService,
    public PedidosCompartirService: PedidosCompartirService,
    ) { }

    ngOnInit(){
      this.mostrarClientes()
    }

    mostrarClientes(){
      this.ClientesService.clienteMostrar()
      .subscribe(
        res => {
          this.ClientesCompartirService.clientes = res;
          console.log(res)
        },
        err => console.log(err)
      )
    }

    aparecerModalPedidos(){
      this.PedidosCompartirService.modalPedidosModificar = false
      this.ClientesCompartirService.id = this.idC
      this.PedidosCompartirService.modalPedidos = true
    }

    eliminarCliente(){
      this.ClientesService.clienteEliminar(this.idC)
      .subscribe(
        res => {
          const newClientes = this.ClientesCompartirService.clientes.filter(
            (cliente: any) => cliente._id !== this.idC
          )
          this.ClientesCompartirService.clientes = newClientes
        },
        err => console.log(err)
      )
      this.clicksC = 0
    }

    eliminarPedido(){
      if(this.clicksC == 2){

        this.PedidosService.pedidoEliminar(this.idPedido)
        .subscribe(
          res => {

            this.ClientesCompartirService.quitarPedido(res)
          },
          err => console.log(err)
        )
        this.clicksC = 0
      } else {

      }

    }

    modificarPedido(){

      if(this.clicksC == 2){

        this.ClientesCompartirService.id = this.idC
      
        this.aparecerModalPedidos()
        this.PedidosCompartirService.modalPedidosModificar = true

        const modClientes = this.ClientesCompartirService.clientes.filter(
          (material: any) => material._id == this.idC
        )
        const modPedido = modClientes[0].Pedidos.filter(
          (pedido: any) => pedido._id == this.idPedido
        )

        this.PedidosCompartirService.id = this.idPedido
        this.PedidosCompartirService.copyPedido = { ...modPedido[0]}

        this.clicksC = 0
      } else {

      }

    }

    terminarPedido(){
      if(this.clicksC == 2){

        this.PedidosService.pedidoModificar(this.idPedido, {"completado" : true})
        .subscribe(
          res =>{
            this.ClientesCompartirService.CompletarPedidoLocal(res)
          },
          err => {
            console.log(err)
          }
        )

        this.ClientesCompartirService.CompletarPedidoLocal(null)
    
        this.clicksC = 0
      } else {

      }
    }

    apareceModalModificarC(){

      this.ClientesCompartirService.modalClientes = true
      this.ClientesCompartirService.modalClientesModificar = true

      const modClientes = this.ClientesCompartirService.clientes.filter(
        (material: any) => material._id == this.idC
      )

      this.ClientesCompartirService.clienteModifido = { ...modClientes[0]}
      this.ClientesCompartirService.copyCliente = { ...modClientes[0]}
      this.ClientesCompartirService.id = this.idC
      this.clicksC = 0
    }

    @ViewChild('menuC') menuC! :ElementRef

    contextmenuC(event: MouseEvent){
      event.preventDefault();
  
      const target = event.target as HTMLElement;
      this.idC = target.id.split('-')[0]

      if(this.idC.length == 24){
        this.menuC.nativeElement.style.display = "block";
        this.menuC.nativeElement.style.top = event.pageY + "px"
        this.menuC.nativeElement.style.left = event.pageX + "px"
  
        this.clicksC = 0
      } else {
        this.menuC.nativeElement.style.display = "none";
      } 
    }
  
    clickC(event: MouseEvent){

      const target = event.target as HTMLElement;

      try {
        this.idC = target.id.split('-')[0]
        this.idPedido = target.children[0].id.split('-')[0]
      } catch (error) {
        
      }

      this.clicksC ++
      if(this.clicksC == 3){
        this.contextmenuC(event)
        this.clicksC = 0
      } else {
        this.menuC.nativeElement.style.display = "none";
      }
    }
  
    disappearContextC(){
      this.menuC.nativeElement.style.display = "none";
      this.clicksC = 0
    }

  }