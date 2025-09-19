import { Component,OnInit } from '@angular/core';
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
  styleUrl: './cars.scss'
})
export class Cars  { 
  carbrand: Carbrand[] = [];
  carbudget: Carbudget[] = [];
  carfuel: Carfuel[] = [];
  carkmdriven: Carkmdriven[] = [];
  carnoofowner: Carnoofowner[] = [];
  state: State[] = [];
  
constructor(private carservice :Carservice)
{

}

ngOnInit()
{
  this.carservice.getcarbrand().subscribe({
    next:(response : Carbrand[]) =>
    {
      this.carbrand = response;
    },
    error:(error : any) =>
    {
      console.log(error)
    },
    complete:() => {}
   });

  this.carservice.getcarbudget().subscribe({
    next:(response : Carbudget[]) =>
    {
      this.carbudget = response;
    },
    error:(error : any) =>
    {
      console.log(error)
    },
    complete:() => {}
   });

  this.carservice.getcarfuel().subscribe({
    next:(response : Carfuel[]) =>
    {
      this.carfuel = response;
    },
    error:(error : any) =>
    {
      console.log(error)
    },
    complete:() => {}
   });

  this.carservice.getcarkmdriven().subscribe({
    next:(response : Carkmdriven[]) =>
    {
      this.carkmdriven = response;
    },
    error:(error : any) =>
    {
      console.log(error)
    },
    complete:() => {}
   });

  this.carservice.getcarnoofowner().subscribe({
    next:(response : Carnoofowner[]) =>
    {
      this.carnoofowner = response;
    },
    error:(error : any) =>
    {
      console.log(error)
    },
    complete:() => {}
   });  

   this.carservice.getcarstate().subscribe({
    next:(response : State[]) =>
    {
      this.state = response;
    },
    error:(error : any) =>
    {
      console.log(error)
    },
    complete:() => {}
   });
}
}

