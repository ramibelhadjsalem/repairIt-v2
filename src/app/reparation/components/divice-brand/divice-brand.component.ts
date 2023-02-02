import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import { Brand } from 'src/app/services/models/Brand';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-divice-brand',
  templateUrl: './divice-brand.component.html',
  styleUrls: ['./divice-brand.component.scss']
})
export class DiviceBrandComponent implements OnInit {
  @Input() brand !: Brand
  @Input() showTitle: boolean = false
  @Input() formControl !: FormControl

  icon !: SafeHtml;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.icon = this.sanitizer.bypassSecurityTrustHtml(this.brand.icon);

  }

}
