import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-bill',
  templateUrl: './detail-bill.page.html',
  styleUrls: ['./detail-bill.page.scss'],
})
export class DetailBillPage implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  detailBill() {
    this.router.navigate(['tabs/bill']);
  }
}
