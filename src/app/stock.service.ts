import {Injectable} from '@angular/core';

import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'

@Injectable()
export class StockService {

    constructor(private http: Http) {}

    getStocksAPI(): Observable<any> {
        return this.http.get("http://localhost:3000/stocks")
            .map((res: Response) => res.json() )
            .catch((error:any) => Observable.throw(error.json().error || ' Server Error '));
    }
    
    getStocks(): string[] {
        return ['AAPL', 'IBM', 'GOOG', 'UDEMY', 'UBER', 'ABC', 'XYZ'];
    }
}