import {NgModule} from '@angular/core';
import {SearchRoutingModule} from './search-routing.module';
import {CoreModule} from "../core/core.module";
import {SearchComponent} from "./search.component";
import {MdCardModule, MdGridListModule, MdPaginatorModule} from "@angular/material";

@NgModule({
  imports: [
    CoreModule,
    SearchRoutingModule,
    MdGridListModule,
    MdCardModule,
    MdPaginatorModule
  ],
  declarations: [SearchComponent]
})
export class SearchModule {
}
