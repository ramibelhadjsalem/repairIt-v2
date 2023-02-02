import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  faFacebookF: any = faFacebookF;
  faGoogleD: any =faGoogle
  registerForm !:UntypedFormGroup;
  validationErrors: string[] = [];


  constructor(  private fb:UntypedFormBuilder,private route:Router) { }
  ngOnInit(): void {
    this.initRegister()
  }

  initRegister(){
    this.registerForm  =this.fb.group({
      firstname:['',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ]],
      lastname:['',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ]],
      email:['',Validators.required],
      password : ['',Validators.required]
    })
  }


  register(){
    this.route.navigateByUrl("competence")
  }

}
