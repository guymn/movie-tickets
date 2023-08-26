import { Injectable } from '@angular/core';
import { Show } from './show.model';
import { Observable, from } from 'rxjs';
import { Theater } from './theater.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RestDataSource {
  private showUrl = `https://cpsu-test-api.herokuapp.com/api/camt2023/shows`;
  private theaterUrl = `https://cpsu-test-api.herokuapp.com/api/camt2023/theaters`;

  constructor(private http: HttpClient) {}

  getShows(): Observable<Show[]> {
    return this.http.get<Show[]>(this.showUrl);
  }

  getTheater(): Observable<Theater[]> {
    return this.http.get<Theater[]>(this.theaterUrl);
  }

}
