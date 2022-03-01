import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockService } from '../services/stock.service';



/**
 *  displays stock details from the stock id passed in route, see routing module for route
 */
@Component({
  selector: 'display-stock',
  templateUrl: './display-stock.component.html',
  styleUrls: ['./display-stock.component.css']
})
export class DisplayStockComponent implements OnInit {

  stockDetails: any = {}
  constructor(
    private route: ActivatedRoute,
    private stockService: StockService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((value)=>{
      console.log(value)
      let stockId = value['stockId']
      this.stockDetails = this.stockService.fetchStockById(stockId)
      console.log(this.stockDetails);
      
    })
    console.log(this.route.params.subscribe)
  }

}
