import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { ButtonModule } from 'primeng/button';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-datos-personales',
  standalone: true,
  imports: [InputTextModule, InputGroupModule, InputGroupAddonModule, ButtonModule, DropdownModule, CheckboxModule, NgOptimizedImage],
  templateUrl: './datos-personales.component.html',
  styleUrl: './datos-personales.component.scss'
})
export class DatosPersonalesComponent {

}