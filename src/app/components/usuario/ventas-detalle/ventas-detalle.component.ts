import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductoUsuarioService } from "src/app/services/ventas-usuario/producto-usuario.service";
import { ProductoUsuarioCompartirService } from "src/app/services/ventas-usuario/producto-usuario-compartir.service";


@Component({
  selector: 'app-ventas-detalle',
  templateUrl: './ventas-detalle.component.html',
  styleUrls: ['./ventas-detalle.component.css']
})
export class VentasDetalleComponent {

    constructor(
        private router : Router,
        private ActivatedRoute : ActivatedRoute,
        private ProductoUsuarioService: ProductoUsuarioService,
        public ProductoUsuarioCompartirService :ProductoUsuarioCompartirService
    ){}

    ngOnInit(){
        
        this.ActivatedRoute.paramMap.subscribe(
            params => {
                if (params.has("id")){
                    this.ProductoUsuarioService.productoMostrarId(params.get("id"))
                    .subscribe(
                        res => {
                            this.ProductoUsuarioCompartirService.ProductoId = [res];
                            console.log(res)
                        },
                        err => console.log(err)
                    )
                    
                } else {
                    this.router.navigate(['/'])
                }
            }
        )

    }

}
