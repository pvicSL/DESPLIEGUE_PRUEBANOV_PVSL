import { Component, inject } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Serie } from '../../models/serie';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  private seriesService = inject(SeriesService);
  public series$: Observable<Serie[]> = this.seriesService.getAll();
}
