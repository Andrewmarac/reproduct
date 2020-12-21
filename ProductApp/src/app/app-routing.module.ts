import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { ProdottiComponent } from './prodotti/prodotti.component';

const routes: Routes = [
  {path:'about',component:AboutComponent},
  {path:'search',component:SearchComponent},
  {path:'prodotti/:id',component:ProdottiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
