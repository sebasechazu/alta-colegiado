import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
interface NavItem {
  label: string;
  routerLink?: string;
}

export class AppComponent implements OnInit {
  items: NavItem[] = [];

  ngOnInit() {
    this.items = [
      { label: 'Datos Personales', routerLink: '/datos-personales' },
      { label: 'Datos Académicos', routerLink: '/datos-academicos' },
      { label: 'Dirección Profesional', routerLink: '/direccion-profesional' },
      { label: 'Datos Bancarios' },
      { label: 'Especialidades' },
      { label: 'Premios y distinciones' },
      { label: 'Publicación de datos' },
      { label: 'Aceptación y Enviar' }
    ];
  }
}
