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
    this.imgUrl = "https://upload.wikimedia.org/wikipedia/commons/2/2f/Culinary_fruits_front_view.jpg";
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('id')) {
        return;
      }
      const id = paramMap.get('id');
      this.loadedProduct = this.pdService.getProduct(id);
      console.log(this.loadedProduct);
    });
  }
  changeImg(){
    this.imgUrl="https://upload.wikimedia.org/wikipedia/commons/2/2f/Culinary_fruits_front_view.jpg";
  }
  changeImg1(){
    this.imgUrl="https://i5.walmartimages.ca/images/Enlarge/686/686/6000198686686.jpg";
  }
}
