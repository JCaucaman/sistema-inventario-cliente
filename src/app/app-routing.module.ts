import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PaguinaNoEncontradaComponent } from './components/paguina-no-encontrada/paguina-no-encontrada.component';
import { clientesComponent } from './components/clientes/clientes.component';

import { AutenticacionGuard } from "./guard/autentificacion.guard";
import { InventarioComponent } from './components/inventario/inventario.component';

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
    path : '**', // error 404
    component : PaguinaNoEncontradaComponent
  },
  {
    path : 'clientes',
    component : clientesComponent,
    canActivate : [AutenticacionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
