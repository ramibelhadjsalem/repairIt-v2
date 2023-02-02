import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getPaginatedResult, getPaginationHeaders } from './paginationHelper';
import { UserParams } from '../models/UserParams';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class ReparateurService {
  userParams:UserParams
  ApiUrl:string = environment.apiUrl;
  constructor(private http:HttpClient) {
    this.userParams=new UserParams();
   }


  getAll(userParams:UserParams){
    
    let params = getPaginationHeaders(userParams.pageNumber,userParams.pageSize)
    return  getPaginatedResult<User[]>(this.ApiUrl+"/reparateur",params,this.http);
    
  }
  getByid(id:number){
    return this.http.get<User>(this.ApiUrl+"/reparateur/"+id);
  }
  getUserParams(){
    return this.userParams;
  }
  setUserParams(parms:UserParams){
    this.userParams=parms;
  }
  resetuserParams(){
    return this.userParams=new UserParams();
  }
}
