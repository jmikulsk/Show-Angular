import { Component, OnInit } from '@angular/core';
import {Product} from "../Product";
import {ProductStorageService} from "../../../product-storage.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor(private productStorage: ProductStorageService, private router:Router,
              private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getProductToEdit();
  }
  product: Product = new Product();

  saveProduct(product: Product) {
    this.productStorage.saveProduct(product);
    this.router.navigate(['/shop'])

  }
  getProductToEdit(){
      this.activeRoute.paramMap.subscribe(params =>{
        const id= params.get('id');
        if(id){
          this.product = this.productStorage.getProduct(Number.parseInt(id));
        }

      })
  }
}
