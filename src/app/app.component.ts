import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistrarseComponent } from "./registrarse/registrarse.component";
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { PaginaMainComponent } from './pagina-main/pagina-main.component';
import { AdministracionComponent } from './administracion/administracion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegistrarseComponent, InicioSesionComponent, PaginaMainComponent, AdministracionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
