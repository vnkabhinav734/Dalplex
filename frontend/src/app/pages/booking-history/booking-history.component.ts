/*Author: Sumit Kumar B00904097*/
import { BookingService } from 'src/app/services/booking.service';
import { Component, OnInit } from '@angular/core';
import { BookingDetails } from 'src/app/interfaces/BookingDetails';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {

  displayedColumns: string[] = ['id', 'program', 'offering', 'registeredOn', 'semesters', 'status'];
  dataSource!: BookingDetails[];

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.bookingService.getAllBooking().subscribe((data: any) => {
      const bookings = data.filter((item: any) => item.userid === localStorage.getItem('userid'));
      this.dataSource = bookings;
    });
  }

  getStatus(dateString: string) {
    const currentDate = new Date();
    const currentDateString = currentDate.toISOString().slice(0, 10);
    const currentDateOnly = new Date(currentDateString);

    const inputDateString = dateString.split("GMT")[0].trim();
    const inputDateOnly = new Date(inputDateString);
  
    return inputDateOnly > currentDateOnly ? "Upcoming" : "Expired";
  }
  

  getBookingDate(dateString: string) {
    const date = new Date(dateString);
    const bookingDate = `${date.toLocaleString('default', { month: 'short' })}-${date.getDate()}-${date.getFullYear()}`;
    return bookingDate;
  }
}
