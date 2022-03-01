import { Component, OnInit } from '@angular/core';


/**
 * Use Reactive forms
 * Validations
 * stock price should be positive 
 * quantity should be positive and max 100 can be added at a time
 * name should not be empty or null and max 10 letters   
 */
@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
