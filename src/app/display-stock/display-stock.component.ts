import { Component, OnInit } from '@angular/core';


/**
 *  displays stock details from the stock id passed in route, see routing module for route
 */
@Component({
  selector: 'display-stock',
  templateUrl: './display-stock.component.html',
  styleUrls: ['./display-stock.component.css']
})
export class DisplayStockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
