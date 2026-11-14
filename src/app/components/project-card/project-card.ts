import { Component, input, signal } from '@angular/core';

export interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  repository: string;
  demo: string;
}

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})

export class ProjectCard {
  project = input.required<Project>(); /*Para avisar que se requiere un proyecto*/

  activeIndex = signal(0);

  previousImage(): void {
    const total = this.project().images.length;
    if (total < 2) return;

    this.activeIndex.update(index => (index - 1 + total) % total);
  }

  nextImage(): void {
    const total = this.project().images.length;
    if (total < 2) return;

    this.activeIndex.update(index => (index + 1) % total);
  }

  goToImage(index: number): void {
    this.activeIndex.set(index);
  }

}

