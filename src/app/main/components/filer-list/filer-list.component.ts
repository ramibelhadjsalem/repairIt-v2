import { Component } from '@angular/core';
import { Brand } from 'src/app/services/models/Brand';
import categories from '../../../reparation/categories.json'
import brands from '../../../reparation/brands.json'

@Component({
  selector: 'app-filer-list',
  templateUrl: './filer-list.component.html',
  styleUrls: ['./filer-list.component.scss']
})
export class FilerListComponent {
 
  categories:Brand[] =categories
  brands:Brand[] =brands

}
