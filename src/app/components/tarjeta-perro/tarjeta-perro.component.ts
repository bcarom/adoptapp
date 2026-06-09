import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonCard, 
  IonCardHeader, 
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonBadge,
  IonImg,
  IonChip
} from '@ionic/angular/standalone';
import { Perro } from '../../services/perros.service';

@Component({
  selector: 'app-tarjeta-perro',
  templateUrl: 'tarjeta-perro.component.html',
  styleUrls: ['tarjeta-perro.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonBadge,
    IonImg,
    IonChip
  ],
})
export class TarjetaPerroComponent {
  @Input() perro!: Perro;

  get estadoAdopcion(): string {
    return this.perro.adoptado ? 'Adoptado' : 'Disponible';
  }

  get badgeColor(): string {
    return this.perro.adoptado ? 'success' : 'danger';
  }

  get sexoIcono(): string {
    return this.perro.sexo === 'Macho' ? '♂' : '♀';
  }
}