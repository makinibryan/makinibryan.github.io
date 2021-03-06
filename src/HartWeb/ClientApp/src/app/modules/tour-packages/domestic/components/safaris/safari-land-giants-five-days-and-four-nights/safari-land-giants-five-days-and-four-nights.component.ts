import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-safari-land-giants-five-days-and-four-nights',
  templateUrl: './safari-land-giants-five-days-and-four-nights.component.html',
  styleUrls: ['./safari-land-giants-five-days-and-four-nights.component.css']
})
export class SafariLandGiantsFiveDaysAndFourNightsComponent implements OnInit {

  constructor(private router: Router ) {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit(): void {
  }
}
