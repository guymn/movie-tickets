import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TheaterService {
  private url = "https://cpsu-test-api.herokuapp.com/api/camt2023/theaters";

  constructor() {}

  async getTheaterData() {
    const res = await fetch(this.url)
    return res.json();
  }
}
