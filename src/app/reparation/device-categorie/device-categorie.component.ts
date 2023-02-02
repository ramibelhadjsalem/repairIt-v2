import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Brand } from 'src/app/services/models/Brand';
import { RepartionService } from 'src/app/services/services/repartion.service';
import categories from '../categories.json'

@Component({
  selector: 'app-device-categorie',
  templateUrl: './device-categorie.component.html',
  styleUrls: ['./device-categorie.component.scss']
})
export class DeviceCategorieComponent implements OnInit {
  categories: Brand[] = categories
  typeForm !: FormGroup
  
  constructor(private formService : RepartionService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.initForm()
  }
  genrateIcon(icon: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(icon);
  }
  initForm() {
    this.typeForm = this.formService.form
  }

  handleClicl() {
    console.log(this.formService.form);

  }
}
