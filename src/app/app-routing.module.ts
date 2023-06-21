import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PaguinaNoEncontradaComponent } from './components/paguina-no-encontrada/paguina-no-encontrada.component';

const routes: Routes = [
  {path : '', component : InicioComponent},
  {path : 'menu', component : MenuComponent},
  {path : '**', component : PaguinaNoEncontradaComponent} // error 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
