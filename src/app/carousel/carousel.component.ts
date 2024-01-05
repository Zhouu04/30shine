// carousel.component.ts

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  translateValue = 0;

  @Input() carouselItems = [];

  ngOnInit(): void {
   
  }

  nextSlide() {
    const itemWidth = 280; // Adjust this based on your item width
    const totalItems = this.carouselItems.length;
    this.translateValue -= itemWidth;

    if (this.translateValue < -itemWidth * (totalItems - 1)) {
      this.translateValue = 0;
    }
    console.log(this.translateValue)
  }

  previousSlide() {
    const itemWidth = 280; // Adjust this based on your item width
    const totalItems = this.carouselItems.length;
    this.translateValue += itemWidth;

    if (this.translateValue < -itemWidth * (totalItems - 1)) {
      this.translateValue = 0;
    }
    console.log(this.translateValue);
  }
}
