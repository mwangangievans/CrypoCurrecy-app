import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  private selectedCurrency$ : BehaviorSubject<string> = new BehaviorSubject<string>("INR");

  constructor() { }

  getCurrency():Observable<string>{
    return this.selectedCurrency$;
  }
  setCurrency(currency : string){
    this.selectedCurrency$.next(currency);
  }
}
