import { Injectable } from '@angular/core';
import {IProduct} from './i-product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: IProduct[] = [
    {
      id: 1,
      name: 'SP1',
      description: 'Mo ta SP1'
    },
    {
      id: 2,
      name: 'SP2',
      description: 'Mo ta SP2'
    },
    {
      id: 3,
      name: 'SP3',
      description: 'Mo ta SP3'
    }
  ];

  getAllProduct(): IProduct[] {
    return this.products;
  }

  // tslint:disable-next-line:typedef
  getProductById(id: number) {
    return this.products[id - 1];
  }

  // tslint:disable-next-line:typedef
  save(id: number, product: IProduct) {
    product = this.products[id - 1];
  }

  // tslint:disable-next-line:typedef
  addNewProduct(product: IProduct) {
    this.products.push(product);
  }

  // tslint:disable-next-line:typedef
  delete(id: number) {
    this.products.splice(id - 1);
  }

  constructor() { }

}
