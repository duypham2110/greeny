import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication-service';
import { ProductService } from '../../services/product-service';
import { Product } from '../../models/product';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  loadedProduct: Product;
  imgUrl: string;
  constructor(
    //Dependency Injection
    private authService: AuthenticationService,
    private activatedRoute: ActivatedRoute,
    private pdService: ProductService
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(paramMap => {
      const id = paramMap.id;
      this.loadedProduct = this.pdService.getProduct(id);
      this.imgUrl = this.loadedProduct.images[0];
    });
  }
}
