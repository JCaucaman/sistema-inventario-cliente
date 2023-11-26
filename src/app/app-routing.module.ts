import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './components/Otros/menu/menu.component';
import { InicioComponent } from './components/Otros/inicio/inicio.component';
import { PaguinaNoEncontradaComponent } from './components/Otros/paguina-no-encontrada/paguina-no-encontrada.component';
import { AutenticacionGuard } from "./guard/autentificacion.guard";
import { InventarioComponent } from './components/Inventario-All/inventario/inventario.component';
import { CajasComponent } from './components/Caja/cajas/cajas.component';
import { ListaDeComprasComponent } from './components/Compras/lista-de-compras/lista-de-compras.component';
import { ClientesContentComponent } from './components/Cliente/clientes-content/clientes-content.component';
import { CondicionesDeUsosComponent } from './components/Otros/condiciones-de-usos/condiciones-de-usos.component'
import { VentasAdminComponent } from "./components/Productos/ventas-admin/ventas-admin.component";
import { LoginComponent } from './components/Ventas/usuario/login/login.component'
import { VentasCarroComponent } from './components/Ventas/usuario/ventas-carro/ventas-carro.component'
import { VentasHomeComponent } from './components/Ventas/usuario/ventas-home/ventas-home.component'
import { VentasInicioComponent } from './components/Ventas/usuario/ventas-inicio/ventas-inicio.component'

const routes: Routes = [
  {
    path : 'login-register',
    component : LoginComponent
  },
  {
    path : '',
    component : VentasInicioComponent
  },
  {
    path : 'home',
    component : VentasHomeComponent
  },
  {
    path : 'carro',
    component : VentasCarroComponent
  },
  {
    path : 'admin',
    component : InicioComponent
  },
  {
    path : 'menu',
    component : MenuComponent,
    canActivate : [AutenticacionGuard]
  },
  {
    path : 'inventario',
    component : InventarioComponent,
    canActivate : [AutenticacionGuard]
  },
  {
    path : 'cajas',
    component : CajasComponent,
    canActivate : [AutenticacionGuard]
  },
  {
    path : 'lista_de_compras',
    component : ListaDeComprasComponent,
    canActivate : [AutenticacionGuard]
  },
  {
    path : 'cliente',
    component : ClientesContentComponent,
    canActivate : [AutenticacionGuard]
  },
  {
    path : 'productos',
    component : VentasAdminComponent,
    canActivate : [AutenticacionGuard]
  },
  {
    path : 'ventas',
    component : MenuComponent,
    canActivate : [AutenticacionGuard]
  },
  {
    path : 'condiciones-de-uso', 
    component : CondicionesDeUsosComponent
  },
  {
    path : '**', // error 404
    component : PaguinaNoEncontradaComponent
  },
];

@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
