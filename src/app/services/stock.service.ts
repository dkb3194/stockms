import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../models/stock';

interface stock{
  id:number,
  stockName: string,
  price: number,
  quantity: number
}
@Injectable({
  providedIn: 'root'
})
export class StockService {

  stockArr = []
  constructor() { }


   fetchStockById(id:string){
    let stock = this.stockArr.find(ele => (ele['id']).toString() == id)
    if(stock){
      return stock;
    }
   }


   fetchAllStocks(){
      
    }

   add(stock:Stock){
     stock['id'] = Math.random()
    this.stockArr.push(stock);
   }
}
