import {Component, OnInit, EventEmitter, Output, OnDestroy} from '@angular/core';
import {NavLink} from "../navigation-link";
import {MdIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";
import {YoutubeInteractionService} from "../../../shared/youtube/youtube-interaction.service";


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

  constructor(mdIconRegistry: MdIconRegistry, sanitizer: DomSanitizer, private youtubeInteractionService: YoutubeInteractionService) {
    mdIconRegistry.addSvgIcon('logo', sanitizer.bypassSecurityTrustResourceUrl('assets/images/logo2.svg'));
  }

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
    this.youtubeInteractionService.searchVideos(this.searchQuery);
  }

  onSearchReset() {
    this.searchQuery = '';
  }

}
