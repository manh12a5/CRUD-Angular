import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {IProduct} from '../i-product';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  sub: Subscription | any;
  id: any;
  product: IProduct = {
    id: 0,
    name: 'Demo1',
    description: 'Demo mt 1'
  };

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private productService: ProductService) {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.product = this.productService.getProductById(this.id);
    });
  }

  // tslint:disable-next-line:typedef
  save(){
    this.productService.save(this.id, this.product);
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}
