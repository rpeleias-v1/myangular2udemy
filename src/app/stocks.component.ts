import {Component} from '@angular/core';
import { StockService } from './stock.service';

@Component({
    selector: 'stocks',
    template: `<h1>Stocks</h1>
    {{title}}
    
    <ul [ngStyle]="{'color':myColor, 'font-size': mySize}">
        <li *ngFor="let stock of stocks">
            {{stock}}
        </li>
    </ul>
    
    <hr>
    {{stockMarkets.length}}
    <ul *ngIf="stockMarkets.length == 4">
        <li *ngFor="let stockMarket of stockMarkets" >
            {{stockMarket}}
        </li>
    </ul>
    
    <hr>
    
    <div [ngSwitch]="market">
        <div *ngSwitchCase="'NYSE'">New York Stock Exchange</div>
        <div *ngSwitchCase="'LSE'">London Stock Exchange</div>
        <div *ngSwitchCase="'HKSE'">Hong Kong Stock Exchange</div>
        <div *ngSwitchCase="'NASQAD'">NASQAD</div>
        <div *ngSwitchDefault>Could not find a match</div>
    </div>`
})
export class StocksComponent {

    market = 'HKSE';
    myColor = 'blue';
    mySize = '200%';
    
    title = 'List of Stocks: ';    
    stocks;
    showStockMarket = true;

    stockMarkets = ['NYSE', 'NASDAQ', 'EURONEXT', 'HKSE', 'LSE'];

    constructor(stockService: StockService) {
        this.stocks = stockService.getStocks();
    }
}