import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RepartionService } from 'src/app/services/services/repartion.service';

@Component({
  selector: 'app-reparation-layout',
  templateUrl: './reparation-layout.component.html',
  styleUrls: ['./reparation-layout.component.scss']
})
export class ReparationLayoutComponent implements OnInit {
  form !: FormGroup
  
  constructor(private formService : RepartionService) { }

  ngOnInit(): void {
     this.form=this.formService.form
    // this.typeForm = this.form.get('type') as FormGroup
  }
  discriptionDisabled():boolean{
    return  this.form.get('categorie')!.invalid 
  }
  addressDisabled(){
    return  this.form.get('discription')!.invalid
  }
}
