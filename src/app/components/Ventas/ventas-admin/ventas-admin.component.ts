import { Component } from '@angular/core';
import { HeaderMenuService } from "src/app/services/otros/header-menu.service";


@Component({
  selector: 'app-ventas-admin',
  templateUrl: './ventas-admin.component.html',
  styleUrls: ['./ventas-admin.component.css']
})
export class VentasAdminComponent {

  constructor(
    public HeaderMenuService : HeaderMenuService
    ) { }

  ngOnInit(){ 
    this.HeaderMenuService.menuDrop = true
    this.HeaderMenuService.inventario = false
    this.HeaderMenuService.cajas = false
    this.HeaderMenuService.clientes = false
    this.HeaderMenuService.listaDeCompras = false
    this.HeaderMenuService.menu = false
    this.HeaderMenuService.headerText = true
    this.HeaderMenuService.searchInventario = false
    this.HeaderMenuService.productos = true
  }

}
