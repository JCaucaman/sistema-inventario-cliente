import { Component } from '@angular/core';
import { HeaderMenuService } from "src/app/services/otros/header-menu.service";

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent{

  constructor(
    public HeaderMenuService : HeaderMenuService
    ) { }


  ngOnInit(){ 
    this.HeaderMenuService.menuDrop = true
    this.HeaderMenuService.inventario = true
    this.HeaderMenuService.cajas = false
    this.HeaderMenuService.clientes = false
    this.HeaderMenuService.listaDeCompras = false
    this.HeaderMenuService.menu = false
    this.HeaderMenuService.headerText = false
    this.HeaderMenuService.searchInventario = true
  }
}
