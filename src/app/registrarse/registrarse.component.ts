import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { IUsuario } from '../usuario/usuario.interface';
import { dataService } from '../services/services.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registrarse',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './registrarse.component.html',
  styleUrl: './registrarse.component.css',
})
export class RegistrarseComponent {
  logito = 'assets/logo/logito.png';
  logo = 'assets/logo/logo.png';
  patron = 'assets/logo/patron.png';

  nombre: string = "";
  correo: string = "";
  edad: number = 0;
  password: string = "";
  hobbies: Array<string> = [];

  constructor(private dataService: dataService, private router: Router) {}

  addUsuario(event: Event, nombreV2: string, correoV2: string, edadV2: number, passwordV2: string, hobbiesV2: Array<string>): void {
    event.preventDefault();
    const usuario: IUsuario = {
      nombre: nombreV2,
      correo: correoV2,
      edad: edadV2,
      password: passwordV2,
      hobbies: hobbiesV2,
      admin: false,
      idUsuario: 0
    };

    console.log("Añadiendo usuario...");
    console.log("Nombre: ", nombreV2);
    console.log("Correo: ", correoV2);
    console.log("Edad: ", edadV2);
    console.log("Password: ", passwordV2);
    console.log("Hobbies: ", hobbiesV2.forEach((hobby) => console.log(hobby)));

    this.dataService.addUsuario(usuario).subscribe((data) => {
      console.log("Usuario añadido: ", data);
    });

    
    setTimeout(() => {
      this.router.navigate(['/main']);
    }, 1000);
    this.router.navigate(['/main']);
  }
}
