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
  center: google.maps.LatLngLiteral = { lat: 47.016574992839494, lng: 2.9913817991325997 };
  zoom = 5;
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  myposition ?:google.maps.LatLngLiteral
  
  
  form !:FormGroup
 
  constructor(private formService :RepartionService,private geocoder: MapGeocoder) {}
 

  ngOnInit(): void {
    this.initform()
    this.getLocation() 
   
    
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
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position:any) => {
        if (position) {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          this.center ={lat:lat,lng:lng}
          this.myposition = this.center
          this.zoom = 15
        }
      },
        (error: any) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
 
  

  
 
  
}
