import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MenuComponent } from './components/menu/menu.component';
import { PaguinaNoEncontradaComponent } from './components/paguina-no-encontrada/paguina-no-encontrada.component';

import { AutenticacionGuard } from "./guard/autentificacion.guard";
import { InventarioComponent } from './components/inventario/inventario.component';
import { InterceptorTokenService } from "./services/interceptor-token.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    InicioComponent,
    MenuComponent,
    PaguinaNoEncontradaComponent,
    InventarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
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
