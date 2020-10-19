import { Injectable } from '@angular/core';

import { Product } from '../models/product';
import { ProductType } from '../models/product-type';


@Injectable({
    providedIn: 'root'
})
export class OrderService{
    isCartChecked : boolean

    constructor(){
        this.isCartChecked=true;
    }

    CartChecked(){
        this.isCartChecked=true;
        console.log('cart checked: '+this.isCartChecked);
    }

    CartNotChecked(){
        this.isCartChecked=false;
        console.log('cart checked: '+this.isCartChecked);
    }

}