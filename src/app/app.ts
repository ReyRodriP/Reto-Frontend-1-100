import { Component, signal } from '@angular/core';
import { Home } from '../pages/home/home';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('OneToHundred');

  protected readonly temaOscuro = signal(false);

  protected toggleTema() {
    this.temaOscuro.set(!this.temaOscuro());
  }
}
