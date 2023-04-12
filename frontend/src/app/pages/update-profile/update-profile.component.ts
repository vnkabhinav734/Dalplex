/*Author: Sumit Kumar B00904097*/
import { ProfileService } from './../../services/profile.service';
import { CoreService } from './../../services/core.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserProfile } from 'src/app/interfaces/UserProfile';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  profileForm!: FormGroup;
  userProfile!: any;
  isProfileAvailable!: boolean;

  constructor(private formBulder: FormBuilder, private coreService: CoreService, private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileForm = this.formBulder.group({
      firstname: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z]+$')])],
      lastname: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z]+$')])],
      email: ['', Validators.email],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      about: ['', [Validators.required]],
      sex: ['', [Validators.required]]
    });

    this.profileForm.disable();
    this.getProfiledata();
  }

  getProfiledata() {
    this.profileService.getProfile().subscribe((data: any) => {
      const profile = data.filter((item: any) => item.userid === localStorage.getItem('userid'));
      this.isProfileAvailable = profile[0] != undefined && profile[0].firstname != undefined;
      if(this.isProfileAvailable){
        this.userProfile = profile[0];
        this.profileForm.patchValue({
          firstname: profile[0].firstname,
          lastname: profile[0].lastname,
          email: profile[0].email,
          phone: profile[0].phone,
          address: profile[0].address,
          dob: profile[0].dob,
          about: profile[0].about,
          sex: profile[0].sex,
        });
      }
    });
  }

  onEdit() {
    this.profileForm.enable();
  }

  onSubmit() {
    this.profileForm.disable();
    const data = {
      userid: localStorage.getItem('userid'),
      firstname: this.profileForm.get('firstname')?.value,
      lastname: this.profileForm.get('lastname')?.value,
      email: this.profileForm.get('email')?.value,
      phone: this.profileForm.get('phone')?.value,
      address: this.profileForm.get('address')?.value,
      dob: this.profileForm.get('dob')?.value,
      sex: this.profileForm.get('sex')?.value,
      about: this.profileForm.get('about')?.value,
    };
    if(this.isProfileAvailable) {
      this.profileService.updateProfile(this.userProfile._id, data).subscribe((data: any) => {
        this.coreService.showSnackBar("Profile updated successfully", "ok");
      });
    }else{
      this.profileService.createProfile(data).subscribe((data: any) => {
        this.coreService.showSnackBar("Profile created successfully", "ok");
      });
    }
  }

}
