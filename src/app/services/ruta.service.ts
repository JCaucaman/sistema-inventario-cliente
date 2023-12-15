import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RutaService {

  public ruta = 'http://localhost:3000'

  constructor() { }
}
