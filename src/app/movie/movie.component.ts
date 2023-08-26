import { Component, Input, inject } from '@angular/core';
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
    return this.theater?.movie?.coverImage;
  }

  getGenre(): string | undefined {
    return this.theater?.movie?.genre;
  }
  getName(): string | undefined {
    return this.theater?.movie?.name;
  }
  getRate(): string | undefined {
    return this.theater?.movie?.rate;
  }
  getLength(): number | undefined {
    return this.theater?.movie?.length;
  }
}
