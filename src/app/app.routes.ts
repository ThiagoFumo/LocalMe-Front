import { Routes } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { PaginaMainComponent } from './pagina-main/pagina-main.component';
import { AdministracionComponent } from './administracion/administracion.component';

export const routes: Routes = [
    { path: 'registrar', component: RegistrarseComponent },
    { path: 'main', component: PaginaMainComponent },
    { path: 'sesion', component: InicioSesionComponent },
    { path: 'admin', component: AdministracionComponent},
    { path: '', redirectTo: '/registrar', pathMatch: 'full' }
  ];
