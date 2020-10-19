import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { AuthenticationService } from '../../services/authentication-service';
import { IonSearchbar } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { OrderService } from 'src/app/services/order-service';

import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})

export class ProductsPage implements OnInit {
  @ViewChild('search', { static: false }) search: IonSearchbar;
  currentImage: any;
  products: any;
  productTypes;
  private searchedItem: any;


  listItem = ["Khuyến mãi", "Bán chạy", "Rau củ", "Trái cây", "Gợi ý cho bạn", "Thực phẩm khác"];


  constructor(
    public authService: AuthenticationService,
    public pdService: ProductService,
    public toastController: ToastController,
    public route: Router
  ) {
  }

  ngOnInit() {
    this.fetchProductList();
    let temp = this.pdService.getProducts();
    temp.snapshotChanges().subscribe(res => {
      this.products = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.products.push(a as Product);
      })
      console.log(this.products);
    })
    this.searchedItem = this.products;
    this.productTypes = this.pdService.getProductTypes();
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.search.setFocus();
    })
  }

  viewDetail(item) {
    console.log(item);
    this.route.navigate(['tabs/detail'], {
      queryParams: item,
    });
  }
  
  fetchProductList() {
    this.pdService.getProducts().valueChanges().subscribe(res => {
      this.searchedItem=this.products;
    })
  }

  /**
   * Tìm kiếm danh sách sản phẩm trong products
   * @param event | String
   */
  _searchChange(event) {
    const val = event.target.value;
    this.searchedItem = this.products;
    if (val && val.trim() != '') {
      this.searchedItem = this.searchedItem.filter((item: any) => {
        console.log(item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
