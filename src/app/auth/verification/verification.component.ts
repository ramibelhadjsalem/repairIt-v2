import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {
  verificationForm !:UntypedFormGroup ; 
  constructor(private fb:UntypedFormBuilder,private route:Router) { }

  ngOnInit(): void {
    this.initVerificationForm()
  }

  initVerificationForm(){
    this.verificationForm  =this.fb.group({
      Cin:[''],
      MF:['']
    })
  }

  SubmitveificationForm(){
    this.route.navigateByUrl("livraison")
  }

}
