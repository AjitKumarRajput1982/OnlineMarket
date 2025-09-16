import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Motorcycles } from '../motorcycles/motorcycles';
import { Cars } from '../cars/cars';
import { MobilePhones } from '../mobile-phones/mobile-phones';
import { SaleHouseAppartment } from '../sale-house-appartment/sale-house-appartment';
import { Scooters } from '../scooters/scooters';
import { OtherVehicle } from '../other-vehicle/other-vehicle';
import { RentHouseAppartment } from '../rent-house-appartment/rent-house-appartment';
import { AllCategory } from '../all-category/all-category';

const routes: Routes = [
  {path:"cars",component:Cars},
  {path:"motorcycles",component:Motorcycles},
  {path:"mobile-phones",component:MobilePhones},
  {path:"sale-house-appartment",component:SaleHouseAppartment},
  {path:"scooters",component:Scooters},
  {path:"other-vehicle",component:OtherVehicle},
  {path:"rent-house-appartment",component:RentHouseAppartment},
  {path : "allcategory",component:AllCategory}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
