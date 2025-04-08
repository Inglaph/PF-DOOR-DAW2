import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  aboutTitle = 'Sobre nosotros';
  aboutMessage1 = 'Los clubes de lectura lo conforman un grupo de personas que se reúnen periódicamente para comentar e intercambiar opiniones sobre una misma obra que han leído..';
  aboutMessage2 = 'El monitor del club propondrá los libros y facilitará los ejemplares. Los lectores se comprometerán a su devolución puntual, asistencia y participación activa. En la sesión inicial se hace un breve comentario para situar la obra desde un punto de vista literario, se aportan datos del autor, del contexto histórico. En la sesión última, cuando se haga el comentario completo, se da una visión general del libro leído.';
  aboutMessage3 = 'Los clubes de lectura de la biblioteca iniciaron su andadura en el año 2000. Desde su inicio, se planteó como una actividad especialmente pensada para el fomento de la lectura individual y social que abría un espacio de relación para personas que disfrutan leyendo en casa y compartiendo experiencias literarias en la biblioteca de forma periódica.';

}
