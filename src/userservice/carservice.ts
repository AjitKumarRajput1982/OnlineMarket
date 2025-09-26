import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carbrand } from '../usermodel/car/carbrand';
import { Carbudget } from '../usermodel/car/carbudget';
import { Carfuel } from '../usermodel/car/carfuel';
import { Carkmdriven } from '../usermodel/car/carkmdriven';
import { Carnoofowner } from '../usermodel/car/carnoofowner';
import { State } from '../usermodel/car/state';
import { provideHttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class Carservice {
  carbrand: Carbrand[] = [];
  carbudget: Carbudget[] = [];
  carfuel: Carfuel[] = [];
  carkmdriven: Carkmdriven[] = [];
  carnoofowner: Carnoofowner[] = [];
  state: State[] = [];

  private onlinemarket_api_url: string = 'https://localhost:7020/api/car/';

  constructor(private httpClient: HttpClient) {}

  public getcarbrand(): Observable<Carbrand[]> {
    return this.httpClient.get<Carbrand[]>(this.onlinemarket_api_url + 'getcarbrand');
  }

  public getcarbudget(): Observable<Carbudget[]> {
    return this.httpClient.get<Carbudget[]>(this.onlinemarket_api_url + 'getcarbudget');
  }

  public getcarfuel(): Observable<Carfuel[]> {
    return this.httpClient.get<Carfuel[]>(this.onlinemarket_api_url + 'getcarfuel');
  }

  public getcarkmdriven(): Observable<Carkmdriven[]> {
    return this.httpClient.get<Carkmdriven[]>(this.onlinemarket_api_url + 'getcarkmdriven');
  }

  public getcarnoofowner(): Observable<Carnoofowner[]> {
    return this.httpClient.get<Carnoofowner[]>(this.onlinemarket_api_url + 'getcarnoofowner');
  }

  public getcarstate(): Observable<State[]> {
    return this.httpClient.get<State[]>(this.onlinemarket_api_url + 'getcarstate');
  }
}
