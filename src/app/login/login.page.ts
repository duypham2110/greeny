import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication-service';
import { ModalController } from '@ionic/angular';
import { User } from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userList: any;

  constructor(
    //Dependency Injection
    public authService: AuthenticationService,
    public router: Router,
    public modalController: ModalController
  ) {  }

  ngOnInit() {
  }

  logIn(email, password) {
    this.authService.SignIn(email.value, password.value)
      .then((res) => {
        this.router.navigate(['tabs']);
      }).catch((error) => {
        window.alert(error.message);
      })
  }

}
  // LOGIN WITH FIREBASE
  // logIn(email, password) {
  //   this.authService.SignIn(email.value, password.value)
  //     .then((res) => {
  //       this.router.navigate(['home']);
  //     }).catch((error) => {
  //       window.alert(error.message);
  //     })
  // }