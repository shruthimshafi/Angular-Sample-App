import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {
  RegistrationForm: FormGroup;

  branch = ['Electronics and Communication', 'Electrical Engineering', 'Mechanical Engineering', 'Computer Science' ];
  constructor(private fb: FormBuilder) {
    this.createForm();
   }

   createForm() {
     this.RegistrationForm = this.fb.group({
       name: ['', Validators.compose([Validators.required, Validators.minLength(4)])] ,
       address: this.fb.group({
        street: ['',  Validators.compose([Validators.required])],
        city: ['',  Validators.compose([Validators.required])],
        state: ['',  Validators.compose([Validators.required])],
        zip: ['',  Validators.compose([Validators.required])],
       }),

       email: ['',  Validators.compose([Validators.required, Validators.pattern('[^ @]*@[^ @]*')])],
       branch: ['', Validators.compose([Validators.required])],
       gender: ['',  Validators.compose([Validators.required])],
       terms: ['',  Validators.compose([Validators.required])]
     });
   }
   onSubmit() {
    if (this.RegistrationForm.valid) {
      console.log('Form Submitted!' );
      // this.newService.fetchData(this.heroForm.value);
    }
  }
  ngOnInit() {
  }

}
