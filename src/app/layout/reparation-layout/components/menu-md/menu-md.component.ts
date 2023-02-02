import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-menu-md',
  templateUrl: './menu-md.component.html',
  styleUrls: ['./menu-md.component.scss']
})
export class MenuMdComponent implements OnInit {

  constructor(private location: Location) 
  {}

  ngOnInit(): void {
  }
  backClicked() {
    this.location.back();
  }

}
