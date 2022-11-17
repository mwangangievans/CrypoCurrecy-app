import { Component } from '@angular/core';
import { CoinService } from './coin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCurrency:string = "INR";

  constructor( private curerrency : CoinService){}

  sendCurrency(event: string){
   this.curerrency.setCurrency(event)

  }

}
