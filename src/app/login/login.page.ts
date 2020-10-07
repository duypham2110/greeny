import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication-service';
import { LocalStorageService } from '../../services/localstorage-service';
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
    public local: LocalStorageService,
    public modalController: ModalController
  ) {
    this.userList = local.userData;
  }

  ngOnInit() {
  }

  logIn(email, password) {
    if (this.local.SignIn(email.value, password.value)) {
      this.router.navigate(['home']);
    } else {
      window.alert('Thất bại')
    }
  }

  delete(email, password) {
    if (this.local.deleteUser(email.value, password.value)) {
      this.userList = this.local.userData;
      window.alert('Đã xóa!')
    } else {
      window.alert('Nhập sai thông tin')
    }
  }

  showAll() {
    let msg = ''
    for (var i = 0; i < this.userList.length; i++) {
      msg += this.userList[i].email + '\r'
    }
    window.alert(msg)
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