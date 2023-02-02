import { Component, OnInit,SecurityContext  } from '@angular/core';
import { Brand } from 'src/app/services/models/Brand';
import brands from "../brands.json"

@Component({
  selector: 'app-device-type',
  templateUrl: './device-type.component.html',
  styleUrls: ['./device-type.component.scss']
})
export class DeviceTypeComponent implements OnInit {

  brands :Brand[] = brands
 
  constructor() { }

  ngOnInit(): void {
    
    
  }

}
