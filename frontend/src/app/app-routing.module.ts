/*  
  Author: Sumit Kumar B00904097
  ModifiedBy: Other Team Members
*/
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './pages/cart/cart-page/cart-page.component';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';
import { PaymentCompleteComponent } from './pages/payment-complete/payment-complete.component';

import { UserLandingPageComponent } from './pages/user-landing-page/user-landing-page.component';
import { TournamentsComponent } from './pages/tournaments/tournaments.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SportsCategoryComponent } from './pages/sports-category/sports-category.component';
import { SportsCategoryDetailComponent } from './pages/sports-category-detail/sports-category-detail.component';
import { BookingComponent } from './pages/booking/booking.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { UpcomingBookingsComponent } from './pages/upcoming-bookings/upcoming-bookings.component';
import { FacilitiesComponent } from './pages/facilities/facilities.component';
import { TournamentrankingsComponent } from './pages/tournamentrankings/tournamentrankings.component';
import { TournamentmatchesComponent } from './pages/tournamentmatches/tournamentmatches.component';
import { TournamentleaguesComponent } from './pages/tournamentleagues/tournamentleagues.component';
import { TournamentfindteamComponent } from './pages/tournamentfindteam/tournamentfindteam.component';
import { FacilitycalendarComponent } from './pages/facilitycalendar/facilitycalendar.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: 'categories', component: SportsCategoryComponent, canActivate: [AuthGuard]},
  { path: 'categories/:id', component: SportsCategoryDetailComponent, canActivate: [AuthGuard]},
  { path: 'booking/:id', component: BookingComponent, canActivate: [AuthGuard] },
  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: UserRegistrationComponent },
  { path: 'upComingBookings', component: UpcomingBookingsComponent, canActivate: [AuthGuard] },
  { path: 'landing', component: UserLandingPageComponent },
  { path: 'facilities', component: FacilitiesComponent, canActivate: [AuthGuard] },
  { path: 'trank', component: TournamentrankingsComponent, canActivate: [AuthGuard] },
  { path: 'tmatch', component: TournamentmatchesComponent, canActivate: [AuthGuard] },
  { path: 'tleague', component: TournamentleaguesComponent, canActivate: [AuthGuard] },
  { path: 'tfiteam', component: TournamentfindteamComponent, canActivate: [AuthGuard] },
  { path: 'tournaments', component: TournamentsComponent, canActivate: [AuthGuard] },
  { path: 'facalendar/:id', component: FacilitycalendarComponent , canActivate: [AuthGuard]},
  { path: 'cart-page', component: CartPageComponent, canActivate: [AuthGuard] },
  { path: 'payment-page', component: PaymentPageComponent, canActivate: [AuthGuard] },
  { path: 'payment-complete/:id', component: PaymentCompleteComponent, canActivate: [AuthGuard] },
  { path:'resetpassword', component:ForgotPasswordComponent },
  { path: 'about', component: AboutUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
