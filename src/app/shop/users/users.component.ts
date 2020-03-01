import { Component, OnInit } from '@angular/core';

import {HttpClientService} from "../../http-client.service";
import {Product} from "../products/Product";
import {User} from "./User";
import {UserStorageService} from "../../user-storage.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userStorage: UserStorageService,) {
  }

  ngOnInit(): void {
    this.getUsers()
  }

  users: User[] = [];

  getUsers() {
    this.userStorage.getUsers().subscribe(users => this.users = users);
  }

  removeUser(id: number) {
    this.userStorage.removeUser(id);




}}


//
// removeUser(id: number) {
//   this.userStorage.removeUser(id).subscribe(r => {
//     this.getUsers();
//   });
// import {Component, OnInit} from '@angular/core';
// import {Product} from "./Product";
// import {ProductStorageService} from "../../product-storage.service";
//
// @Component({
//   selector: 'app-products',
//   templateUrl: './products.component.html',
//   styleUrls: ['./products.component.css']
// })
// export class ProductsComponent implements OnInit {
//
//   constructor(private productStorage:ProductStorageService) {
//   }
//
//   ngOnInit(): void {
//     this.getProducts();
//
//   }
//
//   products:Product[] = [];
//
//   getProducts(){
//     this.productStorage.getProducts().subscribe(products=>this.products = products);
//
//   }
//   removeProduct(id: number){
//     this.productStorage.removeProduct(id);
//   }
// }
