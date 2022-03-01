import { Component, OnInit } from '@angular/core';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-list-stocks',
  templateUrl: './list-stocks.component.html',
  styleUrls: ['./list-stocks.component.css']
})
export class ListStocksComponent implements OnInit {

  listStocks = []
  constructor(
    private stockService: StockService
  ) { }

  ngOnInit(): void {
    this.listStocks = this.stockService.stockArr;
  }

}
