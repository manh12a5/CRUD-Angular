import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {IProduct} from '../i-product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  product: IProduct = {
    id: 0,
    name: '',
    description: ''
  };

  constructor(private productService: ProductService, private router: Router) { }

  // tslint:disable-next-line:typedef
  addNewProduct() {
    this.productService.addNewProduct(this.product);
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}
