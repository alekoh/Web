import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Advertisement } from '../_components/advertisement-component/advertisement';

@Injectable()
export class ItemsService {
  private advertisementsUrl = 'api/advertisements';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getAdvertisements(): Promise<Advertisement[]> {
    return this.http.get(this.advertisementsUrl)
                    .toPromise()
                    .then(response => response.json().data as Advertisement[])
                    .catch(this.handleError);
  }

  getAdvertisementById(id: number): Promise<Advertisement> {
    const url = `${this.advertisementsUrl}/${id}`;
    return this.http.get(url)
                    .toPromise()
                    .then(response => response.json().data as Advertisement)
                    .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.advertisementsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string, city: string): Promise<Advertisement> {
    return this.http
      .post(this.advertisementsUrl, JSON.stringify({name: name, city: city}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Advertisement)
      .catch(this.handleError);
  }

  update(advertisement: Advertisement): Promise<Advertisement> {
    const url = `${this.advertisementsUrl}/${advertisement.id}`;
    return this.http
      .put(url, JSON.stringify(advertisement), {headers: this.headers})
      .toPromise()
      .then(() => advertisement)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
