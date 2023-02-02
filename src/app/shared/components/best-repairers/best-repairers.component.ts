
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
// import {faCheckCircle} from "@fortawesome/free-regular-svg-icons";
// import { faStar } from '@fortawesome/free-solid-svg-icons';

import { UserParams } from 'src/app/services/models/UserParams';

@Component({
  selector: 'app-best-repairers',
  templateUrl: './best-repairers.component.html',
  styleUrls: ['./best-repairers.component.scss']
})
export class BestRepairersComponent implements OnInit {
  faCheckCircle: any;
  faStar: any;
  best4:any
  userParams:UserParams = new UserParams();
  
  constructor() {}


  ngOnInit(): void {
    this.userParams.pageSize=4;
    this.userParams.pageNumber=1;
   
    this.getbest4()
  }

  getbest4(){
    // this.repaService.getAll(this.userParams).subscribe(response=>{
    //   this.best4=response.result
    // })
  }
  

}
