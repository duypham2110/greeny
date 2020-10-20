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
  loadedProduct: any;
  imgUrl: string;
  constructor(
    //Dependency Injection
    private authService: AuthenticationService,
    private activatedRoute: ActivatedRoute,
    private pdService: ProductService
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(paramMap => {
      const $key = paramMap.$key;
      let temp = this.pdService.getProduct($key);
      temp.snapshotChanges().subscribe(item => {
        {
          this.loadedProduct = item.payload.toJSON();
          console.log('tao = '+this.loadedProduct);
        }
      })
    });
  }
}
