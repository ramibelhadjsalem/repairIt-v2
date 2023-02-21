import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    SharedModule,
    GoogleMapsModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
