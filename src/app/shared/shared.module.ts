import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselHomeComponent } from './components/carousel-home/carousel-home.component';
import { RepairTypeComponent } from './components/repair-type/repair-type.component';
import { CarouselStepComponent } from './components/carousel-step/carousel-step.component';
import { CartReparateurComponent } from './components/cart-reparateur/cart-reparateur.component';
import { BestRepairersComponent } from './components/best-repairers/best-repairers.component';
import { RouterModule } from '@angular/router';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CarouselHomeComponent,
    RepairTypeComponent,
    CarouselStepComponent,
    CartReparateurComponent,
    BestRepairersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FontAwesomeModule,
    NgbCarouselModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    CarouselHomeComponent,
    RepairTypeComponent,
    CarouselStepComponent,
    CartReparateurComponent,
    BestRepairersComponent,

  ],
})
export class SharedModule { }
