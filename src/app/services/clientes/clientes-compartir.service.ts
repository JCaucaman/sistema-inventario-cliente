import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesCompartirService {

  clientes : any = []

  modalClientes : boolean = false

  constructor() { }
}
