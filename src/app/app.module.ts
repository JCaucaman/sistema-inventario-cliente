import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MenuComponent } from './components/menu/menu.component';
import { PaguinaNoEncontradaComponent } from './components/paguina-no-encontrada/paguina-no-encontrada.component';

import { AutenticacionGuard } from "./guard/autentificacion.guard";
import { InventarioComponent } from './components/Inventario-All/inventario/inventario.component';
import { InterceptorTokenService } from "./services/seguridad/interceptor-token.service";
import { ClientesComponent } from './components/clientes/clientes.component';
import { CajasComponent } from './components/cajas/cajas.component';
import { ListaDeComprasComponent } from './components/lista-de-compras/lista-de-compras.component';
import { MaterialesComponent } from './components/Inventario-All/materiales/materiales.component';
import { InventarioMenuComponent } from './components/Inventario-All/inventario-menu/inventario-menu.component';
import { InventarioMaterialModalComponent } from './components/Inventario-All/inventario-material-modal/inventario-material-modal.component';
import { InventarioEtiquetaModalComponent } from './components/Inventario-All/inventario-etiqueta-modal/inventario-etiqueta-modal.component';
import { ClientesMenuComponent } from './components/clientes-menu/clientes-menu.component';
import { ClientesPedidosComponent } from './components/clientes-pedidos/clientes-pedidos.component';
import { EtiquetasComponent } from './components/Inventario-All/etiquetas/etiquetas.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    InicioComponent,
    MenuComponent,
    PaguinaNoEncontradaComponent,
    InventarioComponent,
    ClientesComponent,
    CajasComponent,
    ListaDeComprasComponent,
    MaterialesComponent,
    InventarioMenuComponent,
    InventarioMaterialModalComponent,
    InventarioEtiquetaModalComponent,
    ClientesMenuComponent,
    ClientesPedidosComponent,
    EtiquetasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    AutenticacionGuard,
    {
      provide :  HTTP_INTERCEPTORS,
      useClass : InterceptorTokenService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
