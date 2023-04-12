import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  loginForm!: FormGroup;
  hide: boolean = true;

  constructor(private router: Router, private userService: UserService,private snackBar: CoreService) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)])
      }
    )
  }

  onLogin() {
    this.userService.login(this.loginForm.get('email')?.value,this.loginForm.get('password')?.value).subscribe((data: any) => {
      if (data.message == 'OK') {
        localStorage.setItem('sessiontoken', data.token);
        localStorage.setItem('userid', data.id);
        localStorage.setItem('role', data.role);
        this.router.navigate(['/categories']);
      }
    }, (err: HttpErrorResponse) => {
      this.snackBar.showSnackBar("Enter the right credentials");
      console.log(err);
    });
  }

}
