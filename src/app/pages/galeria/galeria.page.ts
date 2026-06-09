import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonFab,
  IonFabButton,
  IonIcon,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonBadge
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { PerrosService, Perro } from '../../services/perros.service';
import { TarjetaPerroComponent } from '../../components/tarjeta-perro/tarjeta-perro.component';

@Component({
  selector: 'app-galeria',
  templateUrl: 'galeria.page.html',
  styleUrls: ['galeria.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonFab,
    IonFabButton,
    IonIcon,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonBadge,
    TarjetaPerroComponent
  ],
})
export class GaleriaPage implements OnInit {
  perros: Perro[] = [];
  perrosFiltrados: Perro[] = [];
  loading = true;
  filtroActivo: string = 'todos';

  constructor(
    private perrosService: PerrosService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cargarPerros();
  }

  cargarPerros() {
    this.loading = true;
    this.perros = this.perrosService.todas();
    this.aplicarFiltro();
    this.loading = false;
  }

  aplicarFiltro() {
    switch (this.filtroActivo) {
      case 'disponibles':
        this.perrosFiltrados = this.perros.filter(p => !p.adoptado);
        break;
      case 'adoptados':
        this.perrosFiltrados = this.perros.filter(p => p.adoptado);
        break;
      default:
        this.perrosFiltrados = [...this.perros];
    }
  }

  onFilterChange(event: CustomEvent) {
    this.filtroActivo = event.detail.value;
    this.aplicarFiltro();
  }

  get totalCount(): number {
    return this.perros.length;
  }

  get disponiblesCount(): number {
    return this.perros.filter(p => !p.adoptado).length;
  }

  get adoptadosCount(): number {
    return this.perros.filter(p => p.adoptado).length;
  }

  irANuevo() {
    this.router.navigate(['/nuevo']);
  }

  verDetalle(id: number) {
    this.router.navigate(['/detalle', id]);
  }
}