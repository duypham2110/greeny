import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order-service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  isCartChecked:boolean;

  constructor(
    public orderService: OrderService
    ) { 
      this.isCartChecked=orderService.isCartChecked;
    }

  CartChecked(){
    this.orderService.CartChecked();
    this.isCartChecked=this.orderService.isCartChecked;  
  }

  ngOnInit() {
  }

}
