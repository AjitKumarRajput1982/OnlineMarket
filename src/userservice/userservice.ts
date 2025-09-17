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
    return this.httpClient.get<Carbrand[]>("https://localhost:7020/api/car/getcarbrand");
  }  
  getcarbudget():Observable<Carbudget[]>
  {
    return this.httpClient.get<Carbudget[]>("https://localhost:7020/api/car/getcarbudget");
  }  
  getcarfuel():Observable<Carfuel[]>
  {
    return this.httpClient.get<Carfuel[]>("https://localhost:7020/api/car/getcarfuel");
  } 
  getcarkmdriven():Observable<Carkmdriven[]>
  {
    return this.httpClient.get<Carkmdriven[]>("https://localhost:7020/api/car/getcarkmdriven");
  } 
  getcarnoofowner():Observable<Carnoofowner[]>
  {
    return this.httpClient.get<Carnoofowner[]>("https://localhost:7020/api/car/getcarnoofowner");
  } 
  getcarstate():Observable<State[]>
  {
    return this.httpClient.get<State[]>("https://localhost:7020/api/car/getcarstate");
  } 
}
