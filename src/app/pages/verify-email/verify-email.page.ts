import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss'],
})
export class VerifyEmailPage implements OnInit {

  constructor(authService: AuthenticationService) {
    
   }

  ngOnInit() {
    
  }

}