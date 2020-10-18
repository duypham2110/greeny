import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.page.html',
  styleUrls: ['./bill.page.scss'],
})
export class BillPage implements OnInit {

  arrayItem = ["Tất cả đơn", "Chờ thanh toán", "Đang xử lý", "Đang giao", "Đã giao", "Đã hủy"];

  sliderConfig = {
    spaceBetween: 2,
    slidesPerView: 3.4
  }


  constructor(public router: Router) { }

  ngOnInit() {
  }

  openDetailBill() {
    this.router.navigate(['tabs/detail-bill']);
  }

  openCart() {
    this.router.navigate(['tabs/cart']);
  }


}
