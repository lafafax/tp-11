import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  Nombre: string="Valentina";
  Apellido: string="Hernandez";
  NombreUsuario: string="valu777";
  Password: string="contraseña123";
  TipoUsuario: string="tu tipo de usuario";
  Estado: string="tu estado";
  Saludar(){
    return `${this.Nombre+": hola, bienvenid@!"}`
  }
  mostrarInfo(){
    return `${this.Nombre+" "+this.Apellido+", "+this.TipoUsuario}`
  }
}
