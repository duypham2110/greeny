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

    productTypeList: AngularFireList<any>;
    productType: AngularFireObject<any>;

    collectionList: AngularFireList<any>;
    collection: AngularFireObject<any>;

    private _products = new BehaviorSubject<Product[]>([]);
    searchedItem: any;

    get product() {
        return this._products.asObservable();
    }



    private products: Product[];

    constructor(
        private http: HttpClient,
        private db: AngularFireDatabase) {
        this.searchedItem = this.products;
        this.productList = this.getProducts();

    }

    // ===Product===

    getProducts() {
        this.productList = this.db.list('/product');
        return this.productList;
    }

    getProduct(id: string) {
        this.product1 = this.db.object('/product/' + id);
        // console.log(id);
        // console.log(this.product1);
        return this.product1;
    }

    updateProduct(id, prd: Product) {
        return this.product1.update({
            name: prd.name,
            productType: prd.productType,
            price: prd.price,
            description: prd.description,
            madeIn: prd.madeIn
        })
    }

    deleteProduct(id: string) {
        this.product1 = this.db.object('/product/' + id);
        this.product1.remove();
    }

    // ===Product Type===

    getProductTypes() {
        this.productList = this.db.list('/productType');
        return this.productList;
    }

    getProductType(id: string) {
        this.productType = this.db.object('/productType/' + id);
        console.log(id);
        console.log(this.productType);
        return this.productType;
    }

    // ===Collection===

    getCollectionList() {
        this.collectionList = this.db.list('/collection');
        return this.collectionList;
    }

    getCollection(id: string) {
        this.collection = this.db.object('/collection/' + id);
        console.log(id);
        console.log(this.collection);
        return this.collection;
    }
}