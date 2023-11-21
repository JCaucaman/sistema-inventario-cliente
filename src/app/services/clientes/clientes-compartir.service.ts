import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesCompartirService {

  clientes : any = []
  modalClientes : boolean = false

  modalClientesModificar : boolean = false
  id = ''

  clienteModifido = {
    _id: this.id,
    nombre_cliente : '',
    telefono : '',
    medidas: {
      c_cuello: 0.0,
      c_busto: 0.0,
      c_cintura: 0.0,
      c_cadera: 0.0,
      t_delantero: 0.0,
      t_espalda: 0.0,
      a_busto: 0.0,
      a_espalda: 0.0,
      sep_busto: 0.0,
      a_cadera: 0.0,
      alto_de_tiro: 0.0,
      alto_de_sisa: 0.0,
      largo_manga: 0.0,
      largo_pierna: 0.0,
      puno: 0.0,
      muneca: 0.0,
      rodilla: 0.0,
      tobillo: 0.0,
      ancho_brazo: 0.0 
    }
  }

  constructor() { }

  agregarCliente(cliente: any) {
    this.clientes.unshift(cliente); 
  }

  modificarClientelLocal(){

    const dato = this.clientes.find(
      (dato : any) => dato._id == this.id
    )

    const indice =  this.clientes.indexOf(dato)
    console.log(indice)
    console.log(this.clientes.splice(indice, 1, this.clienteModifido))
  }
  
  agregarPedido(pedido : any){

    const dato = this.clientes.find(
      (dato : any) => dato._id == this.id
    )

    const indice =  this.clientes.indexOf(dato)

    this.clientes[indice].Pedidos.push(pedido);

  }

  modificarPedidoLocal(pedido : any){
    //TODO: buscar el cliente

    const dato = this.clientes.find(
      (dato : any) => dato._id == this.id
    )

    const indice =  this.clientes.indexOf(dato)

    //TODO: Buscar el pedido

    const datoPedido = this.clientes[indice].Pedidos.find(
      (dato : any) => dato._id == pedido._id
    )

    const indicePedido = this.clientes[indice].Pedidos.indexOf(datoPedido)

    //TODO: Cambiar el pedido por el nuevo

    this.clientes[indice].Pedidos[indicePedido] = pedido
    
  }

  CompletarPedidoLocal(pedido : any){
    //TODO: buscar el cliente

    const dato = this.clientes.find(
      (dato : any) => dato._id == this.id
    )

    const indice =  this.clientes.indexOf(dato)

    //TODO: Buscar el pedido

    const datoPedido = this.clientes[indice].Pedidos.find(
      (dato : any) => dato._id == pedido._id
    )

    const indicePedido = this.clientes[indice].Pedidos.indexOf(datoPedido)

    //TODO: Cambiar "completar por true"

    this.clientes[indice].Pedidos[indicePedido].completado = true
    
  }

  quitarPedido(data : any){

    const documento =  this.clientes.find((d : any) => d._id == data.id_cliente)
    const indice =  this.clientes.indexOf(documento)
    const documento_pedido = this.clientes[indice].Pedidos.find((d : any) => d._id  == data.id_pedido);
    const NewPedidos =  this.clientes[indice].Pedidos.filter((pedido : any) => pedido != documento_pedido)

    this.clientes[indice].Pedidos = NewPedidos

  }

}
