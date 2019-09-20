import {Component, OnDestroy, OnInit} from '@angular/core';
import {HotelService} from '../hotel.service';
import {Hotel} from '../model';
import {MatSnackBar} from '@angular/material';
import {hotelData} from '../mock-hotels';
import {first, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  hotels: Array<Hotel>;
  public myHotels: Hotel[];

  selectedHotel: Hotel;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private hotelService: HotelService, private myaction: MatSnackBar) { }

  ngOnInit() {
    this.hotelService.getHotels(name).pipe(takeUntil(this.destroy$)).subscribe(data => this.myHotels = data);
    // this.hotelService.getHotels(name).pipe(first()).subscribe(data => this.myHotels = data);

  }

  test() {
    this.hotelService.getHotels(name).pipe(takeUntil(this.destroy$)).subscribe(data => this.myHotels = data);
    this.hotelService.getHotels(name).pipe(first()).subscribe(data => this.myHotels = data);
  }


  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  selectHotel(hotel: Hotel , message: string) {
        this.selectedHotel = hotel;
        this.myaction.open(message = `Nice choice you will enjoy ${hotel.name}   🏨  `);

  }



}
