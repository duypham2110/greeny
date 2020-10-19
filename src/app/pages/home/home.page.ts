import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication-service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ProductService } from '../../services/product-service';

import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})




export class HomePage {
  currentImage: any;
  products;
  productTypes;
  searchedItem: any;

  object = {
    name: 'subham',
    age: '34',
    address: '34 street, Delhi, India'
  }

  arrayItem = ["Khuyến mãi", "Bán chạy", "Rau củ", "Trái cây", "Gợi ý cho bạn", "Thực phẩm khác"];

  sliderConfig = {
    spaceBetween: 5,
    slidesPerView: 2.25
  }

  constructor(
    public authService: AuthenticationService,
    public pdService: ProductService,
    public route: Router
  ) {}

  ngOnInit() {
    let temp = this.pdService.getProducts();
    temp.snapshotChanges().subscribe(res => {
      this.products = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.products.push(a as Product);
      })
      this.searchedItem = this.products;
    })
    this.productTypes = this.pdService.getProductTypes();
    
   }

  openProducts() {
    this.route.navigate(['tabs/products']);
  }

  viewDetail(item) {
    this.route.navigate(['tabs/detail'], {
      queryParams: item,
    });
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

  fetchProductList() {
    this.pdService.getProducts().valueChanges().subscribe(res => {
      console.log(res)
    })
  }

}
