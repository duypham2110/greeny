import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { AuthenticationService } from '../../services/authentication-service';
import { IonSearchbar } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { OrderService } from 'src/app/services/order-service';

import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductType } from 'src/app/models/product-type';
import { Collection } from 'src/app/models/collection';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})

export class ProductsPage implements OnInit {
  @ViewChild('search', { static: false }) search: IonSearchbar;
  currentImage: any;
  products: any;
  productTypes: any;
  searchedItem: any;
  collections;

  // listItem = ["Khuyến mãi", "Bán chạy", "Rau củ", "Trái cây", "Gợi ý cho bạn", "Thực phẩm khác"];

  constructor(
    public authService: AuthenticationService,
    public pdService: ProductService,
    public toastController: ToastController,
    public route: Router
  ) {
  }

  ngOnInit() {
    this.loadProducts();
    this.loadCollections();
    this.loadProductTypes();
    this.loadProducts();
  }
   loadProductTypes(){
    let temp = this.pdService.getProductTypes();
    temp.snapshotChanges().subscribe(res => {
      this.productTypes = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.productTypes.push(a as ProductType);
      })
    })
   }

   loadProductsFromType(products){
    console.log('load')
     console.log(products)
    const idsArray = Object.keys(products).map(product => {
      return {productType: products[product]} 
    });

    let rs=[];

    idsArray.forEach(item => {
      this.products.find(product=>{
      if(product.productType==item.productType)
        rs.push(product);
      })
    })
    console.log('rs');
    console.log(rs);
    return rs;
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
      this.searchedItem = this.products;
    })
    console.log(this.searchedItem);
  }

  // loadProducts(){
  //   let temp = this.pdService.getProducts();
  //   temp.snapshotChanges().subscribe(res => {
  //     this.products = [];
  //     res.forEach(item => {
  //       let a = item.payload.toJSON();
  //       a['$key'] = item.key;
  //       this.products.push(a as Product);
  //     })
  //     this.searchedItem = this.products
  //   }) 
  //  }

  loadCollections() {
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
  loadProductsCollection(products) {
    const idsArray = Object.keys(products).map(product => {
      return { id: products[product] }
    });

    let rs = [];

    idsArray.forEach(item => {
      this.products.find(product => {
        if (product.$key == item.id)
          rs.push(product);
      })
    })
    console.log(rs);
    return rs;
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.search.setFocus();
    })
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
}
