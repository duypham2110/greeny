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
  user: any;
  loadedProduct: any;
  $key: any;
  constructor(
    //Dependency Injection
    public route: Router,
    private authService: AuthenticationService,
    private activatedRoute: ActivatedRoute,
    private pdService: ProductService,

  ) { }


  ngOnInit() {
    JSON.parse(localStorage.getItem('user'))==null?this.user={uid:'tempCart'}:this.user=JSON.parse(localStorage.getItem('user'))

    this.activatedRoute.queryParams.subscribe(paramMap => {
      this.$key = paramMap.$key;
      let temp = this.pdService.getProduct(this.$key);
      temp.snapshotChanges().subscribe(item => {
        {
          this.loadedProduct = item.payload.toJSON();
        }
      })
    });
  }

  openProducer() {
    this.route.navigate(['tabs/producer']);
  }

  // Them vo localStorage
  addToCart() {
    let getItemLocalStorage;


    getItemLocalStorage = JSON.parse(localStorage.getItem(this.user.uid));

    if (getItemLocalStorage === null) {
      getItemLocalStorage = {
        products: []
      }
    }

    let item = getItemLocalStorage.products.find(item => item.id == this.$key);

    if (item) {
      item.quantity += 1;
    } else {
      getItemLocalStorage.products.push({ id: this.$key, quantity: 1 });
    }

    console.log('Add to cart')
    console.log(getItemLocalStorage);

    localStorage.setItem(this.user.uid, JSON.stringify(getItemLocalStorage));
  }
}
