import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cars } from '../../usercomponent/cars/cars';
import { Dashboard } from '../../usercomponent/dashboard/dashboard';
import { HouseAppartment } from '../../usercomponent/house-appartment/house-appartment';
import { MobilePhones } from '../../usercomponent/mobile-phones/mobile-phones';
import { Motorcycles } from '../../usercomponent/motorcycles/motorcycles';
import { OtherVehicle } from '../../usercomponent/other-vehicle/other-vehicle';
import { RentHouseAppartment } from '../../usercomponent/rent-house-appartment/rent-house-appartment';
import { SaleHouseAppartment } from '../../usercomponent/sale-house-appartment/sale-house-appartment';
import { Scooters } from '../../usercomponent/scooters/scooters';

@NgModule({
  declarations: [
    Cars,
    Dashboard,
    HouseAppartment,
    MobilePhones,
    Motorcycles,
    OtherVehicle,
    RentHouseAppartment,
    SaleHouseAppartment,
    Scooters
  ],
  imports: [
    CommonModule
  ],
  exports:[Cars,Dashboard,HouseAppartment,MobilePhones,Motorcycles,OtherVehicle,RentHouseAppartment,SaleHouseAppartment,Scooters]
})
export class UserModule { }
