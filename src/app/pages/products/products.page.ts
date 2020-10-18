import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { AuthenticationService } from '../../services/authentication-service';
import { IonSearchbar } from '@ionic/angular';
@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  @ViewChild('search',{static:false}) search:IonSearchbar;
  currentImage: any;
  products: any;
  productTypes;
  private searchedItem: any;
  
// =======
//   listItem = ["Khuyến mãi", "Bán chạy", "Rau củ", "Trái cây", "Gợi ý cho bạn", "Thực phẩm khác"];
// >>>>>>> dev
  
  constructor(
    public authService: AuthenticationService,
    public pdService: ProductService
  ) {
    this.products = pdService.getProducts();
    this.searchedItem=this.products;
    this.productTypes = pdService.getProductTypes();
  }

  ngOnInit() {
  }
  ionViewDidEnter() {
    setTimeout(() => {
      this.search.setFocus();
    })
  }
  _searchChange(event)
  {
    const val=event.target.value;
    this.searchedItem = this.products;
    if(val&&val.trim()!='')
    { 
      this.searchedItem=this.searchedItem.filter((item:any) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase())> -1);
      })
    }

  }

}
