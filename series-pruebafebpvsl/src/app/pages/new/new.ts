import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SeriesService } from '../../services/series.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new.html',
  styleUrl: './new.css',
})
export class NewComponent {
  private seriesService = inject(SeriesService);
  private router = inject(Router);

  form = new FormGroup({
    //Validación de campo obligatorio con al menos 3 caracters
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    //Validación de campo obligatorio
    channel: new FormControl('', [Validators.required]),
    //Validación de campo obligatorio y con valores entre 0 y 10
    rating: new FormControl<number | null>(null, [Validators.required, Validators.min(0), Validators.max(10)])
  });

  onSubmit() {
    //Se envía si es válido
    if (this.form.valid) {
      const nuevaSerie = this.form.getRawValue();

      this.seriesService.create(nuevaSerie as any).subscribe({
        next: (response: any) => {
          alert(`Serie añadida correctamente. Id de la nueva serie: ${response.id}`);
          //vuelve al inicio
          this.router.navigate(['/home']);
        },
        //log del error por consola, por si acaso
        error: (err) => console.error(err)
      });
    }
  }
}
