import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {
 /*  knobBedroomValues : string ;
  knobBathroomValues : string ; */
  constructor() { }

  ngOnInit() {
  }

  btnActivate(ionicButton) {
    if(ionicButton.color === 'light')
      ionicButton.color =  'primary';
    else
      ionicButton.color = 'light';
  }
}
