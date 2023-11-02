import { Component } from '@angular/core';
import {ClientesCompartirService} from "src/app/services/clientes/clientes-compartir.service";


@Component({
  selector: 'app-clientes-menu',
  templateUrl: './clientes-menu.component.html',
  styleUrls: ['./clientes-menu.component.css']
})
export class ClientesMenuComponent {

  constructor(
    public ClientesCompartirService: ClientesCompartirService,
  ){

  }

  show(){
    this.ClientesCompartirService.modalClientes = true
  }

}
