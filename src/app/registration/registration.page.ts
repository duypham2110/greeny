import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication-service';
import { LocalStorageService } from '../../services/localstorage-service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(
    //dependency injection 
    public authService: AuthenticationService,
    public router: Router,
    public local: LocalStorageService
  ) { }

  ngOnInit() {
  }

  // SIGNUP WITH FIREBASE
  signUp(email, password) {
    this.authService.RegisterUser(email.value, password.value)
      .then((res) => {
        window.alert('Thêm thành công!')
        this.router.navigate(['login']);
      }).catch((error) => {
        window.alert(error.message)
      })
  }
}
