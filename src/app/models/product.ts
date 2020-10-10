export class Product {
    constructor(
        public id: string,
        public type: string,
        public name: string,
        public price: number,
        public images: string[],
        public quantity: number
    ) { }
}

