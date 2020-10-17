import { Injectable } from '@angular/core';

import { Product } from '../models/product';
import { ProductType } from '../models/product-type';

import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';
import { take, map, tap, delay, switchMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    private _products = new BehaviorSubject<Product[]>([]);
    get product() {
      return this._products.asObservable();
    }
    private productTypes: ProductType[] = [
        {
            id: '1',
            name: 'vegetable',
            images: ['https://img1.mashed.com/img/uploads/2017/07/vegetables.jpg']
        },
        {
            id: '2',
            name: 'fruit',
            images: ['https://upload.wikimedia.org/wikipedia/commons/2/2f/Culinary_fruits_front_view.jpg']
        },
    ]
    private products: Product[] = [
        {
            id: 'v1',
            type: 'vegetable',
            name: 'carrot',
            price: '40.000đ',
            images: ['https://i5.walmartimages.ca/images/Enlarge/686/686/6000198686686.jpg'],
            quantity: 100
        },
        {
            id: 'v2',
            type: 'vegetable',
            name: 'potato',
          price: '32.000đ',
            images: ['https://api.time.com/wp-content/uploads/2020/04/Boss-Turns-Into-Potato.jpg'],
            quantity: 10
        },
        {
            id: 'v3',
            type: 'vegetable',
            name: 'tomato',
            price: '84.000đ',
            images: ['https://upload.wikimedia.org/wikipedia/commons/a/a2/Tomato.jpg'],
            quantity: 13120
        },
        {
            id: 'v4',
            type: 'vegetable',
            name: 'corn',
            price: '92.000đ',
            images: ['http://bayaderae.com/wp-content/uploads/2013/02/Corn.jpg'],
            quantity: 100
        },
        {
            id: 'v5',
            type: 'vegetable',
            name: 'pumpkin',
            price: '13.000đ',
            images: ['https://gamepedia.cursecdn.com/dayz_gamepedia/6/64/Pumpkin.png'],
            quantity: 100
        },
        {
            id: 'f1',
            type: 'fruit',
            name: 'apple',
            price: '24.000đ',
            images: ['https://mccutcheonsblog.files.wordpress.com/2011/09/red_delicious_apple.jpg'],
            quantity: 100
        },
        {
            id: 'f2',
            type: 'fruit',
            name: 'banana',
            price: '55.000đ',
            images: ['https://www.pharmamirror.com/wp-content/uploads/2013/06/Banna-as-Hepatitis-Oral-Vaccine.jpg'],
            quantity: 10
        },
        {
            id: 'f3',
            type: 'fruit',
            name: 'watermelon',
            price: '70.000đ',
            images: ['https://all-americaselections.org/wp-content/uploads/2019/06/Watermelon-Mambo.jpg'],
            quantity: 13120
        },
        {
            id: 'f4',
            type: 'fruit',
            name: 'strawberry',
            price: '50.000đ',
            images: ['https://gamepedia.cursecdn.com/atlas_gamepedia_en/6/6d/Strawberry.png'],
            quantity: 100
        },
        {
            id: 'f5',
            type: 'fruit',
            name: 'grapes',
            price: '90.000đ',
            images: ['https://gamepedia.cursecdn.com/atlas_gamepedia_en/6/6d/Strawberry.png'],
            quantity: 100
        }
    ];

    constructor(private http:HttpClient) {}

    getProducts() {
        /// ...syntax means return the copy of the array but not the array itself ???
        return [...this.products];
    }

    getProduct(id: string) {
        /// ...syntax means return the copy of the array but not the array itself ???
        return {...this.products.find(product => {
            return product.id === id;
        })};
    }

    getProductTypes(){
        return [...this.productTypes];
    }

    getProductType(id: string) {
        /// ...syntax means return the copy of the array but not the array itself ???
        return {...this.productTypes.find(productTypes => {
            return id === productTypes.id;
        })};
    }
}