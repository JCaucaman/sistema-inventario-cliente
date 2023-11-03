import { Component, ViewChild, ElementRef } from '@angular/core';
import { ClientesService } from "../../../services/clientes/clientes.service";
import { ClientesCompartirService } from "../../../services/clientes/clientes-compartir.service";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent {

  idC: string = ''

  clicksC = 1

  scrollAtBottom: boolean = false;

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

    ApareceModalModificarC(){
      console.log(this.idC + " Modificar")

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