import { Component,OnInit } from '@angular/core';

import { Userservice } from '../../userservice/userservice';

@Component({
  selector: 'app-cars',
  standalone: false,
  templateUrl: './cars.html',
  styleUrl: './cars.scss'
})
export class Cars  {
  carcategory: any = [];
  carlocation: any = [];
  carbrandandmodel : any = [];
  carbudget: any = [];
  carkmdriven : any = [];
  
constructor(private userservice : Userservice)
{

}

ngOnInit()
{
   this.carcategory = this.userservice.getcarcategory();
   this.carlocation = this.userservice.getcarlocation();
   this.carbrandandmodel = this.userservice.getcarbrandandmodel();
   this.carbudget = this.userservice.getcarbudget();
   this.carkmdriven = this.userservice.getcarkmdriven();
}

}

