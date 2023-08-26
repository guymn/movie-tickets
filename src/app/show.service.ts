import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShowService {
  private url = 'https://cpsu-test-api.herokuapp.com/api/camt2023/shows';

  constructor() {}

  async getShowData() {
    const res = await fetch(this.url);
    return res.json();
  }
}
