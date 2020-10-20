import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.page.html',
  styleUrls: ['./detail-product.page.scss'],
})
export class DetailProductPage implements OnInit {
  loadedProduct: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private pdService: ProductService
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(paramMap => {
      const $key = paramMap.$key;
      let temp = this.pdService.getProduct($key);
      temp.snapshotChanges().subscribe(item => {{
        this.loadedProduct = item.payload.toJSON();
        console.log(this.loadedProduct);
      }
      })
    });
  }

}
