import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { RegistrarseComponent } from "./registrarse/registrarse.component";
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { PaginaMainComponent } from './pagina-main/pagina-main.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { dataService } from './services/services.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule, // For HTTP requests
    CommonModule,
    RouterModule // For common Angular directives like *ngIf, *ngFor
  ],
  providers: [dataService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'localME';
}


