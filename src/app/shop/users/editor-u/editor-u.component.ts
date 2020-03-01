import { Component, OnInit } from '@angular/core';
import {ProductStorageService} from "../../../product-storage.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClientService} from "../../../http-client.service";
import {UserStorageService} from "../../../user-storage.service";
import {User} from "../User";
import {Product} from "../../products/Product";

@Component({
  selector: 'app-editor-u',
  templateUrl: './editor-u.component.html',
  styleUrls: ['./editor-u.component.css']
})
export class EditorUComponent implements OnInit {

  constructor(private userStorage: UserStorageService, private router:Router,
              private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getUserToEdit();
  }
  user:User = new User();



  saveUser(user: User) {
    this.userStorage.saveUser(user);
    this.router.navigate(['/shop/users'])

  }
  getUserToEdit(){
    this.activeRoute.paramMap.subscribe(params =>{
      const id= params.get('id');
      if(id){
        this.user = this.userStorage.getUser(Number.parseInt(id));
      }

    })
  }
}
