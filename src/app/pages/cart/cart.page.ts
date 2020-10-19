import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order-service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  
  constructor(
    private route: Router,
  ) { 
  }

  ngOnInit() {
  }
  openHome() {
    this.route.navigate(['tabs/home']);
  }

}
