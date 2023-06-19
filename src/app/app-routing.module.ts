import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { PaguinaNoEncontradaComponent } from './paguina-no-encontrada/paguina-no-encontrada.component';

const routes: Routes = [
  {path : '', component : InicioComponent},
  {path : 'inventario'},
  {path : '/menu', component : MenuComponent},
  {path : 'clientes'},
  {path : 'cajas'},
  {path : 'lista-de-compras'},
  {path : '**', component : PaguinaNoEncontradaComponent} // error 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
