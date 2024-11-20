import { Component } from '@angular/core';

@Component({
  selector: 'app-articulos',
  standalone: true,
  imports: [],
  templateUrl: './articulos.component.html',
  styleUrl: './articulos.component.css'
})
export class ArticulosComponent {
  codigo:number=123;
  nomArticulo:string="Cerebritos";
  descripcion:string="distintos sabores y colores";
  marca:string="Mogul";
  cantidad:number=20;
  precio:string="$0";
  estado:string="podridas";
}
