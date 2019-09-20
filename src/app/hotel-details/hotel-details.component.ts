import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from '../model';
import { ActivatedRoute, Params } from '@angular/router';
import { HotelService } from '../hotel.service';
import { Location } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {

 @Input() hotel: Hotel;

  constructor(private activatedRoute: ActivatedRoute,
              private hotelService: HotelService, private location: Location) { }

  ngOnInit(): void {
    this.getHotel();
    console.log(this.hotel);
  }

  getHotel(): void {
    debugger;
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'), 10);
    this.hotelService.getHotel(id).subscribe(hotel => this.hotel = hotel);

      // this.hotelService.getHotel({ path: 'path', component: FeatureComponent },).subscribe((hotel: Hotel) => this.hotel = hotel);

  }

  goBack(): void {

    this.location.back();
  }

}
