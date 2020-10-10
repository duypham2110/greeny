import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication-service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currentImage: any;
  products;
  productTypes;

  constructor(
    public authService: AuthenticationService,
    public camera: Camera,
    public pdService: ProductService
  ) { 
    this.products = pdService.getProducts();
    this.productTypes = pdService.getProductTypes();

  }

  add(){
    this.pdService.addPlace('v1',
      'vegetable',
       'carrot',
       100,
       'https://i5.walmartimages.ca/images/Enlarge/686/686/6000198686686.jpg',
       100);
    
    console.log('add');
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
