import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HotelDisplayComponent } from './hotel-display/hotel-display.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {FlexModule} from '@angular/flex-layout';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HotelDisplayComponent,
    HotelDetailsComponent
  ],
  imports: [
    BrowserModule, MatToolbarModule, BrowserAnimationsModule, MatSnackBarModule, AppRoutingModule, HttpClientModule, MatCardModule,
    MatButtonModule, FlexModule , MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
