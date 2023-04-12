# Group 13 Project

* *Date Created*: 28 Jan 2023
* *Last Modification Date*: 31 Mar 2023
* *Frontend URL*: https://incomparable-cassata-28d849.netlify.app/
* *Backend URL*: https://dalplex-api.onrender.com/api/
* *Gitlab URL*: https://git.cs.dal.ca/sumitk/csci-5709-group-13.git
	Below are branch list for group project:
	* main
	* wip_sumit
	* wip_falgun
	* wip_venkata
	* wip_vinayak

## Authors

* [Sumit Kumar](sumit.kumar@dal.ca)
* [Venkata Vijaya Rama Raju Mandapati](vn520794@dal.ca)
* [Vinayak Abhinav Rupanagunta](vn958266@dal.ca)
* [Falgun Jairaj Thakwani](fl700637@dal.ca)


## Getting Started

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.5.
This application is created using angular. To generate a angular based project you can simply run "ng new projectname" command. [https://angular.io/tutorial/tour-of-heroes/toh-pt0#create-a-new-project]


### Prerequisites

```
https://nodejs.org/en/
https://angular.io/
https://www.npmjs.com/
```

### Installing

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.5.
follow below steps to run the application

```
# to install all dependencies
npm install
# to run application locally
ng serve
# to build the application
npm run build 
```

## Running the tests

To run test on the angular application, below command can be used. Please note test cases were auto generated and as part of this assignment its not tested.

```
ng test
```

## Deployment

The node express application is deployed on Render, mongodb is deployed on https://www.mongodb.com/atlas/database and angular application is deployed on Netlify.


### user-registration.component.html

                    <div class="email-input">
                        <mat-form-field class="full-width" appearance="outline">
                            <mat-label>Email</mat-label>
                            <input formControlName="email" matInput required/>
                            <mat-error *ngIf="'registrationForm.get(email).errors?.required'">
                                email required
                            </mat-error>
                        </mat-form-field>
                    </div>
                    <div class="password-input">
                    <mat-form-field class="full-width" appearance="outline">
                        <mat-label>Password</mat-label>
                        <input type="{{hide ? 'password' : 'text'}}" formControlName="password" matInput required/>
                        <button mat-icon-button matSuffix type="button" (click)="hide = !hide" [attr.aria-label]="hide ? 'Hide Password' : 'Show Password'">
                            <mat-icon>{{ hide ? 'visibility_off' : 'visibility' }}</mat-icon>
                        </button>
                        <mat-error *ngIf="'registrationForm.get(password).errors?.required'">
                            minimum 8 characters required
                        </mat-error>
                    </mat-form-field>
                </div>

The above form was created using angular material forms.

### facilities.component.ts
*Lines 69 - 95*

### tournaments.component.ts
*Lines 20 - 46*

```
  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.cols = this.gridByBreakpoint.xs;
        }
        if (result.breakpoints[Breakpoints.Small]) {
          this.cols = this.gridByBreakpoint.sm;
        }
        if (result.breakpoints[Breakpoints.Medium]) {
          this.cols = this.gridByBreakpoint.md;
        }
        if (result.breakpoints[Breakpoints.Large]) {
          this.cols = this.gridByBreakpoint.lg;
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          this.cols = this.gridByBreakpoint.xl;
        }
      }
    });
  }

```

The code above was created by adapting the code in https://stackoverflow.com/questions/48493652/angular-5-mat-grid-list-responsive as shown below: 

```

constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.cols = this.gridByBreakpoint.xs;
        }
        if (result.breakpoints[Breakpoints.Small]) {
          this.cols = this.gridByBreakpoint.sm;
        }
        if (result.breakpoints[Breakpoints.Medium]) {
          this.cols = this.gridByBreakpoint.md;
        }
        if (result.breakpoints[Breakpoints.Large]) {
          this.cols = this.gridByBreakpoint.lg;
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          this.cols = this.gridByBreakpoint.xl;
        }
      }
    });
  }

```
- The code in https://stackoverflow.com/questions/48493652/angular-5-mat-grid-list-responsive was implemented
- [https://stackoverflow.com/questions/48493652/angular-5-mat-grid-list-responsive]'s Code was used because it is much related to my application and I am new to angular, so used it as a reference.
- [https://stackoverflow.com/questions/48493652/angular-5-mat-grid-list-responsive]'s Code was modified by VenkataVijaya Mandapati


###(a) facilitycalendar.component.html
*Lines 26 - 50*
###(b) tournamentleagues.component.html
*Lines 15 - 50*
``` (a)
<section class="example-container mat-elevation-z8" tabindex="0">
    <table mat-table [dataSource]="dataSource">

      <!-- Facility Id Column -->
      <ng-container matColumnDef="FacilityId">
        <th mat-header-cell *matHeaderCellDef> Facility </th>
        <td mat-cell *matCellDef="let element"> {{element.facilityName}} </td>
      </ng-container>
  
      <!-- Slots Column -->
      <ng-container matColumnDef="Slots">
        <th mat-header-cell *matHeaderCellDef> Slots </th>
        <td mat-cell *matCellDef="let element"> {{element.slot}} </td>
      </ng-container>
  
      <!-- Booking Column -->
      <ng-container matColumnDef="Booking">
        <th mat-header-cell *matHeaderCellDef> Booking </th>
        <td mat-cell *matCellDef="let element"> {{element.status}} </td>
      </ng-container>
  
      <tr mat-header-row *matHeaderRowDef="displayedColumns; sticky: true"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
  </section>
``` (b)
<table mat-table [dataSource]="dataSource" class="mat-elevation-z8">
  
      <!-- Id Column -->
      <ng-container matColumnDef="id">
        <th mat-header-cell *matHeaderCellDef> No. </th>
        <td mat-cell *matCellDef="let league"> {{league.id}} </td>
      </ng-container>
  
      <!-- Leagues Column -->
      <ng-container matColumnDef="league">
        <th mat-header-cell *matHeaderCellDef> Leagues </th>
        <td mat-cell *matCellDef="let league"> {{league.league}} </td>
      </ng-container>
  
      <!-- Slots Column -->
      <ng-container matColumnDef="slots">
        <th mat-header-cell *matHeaderCellDef> Available SLots </th>
        <td mat-cell *matCellDef="let league"> {{league.slots}} </td>
      </ng-container>

      <!-- Match Info Column -->
      <ng-container matColumnDef="match">
        <th mat-header-cell *matHeaderCellDef> Matches Info </th>
        <td mat-cell *matCellDef="let league"> {{league.match}} </td>
      </ng-container>
  
      <!-- Register Column -->
      <ng-container matColumnDef="register">
        <th mat-header-cell *matHeaderCellDef> Register </th>
        <td mat-cell *matCellDef="let league"> <button mat-raised-button (click)="toggle(league.id)">{{league.register}}</button> </td>
      </ng-container>
  
      <tr mat-header-row *matHeaderRowDef="displayedColumns; sticky: true"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
```
The code above was created by adapting the code in https://material.angular.io/components/table/examples as shown below: 
```
<table mat-table [dataSource]="dataSource" class="mat-elevation-z8">

  <!--- Note that these columns can be defined in any order.
        The actual rendered columns are set as a property on the row definition" -->

  <!-- Position Column -->
  <ng-container matColumnDef="position">
    <th mat-header-cell *matHeaderCellDef> No. </th>
    <td mat-cell *matCellDef="let element"> {{element.position}} </td>
  </ng-container>

  <!-- Name Column -->
  <ng-container matColumnDef="name">
    <th mat-header-cell *matHeaderCellDef> Name </th>
    <td mat-cell *matCellDef="let element"> {{element.name}} </td>
  </ng-container>

  <!-- Weight Column -->
  <ng-container matColumnDef="weight">
    <th mat-header-cell *matHeaderCellDef> Weight </th>
    <td mat-cell *matCellDef="let element"> {{element.weight}} </td>
  </ng-container>

  <!-- Symbol Column -->
  <ng-container matColumnDef="symbol">
    <th mat-header-cell *matHeaderCellDef> Symbol </th>
    <td mat-cell *matCellDef="let element"> {{element.symbol}} </td>
  </ng-container>

  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
  <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
</table>

```
- The code in https://material.angular.io/components/table/examples was implemented
- [https://material.angular.io/components/table/examples]'s Code was used because it is much related to my application and I am new to angular, so used it as a reference.
- [https://material.angular.io/components/table/examples]'s Code was modified by VenkataVijaya Mandapati


### tournamentfindteam.component.html
*Lines 26 - 50*
```
<mat-card class="card">
                <mat-card-header>
                  <mat-card-title>{{card.title}}</mat-card-title>
                  <mat-card-subtitle>{{card.subtitle}}</mat-card-subtitle>
                </mat-card-header>
                <mat-card-content>
                  <p>{{card.desc}}</p>
                </mat-card-content>
                <mat-card-actions>
                  <button mat-stroked-button
                    matTooltip="Monday 10PM, Tuesday 7PM, Wednesday 6PM, Thursday 4PM, Friday 5PM"
                    aria-label="Button that displays a tooltip when focused or hovered over">    
                    Game Slots</button>
                  <button mat-raised-button (click)="toggle(card.id)">{{card.reqState}}</button>
                </mat-card-actions>
              </mat-card>
```
The code above was created by adapting the code in https://material.angular.io/components/card/examples as shown below: 
```
<mat-card class="example-card">
  <mat-card-header>
    <div mat-card-avatar class="example-header-image"></div>
    <mat-card-title>Shiba Inu</mat-card-title>
    <mat-card-subtitle>Dog Breed</mat-card-subtitle>
  </mat-card-header>
  <img mat-card-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Photo of a Shiba Inu">
  <mat-card-content>
    <p>
      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.
    </p>
  </mat-card-content>
  <mat-card-actions>
    <button mat-button>LIKE</button>
    <button mat-button>SHARE</button>
  </mat-card-actions>
</mat-card>

```
- The code in https://material.angular.io/components/card/examples was implemented
- [https://material.angular.io/components/card/examples]'s Code was used because it is much related to my application and I am new to angular, so used it as a reference.
- [https://material.angular.io/components/card/examples]'s Code was modified by VenkataVijaya Mandapati	


### tournamentmatches.component.html
*Lines 12 - 24*
```	  
<table mat-table [dataSource]=tab.content class="mat-elevation-z8 demo-table">
        <ng-container *ngFor="let column of columns" [matColumnDef]="column.columnDef">
          <th mat-header-cell *matHeaderCellDef>
            {{column.header}}
          </th>
          <td mat-cell *matCellDef="let row">
            {{column.cell(row)}}
          </td>
        </ng-container>
      
        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>
```
The code above was created by adapting the code in https://material.angular.io/components/table/examples as shown below: 
```
<table mat-table [dataSource]="dataSource" class="mat-elevation-z8 demo-table">
  <ng-container *ngFor="let column of columns" [matColumnDef]="column.columnDef">
    <th mat-header-cell *matHeaderCellDef>
      {{column.header}}
    </th>
    <td mat-cell *matCellDef="let row">
      {{column.cell(row)}}
    </td>
  </ng-container>

  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
  <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
</table>

```
- The code in https://material.angular.io/components/table/examples was implemented
- [https://material.angular.io/components/table/examples]'s Code was used because it is much related to my application and I am new to angular, so used it as a reference.
- [https://material.angular.io/components/table/examples]'s Code was modified by VenkataVijaya Mandapati

### app.js

*Lines 7 - 17*

```
mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('MongoDB connected!');
});
```

The code above was created by adapting the code in [Mongodb](https://www.tabnine.com/code/javascript/functions/mongoose/Connection/once) as shown below: 

```
mongoose.connection
    .once('open', function () {
      console.log('MongoDB running');
    })
    .on('error', function (err) {
      console.log(err);
    });
```

- The code in [Mongodb](https://www.tabnine.com/code/javascript/functions/mongoose/Connection/once) was implemented by using mongoose wrapper.
- [Mongodb](https://www.tabnine.com/code/javascript/functions/mongoose/Connection/once) Code was used to implement connect to mongodb database.

### app.js

*Lines 3, 25*

```
var cors = require('cors')
app.use(cors())
```

above code adapted from [cors](https://expressjs.com/en/resources/middleware/cors.html)

- The code in [cors](https://expressjs.com/en/resources/middleware/cors.html) was to avoid cors issue during API calls.
- Cross-Origin Resource Sharing (CORS) is a mechanism that allows a web application running at one origin to access resources from a different origin in a safe way.

### EmailHelper.js

*Lines 5 - 11, 27 - 33*

```
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Email sent: ${info.response}`);
  }
});
```

The code above was created by adapting the code in [nodemailer](https://nodemailer.com/about/) as shown below:

```
let transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: testAccount.user, // generated ethereal user
    pass: testAccount.pass, // generated ethereal password
  },
});

let info = await transporter.sendMail({
  from: '"Fred Foo 👻" <foo@example.com>', // sender address
  to: "bar@example.com, baz@example.com", // list of receivers
  subject: "Hello ✔", // Subject line
  text: "Hello world?", // plain text body
  html: "<b>Hello world?</b>", // html body
});
```

- [nodemailer](https://nodemailer.com/about/) Code was used to send email notification to users for OTP and booking confirmation.
- [nodemailer](https://nodemailer.com/about/) this code was also customized to send email in generic way to send email from a HTML template file.

### session.controller.js

*Lines 18*

```
const token = jwt.sign({ id: user._id, email: user.email }, process.env.APIKEY, { expiresIn: '30m' });
```

The code above was created by adapting the code in [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) as shown below:

```
jwt.sign({
  data: 'foobar'
}, 'secret', { expiresIn: 60 * 60 });
```

- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) code was used for securing user session.

### auth.js

*Lines 10*

```
const decoded = jwt.verify(token, process.env.APIKEY);
```

The code above was created by adapting the code in [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) as shown below:

```
try {
  var decoded = jwt.verify(token, 'wrong-secret');
} catch(err) {
  // err
}
```

- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) code was used for securing user session.


### bookings.model.js

* Lines 3 - 14 *

```
const bookingSchema = new mongoose.Schema({
  userid: { type: String, required: true },
  categoryid: { type: String, required: true },
  courtid: { type: String, required: true },
  program: { type: String, required: true },
  interval: { type: String, required: true },
  semester: { type: String, required: true },
  registeredon: { type: String, required: true },
  status: { type: String, required: true },
  updatedat: { type: Date, default: Date.now },
  createdat: { type: Date, default: Date.now }
});
```

The code above was created by adapting the code in [mongoose](https://mongoosejs.com/docs/models.html) as shown below:

```
const schema = new mongoose.Schema({ name: 'string', size: 'string' });
const Tank = mongoose.model('Tank', schema);
```

[mongoose](https://mongoosejs.com/docs/models.html) code reference was used for declaring mongoose models.

### profile.component.html

* Lines 3 - 19 *

```
<mat-tab-group style="margin: 5%;">
    <mat-tab label="Update profile">
      <app-update-profile></app-update-profile>
    </mat-tab>
    <mat-tab label="Membership">
      <app-membership></app-membership>
    </mat-tab>
    <mat-tab label="Booking History">
      <app-booking-history></app-booking-history>
    </mat-tab>
    <mat-tab label="Invoices">
      <app-invoices></app-invoices>
    </mat-tab>
    <mat-tab label="Payment methods">
      <app-payment-methods></app-payment-methods>
    </mat-tab>
</mat-tab-group>
```

The code above was created by adapting the code in [Angular-Material](https://material.angular.io/components/tabs/overview) as shown below:

```
<mat-tab-group>
  <mat-tab label="First"> Content 1 </mat-tab>
  <mat-tab label="Second"> Content 2 </mat-tab>
  <mat-tab label="Third"> Content 3 </mat-tab>
</mat-tab-group>
```

### invoices.component.ts

* Lines 32 - 351 *

```
content: [
	invoice template (note: its a big template hence not adding it here.
]
```

The code above was created by adapting the code in [Invoice](https://gist.github.com/tusharf5/034d3e0599ae87ec4033c53107965569)

### cart-page.component.html
*Lines 07 - 41*

```
<table mat-table [dataSource]="data.items">
    <ng-container matColumnDef="delete">
      <th mat-header-cell *matHeaderCellDef><h1>YOUR CART</h1></th>
      <td mat-cell *matCellDef="let element"> <button mat-icon-button color="black" (click)="deleteItem(element._id)">
        <mat-icon>delete</mat-icon>
      </button></td>
    </ng-container>
    <ng-container matColumnDef="image">
      <th mat-header-cell *matHeaderCellDef></th>
      <td mat-cell *matCellDef="let element"><img class="itemImage" src="./assets/badminton.png"
        alt="{{data.username}}"></td>
    </ng-container>

    <ng-container matColumnDef="program">
      <th mat-header-cell *matHeaderCellDef></th>
      <td  mat-cell *matCellDef="let element"><h2>{{ element.program }}</h2>
        Booking For<br>
        {{data.username}}</td>
    </ng-container>

    <ng-container matColumnDef="bookingDate">
      <th mat-header-cell *matHeaderCellDef></th>
      <td mat-cell *matCellDef="let element">{{ element.bookingdate | date: 'EEE, MMM d, y' }}<br>
      {{element.interval}}
      </td>
    </ng-container>

    <ng-container matColumnDef="price">
      <th mat-header-cell *matHeaderCellDef></th>
      <td mat-cell *matCellDef="let element">${{ element.price }}</td>
    </ng-container>

    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
  </table>

```

The code above was created by adapting the code in https://material.angular.io/components/table/overview because it is the official documentation of the framework and it relates to the displaying data in cart page. Accessed 29/03/2023 as shown below: 

```
<table mat-table [dataSource]="dataSource" class="mat-elevation-z8">

  <!--- Note that these columns can be defined in any order.
        The actual rendered columns are set as a property on the row definition" -->

  <!-- Position Column -->
  <ng-container matColumnDef="position">
    <th mat-header-cell *matHeaderCellDef> No. </th>
    <td mat-cell *matCellDef="let element"> {{element.position}} </td>
  </ng-container>

  <!-- Name Column -->
  <ng-container matColumnDef="name">
    <th mat-header-cell *matHeaderCellDef> Name </th>
    <td mat-cell *matCellDef="let element"> {{element.name}} </td>
  </ng-container>

  <!-- Weight Column -->
  <ng-container matColumnDef="weight">
    <th mat-header-cell *matHeaderCellDef> Weight </th>
    <td mat-cell *matCellDef="let element"> {{element.weight}} </td>
  </ng-container>

  <!-- Symbol Column -->
  <ng-container matColumnDef="symbol">
    <th mat-header-cell *matHeaderCellDef> Symbol </th>
    <td mat-cell *matCellDef="let element"> {{element.symbol}} </td>
  </ng-container>

  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
  <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
</table>

```

## cart-page.component.css
*Lines 54 - 69*

```
.container::-webkit-scrollbar {
  width: 8px;
}

.container::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}

.container::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 10px;
}

.container::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}
```
The code above was created by adapting the code in https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_custom_scrollbare. I dont know how to do this and i wanted this to be part of the feature. Accessed 29/03/2023 as shown below: 

```
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
```
## payment-page.component.html
*Lines 13 - 45*

```
 <mat-form-field>
          <mat-label>Name</mat-label>
          <input matInput formControlName="name" required>
          <mat-error *ngIf="billingAddressForm.controls['name'].invalid">Please enter a name</mat-error>
        </mat-form-field>
        <br>
        <mat-form-field>
          <mat-label>Street No.</mat-label>
          <input matInput formControlName="streetNumber" required>
          <mat-error *ngIf="billingAddressForm.controls['streetNumber'].invalid">Please enter a street number</mat-error>
        </mat-form-field>
        <br>
        <mat-form-field>
          <mat-label>Apt No.</mat-label>
          <input matInput formControlName="aptNumber">
        </mat-form-field>
        <br>
        <mat-form-field>
          <mat-label>City</mat-label>
          <input matInput formControlName="city" required>
          <mat-error *ngIf="billingAddressForm.controls['city'].invalid">Please enter a city</mat-error>
        </mat-form-field>
        <br>
        <mat-form-field>
          <mat-label>Province</mat-label>
          <input matInput formControlName="province" required>
          <mat-error *ngIf="billingAddressForm.controls['province'].invalid">Please enter a province</mat-error>
        </mat-form-field>
        <mat-form-field>
          <mat-label>Postal Code</mat-label>
          <input matInput formControlName="pincode" required>
          <mat-error *ngIf="billingAddressForm.controls['pincode'].invalid">Please enter a postal code</mat-error>
        </mat-form-field>

```
The code above was created by adapting the code in https://material.angular.io/components/form-field/overview because its is the official documentation of the framework. Also I used my code from tutorial's to implement a form. Accessed 30/03/2023 as shown below: 
```
  <mat-form-field appearance="fill">
    <mat-label>Enter your email</mat-label>
    <input matInput placeholder="pat@example.com" [formControl]="email" required>
    <mat-error *ngIf="email.invalid">{{getErrorMessage()}}</mat-error>
  </mat-form-field>
```

```
<mat-radio-group [(ngModel)]="selectedOption" [ngModelOptions]="{standalone: true}" (change)="updateSelection($event.value)" >
```
The code above was created by adapting the advice in https://stackoverflow.com/a/56112269 by user https://stackoverflow.com/users/1122806/dimanoid. Reason being I was getting an error for ngModel and i searched google for this. Accessed 30/03/2023 

## payment-complete.html
*Lines 16 - 29*

```
 <mat-grid-list #grid [cols]="3" rowHeight="200px" gutterSize="40px"  >
  <mat-grid-tile *ngFor="let booking of bookings">
  <mat-card class="card">
    <mat-card-header>
      <mat-card-title>Booking details</mat-card-title>
    </mat-card-header>
    <mat-card-content>
      <p>Court: {{booking.program }}</p>
      <p>Time: {{booking.interval}}</p>
      <p>Date: {{booking.bookingdate|date:"MMM d YYYY"}}</p>
    </mat-card-content>
  </mat-card>
  </mat-grid-tile>
  </mat-grid-list>
```

The code above was created by adapting the code in https://v5.material.angular.io/components/grid-list/overview because its is the official documentation of the framework and i dont know how to use material grid. Accessed 30/03/2023 as shown below:

```
<mat-grid-list cols="2" rowHeight="2:1">
  <mat-grid-tile>1</mat-grid-tile>
  <mat-grid-tile>2</mat-grid-tile>
  <mat-grid-tile>3</mat-grid-tile>
  <mat-grid-tile>4</mat-grid-tile>
</mat-grid-list>
```

### facilities.model.js

* Lines 3 - 14 *

```
const facilitiesSchema = new mongoose.Schema({
  title: { type: String, requird: true },
  subtitle: { type: String, required: true },
  occ: { type: String, required: true },
  state: { type: String, required: true },
  desc: { type: String, required: true },
  foot: { type: String, required: true },
  img: { type: String, required: true },
  w: { type: Array, required: true },
  slots: { type: Array, required: true },
  updatedat: { type: Date, default: Date.now },
  createdat: { type: Date, default: Date.now },
});
```

The code above was created by adapting the code in [mongoose](https://mongoosejs.com/docs/models.html) as shown below:

```
const schema = new mongoose.Schema({ name: 'string', size: 'string' });
const Tank = mongoose.model('Tank', schema);
```

[mongoose](https://mongoosejs.com/docs/models.html) code reference was used for declaring mongoose models.

## Built With

* [Node Express](https://expressjs.com/) - The backend framework
* [Render](https://render.com/) - Backend Deployment Solution
* [Netlify](https://app.netlify.com/) - Frontend Deployment Solution
* [MongoDB Atlas](https://www.mongodb.com/atlas/database) - Mongodb deployment solution
* [Gitlab](https://git.cs.dal.ca/) - Version Control
* [VSCode](https://code.visualstudio.com/) - Editor
* [NPM](https://www.npmjs.com/) - Node Package Manager

## External Libraries

all the libraries/packages used are available under package.json
* [Angular Material](https://material.angular.io/) - Angular Material UI framework
* [Angular Material Form](https://material.angular.io/components/form-field/) - Angular Material Forms
* [Angular Material Card](https://material.angular.io/components/card/) - Angular Material Cards
* [Angular Material Table](https://material.angular.io/components/table/) - Angular Material Tables
* [Angular Material Datasource](https://material.angular.io/components/table/overview#1-write-your-mat-table-and-provide-data) - Angular Material Datasource
* [Angular Material Filtering](https://material.angular.io/components/table/overview#filtering) - Angular Material Datasource filter
* [Angular HTTP](https://angular.io/guide/http) - Angular HTTP

## References

* [1] “The W3C Markup Validation Service.” The W3C Markup Validation Service, validator.w3.org. Accessed 3 Feb. 2023.

* [2] “Free Images : Silhouette, Basketball, Activity, Athletic, Ball, Championship, Competition, Cover, Dunk, Game, Hoop, Jump, Man, Match, Practice, Strong, Skill, Slam, Sport, Tournament, Footwear, Joint, Standing, Black and White, Shoe, Knee, Arm, Recreation, Line, Jumping, Hand, Human Behavior, Physical Exercise, Sports 3841x2400 - Mohamed Hassan - 1451117 - Free Stock Photos - PxHere.” Free Images : Silhouette, Basketball, Activity, Athletic, Ball, Championship, Competition, Cover, Dunk, Game, Hoop, Jump, Man, Match, Practice, Strong, Skill, Slam, Sport, Tournament, Footwear, Joint, Standing, Black and White, Shoe, Knee, Arm, Recreation, Line, Jumping, Hand, Human Behavior, Physical Exercise, Sports 3841x2400 - Mohamed Hassan - 1451117 - Free Stock Photos - PxHere, pxhere.com/en/photo/1451117.

* [3] “Free Images : Nfl, National, Football, League, Logo, Icon, Sport, America, Silhouette, Clipart, Classic, Design, Doodle, Editable, Isolated, Official, Style, American, Footwear, Joint, Male, Standing, Shoe, Hand, Line, Black and White, Font, Recreation, Human Behavior, Graphics, Sports Equipment 2287x2287 - Mohamed Hassan - 1447947 - Free Stock Photos - PxHere.” Free Images : Nfl, National, Football, League, Logo, Icon, Sport, America, Silhouette, Clipart, Classic, Design, Doodle, Editable, Isolated, Official, Style, American, Footwear, Joint, Male, Standing, Shoe, Hand, Line, Black and White, Font, Recreation, Human Behavior, Graphics, Sports Equipment 2287x2287 - Mohamed Hassan - 1447947 - Free Stock Photos - PxHere, pxhere.com/en/photo/1447947.

* [4] “File:Team icon.png - Wikimedia Commons.” File:Team icon.png - Wikimedia Commons, 14 Apr. 2020, commons.wikimedia.org/wiki/File:Team_icon.png.

* [5] “Tournament Free Icons Designed by Konkapp.” Flaticon, www.flaticon.com/free-icon/tournament_3363497.

* [6] “Treadmill Free Icons Designed by Maan Icons.” Flaticon, www.flaticon.com/free-icon/treadmill_8965811.

* [7] “Swimming Pool Free Icons Designed by Good Ware.” Flaticon, www.flaticon.com/free-icon/swimming-pool_686943.

* [8] “Weights Free Icons Designed by Kosonicon.” Flaticon, www.flaticon.com/free-icon/weights_2871284.

* [9] “Court Free Icons Designed by Smashicons.” Flaticon, www.flaticon.com/free-icon/court_3136345.

* [10] “Running Track Free Icons Designed by Good Ware.” Flaticon, www.flaticon.com/free-icon/running-track_2151488.

* [11] “Dance Free Icons Designed by Mayor Icons.” Flaticon, www.flaticon.com/free-icon/dance_9169463.

* [12] “Swimming Pool Free Icons Designed by Freepik.” Flaticon, www.flaticon.com/free-icon/swimming-pool_6348605.
