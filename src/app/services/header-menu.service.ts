import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderMenuService {

  menuDrop : boolean = false

  listaDeCompras :boolean = false
  inventario :boolean = false
  clientes :boolean = false
  cajas :boolean = false
  menu :boolean = false

  constructor() { }
}
