import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Product} from "./shop/products/Product";

const BASE_URL = 'http://localhost:8080/api';
const HTTP_OPTIONS = {headers:new HttpHeaders({'Content-Type':'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${BASE_URL}/products`);
  }
  removeProducts(id:number){
     return this.httpClient.delete(`${BASE_URL}/products/remove/${id}`)
  }
}
