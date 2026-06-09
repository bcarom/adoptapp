import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent,
  IonButtons,
  IonBackButton,
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonCheckbox,
  IonTextarea,
  IonButton
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { PerrosService, Perro } from '../../services/perros.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: 'nuevo.page.html',
  styleUrls: ['nuevo.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonItem,
    IonLabel,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonCheckbox,
    IonTextarea,
    IonButton
  ],
})
export class NuevoPage {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private perrosService: PerrosService,
    private router: Router
  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      tipo: ['Perro', Validators.required],
      raza: ['', Validators.required],
      edad: ['', Validators.required],
      sexo: ['Macho', Validators.required],
      tamano: ['Mediano', Validators.required],
      vacunada: [false],
      descripcion: [''],
      foto: ['', Validators.required]
    });
  }

  agregarPerro() {
    if (this.form.invalid) {
      return;
    }

    const perros = this.perrosService.todas();
    const maxId = Math.max(...perros.map(p => p.id), 0);

    const nuevoPerro: Perro = {
      id: maxId + 1,
      ...this.form.value,
      adoptado: false
    };

    this.perrosService.agregar(nuevoPerro);
    this.router.navigate(['/']);
  }

  volver() {
    this.router.navigate(['/']);
  }
}