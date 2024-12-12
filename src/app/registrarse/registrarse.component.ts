import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';

import { IUsuario } from '../usuario/usuario.interface';

@Component({
  selector: 'app-registrarse',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './registrarse.component.html',
  styleUrl: './registrarse.component.css',
  
})
export class RegistrarseComponent {
  logito = 'assets/logo/logito.png';
  logo = 'assets/logo/logo.png';
  patron = 'assets/logo/patron.png';  

  nombre : string;
  correo : string;
  edad : number;
  password : string;
  hobbies : Array<string>;

  constructor() { 
    this.nombre = "";
    this.correo = "";
    this.edad = 0;
    this.password = "";
    this.hobbies = [];
  }

  
}
