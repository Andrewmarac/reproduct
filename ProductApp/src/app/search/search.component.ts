import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
@Component({
 selector: 'app-root',
 templateUrl: './search.component.html',
 styleUrls: ['./search.component.css']
})
export class SearchComponent {
 query: string;
 title = 'productapp';
 obspro: Observable<Object>;
 results: any;

 constructor(public product: DataService) {
 }
 submit(query:HTMLInputElement): void {
 if (!query.value) {
 return;
 }
 this.query = query.value;
 this.obspro = this.product.searchproduct(this.query);
 this.obspro.subscribe(
   (data) => this.results = data);
 }
}
//console.log(data)
