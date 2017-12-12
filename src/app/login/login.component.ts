import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { ActivatedRoute } from '@angular/router/src/router_state';
import { AuthenticationService} from '../service/authentication.service'
import { User } from '../user'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
// LoginForm: FormGroup;
  // constructor(private check: FormBuilder) {
  //   this.newForm();
  //  }

  //  newForm() {
  //    this.LoginForm = this.check.group({
  //      emailid: ['', Validators.compose([Validators.required, Validators.pattern('[^ @]*@[^ @]*')])],
  //      password: ['', Validators.compose([Validators.required])]
  //     });
  //  }

  //  onLoginSubmit() {
  //   if (this.LoginForm.valid) {
  //     console.log('Login Successful' );
  //     // this.newService.fetchData(this.heroForm.value);
  //   }
  // }

  // ngOnInit() {
  // }
model: any = {};
loading = false;
returnUrl: string;

constructor(
  private route: ActivatedRoute,
  private router: Router,
  private authenticationService: AuthenticationService,
  // private alertService: AlertService
) {}

ngOnInit(){
  //reset login status
  this.authenticationService.logout();

  // get return url from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
}
login (){
  this.loading= true;
  this.authenticationService.login(this.model.username,this.model.password)
  .subscribe(
    data => {
      this.router.navigate([this.returnUrl]);
    }
    // error =>{
    //   this.alertService.error(error);
    //   this.loading = false;
    // });
  );
 }
}

