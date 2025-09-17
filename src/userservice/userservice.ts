import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carbrand } from '../usermodel/car/carbrand';
import { Carbudget } from '../usermodel/car/carbudget';
import { Carfuel } from '../usermodel/car/carfuel';
import { Carkmdriven } from '../usermodel/car/carkmdriven';
import { Carnoofowner } from '../usermodel/car/carnoofowner';
import { State } from '../usermodel/car/state';

@Injectable()
export class Userservice {
  constructor(private httpClient : HttpClient)
  {

  }

  getcarbrand():Observable<Carbrand[]>
  {
    return this.httpClient.get<Carbrand[]>("api/getcarbrand");
  }  
  getcarbudget():Observable<Carbudget[]>
  {
    return this.httpClient.get<Carbudget[]>("api/getcarbudget");
  }  
  getcarfuel():Observable<Carfuel[]>
  {
    return this.httpClient.get<Carfuel[]>("api/getcarfuel");
  } 
  getcarkmdriven():Observable<Carkmdriven[]>
  {
    return this.httpClient.get<Carkmdriven[]>("api/getcarkmdriven");
  } 
  getcarnoofowner():Observable<Carnoofowner[]>
  {
    return this.httpClient.get<Carnoofowner[]>("api/getcarnoofowner");
  } 
  getcarstate():Observable<State[]>
  {
    return this.httpClient.get<State[]>("api/getstate");
  } 
}
