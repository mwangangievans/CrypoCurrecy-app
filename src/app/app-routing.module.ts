import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoinListComponent } from './coin-list/coin-list.component';
import { CoinDetailComponent } from './coin-detail/coin-detail.component';

const routes : Routes = [
  {path: '' ,redirectTo : 'coin-list',pathMatch : 'full'},
  {path:'coin-list' , component: CoinListComponent},
  {path:'coin-detail', component: CoinDetailComponent}
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
