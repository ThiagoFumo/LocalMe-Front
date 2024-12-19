import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { dataService } from '../services/services.component';
import { IPost } from '../post/post.interface';
import { UserService, IUsuario } from '../usuario/usuario.interface';
import { Router } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

@Component({
  selector: 'app-pagina-main',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './pagina-main.component.html',
  styleUrls: ['./pagina-main.component.css'],
})
export class PaginaMainComponent implements OnInit {
  logito = 'assets/logo/logito.png';
  logo = 'assets/logo/logo.png';
  patron = 'assets/logo/patron.png';

  usuarioActual : IUsuario | null = null;

  titulo: string = '';
  pais: string = '';
  estado: string = '';
  ciudad: string = '';
  actividad: string[] = [];
  descripcion: string = '';
  idCreador: number = 0;
  idPost: number = 0;

  posts: IPost[] = [];
  filteredPosts: IPost[] = [];
  filters = {
    pais: '',
    estado: '',
    ciudad: '',
    actividad: ''
  };

  constructor(private dataService: dataService, private userService: UserService, private router:Router) {}

  ngOnInit(): void {
    this.getPosts();
    this.usuarioActual = this.userService.getUsuario();
  }

  getPosts(): void {
    this.dataService.getAllPosts().subscribe(
      (data: IPost[]) => {
        this.posts = data;
        this.filteredPosts = data;
        console.log("Posts loaded: ", this.posts);
      },
      (error) => {
        console.error("Error loading posts: ", error);
      }
    );
  }

  addPost(event: Event, tituloV2: string, paisV2: string, estadoV2: string, ciudadV2:string, actividadV2:string[], descripcionV2:string): void {
    event.preventDefault();
    const post: IPost = {
      titulo: tituloV2,
      pais: paisV2,
      provincia: estadoV2,
      ciudad: ciudadV2,
      actividad: actividadV2,
      descripcion: descripcionV2,
      idCreador: this.usuarioActual?.idUsuario || 0,
      idPost: 0
    };

    if(tituloV2 == "" || paisV2 == "" || estadoV2 == "" || ciudadV2 == "" || actividadV2.length == 0 || descripcionV2 == ""){
      console.log("[ERROR]: Empty fields");
      return;
    } else {
      console.log("Adding post...");
      console.log("Title: ", tituloV2);
      console.log("Country: ", paisV2);
      console.log("State: ", estadoV2);
      console.log("City: ", ciudadV2);
      console.log("Activities: ", actividadV2);
      console.log("Description: ", descripcionV2);

      this.dataService.addPost(post).subscribe((data) => {
        console.log("Post added: ", data);
        this.getPosts();
      });
    }
    
    this.usuarioActual?.idPosts.push(post.idPost || 0);
  }


  applyFilters(event: Event): void {
    event.preventDefault();
    this.filteredPosts = this.posts.filter(post => {
      return (
        (!this.filters.pais || post.pais === this.filters.pais) &&
        (!this.filters.estado || post.provincia === this.filters.estado) &&
        (!this.filters.ciudad || post.ciudad === this.filters.ciudad) &&
        (!this.filters.actividad || post.actividad.includes(this.filters.actividad))
      );
    });
    console.log('Filtered posts:', this.filteredPosts);
  }

  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  ermActually(event : Event) : void {
    event.preventDefault();
    this.router.navigate(['/admin']);
  }

  @HostListener('window:click', ['$event'])
  onWindowClick(event: MouseEvent) {
    const modal = document.getElementById('createPostModal');
    if (modal && event.target === modal) {
      this.closeModal();
    }
  }

}
