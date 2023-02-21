import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { GoogleMapsModule } from '@angular/google-maps';
import { CustumMarkerComponent } from './components/custum-marker/custum-marker.component';
import { MarkerInfoComponent } from './components/marker-info/marker-info.component';
import { SearchMapComponent } from './components/search-map/search-map.component';
import { TopFilterComponent } from './components/top-filter/top-filter.component';
import { FilerListComponent } from './components/filer-list/filer-list.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { ProfileIdComponent } from './profile-id/profile-id.component';


@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    CustumMarkerComponent,
    MarkerInfoComponent,
    SearchMapComponent,
    TopFilterComponent,
    FilerListComponent,
    SearchItemComponent,
    ProfileIdComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    PaginationModule.forRoot(),
    NgbModule,
    FormsModule,
    GoogleMapsModule,
  ],
  exports:[
    HomeComponent 
  ]
})
export class MainModule { }
