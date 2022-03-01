import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStockComponent } from './add-stock/add-stock.component';
import { DisplayStockComponent } from './display-stock/display-stock.component';
import { HomeComponent } from './home/home.component';
import { ListStocksComponent } from './list-stocks/list-stocks.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },

  { path: "home", component: HomeComponent },

  {path:"addstock", component:AddStockComponent},

  {path:"displaystock/:stockId", component:DisplayStockComponent},

  {path:"liststocks", component:ListStocksComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
