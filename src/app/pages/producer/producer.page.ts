import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service';

import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-producer',
  templateUrl: './producer.page.html',
  styleUrls: ['./producer.page.scss'],
})
export class ProducerPage implements OnInit {
  products: any;

  constructor(
    public pdService: ProductService,
    public route: Router
  ) { }

  ngOnInit() {
    let temp = this.pdService.getProducts();
    temp.snapshotChanges().subscribe(res => {
      this.products = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.products.push(a as Product);
        console.log(this.products);
      })
      
    })
    console.log(this.products);
  }

  viewDetail(item) {
    this.route.navigate(['tabs/detail'], {
      queryParams: item,
    });
  }

}
