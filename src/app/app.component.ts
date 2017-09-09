import {Component, ViewChild} from '@angular/core';
import {routerTransition} from "./core/layout/router.animations";
import {MdSidenav} from "@angular/material";

@Component({
  selector: 'angular-material-starter-kit',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent {

  @ViewChild('sidenav')
  public sidenav: MdSidenav;


  public onSidenavToggleEvent(command: string) {
    console.debug("onSidenavToggleEvent received!")
    this.sidenav.open();
  }

}
