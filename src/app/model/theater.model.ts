import { Injectable } from '@angular/core';
import { Movie } from './movie.model';
import { SeatData } from './seatData.model';

@Injectable()
export class Theater {
  public id?: number;
  public name?: string;
  public movie?: Movie;
  public seatPrice?: number;
  public seatData?: SeatData;
}
