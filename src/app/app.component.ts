import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { VendedorComponent } from './vendedor/vendedor.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UsuarioComponent, ArticulosComponent, VendedorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'interpolandoObjetosLiterales';
}
