import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RepartionService {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      categorie: ['', Validators.required],

      discription: ['', [Validators.required, Validators.minLength(30)]],

      address: this.fb.group({
        lat: [-100,[ Validators.min(-90),Validators.max(90)]],
        lng: [-100, [ Validators.min(-90),Validators.max(90)]]
      })
    });
  }
}
