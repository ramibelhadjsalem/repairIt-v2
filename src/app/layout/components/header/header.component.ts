import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isMenuCollapsed = true;

  constructor(private route : Router) {
    route.events.subscribe(()=> this.isMenuCollapsed =true)
   }

  ngOnInit(): void {
    
  }

}
