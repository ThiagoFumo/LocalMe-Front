import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IUsuario } from '../usuario/usuario.interface';
import { IPost } from '../post/post.interface';
import { dataService } from '../services/services.component';
import { UserService } from '../usuario/usuario.interface';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

@Component({
  selector: 'app-administracion',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})

export class AdministracionComponent implements OnInit{
  logito = 'assets/logo/logito.png';
  logo = 'assets/logo/logo.png';
  patron = 'assets/logo/patron.png';  

  usuarioActual : IUsuario | null = null;

  nombre: string = "";
  correo: string = "";
  edad: number = 0;
  password: string = "";
  hobbies: Array<string> = [];
  idPosts: number[] = [];
  id: number = 0;

  usuarios : IUsuario[] = [];
  posts : IPost[] = [];

  constructor(private userService: UserService, private dataService: dataService) {
    this.dataService.getAllUsuarios().subscribe((data: IUsuario[]) => {
      this.usuarios = data;
      console.log('Usuarios cargados: ', this.usuarios);
    });
    this.dataService.getAllPosts().subscribe((data: IPost[]) => {
      this.posts = data;
      console.log('Posts cargados: ', this.posts);
    });
    
    this.loadUsuariosAndPosts();
  }
  
  // Methods for user management
  addUsuario(event: Event, nombreV2: string, correoV2: string, edadV2: number, passwordV2: string): void {
    event.preventDefault();
    const usuario: IUsuario = {
      nombre: nombreV2,
      correo: correoV2,
      edad: edadV2,
      password: passwordV2,
      idPosts: [],
      idUsuario: 0
    };

    if(nombreV2 == "" || correoV2 == "" || edadV2 < 16 || passwordV2 == ""){
      console.log("[ERROR]: Campos vacíos o incorrectos");
      return;
    }else{
      if(this.checkUsuario(usuario) == true){
        console.log("Error al añadir usuario. YA EXISTE")
      }else{
        console.log("Añadiendo usuario...");
        console.log("Nombre: ", nombreV2);
        console.log("Correo: ", correoV2);
        console.log("Edad: ", edadV2);
        console.log("Password: ", passwordV2);
    
        this.dataService.addUsuario(usuario).subscribe((data) => {
          console.log("Usuario añadido: ", data);
          
        });
      }
    }

  
  }

  modUsuario(idV2 : number, event: Event, nombreV2: string, correoV2: string, edadV2: number, passwordV2: string, idPostsV2: any): void {
    event.preventDefault();
    const idPostsNumeros = (idPostsV2 as string[]).map(post => parseInt(post.trim(), 10)).filter(n => !isNaN(n));

    const usuario: IUsuario = {
      nombre: nombreV2,
      correo: correoV2,
      edad: edadV2,
      password: passwordV2,
      idPosts: idPostsNumeros,
      idUsuario: idV2
    };

    console.log("Modificando usuario...");
    console.log("ID: ", idV2);
    console.log("--------------------");
    console.log("Nombre: ", nombreV2);
    console.log("Correo: ", correoV2);
    console.log("Edad: ", edadV2);
    console.log("Password: ", passwordV2);
    console.log("ID Posts: ", idPostsNumeros.forEach((idPost: any) => console.log(idPost)));


    this.dataService.modUsuario(idV2, usuario).subscribe((data) => {
      console.log("Usuario modificado: ", data);
    });

    if(usuario.idUsuario == this.usuarioActual?.idUsuario){
      this.userService.setUsuario(usuario);
    }
  }

  delUsuario(id : number | any): void {
    console.log("Eliminando usuario...");
    console.log("ID: ", id);

    this.dataService.deleteUsuario(id).subscribe((data) => {
      console.log("Usuario eliminado: ", data);
    });
  }

  delPost(id : number | any): void {

    let usuarioPost: IUsuario = {
      nombre: "",
      correo: "",
      edad: 0,
      password: "",
      idPosts: [],
      idUsuario: 0
    };
    console.log("Eliminando post...");
    console.log("ID: ", id);

    for(let i = 0; i < this.usuarios.length; i++){
      for(let j = 0; j < this.usuarios[i].idPosts.length; j++){
        if(this.usuarios[i].idPosts[j] == id){
          usuarioPost = this.usuarios[i];
        }
      }

    }

    this.dataService.deletePost(id).subscribe((data) => {
      console.log("Post eliminado: ", data);
    });

    usuarioPost?.idPosts.splice(usuarioPost.idPosts.indexOf(id), 1);
    if(usuarioPost.idUsuario != undefined){
      this.dataService.modUsuario(usuarioPost.idUsuario, usuarioPost).subscribe((data) => {
        console.log("Usuario modificado: ", data);
      });
    }
    
  }

  ngOnInit(): void {
      this.usuarioActual = this.userService.getUsuario();
  }

  checkUsuario(usuario: IUsuario) : boolean{
    var usuarios : IUsuario[] = [];
    this.dataService.getAllUsuarios().subscribe((data: IUsuario[]) => {
      usuarios = data;
    });
    for(let i = 0; i < usuarios.length; i++){
      if(usuarios[i].nombre == usuario.nombre || usuarios[i].correo == usuario.correo){
        return true;
      }
    }
    return false;
  }

  private loadUsuariosAndPosts(): void {
    this.dataService.getAllUsuarios().subscribe((usuariosData: IUsuario[]) => {
      this.usuarios = usuariosData;
      console.log('Usuarios cargados: ', this.usuarios);
  
      // Load posts only after usuarios are loaded
      this.dataService.getAllPosts().subscribe((postsData: IPost[]) => {
        this.posts = postsData;
        console.log('Posts cargados: ', this.posts);
      });
    });
  }

  onIdPostsChange(value: string): void {
    // Split input by commas, trim spaces, and convert to numbers
    this.idPosts = value.split(',').map(post => parseInt(post.trim(), 10)).filter(n => !isNaN(n));
    console.log('ID Posts converted: ', this.idPosts);
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
