import { Injectable } from '@angular/core';
import { hotelData } from './mock-hotels';
import { Hotel } from './model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { first } from 'rxjs/internal/operators/first';
import { Promise } from 'q';
import { tap, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  hotels: Array<Hotel>;
  public url = '/assets/Hotels.json';

  constructor(private http: HttpClient ) {
    this.hotels = hotelData;
  }

  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.url);
  }

  getHotel(id: number): Observable<Hotel> {
    return this.http.get<Hotel[]>(this.url).pipe(map(hotels => hotels[id-1]));
  }





}
