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
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


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
  exports:[TranslateModule]
  ,
  imports: [
    CommonModule,
    ReparationRoutingModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage:localStorage.getItem("lang")|| "fr",
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ]
})
export class ReparationModule { }
export function httpTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http);
}