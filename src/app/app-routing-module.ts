import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Motorcycles } from '../usercomponent/motorcycles/motorcycles';
import { Cars } from '../usercomponent/cars/cars';
import { MobilePhones } from '../usercomponent/mobile-phones/mobile-phones';
import { SaleHouseAppartment } from '../usercomponent/sale-house-appartment/sale-house-appartment';
import { Scooters } from '../usercomponent/scooters/scooters';
import { OtherVehicle } from '../usercomponent/other-vehicle/other-vehicle';
import { RentHouseAppartment } from '../usercomponent/rent-house-appartment/rent-house-appartment';
import { Dashboard } from '../usercomponent/dashboard/dashboard';


const routes: Routes = [
  {path:"cars",component:Cars},
  {path:"motorcycles",component:Motorcycles},
  {path:"mobile-phones",component:MobilePhones},
  {path:"sale-house-appartment",component:SaleHouseAppartment},
  {path:"scooters",component:Scooters},
  {path:"other-vehicle",component:OtherVehicle},
  {path:"rent-house-appartment",component:RentHouseAppartment},  
  {path:"dashboard",component:Dashboard},
  {path: "", redirectTo:"dashboard",pathMatch:"full"}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
