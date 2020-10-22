import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication-service';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.page.html',
  styleUrls: ['./my-info.page.scss'],
})
export class MyInfoPage implements OnInit {

  userData: object | null;
  email: any | null;
  phoneNumber: any;
  photo: any | null;
  name: string | null;

  constructor(
    public authService: AuthenticationService,
    public route: Router
  ) { }

  ngOnInit() {
    console.log(this.userData);
  }

  ionViewDidEnter() {
    if (firebase.auth().currentUser === null) {
      this.route.navigate(['tabs/login'])
    }
    this.userData = firebase.auth().currentUser;
    this.email = firebase.auth().currentUser.email;
    this.phoneNumber = firebase.auth().currentUser.phoneNumber;
    this.photo = firebase.auth().currentUser.photoURL;
    this.name = firebase.auth().currentUser.displayName;
  }

}
