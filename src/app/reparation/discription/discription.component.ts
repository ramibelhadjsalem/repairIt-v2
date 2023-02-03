import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RepartionService } from 'src/app/services/services/repartion.service';

@Component({
  selector: 'app-discription',
  templateUrl: './discription.component.html',
  styleUrls: ['./discription.component.scss']
})
export class DiscriptionComponent implements OnInit {
  form !:FormGroup
  constructor(private formService: RepartionService) { }

  ngOnInit(): void {
    this.initForm()
  }
  onCheckboxChange(event: any) {}

  log(e:any){
    console.log("event "+e);
    
  }
  initForm(){
    this.form =this.formService.form
  }
 
}
