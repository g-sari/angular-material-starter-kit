import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {CoreModule} from "../core/core.module";
import {MdCardModule, MdGridListModule, MdToolbarModule} from "@angular/material";
import {HomeComponent} from "./home.component";
import {SwiperModule} from 'angular2-useful-swiper';

@NgModule({
  imports: [
    CoreModule,
    HomeRoutingModule,
    MdCardModule,
    MdGridListModule,
    SwiperModule,
    MdToolbarModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule {
}
