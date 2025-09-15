import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Cars } from '../cars/cars';
import { Motorcycles } from '../motorcycles/motorcycles';
import { MobilePhones } from '../mobile-phones/mobile-phones';
import { SaleHouseAppartment } from '../sale-house-appartment/sale-house-appartment';
import { Scooters } from '../scooters/scooters';
import { OtherVehicle } from '../other-vehicle/other-vehicle';
import { RentHouseAppartment } from '../rent-house-appartment/rent-house-appartment';
import { HouseAppartment } from '../house-appartment/house-appartment';

@NgModule({
  declarations: [
    App,
    Cars,
    Motorcycles,
    MobilePhones,
    SaleHouseAppartment,
    Scooters,
    OtherVehicle,
    RentHouseAppartment,
    HouseAppartment
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
