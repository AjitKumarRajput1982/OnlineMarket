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
  this.userservice.getcarbrand().subscribe(
    (response:Carbrand[])=>{
      this.carbrand = response;
    }
   );   

  this.userservice.getcarbudget().subscribe(
    (response:Carbudget[])=>{
      this.carbudget = response;
    }
   );  

  this.userservice.getcarfuel().subscribe(
    (response:Carfuel[])=>{
      this.carfuel = response;
    }
   ); 

  this.userservice.getcarkmdriven().subscribe(
    (response:Carkmdriven[])=>{
      this.carkmdriven = response;
    }
   ); 

  this.userservice.getcarnoofowner().subscribe(
    (response:Carnoofowner[])=>{
      this.carnoofowner = response;
    }
   ); 

  this.userservice.getcarstate().subscribe(
    (response:State[])=>{
      this.state = response;
    }
   );
}
}

