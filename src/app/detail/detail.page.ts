import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication-service';
import { LocalStorageService } from '../../services/localstorage-service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  email: any;
  amount: any;

  constructor(
    //Dependency Injection
    public authService: AuthenticationService,
    public local: LocalStorageService,
  ) {
    this.email = this.local.currentUser[0].email;
    this.amount = this.local.currentUser[0].amount;
    console.log(this.email);
    console.log(this.amount);
  }

  ngOnInit() {
  }

}
