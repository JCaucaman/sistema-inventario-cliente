import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, lastValueFrom } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductoUsuarioCompartirService {

    Productos : any = []

    ProductoId : any = []

    private miLista :any[] = []
  
    private mycarro = new BehaviorSubject<any[]>([]);
    mycarro$ = this.mycarro.asObservable();

    constructor() { }

    agregarProducto(producto:any){

        if(this.miLista.length === 0){
            producto.cantidad = 1;
            this.miLista.push(producto);
        } else {

            const productoMod = this.miLista.find(
                (item : any) => {
                    return item._id == producto._id
                } 
            )

            if(productoMod){
                if( producto.cantidad < producto.cantidad_disponible){
                    producto.cantidad += 1
                    this.mycarro.next(this.miLista)
                } else {
                    this.mycarro.next(this.miLista)
                }
            } else {
                producto.cantidad = 1;
                this.miLista.push(producto);
            }
        }

        this.mycarro.next(this.miLista)
    }

    borrarProducto(id: string){
        this.miLista = this.miLista.filter(
            (item : any) => {
                return item._id != id
            } 
        )
        this.mycarro.next(this.miLista)
    }

    buscarProductoId(id : string){
        return this.miLista.filter(
            (item : any) => {
                return item._id == id
            }  
        )
    }

    totalCarro(){
        const total = this.miLista.reduce(
            (acc, producto) => {
                return acc + (producto.cantidad * producto.precio)
            },0
        )
        return total
    }
}
