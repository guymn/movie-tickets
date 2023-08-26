import { Component, inject } from '@angular/core';
import { TheaterRepository } from '../model/theater.repository';
import { Theater } from '../model/theater.model';
import { TheaterService } from '../theater.service';
import { Movie } from '../model/movie.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  theaterService: TheaterService = inject(TheaterService);
  private theaters: Theater[] = [];
  private id?: number = 1;

  constructor() {
    this.theaterService.getTheaterData().then((theaters) => {
      this.theaters = theaters;
    });
  }

  getTheaters(): Theater[] {
    return this.theaters;
  }

  getMovie(): Movie[] {
    return this.theaters
      .map((p) => p.movie ?? '(None)')
      .filter((c, index, array) => array.indexOf(c) == index)
      .sort();
  }

  getC(): number | undefined {
    return this.id;
  }

  onChange(theater: Theater) {
    this.id = theater.id;
  }

  getTheaterByIdCurrent() {
    return this.theaters.find(theater => theater.id === this.id);
  }
}
