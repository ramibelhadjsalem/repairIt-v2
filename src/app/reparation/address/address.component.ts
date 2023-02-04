import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GoogleMap, MapDirectionsService, MapGeocoder } from '@angular/google-maps';
import { map, Observable } from 'rxjs';
import { RepartionService } from 'src/app/services/services/repartion.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit{
  isLight:boolean =true
  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  myposition ?:google.maps.LatLngLiteral
  
  
  form !:FormGroup
 
  constructor(private formService :RepartionService,private geocoder: MapGeocoder) {}
 

  ngOnInit(): void {
    this.initform()

    setTimeout(()=>{
      this.navigateTo()
    },3000)
    
  }
  initform(){
    this.form = this.formService.form.get('address') as FormGroup
  }

  putMarker(event : google.maps.MapMouseEvent){
    if(event.latLng !=null){
      this.myposition = event.latLng.toJSON()
      this.form.setValue(event.latLng.toJSON())
     
    } 
  }
  navigateTo(){
    // this.maps.panTo({lat: 50, lng: 60})
  }
 
  

  
 
  
}
