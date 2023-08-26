import { Injectable } from '@angular/core';
import { Theater } from './theater.model';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class TheaterRepository {
  private theaters: Theater[] = [];

  constructor(private dataSource: RestDataSource) {
    this.dataSource.getTheater().subscribe((data) => {
      this.theaters = data;
    });
  }

  getAllTheater(): Theater[] {
    return this.theaters;
  }

  getTheatger(id: number): Theater | undefined {
    return this.theaters.find((p) => p.id == id);
  }
}
