import { Component,OnInit } from '@angular/core';
import { Userservice } from '../../userservice/userservice';
import { Carbrand } from '../../usermodel/car/carbrand';
import { Carbudget } from '../../usermodel/car/carbudget';
import { Carfuel } from '../../usermodel/car/carfuel';
import { Carkmdriven } from '../../usermodel/car/carkmdriven';
import { Carnoofowner } from '../../usermodel/car/carnoofowner';
import { State } from '../../usermodel/car/state';
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
  
constructor(private userservice : Userservice)
{

}

ngOnInit()
{
  this.userservice.getcarbrand().subscribe({
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

  this.userservice.getcarbudget().subscribe({
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

  this.userservice.getcarfuel().subscribe({
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

  this.userservice.getcarkmdriven().subscribe({
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

  this.userservice.getcarnoofowner().subscribe({
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

   this.userservice.getcarstate().subscribe({
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

