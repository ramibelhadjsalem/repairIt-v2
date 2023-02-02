import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-competance',
  templateUrl: './competance.component.html',
  styleUrls: ['./competance.component.scss']
})
export class CompetanceComponent implements OnInit {
  competenceForm !: UntypedFormGroup;
  constructor(private fb: UntypedFormBuilder, private route: Router) { }
  valid: boolean = false;
  total: number = 0;


  ngOnInit(): void {
    this.initCmpetanceForm()
  }
  initCmpetanceForm() {
    this.competenceForm = this.fb.group({
      PC: [false],
      MAC: [false],
      ANDROID: [false]

    })
  }

  CompetanceFormSubmit() { 
    this.route.navigateByUrl("verification")
  }

  changetottal($event: any) {

    if ($event.target.checked == true) {
      this.total++
      return
    }
    this.total--;

  }
}
