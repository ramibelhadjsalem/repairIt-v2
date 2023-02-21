import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileIdComponent } from './profile-id/profile-id.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '', children: [
      {
        path: "",
        component: HomeComponent
      }
    ]
  },
  {
    path: '', children: [
      {
        path: "search", 
        component: SearchComponent,
      }
    ]
  },
  {
    path: '', children: [
      {
        path: "profile/:id", 
        component: ProfileIdComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
