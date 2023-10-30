import { Component } from '@angular/core';
import { HeaderMenuService } from "src/app/services/otros/header-menu.service";

@Component({
  selector: 'app-cajas',
  templateUrl: './cajas.component.html',
  styleUrls: ['./cajas.component.css']
})
export class CajasComponent {
  constructor(
    public HeaderMenuService : HeaderMenuService
    ) { }


  ngOnInit(){ 
    this.HeaderMenuService.menuDrop = true
    this.HeaderMenuService.inventario = false
    this.HeaderMenuService.cajas = true
    this.HeaderMenuService.clientes = false
    this.HeaderMenuService.listaDeCompras = false
    this.HeaderMenuService.menu = false
    this.HeaderMenuService.headerText = true
    this.HeaderMenuService.searchInventario = false
  }
}
