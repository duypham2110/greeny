import { ProductType } from './product-type';

export interface Product {
    id: string;
    type: string;
    name: string;
    price: number;
    images: string;
    quantity: number;
    // donvi: enum;    
}