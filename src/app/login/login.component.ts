import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
LoginForm: FormGroup;
  constructor(private check: FormBuilder) {
    this.newForm();
   }

   newForm() {
     this.LoginForm = this.check.group({
       emailid: ['', Validators.compose([Validators.required, Validators.pattern('[^ @]*@[^ @]*')])],
       password: ['', Validators.compose([Validators.required])]
      });
   }

   onLoginSubmit() {
    if (this.LoginForm.valid) {
      console.log('Login Successful' );
      // this.newService.fetchData(this.heroForm.value);
    }
  }

  ngOnInit() {
  }

}
