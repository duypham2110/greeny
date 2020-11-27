import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication-service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ProductService } from '../../services/product-service';

import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { Collection } from 'src/app/models/collection';
import { ProductType } from 'src/app/models/product-type';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  productTypes: any;
  products: any;
  collections: any;

  currentImage: any;
  veggies;
  fruits;
  searchedItem: any;

  arrayItem = ["Bán chạy", "Gợi ý cho bạn", "Thực phẩm khác"];

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
    this.loadProducts();
    this.loadCollections();
    this.loadProductTypes();    
   }

   loadProducts(){
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
   }

   loadProductTypes(){
    // this.productTypes = this.pdService.getProductTypes();
    let temp = this.pdService.getProductTypes();
    temp.snapshotChanges().subscribe(res => {
      this.productTypes=[];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.productTypes.push(a as ProductType);
      })
    })
   }

   loadCollections(){
    let temp = this.pdService.getCollectionList();
    temp.snapshotChanges().subscribe(res => {
      this.collections = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.collections.push(a as Collection);
      })
    })
   }   

   // Change Producst Ids in collection to product json
   loadProductsCollection(products){
    const idsArray = Object.keys(products).map(product => {
      return {id: products[product]} 
    });

    let rs=[];

    idsArray.forEach(item => {
      this.products.find(product=>{
      if(product.$key==item.id)
        rs.push(product);
      })
    })
    return rs;
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
    this.products = this.searchedItem;
    if (val && val.trim() != '') {
      this.products = this.products.filter((item: any) => {
        // console.log(item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }

  }

  addTocart(){
    console.log('add');
  }
}
