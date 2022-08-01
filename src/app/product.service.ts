import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:8085/ims/api/products';

  constructor(private http:HttpClient) {}

  getProductList():Observable<any>{
     //Invokes Spring Boot REST API
    return this.http.get('${this.baseUrl}/');
  }

  getProduct(id:number):Observable<any>{
     return this.http.get('${this}')
  }

}
