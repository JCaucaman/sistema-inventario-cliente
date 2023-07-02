import { Component} from '@angular/core';
import { HeaderMenuService } from "src/app/services/header-menu.service";

@Component({
  selector: 'app-lista-de-compras',
  templateUrl: './lista-de-compras.component.html',
  styleUrls: ['./lista-de-compras.component.css']
})
export class ListaDeComprasComponent {
  constructor(
    public HeaderMenuService : HeaderMenuService
    ) { }


  ngOnInit(){ 
    this.HeaderMenuService.menuDrop = true
    this.HeaderMenuService.inventario = false
    this.HeaderMenuService.cajas = false
    this.HeaderMenuService.clientes = false
    this.HeaderMenuService.listaDeCompras = true
    this.HeaderMenuService.menu = false
    this.HeaderMenuService.headerText = true
    this.HeaderMenuService.searchInventario = false
  }
}
