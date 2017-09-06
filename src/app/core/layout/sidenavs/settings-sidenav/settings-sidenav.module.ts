import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MdButtonModule, MdTabsModule, MdListModule, MdSlideToggleModule, MdToolbar,
  MdToolbarModule, MdSelectModule
} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {SettingsSidenavComponent} from "./settings-sidenav.component";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MdToolbarModule,
    MdTabsModule,
    MdButtonModule,
    MdListModule,
    MdSlideToggleModule,
    MdSelectModule
  ],
  declarations: [
    SettingsSidenavComponent
  ],
  exports: [
    SettingsSidenavComponent
  ]
})
export class SettingsSidenavModule {
}
