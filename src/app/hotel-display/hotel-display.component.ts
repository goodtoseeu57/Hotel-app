import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Hotel} from '../model';

@Component({
  selector: 'app-hotel-display',
  templateUrl: './hotel-display.component.html',
  styleUrls: ['./hotel-display.component.css']
})
export class HotelDisplayComponent {
    @Input() hotel: Hotel ;
    @Output()
    hotelSelected = new EventEmitter();

  onHotelSelected(hotel) {
    this.hotelSelected.emit(hotel);
  }
}
