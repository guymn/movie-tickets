import { Injectable } from '@angular/core';
import { Show } from './show.model';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class ShowRepository {
  private shows: Show[] = [];
  private theaters: number[] = [];

  constructor(private dataSource: RestDataSource) {
    this.dataSource.getShows().subscribe((data) => {
      this.shows = data;
      this.theaters = data
        .map((p) => p.theater ?? '(None)')
        .filter((c, index, array) => array.indexOf(c) == index)
        .sort();
    });
  }

  getShows(theater?: number): Show[] {
    return this.shows.filter(
      (p) => theater == undefined || theater == p.theater
    );
  }

  getShow(id: number): Show | undefined {
    return this.shows.find((p) => p.id == id);
  }

  getTheater(): number[] {
    return this.theaters;
  }

  //   getShowByTheater(theater: number): Show | undefined {
  //     return this.shows.find((p) => p.theater == theater);
  //   }
}
