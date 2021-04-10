import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {IProduct} from '../i-product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  products: IProduct[] = [];

  constructor(private productService: ProductService) {
    this.products = this.productService.getAllProduct();
  }

  ngOnInit(): void {
  }

}
