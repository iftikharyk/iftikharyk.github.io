import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatSlideToggleModule, MatSliderModule, MatTooltipModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MobilesComponent } from './pages/mobiles/mobiles.component';
import { VechiclesComponent } from './pages/vechicles/vechicles.component';
import { PropertyForSaleComponent } from './pages/property-for-sale/property-for-sale.component';
import { PropertyForRentComponent } from './pages/property-for-rent/property-for-rent.component';
import { ElectronicsComponent } from './pages/electronics/electronics.component';
import { BikesComponent } from './pages/bikes/bikes.component';
import { BusinessComponent } from './pages/business/business.component';
import { ServicesComponent } from './pages/services/services.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MobilesComponent,
    VechiclesComponent,
    PropertyForSaleComponent,
    PropertyForRentComponent,
    ElectronicsComponent,
    BikesComponent,
    BusinessComponent,
    ServicesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
