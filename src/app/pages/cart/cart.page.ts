import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { OrderService } from 'src/app/services/order-service';
import { ProductService } from 'src/app/services/product-service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  c: any;
  public a: any;
  rs= [];
  user: any;
  cart: any;
  products: any;
  sum: any;
  constructor(
    private route: Router,
    public pdService: ProductService,
  ) { 
  }

  ngOnInit() {
    
    
  }

  ionViewWillEnter(){
    this.loadProducts();
    JSON.parse(localStorage.getItem('user'))==null?this.user={uid:'tempCart'}:this.user=JSON.parse(localStorage.getItem('user'))

    this.cart = JSON.parse(localStorage.getItem(this.user.uid)).products;
    console.log(this.cart);
    for(let i =0;i<this.cart.length;i++){
      for(let j = 0;j<this.loadCartProduct(this.cart[i]).length;j++){
        console.log(this.loadCartProduct(this.cart[i]));
      }   
    }

  }

  loadProducts() {
    let temp = this.pdService.getProducts();
    temp.snapshotChanges().subscribe(res => {
      this.products = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.products.push(a as Product);
      })
      console.log('product loaded')
      return this.products;
      console.log(this.products);
    })
    return this.products;
    console.log(this.products);
  }

  openHome() {
    this.route.navigate(['tabs/home']);
  }

  //===BUG===
  loadCartProduct(products) {
    const idsArray = Object.keys(products).map(product => {
      return { id: products[product]}
    });

    let rs = [];

    idsArray.forEach(item => {
      this.products.find(product => {
        if (product.$key == item.id)
        {
          rs.push(product);
        }
      })
    })
    return rs;
  }

  Purchase(){
    let getItemLocalStorage = JSON.parse(localStorage.getItem(this.user.uid));
    getItemLocalStorage=null;
    localStorage.setItem(this.user.uid, JSON.stringify(getItemLocalStorage));
    
    this.user=null;
    this.cart=null;
    this.products=null;
    this.ionViewWillEnter();
  }
  
  Sum(){
    console.log(this.cart);
    
  }

}
