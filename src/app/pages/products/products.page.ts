import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { AuthenticationService } from '../../services/authentication-service';
@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  currentImage: any;
  products: any;
  productTypes;

  listItem = ["Khuyến mãi", "Bán chạy", "Rau củ", "Trái cây", "Gợi ý cho bạn", "Thực phẩm khác"];

  constructor(
    public authService: AuthenticationService,
    public pdService: ProductService
  ) {
    this.products = pdService.getProducts();
    this.productTypes = pdService.getProductTypes();
  }

  ngOnInit() {
  }

}
