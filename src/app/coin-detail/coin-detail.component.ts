import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';
import { ChartConfiguration , ChartType } from 'chart.js';
import { BaseChartDirective} from 'ng2-charts';

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.css']
})
export class CoinDetailComponent implements OnInit {

  coinData : any ;
  coinId! : string ;
  days : number = 1 ;
  currency : string = "INR" ;

  public lineChartData : ChartConfiguration['data'] = {
    datasets : [
      {
        data:[],
        label : 'Price Trends' ,
        backgroundColor : 'rgba(148 ,159 ,177 ,0.2)',
        borderColor : '#009688',
        pointBackgroundColor : '#009688',
        pointHoverBackgroundColor : '#009688',
        pointHoverBorderColor : '#009688',

      }
    ],
    labels : []
  } ;

  public linearChartOptions : ChartConfiguration['options'] = {
    elements : {
      point : {
        radius : 1
      }
    },
    scales : {

    },
    plugins : {
      legend : {
        display : true
      },
    }
  };


  constructor(private api : ApiService , private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(val=>{
      this.coinId=val['id'];
      console.log(this.coinId);
      this.getCoinData();

    })

  }
  getCoinData(){
    this.api.getCurrencyById(this.coinId).subscribe(res=>{
      this.coinData = res ;
      console.log(this.coinData);

    })

  }

}
