import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReparationRoutingModule } from './reparation-routing.module';
import { DeviceTypeComponent } from './device-type/device-type.component';
import { DeviceCategorieComponent } from './device-categorie/device-categorie.component';
import { DiviceBrandComponent } from './components/divice-brand/divice-brand.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { AddressComponent } from './address/address.component';
import { DiscriptionComponent } from './discription/discription.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DeviceTypeComponent,
    DiscriptionComponent,
    AddressComponent,
    LivraisonComponent,
    DiviceBrandComponent,
    DeviceCategorieComponent
  ],
  imports: [
    CommonModule,
    ReparationRoutingModule,
    ReactiveFormsModule,
    
    
  ]
})
export class ReparationModule { }
