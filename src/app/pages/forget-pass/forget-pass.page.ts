import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication-service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.page.html',
  styleUrls: ['./forget-pass.page.scss'],
})
export class ForgetPassPage implements OnInit {
  email:string;

  constructor(public authService:AuthenticationService,public router:Router) { }

  ngOnInit() {
  }

  async sendPasswordReset(){
    this.router.navigate(['tabs/verify-email']);
    await this.authService.RecoverPassword(this.email);
    this.email = await '';
    await alert(this.authService.mess);
  }

  backLogin(){
    this.router.navigate(['tabs/login']);
  }

}
