import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication-service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  signUpForm:FormGroup;
  email:string;
  pass:string;
  rePass:string;

  constructor(
    //dependency injection 
    public authService: AuthenticationService,
    public router: Router
  ) {
    this.signUpForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      rePassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
   }

  ngOnInit() {
  }

  // SIGNUP WITH FIREBASE
  signUp(email, password) {
    this.authService.RegisterUser(email.value, password.value)
      .then((res =>{
        this.successSignUp();
        
      })).catch((error) => {
        window.alert(error.message)
      })
  }

  checkPassword(password,rePassword){
    if(password !== rePassword)
      return false;
    else 
      return true;
  }

  async successSignUp() :Promise<void>{
    await this.authService.SendVerificationEmail();
    await this.signUpForm.reset();
    await this.router.navigate(['verify-email']);
    await window.alert('Thêm thành công!')
  }
}
