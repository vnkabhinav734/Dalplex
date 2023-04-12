/*  
  Author: Sumit Kumar B00904097
  ModifiedBy: Other Team Members
*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CurrencyPipe } from './pipes/currency.pipe';
import { MaskPipe } from './pipes/mask.pipe';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UpdateProfileComponent } from './pages/update-profile/update-profile.component';
import { MembershipComponent } from './pages/membership/membership.component';
import { BookingHistoryComponent } from './pages/booking-history/booking-history.component';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { PaymentMethodsComponent } from './pages/payment-methods/payment-methods.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddPaymentDialogComponent } from './pages/add-payment-dialog/add-payment-dialog.component';
import { SportsCategoryComponent } from './pages/sports-category/sports-category.component';
import { SportsCategoryDetailComponent } from './pages/sports-category-detail/sports-category-detail.component';
import { BookingComponent } from './pages/booking/booking.component';
import { AddCategoryDialogComponent } from './pages/add-category-dialog/add-category-dialog.component';
import { AddCourtDialogComponent } from './pages/add-court-dialog/add-court-dialog.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { UpcomingBookingsComponent } from './pages/upcoming-bookings/upcoming-bookings.component';
import { UserLandingPageComponent } from './pages/user-landing-page/user-landing-page.component';
import { FacilitiesComponent } from './pages/facilities/facilities.component';
import { TournamentrankingsComponent } from './pages/tournamentrankings/tournamentrankings.component';
import { TournamentmatchesComponent } from './pages/tournamentmatches/tournamentmatches.component';
import { TournamentleaguesComponent } from './pages/tournamentleagues/tournamentleagues.component';
import { TournamentfindteamComponent } from './pages/tournamentfindteam/tournamentfindteam.component';
import { TournamentsComponent } from './pages/tournaments/tournaments.component';
import { FacilitycalendarComponent } from './pages/facilitycalendar/facilitycalendar.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CartPageComponent } from './pages/cart/cart-page/cart-page.component';
import { ListViewComponent } from './pages/cart/components/list-view/list-view.component';
import { CartTotalComponent } from './pages/cart/components/cart-total/cart-total.component';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';
import { PaymentCompleteComponent } from './pages/payment-complete/payment-complete.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { SessionInterceptor } from './guards/SessionInterceptor';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    UpdateProfileComponent,
    MembershipComponent,
    BookingHistoryComponent,
    InvoicesComponent,
    PaymentMethodsComponent,
    MaskPipe,
    AddPaymentDialogComponent,
    SportsCategoryComponent,
    SportsCategoryDetailComponent,
    BookingComponent,
    AddCategoryDialogComponent,
    AddCourtDialogComponent,
    CurrencyPipe,
    UserLoginComponent,
    UserRegistrationComponent,
    UpcomingBookingsComponent,
    UserLandingPageComponent,
    FacilitiesComponent,
    TournamentrankingsComponent,
    TournamentmatchesComponent,
    TournamentleaguesComponent,
    TournamentfindteamComponent,
    TournamentsComponent,
    FacilitycalendarComponent,
    CartPageComponent,
    ListViewComponent,
    CartTotalComponent,
    PaymentPageComponent,
    PaymentCompleteComponent,
    ForgotPasswordComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MatFormFieldModule,
    MatOptionModule,
    NgbModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatExpansionModule,
    MatMenuModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    NgbModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SessionInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
