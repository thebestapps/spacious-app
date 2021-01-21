import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.page.html',
  styleUrls: ['./sort.page.scss'],
})
export class SortPage implements OnInit {
  public form = [
    { val: 'Auction Date(ascending)', isChecked: true },
    { val: 'Auction Date(descending)', isChecked: false },
    { val: 'Newly Added', isChecked: false },
    { val: 'Price(Low-High)', isChecked: true },
    { val: 'Price(High-Low)', isChecked: false },
    { val: 'Lot Size', isChecked: false },
    { val: 'Year Built', isChecked: false },
    { val: 'Homes For You', isChecked: true },
  ];
  constructor() { }

  ngOnInit() {
  }

}
