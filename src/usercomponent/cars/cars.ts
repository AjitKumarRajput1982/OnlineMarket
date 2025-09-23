import { Component, OnInit } from '@angular/core';
import { Carbrand } from '../../usermodel/car/carbrand';
import { Carbudget } from '../../usermodel/car/carbudget';
import { Carfuel } from '../../usermodel/car/carfuel';
import { Carkmdriven } from '../../usermodel/car/carkmdriven';
import { Carnoofowner } from '../../usermodel/car/carnoofowner';
import { State } from '../../usermodel/car/state';
import { Carservice } from '../../userservice/carservice';

@Component({
  selector: 'app-cars',
  standalone: false,
  templateUrl: './cars.html',
  styleUrl: './cars.scss',
})
export class Cars implements OnInit {
  carbrand: Carbrand[] = [];
  carbudget: Carbudget[] = [];
  carfuel: Carfuel[] = [];
  carkmdriven: Carkmdriven[] = [];
  carnoofowner: Carnoofowner[] = [];
  state: State[] = [];

  constructor(private carservice: Carservice) {}

  ngOnInit() {
    this.getcarbrand();
    this.getcarbudget();
    this.getcarfuel();
    this.getcarkmdriven();
    this.getcarnoofowner();
    this.getcarstate();
  }

  private getcarbrand() {
    this.carservice.getcarbrand().subscribe({
      next: (response: Carbrand[]) => {
        this.carbrand = response;
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {},
    });
  }

  private getcarbudget() {
    this.carservice.getcarbudget().subscribe({
      next: (response: Carbudget[]) => {
        this.carbudget = response;
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {},
    });
  }

  private getcarfuel() {
    this.carservice.getcarfuel().subscribe({
      next: (response: Carfuel[]) => {
        this.carfuel = response;
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {},
    });
  }

  private getcarkmdriven() {
    this.carservice.getcarkmdriven().subscribe({
      next: (response: Carkmdriven[]) => {
        this.carkmdriven = response;
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {},
    });
  }

  private getcarnoofowner() {
    this.carservice.getcarnoofowner().subscribe({
      next: (response: Carnoofowner[]) => {
        this.carnoofowner = response;
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {},
    });
  }

  private getcarstate() {
    this.carservice.getcarstate().subscribe({
      next: (response: State[]) => {
        this.state = response;
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {},
    });
  }
}
