import { Component } from '@angular/core';
import { ClientesService } from "../../../services/clientes/clientes.service";
import { ClientesCompartirService } from "../../../services/clientes/clientes-compartir.service";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent {

  constructor(
    private ClientesService: ClientesService,
    public ClientesCompartirService: ClientesCompartirService,
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

  }