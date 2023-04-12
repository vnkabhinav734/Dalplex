import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/services/core.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  public registrationForm!: FormGroup;
  hide = true;
  userExists=false;

  constructor(private router: Router, private formBuilder: FormBuilder, private snackBar: CoreService, private userService: UserService) { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup(
      {
        firstname: new FormControl('', [Validators.pattern('^([A-Za-z]*)$'), Validators.required]),
        lastname: new FormControl('', [Validators.pattern('^([A-Za-z]*)$'), Validators.required]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        confirmpassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
        email: new FormControl('', [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'), Validators.required, Validators.email]),
      },
    )
  }

  onRegister() {
     if (this.registrationForm.value.password == this.registrationForm.value.confirmpassword) {
      this.userExists = false;
      const userDetails = {
        'firstname': this.registrationForm.value.firstname,
        'lastname': this.registrationForm.value.lastname,
        'email': this.registrationForm.value.email,
        'password': this.registrationForm.value.password
      };
      this.userService.register(userDetails).subscribe((data: any) => {
        this.snackBar.showSnackBar("registered successfully");
        this.router.navigateByUrl('/login');
      }, (err: HttpErrorResponse) => {
        console.log(err);
        if(err.error.message.includes('E11000 duplicate key error'))
        {
          this.userExists=true
        }
        this.snackBar.showSnackBar("Registration Failed!!")
      });
     }
     else{
      this.snackBar.showSnackBar("Passwords does not match!!")
     }
  }

}
