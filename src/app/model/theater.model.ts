import { Injectable } from '@angular/core';

@Injectable()
export class Theater {
  public id?: number;
  public name?: string;
  public movie?: Movie;
  public seatPrice?: number;
  public seatData?: SeatData;
}

interface Movie {
    name: string;
    genre: string;
    rate: string;
    length: number;
    coverImage: string;
  }
  
  interface SeatData {
    numRows: number;
    numSeatsPerRow: number;
  }