import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkGuard } from '../services/guards/link.guard';
import { AddressComponent } from './address/address.component';
import { DeviceCategorieComponent } from './device-categorie/device-categorie.component';
import { DeviceTypeComponent } from './device-type/device-type.component';
import { DiscriptionComponent } from './discription/discription.component';
import { LivraisonComponent } from './livraison/livraison.component';

const routes: Routes = [
  {
    path: '', children: [
      {
        path: "",
        component: DeviceCategorieComponent
      }
    ]
  },
  {
    path: '', children: [
      {
        path: "type",
        component: DeviceTypeComponent,
        canActivate:[LinkGuard],
        data: {redirectUrl:"reparation",form: "categorie"}
      }
    ]
  },
  {
    path: '', children: [
      {
        path: "livraison",
        component: LivraisonComponent,
        canActivate:[LinkGuard],
        data: {redirectUrl:"reparation/address",form: "address"}
      }
    ]
  },
  {
    path: '', children: [
      {
        path: "discription",
        component: DiscriptionComponent,
        canActivate:[LinkGuard],
        data: {redirectUrl:"reparation",form: "categorie"}
      }
    ]
  },
  {
    path: '', children: [
      {
        path: "address",
        component: AddressComponent,
        // canActivate:[LinkGuard],
        data: {redirectUrl:"reparation/discription",form: "discription"}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReparationRoutingModule { }
