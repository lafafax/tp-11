import { Component } from '@angular/core';

@Component({
  selector: 'app-vendedor',
  standalone: true,
  imports: [],
  templateUrl: './vendedor.component.html',
  styleUrl: './vendedor.component.css'
})
export class VendedorComponent {
  idVendedor:number=123;
  usuarioNombre:string="valu777";
  password:string="contraseña123";
  nombre:string="Valentina";
  apellido:string="Hernandez";
  edad:number=17;
  direccion:string="direccion 123";
  sueldo:number=10500;
  telefono:number=2991234567;
  email:string="valentina.tiny000@gmail.com";
  facebook:string="no tiene";
  sumarVeinte(){
    return `edad nueva:${this.edad+20}`
  }
  incrementarSueldo(){
    return `sueldo aumentado:${this.sueldo+(this.sueldo*0.10)}`
  }
}
