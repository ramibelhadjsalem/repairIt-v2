import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'repairIt';
  constructor(private route:Router){}
  ngOnInit(): void {
    let spinner =document.getElementById("spinner-g")
    this.route.events.subscribe(event=>{
      if (event instanceof RouteConfigLoadStart) {
        spinner?.classList.add("active")
      }
      if (event instanceof RouteConfigLoadEnd) {
        spinner?.classList.remove("active")
        
      }
    })
  }
}
