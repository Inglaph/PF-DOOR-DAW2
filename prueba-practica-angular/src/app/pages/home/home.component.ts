import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { SearchBarComponent } from '../../shared/components/search-bar/search-bar.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SearchBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  imagePath = '../../../assets/images/home/principalLibros.png';
  welcomeTitle = 'Bienvenido al Club de Lectura';
  welcomeMessage = 'Bienvenido al Club de Lectura, tu lugar para descubrir y compartir tus lecturas favoritas. Registrate y comienza a leer hoy mismo. ';

}
