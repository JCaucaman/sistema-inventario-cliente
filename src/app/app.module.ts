import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/Otros/login/login.component';

import { HeaderComponent } from './components/Otros/header/header.component';
import { InicioComponent } from './components/Otros/inicio/inicio.component';
import { MenuComponent } from './components/Otros/menu/menu.component';
import { PaguinaNoEncontradaComponent } from './components/Otros/paguina-no-encontrada/paguina-no-encontrada.component';

import { AutenticacionGuard } from "./guard/autentificacion.guard";
import { InterceptorTokenService } from "./services/seguridad/interceptor-token.service";

import { InventarioComponent } from './components/Inventario-All/inventario/inventario.component';
import { MaterialesComponent } from './components/Inventario-All/materiales/materiales.component';
import { InventarioMenuComponent } from './components/Inventario-All/inventario-menu/inventario-menu.component';
import { InventarioMaterialModalComponent } from './components/Inventario-All/inventario-material-modal/inventario-material-modal.component';
import { InventarioEtiquetaModalComponent } from './components/Inventario-All/inventario-etiqueta-modal/inventario-etiqueta-modal.component';
import { EtiquetasComponent } from './components/Inventario-All/etiquetas/etiquetas.component';

import { ClientesComponent } from './components/Cliente/clientes/clientes.component';

import { CajasComponent } from './components/Caja/cajas/cajas.component';

import { ListaDeComprasComponent } from './components/Compras/lista-de-compras/lista-de-compras.component';


import { ClientesMenuComponent } from './components/Cliente/clientes-menu/clientes-menu.component';

import { ModalAgregarEtiquetaComponent } from './components/Inventario-All/modal-agregar-etiqueta/modal-agregar-etiqueta.component';
import { CondicionesDeUsosComponent } from './components/Otros/condiciones-de-usos/condiciones-de-usos.component';
import { VentasAdminComponent } from './components/Productos/ventas-admin/ventas-admin.component';
import { VentasMenuComponent } from './components/Productos/ventas-menu/ventas-menu.component';
import { ProductosComponent } from './components/Productos/productos/productos.component';
import { VentasProductosModalComponent } from './components/Productos/ventas-productos-modal/ventas-productos-modal.component';
import { ClientesModalComponent } from './components/Cliente/clientes-modal/clientes-modal.component';
import { PedidosModalComponent } from './components/Cliente/pedidos-modal/pedidos-modal.component';
import { ClientesContentComponent } from './components/Cliente/clientes-content/clientes-content.component';
import { PruebaCalceModalComponent } from './components/Cliente/prueba-calce-modal/prueba-calce-modal.component';
import { PedidosMaterialesModalComponent } from './components/Cliente/pedidos-materiales-modal/pedidos-materiales-modal.component';
import { ProductoService } from './services/productos/producto.service';

import { VentasHeaderComponent } from './components/usuario/ventas-header/ventas-header.component';
import { VentasHomeComponent } from './components/usuario/ventas-home/ventas-home.component';
import { VentasInicioComponent } from './components/usuario/ventas-inicio/ventas-inicio.component';
import { VentasCarroComponent } from './components/usuario/ventas-carro/ventas-carro.component';
import { VentasDetalleComponent } from './components/usuario/ventas-detalle/ventas-detalle.component';


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
    EtiquetasComponent,
    ModalAgregarEtiquetaComponent,
    CondicionesDeUsosComponent,
    VentasAdminComponent,
    VentasMenuComponent,
    ProductosComponent,
    VentasProductosModalComponent,
    ClientesModalComponent,
    PedidosModalComponent,
    ClientesContentComponent,
    PruebaCalceModalComponent,
    PedidosMaterialesModalComponent,
    VentasHeaderComponent,
    VentasHomeComponent,
    VentasInicioComponent,
    VentasCarroComponent,
    VentasDetalleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
  ],
  providers: [
    AutenticacionGuard,
    ProductoService, 
    {
      provide :  HTTP_INTERCEPTORS,
      useClass : InterceptorTokenService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
