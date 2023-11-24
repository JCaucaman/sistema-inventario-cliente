import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba-calce-modal',
  templateUrl: './prueba-calce-modal.component.html',
  styleUrls: ['./prueba-calce-modal.component.css']
})
export class PruebaCalceModalComponent {

  PruebaCalce = {
    fecha : Date,
    anotacion: ""
  }

  crearPruebacalce(){
    console.log(this.PruebaCalce)
  }
}
