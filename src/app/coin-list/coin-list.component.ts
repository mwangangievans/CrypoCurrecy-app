import { ApiService } from '../service/api.service';
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { CoinService } from '../coin.service';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.css'],
})
export class CoinListComponent implements OnInit {
  bannerData: any = [];
  // dataSource! : MatTableDataSource<any>;

  dataSource!: MatTableDataSource<any[]>;
  displayedColumns: string[] = ['symbol', 'current_price', 'price_change_percentage_24h', 'market_cap'];
  currency : string = "INR"

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;



  constructor(private api: ApiService ,   private router : Router ,  private currencyService : CoinService) {}

  ngOnInit(): void {
    this.getAllData();
    this.getBannerData();
    this.currencyService.getCurrency()
    .subscribe(val =>{
      this.currency = val;
      console.log("updated currrency..." +this.currency);
      this.getAllData();
      this.getBannerData();
    })
  }



  getBannerData() {
    this.api.getTrendingCurrency(this.currency).subscribe((res) => {
      this.bannerData = res;
      // console.log(res);
    });
  }
  getAllData() {
    this.api.getCurrencyData(this.currency).subscribe((res) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  gotoDetails(row: any) {
    this.router.navigate(['coin-detail',row.id])
  }
}
