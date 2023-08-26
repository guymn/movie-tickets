import { Component, inject } from '@angular/core';
import { Theater } from '../model/theater.model';
import { TheaterService } from '../theater.service';
import { Movie } from '../model/movie.model';
import { ShowService } from '../show.service';
import { Show } from '../model/show.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  theaterService: TheaterService = inject(TheaterService);
  private theaters: Theater[] = [];

  showService: ShowService = inject(ShowService);
  private shows: Show[] = [];

  private id?: number = 1;

  constructor() {
    this.theaterService.getTheaterData().then((theaters) => {
      this.theaters = theaters;
    });
    this.showService.getShowData().then((shows) => {
      this.shows = shows;
    });
  }

  getTheaters(): Theater[] {
    return this.theaters;
  }

  getShowsForTheater(): Show[] {
    return this.shows.filter((show) => show.theater === this.id);
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
    return this.theaters.find((theater) => theater.id === this.id);
  }
}
