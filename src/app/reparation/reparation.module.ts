import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReparationRoutingModule } from './reparation-routing.module';
import { DeviceTypeComponent } from './device-type/device-type.component';
import { DeviceCategorieComponent } from './device-categorie/device-categorie.component';
import { DiviceBrandComponent } from './components/divice-brand/divice-brand.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { AddressComponent } from './address/address.component';
import { DiscriptionComponent } from './discription/discription.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { AutoComplateAdressComponent } from './components/auto-complate-adress/auto-complate-adress.component';


@NgModule({
  declarations: [
    DeviceTypeComponent,
    DiscriptionComponent,
    AddressComponent,
    LivraisonComponent,
    DiviceBrandComponent,
    DeviceCategorieComponent,
    AutoComplateAdressComponent
  ],
  imports: [
    CommonModule,
    ReparationRoutingModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    FormsModule
  ]
})
export class ReparationModule { }
