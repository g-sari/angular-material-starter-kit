import {Component, OnInit, EventEmitter, Output, OnDestroy} from '@angular/core';
import {NavLink} from "../navigation-link";
import {Router} from "@angular/router";


@Component({
  selector: 'oas-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public navLinks: NavLink[] = [
    {label: "HOME", path: ""},
    {label: "CHANNELS", path: "channels"},
    {label: "SEARCH", path: "/search"}
  ];
  @Output()
  public sidenavToggleEvent: EventEmitter<string> = new EventEmitter();
  public searchQuery: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  public sendSignalToToggleSideNav() {
    this.sidenavToggleEvent.emit("Toggle");
  }

  onSearchChange(searchQuery: string) {
    this.searchQuery = searchQuery;
  }

  onSearch() {
    this.router.navigate(['/search'], { queryParams: { query: this.searchQuery } });
  }

  onSearchReset() {
    this.searchQuery = '';
  }

}
