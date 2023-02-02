import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

import { AppUser } from '../models/Appuser';
import { User } from '../models/User';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {
  private currentUserSource = new ReplaySubject<AppUser>(1);
  currentUser$ = this.currentUserSource.asObservable();
  ApiUrl:string = environment.apiUrl;
  
  constructor(private route : Router,private http:HttpClient) { }
  

  login(model :any){
    return this.http.post(this.ApiUrl+"/auth/login",model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          this.setCurrentUser(user);
         
        }
      })
    )
  }
  register(model :any){
    return this.http.post(this.ApiUrl+"/auth/signup",model);
  
  }
  
  
  setCurrentUser(user:AppUser){
    localStorage.setItem('user',JSON.stringify(user));
    this.currentUserSource.next(user);
  }
  logOut(){
    localStorage.removeItem('user');
    // this.currentUserSource.next(1);
    
  }
  getCurrentUser(){
    return this.http.get<User>(this.ApiUrl+"/user/current-user");
  }


  competanceSubmit(model: any){
    
    this.route.navigateByUrl("/verification") ;
  }
  verificationSubmit(value: any) {
    this.route.navigateByUrl("/livraison") ;
  }
  submitlivraisonForm(value: any) {
    this.route.navigate(['/']) ;
  }
}
