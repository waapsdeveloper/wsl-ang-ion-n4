import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../base-page/base-page';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends BasePage {

  loginForm: FormGroup;
  selection: string = ''

  constructor(injector: Injector, private fb: FormBuilder) {
    super(injector);

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  handleChange($event: any){
    let v = $event.detail.value;
    console.log(v);

    if(this.selection == 'buyer') {
      this.loginForm.controls['email'].setValue('wisebuyer01@gmail.com');
      this.loginForm.controls['password'].setValue('123456')
    } else {
      this.loginForm.controls['email'].setValue('wisefreelancer01@gmail.com');
      this.loginForm.controls['password'].setValue('123456')
    }

  }


  async onLogin() {
    if (this.loginForm.valid) {
      // Handle login logic here
      console.log('Login attempt', this.loginForm.value);
      // Navigate to a different page if successful

      const res = await this.users.login(this.loginForm.value) as any
      console.log(res);

      if(res){
        if(res.is_employer == 1){
          this.nav.push('/buyer-dashboard');
        } else
        if(res.is_freelancer == 1) {
          this.nav.push('/seller-dashboard');
        }
      }



    }
  }

}
