import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Menu],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Datos Personales', icon: 'pi pi-user' },
      { label: 'Datos Académicos', icon: 'pi pi-book' },
      { label: 'Dirección Profesional', icon: 'pi pi-briefcase' },
      { label: 'Datos Bancarios', icon: 'pi pi-credit-card' },
      { label: 'Especialidades', icon: 'pi pi-star' },
      { label: 'Premios y distinciones', icon: 'pi pi-trophy' },
      { label: 'Publicación de datos', icon: 'pi pi-upload' },
      { label: 'Aceptación y Enviar', icon: 'pi pi-check' }
    ];
  }


}
