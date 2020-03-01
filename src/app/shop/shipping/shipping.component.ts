import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  shippingMethodName1: string='Paczkomat';
  shippingMethodName2: string='Kurier-przedpłata';
  shippingMethodName3: string='Kurier-pobranie';

  shippingMethodprice1: number= 10;
  shippingMethodprice2: number= 15.5;
  shippingMethodprice3: number= 20.20;
}
