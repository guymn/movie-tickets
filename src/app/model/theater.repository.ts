import { Injectable } from '@angular/core';
import { Theater } from './theater.model';
import { RestDataSource } from './rest.datasource';
import { Movie } from './movie.model';
import { Observable } from 'rxjs';


@Injectable()
export class TheaterRepository {
  private theaters: Theater[] = [];
  private movies: Movie[] = [];

  constructor(private dataSource: RestDataSource) {
    this.dataSource.getTheater().subscribe((data) => {
      this.theaters = data;
      this.movies = data
      .map((p) => p.movie ?? '(None)')
      .filter((c, index, array) => array.indexOf(c) == index)
      .sort();
    });
  }

  getAllTheaters(): Observable<Theater[]> {
    return this.dataSource.getTheater();
  }

  getTheatger(id: number): Theater | undefined {
    return this.theaters.find((p) => p.id == id);
  }

  getMovie(id: number): Movie | undefined {
    return this.movies;
  }
}
