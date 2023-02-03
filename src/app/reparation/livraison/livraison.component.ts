import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RepartionService } from 'src/app/services/services/repartion.service';

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.scss']
})
export class LivraisonComponent implements OnInit {
  form !:FormGroup
  constructor(private formSerice:RepartionService) { }

  ngOnInit(): void {
    this.initForm()
  }
  initForm(){
    this.form  =this.formSerice.form
  }
  handle(){
    console.log(this.form.value);
    
  }

}
