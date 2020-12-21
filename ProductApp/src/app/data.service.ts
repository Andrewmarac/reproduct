import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
 providedIn: 'root'
})
export class DataService{

 constructor(private http: HttpClient) { }
 searchproduct(query: string) {
 const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}page_size=2&json=true`;

 let obsPro = this.http.get(url);
 return obsPro;
 }
}
