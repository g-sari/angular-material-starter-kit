import 'hammerjs';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {APP_ROUTING_MODULE} from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CoreModule} from "./core/core.module";
import {RouterModule} from "@angular/router";
import {MdSidenavModule, MdCardModule, MdProgressBarModule} from "@angular/material";
import {SettingsSidenavModule} from "./core/layout/sidenavs/settings-sidenav/settings-sidenav.module";
import {YoutubePlayerComponent} from "./youtube-player/youtube-player.component";
import {YoutubeSafeUrlPipe} from "./shared/youtube/YoutubeSafeUrlPipe";
import {YoutubeAPIService} from "./shared/youtube/youtube-api.service";
import {YoutubeInteractionService} from "./shared/youtube/youtube-interaction.service";
import {Ng2Webstorage} from "ngx-webstorage";

@NgModule({
  declarations: [
    AppComponent,
    YoutubePlayerComponent,
    YoutubeSafeUrlPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    FormsModule,
    HttpModule,
    APP_ROUTING_MODULE,
    Ng2Webstorage,
    RouterModule,
    MdSidenavModule,
    MdCardModule,
    SettingsSidenavModule,
    MdProgressBarModule
  ],
  providers: [
    YoutubeAPIService,
    YoutubeInteractionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
