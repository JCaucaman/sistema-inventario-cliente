import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PaguinaNoEncontradaComponent } from './components/paguina-no-encontrada/paguina-no-encontrada.component';

import { AutenticacionGuard } from "./guard/autentificacion.guard";
import { InventarioComponent } from './components/inventario/inventario.component';
import { CajasComponent } from './components/cajas/cajas.component';
import { ListaDeComprasComponent } from './components/lista-de-compras/lista-de-compras.component';
import { ClientesComponent } from './components/clientes/clientes.component';

const routes: Routes = [
  {
    path : '',
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
    path : 'clientes',
    component : ClientesComponent,
    canActivate : [AutenticacionGuard]
  },
  {
    path : '**', // error 404
    component : PaguinaNoEncontradaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
