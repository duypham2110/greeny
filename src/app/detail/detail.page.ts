import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication-service';


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
    public authService: AuthenticationService
  ) {}

  ngOnInit() {
  }

}
