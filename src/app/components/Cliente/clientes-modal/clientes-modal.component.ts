import { Component } from '@angular/core';
import { ClientesCompartirService } from "src/app/services/clientes/clientes-compartir.service";
import { ClientesService } from 'src/app/services/clientes/clientes.service'

@Component({
  selector: 'app-clientes-modal',
  templateUrl: './clientes-modal.component.html',
  styleUrls: ['./clientes-modal.component.css']
})
export class ClientesModalComponent {

  Cliente = {
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

  constructor(
    private ClientesService: ClientesService,
    public ClientesCompartirService: ClientesCompartirService
  ){}

  desaparecer(){
    this.ClientesCompartirService.modalClientes = false
  }

  crearCliente(){
    this.ClientesService.clienteCrear(this.Cliente)
    .subscribe(
      res => {
        // accion en el frontend
        this.desaparecer()
        
        this.Cliente = {
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
      },
      err => {
        console.log(err)
      }
    )
  }

}
