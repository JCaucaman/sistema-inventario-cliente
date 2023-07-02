import { Component } from '@angular/core';
import { CompartirService } from "src/app/services/inventario/compartir.service";

@Component({
  selector: 'app-etiquetas',
  templateUrl: './etiquetas.component.html',
  styleUrls: ['./etiquetas.component.css']
})
export class EtiquetasComponent {

  constructor(
    public CompartirService: CompartirService
    ) { }

}
