import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { ErrorLayoutComponent } from './error-layout/error-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ReparationLayoutComponent } from './reparation-layout/reparation-layout.component';
import { MenuMdComponent } from './reparation-layout/components/menu-md/menu-md.component';
import { IndecatorComponent } from './reparation-layout/components/indecator/indecator.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    MenuComponent,
    ErrorLayoutComponent,
    AuthLayoutComponent,
    MainLayoutComponent,
    ReparationLayoutComponent,
    MenuMdComponent,
    IndecatorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    MenuComponent
  ]
})
export class LayoutModule { }
