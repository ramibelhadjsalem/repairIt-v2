import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbCarousel} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-carousel-step',
  templateUrl: './carousel-step.component.html',
  styleUrls: ['./carousel-step.component.scss']
})
export class CarouselStepComponent implements OnInit {
  @ViewChild('carouselInfo', {static: true}) carouselInfo!: NgbCarousel;

  constructor() {
  }

  ngOnInit(): void {
    this.carouselInfo.pause()
  }

}
