import { Injectable } from '@angular/core';
import {Product} from "./shop/products/Product";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductStorageService {

  constructor() { }

  private products: Product[] = [
    {id: 1, name: 'Produkt1', price: 10, quantity: 1000, available: true},
    {id: 2, name: 'Produkt2', price: 12, quantity: 10220, available: false}
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  removeProduct(id:number){
    const productIndex = this.products.findIndex(p=>p.id===id);
    this.products.splice(productIndex,1);

  }
}
