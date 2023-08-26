import { Component, Input, inject } from '@angular/core';
import { TheaterRepository } from '../model/theater.repository';
import { Movie } from '../model/movie.model';
import { Theater } from '../model/theater.model';
import { TheaterService } from '../theater.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  @Input() theater?: Theater;

  getImgMovie(): string | undefined {
    // return this.movie?.coverImage;
    return 'https://3bugs.com/online-tickets/images/movie01.jpg';
  }

  getGenre(): string | undefined {
    return 'Action, Adventure, Sci - Fi';
  }
  getName(): string | undefined {
    return 'บลู บีเทิล';
  }
  getRate(): string | undefined {
    // return this.movie?.name;
    return 'G';
  }
  getLength(): number | undefined {
    return 130;
  }

}
