import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { AutentificacionService } from './autentificacion.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorTokenService implements HttpInterceptor{

  constructor(
    private AutentificacionService : AutentificacionService
  ) {}

  intercept (req: HttpRequest<any>, next: HttpHandler) {
    const tokenRequest = req.clone({
      setHeaders : {
        Authorization : `Bearer ${this.AutentificacionService.obtenerToken()}`
      }
    })
    return next.handle(tokenRequest)
  }
}
