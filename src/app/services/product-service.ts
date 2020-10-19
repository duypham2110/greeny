import { Injectable } from '@angular/core';

import { Product } from '../models/product';
import { ProductType } from '../models/product-type';

import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';

// Import Firebase
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';


@Injectable({
    providedIn: 'root'
})

export class ProductService {

    productList: AngularFireList<any>;
    product1: AngularFireObject<any>;

    private _products = new BehaviorSubject<Product[]>([]);
    searchedItem: any;

    get product() {
        return this._products.asObservable();
    }

    private productTypes: ProductType[] = [
        {
            id: '1',
            name: 'Rau củ',
            images: ['https://img1.mashed.com/img/uploads/2017/07/vegetables.jpg']
        },
        {
            id: '2',
            name: 'Trái cây',
            images: ['https://upload.wikimedia.org/wikipedia/commons/2/2f/Culinary_fruits_front_view.jpg']
        },
    ]

    private products: Product[];

    constructor(
        private http: HttpClient,
        private db: AngularFireDatabase) {
        this.searchedItem = this.products;
        this.productList = this.getProducts();

    }


    getProducts() {
        this.productList = this.db.list('/product');
        return this.productList;
    }
    
    getProduct(id: string) {
        this.product1 = this.db.object('/product/'+id);
        console.log(id);
        console.log(this.product1);
        return this.product1;
    }

    updateProduct(id, prd: Product){
        return this.product1.update({
          name: prd.name,
          productType: prd.productType,
          price: prd.price,
          description: prd.description,
          madeIn: prd.madeIn
        })
      }
      
      deleteProduct(id: string){
        this.product1 = this.db.object('/product/'+id);
        this.product1.remove();
      }

    getProductTypes() {
        return [...this.productTypes];
    }

    getProductType(id: string) {
        /// ...syntax means return the copy of the array but not the array itself ???
        return {
            ...this.productTypes.find(productTypes => {
                return id === productTypes.id;
            })
        };
    }

}