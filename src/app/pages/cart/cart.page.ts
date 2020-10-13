import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  productTypes;

  constructor(
    public pdService: ProductService
  ) {
    this.productTypes = pdService.getProductTypes();
  }
  ngOnInit() { }
}
