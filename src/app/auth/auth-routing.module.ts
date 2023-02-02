import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetanceComponent } from './competance/competance.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerificationComponent } from './verification/verification.component';

const routes: Routes = [
  {
    path: '', children: [
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "register",
        component: RegisterComponent
      },
      {
        path: "verification",
        component: VerificationComponent
      },
      {
        path: "livraison",
        pathMatch: 'full',
        component: LivraisonComponent
      },
      {
        path: "competence",
        component: CompetanceComponent
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
