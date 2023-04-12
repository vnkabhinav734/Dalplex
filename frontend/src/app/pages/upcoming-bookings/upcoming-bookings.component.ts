import { Component, OnInit } from '@angular/core';
import { UpcomingBookingsDetails } from 'src/app/interfaces/UpcomingBookings';
import { UserService } from 'src/app/services/user.service';
import { BookingDetails } from 'src/app/interfaces/BookingDetails';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-upcoming-bookings',
  templateUrl: './upcoming-bookings.component.html',
  styleUrls: ['./upcoming-bookings.component.css']
})
export class UpcomingBookingsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'program', 'date', 'registeredOn', 'status'];
  dataSource: BookingDetails[]=[]

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    const userid=localStorage.getItem('userid')
    this.bookingService.getUpcomingBookings(userid).subscribe((data: any)=>{
      this.dataSource=data
    })
  }

}
