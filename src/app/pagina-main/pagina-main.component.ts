import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pagina-main',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './pagina-main.component.html',
  styleUrls: ['./pagina-main.component.css'],
})
export class PaginaMainComponent {
  logito = 'assets/logo/logito.png';
  logo = 'assets/logo/logo.png';
  patron = 'assets/logo/patron.png';

  // Modal visibility state
  isModalOpen = false;

  // Open the modal
  openModal() {
    this.isModalOpen = true;
  }

  // Close the modal
  closeModal() {
    this.isModalOpen = false;
  }

  // Close the modal when clicking outside it
  @HostListener('window:click', ['$event'])
  onWindowClick(event: MouseEvent) {
    const modal = document.getElementById('createPostModal');
    if (modal && event.target === modal) {
      this.closeModal();
    }
  }
}
