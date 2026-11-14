import { Component } from '@angular/core';
import { Project, ProjectCard } from '../../components/project-card/project-card';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [ProjectCard, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  projects: Project[] = [
    {
      id: 3,
      title: 'Dashboard para Gimnasio',
      description: 'Un panel de administración responsive para gestionar un gimnasio.',
      images: [
        'img/3/Captura3.png'
      ],
      repository: 'https://github.com/100-frontend-projects/3.-Dashboard-de-Administraci-n-Gym.git',
      demo: 'https://100-frontend-projects.github.io/3.-Dashboard-de-Administraci-n-Gym/'
    },
    {
      id: 2,
      title: 'Landing Page Skullgirls',
      description: 'Una landing page para descubrir el universo del videojuego Skullgirls.',
      images: [
        'img/2/Captura2.0.png',
        'img/2/Captura2.1.png',
        'img/2/Captura2.2.png'
      ],
      repository: 'https://github.com/100-frontend-projects/Landing-Page-Skullgirls.git',
      demo: 'https://100-frontend-projects.github.io/Landing-Page-Skullgirls/'
    },
    {
      id: 1,
      title: 'Carta moderna',
      description: 'Una tarjeta de presentación con un diseño limpio y moderno.',
      images: [
        'img/1/Captura1.png'
      ],
      repository: 'https://github.com/100-frontend-projects/modern_card.git',
      demo: 'https://100-frontend-projects.github.io/modern_card/'
    }

  ]
}
