import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { dataService } from '../services/services.component';
import { IUsuario } from './usuario.interface';
import { FormsModule } from '@angular/forms';

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit{

  nombre : string;
  correo : string;
  edad : number;
  password : string;
  hobbies : Array<string> = [];
  admin : boolean = false;

  constructor(private dataService: dataService) { this.nombre = "", this.correo = "", this.edad = 0, this.password = "", this.hobbies = [], this.admin = false; }

  ngOnInit(): void {
      
  }

}
