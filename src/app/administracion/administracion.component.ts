import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IUsuario } from '../usuario/usuario.interface';
import { dataService } from '../services/services.component';

@Component({
  selector: 'app-administracion',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent {
  logito = 'assets/logo/logito.png';
  logo = 'assets/logo/logo.png';
  patron = 'assets/logo/patron.png';  

  nombre: string = "";
  correo: string = "";
  edad: number = 0;
  password: string = "";
  hobbies: Array<string> = [];
  id: number = 0;

  usuarios : IUsuario[] = [];

  constructor(private dataService: dataService) {
    this.dataService.getAllUsuarios().subscribe((data: IUsuario[]) => {
      this.usuarios = data;
      console.log('Usuarios cargados: ', this.usuarios);
    });
  }
  
  // Methods for user management
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

  
  }

  modUsuario(idV2 : number, event: Event, nombreV2: string, correoV2: string, edadV2: number, passwordV2: string, hobbiesV2: Array<string>): void {
    event.preventDefault();
    const usuario: IUsuario = {
      nombre: nombreV2,
      correo: correoV2,
      edad: edadV2,
      password: passwordV2,
      hobbies: hobbiesV2,
      admin: false,
      idUsuario: idV2
    };

    console.log("Modificando usuario...");
    console.log("ID: ", idV2);
    console.log("--------------------");
    console.log("Nombre: ", nombreV2);
    console.log("Correo: ", correoV2);
    console.log("Edad: ", edadV2);
    console.log("Password: ", passwordV2);
    console.log("Hobbies: ", hobbiesV2.forEach((hobby) => console.log(hobby)));

    this.dataService.modUsuario(idV2, usuario).subscribe((data) => {
      console.log("Usuario modificado: ", data);
    });
  }

  delUsuario(id : number | any): void {
    console.log("Eliminando usuario...");
    console.log("ID: ", id);

    this.dataService.deleteUsuario(id).subscribe((data) => {
      console.log("Usuario eliminado: ", data);
    });
  }

  // Methods for modal management
  openModal(modalId: string): void {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'flex';
    }
  }

  closeModal(modalId: string): void {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'none';
    }
  }

  
}
