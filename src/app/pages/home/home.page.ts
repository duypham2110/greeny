import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication-service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ProductService } from '../../services/product-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  currentImage: any;
  products;
  productTypes;
  searchedItem: any;

  arrayItem = ["Khuyến mãi", "Bán chạy", "Rau củ", "Trái cây", "Gợi ý cho bạn", "Thực phẩm khác"];

  sliderConfig = {
    spaceBetween: 5,
    slidesPerView: 2.25
  }

  constructor(
    public authService: AuthenticationService,
    public camera: Camera,
    public pdService: ProductService,
    public route: Router
  ) {
    this.products = pdService.getProducts();
    this.productTypes = pdService.getProductTypes();
    this.searchedItem = this.products;
  }

  ngOnInit() { }

  openProducts() {
    this.route.navigate(['tabs/products']);
  }

  openDetail(name) {
    if (name == this.products[0].name) {
      this.route.navigate(['tabs/detail']);
    }
  }

  /**
   * Tìm kiếm danh sách sản phẩm trong products
   * @param event | String
   */
  _searchChange(event) {
    const val = event.target.value;
    this.searchedItem = this.products;
    if (val && val.trim() != '') {
      this.searchedItem = this.searchedItem.filter((item: any) => {
        console.log(item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }

  }

  // takePicture() {
  //   const options: CameraOptions = {
  //     quality: 100,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE
  //   };

  //   this.camera.getPicture(options).then((imageData) => {
  //     this.currentImage = 'data:image/jpeg;base64,' + imageData;
  //   }, (err) => {
  //     // Handle error
  //     console.log("Camera issue:" + err);
  //   });
  // }

}
