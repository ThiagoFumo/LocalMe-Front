import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

import { RegistrarseComponent } from '../registrarse/registrarse.component';
import { InicioSesionComponent } from '../inicio-sesion/inicio-sesion.component';
import { PaginaMainComponent } from '../pagina-main/pagina-main.component';
import { AdministracionComponent } from '../administracion/administracion.component';

@Injectable({
  providedIn: 'root'
})

export class dataService {
  private apiURL = 'http://127.0.0.1:3000';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  //-----------------------------------------------

  
}