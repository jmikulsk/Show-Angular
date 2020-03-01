import {Component, OnInit} from '@angular/core';
import {Product} from "./Product";
import {ProductStorageService} from "../../product-storage.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productStorage:ProductStorageService) {
  }

  ngOnInit(): void {
    this.getProducts();

  }

  products:Product[] = [];

  getProducts(){
    this.productStorage.getProducts().subscribe(products=>this.products = products);

  }
  removeProduct(id: number){
    this.productStorage.removeProduct(id);
  }
}
