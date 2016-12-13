import { Component, OnInit } from '@angular/core';

import { StockService } from '../stock.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  stocks: string[];

  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.getAllStocks();

  }

  getAllStocks() {
    this.stockService.getStocksAPI().subscribe(
      data => this.stocks = data,
      error => console.log('Server Error')
    );
  }

}
