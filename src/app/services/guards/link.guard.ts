import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RepartionService } from '../services/repartion.service';

@Injectable({
  providedIn: 'root'
})
export class LinkGuard implements CanActivate {
  constructor(private formService : RepartionService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let formName = route.data['form'] as string
    let redirectUrl = route.data['redirectUrl'] as string
    if(this.formService.form.get(formName)?.invalid){
      this.router.navigateByUrl(redirectUrl)
      return false
    }

    return true;
  }
  
}
