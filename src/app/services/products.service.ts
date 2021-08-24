import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _httpClient: HttpClient) {
  }

  getProduct(code:string): Observable<any> {
    let resp: any;


    return this._httpClient.get<any>('product/getproductbyid/', { params: { code: code}});
  }
}
