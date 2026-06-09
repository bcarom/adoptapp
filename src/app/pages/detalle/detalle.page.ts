import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent,
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg,
  IonBadge,
  IonChip,
  IonButton
} from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { PerrosService, Perro } from '../../services/perros.service';

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.page.html',
  styleUrls: ['detalle.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonBackButton,
    IonButtons,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonImg,
    IonBadge,
    IonChip,
    IonButton
  ],
})
export class DetallePage implements OnInit {
  perro: Perro | undefined;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private perrosService: PerrosService,
    private router: Router
  ) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = parseInt(idParam, 10);
      this.perro = this.perrosService.obtener(String(id));
    }
    this.loading = false;
  }

  get estadoAdopcion(): string {
    return this.perro?.adoptado ? 'Adoptado' : 'Disponible';
  }

  get badgeColor(): string {
    return this.perro?.adoptado ? 'success' : 'danger';
  }

  get sexoIcono(): string {
    return this.perro?.sexo === 'Macho' ? '♂' : '♀';
  }

  volver() {
    this.router.navigate(['/']);
  }
}