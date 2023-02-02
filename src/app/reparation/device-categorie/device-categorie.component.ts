import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/services/models/Brand';
import categories from '../categories.json'

@Component({
  selector: 'app-device-categorie',
  templateUrl: './device-categorie.component.html',
  styleUrls: ['./device-categorie.component.scss']
})
export class DeviceCategorieComponent implements OnInit {
  categories :Brand[] = categories
  constructor() { }

  ngOnInit(): void {
  }

}
