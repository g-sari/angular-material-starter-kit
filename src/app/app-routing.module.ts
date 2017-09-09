/**
 * RMS - Embedded Systems - Order Automation System
 * Base routing.
 * Includes lazy loaded modules.
 *
 * @author Gökhan Sari <g-sari@g-sari.com>
 * @copyright BICSOLUTIONS 2017
 */
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {YoutubePlayerComponent} from "./youtube-player/youtube-player.component";

const APP_ROUTES: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', loadChildren: './home/home.module#HomeModule'},
  {path: 'video/:id', component: YoutubePlayerComponent, children: [], canActivate: []},
  {path: 'search', loadChildren: './search/search.module#SearchModule'},
];

export const APP_ROUTING_MODULE: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES, {
  useHash: false,
  enableTracing: false,
  initialNavigation: true
});
