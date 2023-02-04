import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
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
 
  constructor(private formService :RepartionService,public zone: NgZone) {}
 

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
    console.log(navigator);
    
    if (navigator.geolocation) {
      
      
      navigator.geolocation.getCurrentPosition((position:any) => {
        if (position) {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          this.center ={lat:lat,lng:lng}
          this.myposition = this.center
          this.zoom = 15
          this.form.setValue(this.myposition)
        }
      },
        (error: any) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  address?: Object;
  establishmentAddress?: Object;

  formattedAddress?: string;
  formattedEstablishmentAddress?: string;

  phone?: string;
  getAddress(place: any) {
    this.address = place['formatted_address'];
    this.phone = this.getPhone(place);
    this.formattedAddress = place['formatted_address'];
    this.zone.run(() => this.formattedAddress = place['formatted_address']);
  }

  getEstablishmentAddress(place: any) {
    this.establishmentAddress = place['formatted_address'];
    this.phone = this.getPhone(place);
    this.formattedEstablishmentAddress = place['formatted_address'];
    this.zone.run(() => {
      this.formattedEstablishmentAddress = place['formatted_address'];
      this.phone = place['formatted_phone_number'];
    });
  }

  getAddrComponent(place:any, componentTemplate:any) {
    let result;

    for (let i = 0; i < place.address_components.length; i++) {
      const addressType = place.address_components[i].types[0];
      if (componentTemplate[addressType]) {
        result = place.address_components[i][componentTemplate[addressType]];
        return result;
      }
    }
    return;
  }

  getStreetNumber(place:any) {
    const COMPONENT_TEMPLATE = { street_number: 'short_name' },
      streetNumber = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return streetNumber;
  }

  getStreet(place:any) {
    const COMPONENT_TEMPLATE = { route: 'long_name' },
      street = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return street;
  }

  getCity(place:any) {
    const COMPONENT_TEMPLATE = { locality: 'long_name' },
      city = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return city;
  }

  getState(place:any) {
    const COMPONENT_TEMPLATE = { administrative_area_level_1: 'short_name' },
      state = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return state;
  }

  getDistrict(place:any) {
    const COMPONENT_TEMPLATE = { administrative_area_level_2: 'short_name' },
      state = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return state;
  }

  getCountryShort(place:any) {
    const COMPONENT_TEMPLATE = { country: 'short_name' },
      countryShort = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return countryShort;
  }

  getCountry(place:any) {
    const COMPONENT_TEMPLATE = { country: 'long_name' },
      country = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return country;
  }

  getPostCode(place:any) {
    const COMPONENT_TEMPLATE = { postal_code: 'long_name' },
      postCode = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return postCode;
  }

  getPhone(place:any) {
    const COMPONENT_TEMPLATE = { formatted_phone_number: 'formatted_phone_number' },
      phone = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return phone;
  }
 
  

  
 
  
}
