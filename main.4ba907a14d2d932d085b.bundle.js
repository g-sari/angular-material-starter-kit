webpackJsonp([3,6],{"/3wW":function(t,e){t.exports='<button md-raised-button [color]="color" [disabled]="disabled" (click)="onClick()">\n  <md-icon *ngIf="icon" class="md-light">{{icon}}</md-icon>\n  <span *ngIf="label">{{label}}</span>\n</button>\n'},"/HCO":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=function(){function t(t,e,n,i,o,r,a,s,c,d){this.videoId=t,this.title=e,this.thumbnailUrlMedium=n,this.thumbnailUrlHigh=i,this.channelTitle=o,this.channelId=r,this.publishedAt=a,this.description=s,this.statisticViewCount=c,this.duration=d,this.videoId=t,this.title=e,this.thumbnailUrlMedium=n,this.thumbnailUrlHigh=i,this.channelTitle=o,this.channelId=r,this.publishedAt=a,this.description=s,this.statisticViewCount=c,this.duration=d}return t}()},0:function(t,e,n){t.exports=n("x35b")},"0gU3":function(t,e,n){t.exports=n.p+"avatar.e1e756813c503938ac7a.png"},"5xMp":function(t,e){t.exports='<div class="wrapper" [class.dark-theme]="darkTheme" [class.light-theme]="lightTheme">\n\n  <md-progress-bar *ngIf="showProgressBar" color="warn" mode="indeterminate"></md-progress-bar>\n\n  <md-sidenav-container>\n\n    <oas-header (sidenavToggleEvent)="onSidenavToggleEvent($event)"></oas-header>\n\n    <div class="content" [@routerTransition]="routeroutlet.isActivated && routeroutlet.activatedRoute.routeConfig.path">\n      <router-outlet #routeroutlet="outlet"></router-outlet>\n    </div>\n\n    <md-sidenav #sidenav mode="push" align="start" class="sidenav"> \x3c!-- modes = {side, over, push} --\x3e\n      <oas-settings-sidenav></oas-settings-sidenav>\n    </md-sidenav>\n\n    <oas-footer></oas-footer>\n  </md-sidenav-container>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n'},"66Mc":function(t,e){t.exports='<md-card class="big-input" [ngClass]="{ \'has-focus\': hasFocus }">\n  <input (focus)="hasFocus = true" (blur)="hasFocus = false" [value]="value" [placeholder]="placeholder" [disabled]="disabled" />\n  <ng-content></ng-content>\n</md-card>\n'},"9ARh":function(t,e,n){e=t.exports=n("FZ+f")(),e.push([t.i,".footer{position:fixed;left:0;bottom:0;text-align:center;width:100%;background:#fff}.footer,.mat-toolbar{height:55px}",""]),t.exports=t.exports.toString()},"9WnO":function(t,e,n){"use strict";var i=n("/HCO"),o=n("TGZ+");n.d(e,"a",function(){return r});var r=function(){function t(){}return t.convertVideo=function(t){return t.items.map(function(t){return new i.a(t.id,t.snippet.title,t.snippet.thumbnails.medium.url,t.snippet.thumbnails.high.url,t.snippet.channelTitle,t.snippet.channelId,t.snippet.publishedAt,t.snippet.description,t.statistics.viewCount,t.contentDetails.duration)})},t.convertReplies=function(t){return t.replies?t.replies.comments.map(function(t){return new o.a(t.id,t.snippet.videoId,t.snippet.authorDisplayName,t.snippet.authorProfileImageUrl,t.snippet.authorChannelId.value,t.snippet.textDisplay,t.snippet.textOriginal,t.snippet.publishedAt,t.snippet.likeCount,null)}):[]},t.convertComments=function(t){var e=this;return t.items.map(function(t){return new o.a(t.id,t.snippet.videoId,t.snippet.topLevelComment.snippet.authorDisplayName,t.snippet.topLevelComment.snippet.authorProfileImageUrl,t.snippet.topLevelComment.snippet.authorChannelId.value,t.snippet.topLevelComment.snippet.textDisplay,t.snippet.topLevelComment.snippet.textOriginal,t.snippet.topLevelComment.snippet.publishedAt,t.snippet.topLevelComment.snippet.likeCount,e.convertReplies(t))})},t}()},Cd9f:function(t,e,n){"use strict";var i=n("5oXY"),o=n("JXc9"),r=n("yCM/");n.d(e,"a",function(){return s});var a=[{path:"",pathMatch:"full",redirectTo:"home"},{path:"home",loadChildren:"./home/home.module#HomeModule"},{path:"video/:id",component:o.a,children:[],canActivate:[]},{path:"search",loadChildren:"./search/search.module#SearchModule"},{path:"credits",component:r.a,children:[],canActivate:[]}],s=i.a.forRoot(a,{useHash:!1,enableTracing:!1,initialNavigation:!0})},EV7H:function(t,e,n){e=t.exports=n("FZ+f")(),e.push([t.i,"@media (min-width:1281px){.header,.header .mat-toolbar{min-height:14vh;max-height:14vh;height:14vh}.header .content{height:14vh}.header .logo{color:#fff;height:3.5vh}.header anms-big-input{width:85%}.header .signin{margin:5px}}@media (max-width:1280px){.header,.header .mat-toolbar{min-height:19vh;max-height:19vh;height:19vh}.header .content{height:19vh}.header .logo{color:#fff;height:4.75vh}.header anms-big-input{width:85%}.header .signin{margin:5px}}",""]),t.exports=t.exports.toString()},"F3P+":function(t,e){t.exports='<footer class="footer">\n  <div class="row">\n    <md-toolbar>\n      &#169; 2017 - Gökhan Sari\n\n      \x3c!-- This fills the remaining space of the current row --\x3e\n      <span class="example-fill-remaining-space"></span>\n\n\n    </md-toolbar>\n  </div>\n</footer>\n'},GCBi:function(t,e){t.exports='<div>\n  <div fxLayout="column" fxLayoutAlign="start stretch">\n    <md-toolbar color="warn">\n      <div fxLayout="row" fxFlex="50" fxLayoutAlign="start center">\n        Settings\n      </div>\n      <div fxLayout="row" fxFlex="50" fxLayoutAlign="end center">\n        <button md-button><i class="material-icons md-32" [class.md-light]="true">cancel</i></button>\n      </div>\n    </md-toolbar>\n  </div>\n  <div fxLayout="column" fxLayoutAlign="start stretch" class="sidenav-content">\n    <md-tab-group>\n      <md-tab label="Tab 1">\n        <md-list>\n          <md-list-item>\n            <md-select placeholder="Themes" [(ngModel)]="selectedTheme" (ngModelChange)="changeTheme()">\n              <md-option *ngFor="let theme of themes" [value]="theme.value">{{theme.name}}</md-option>\n            </md-select>\n          </md-list-item>\n\n          <md-list-item>\n            <md-slide-toggle>Slide me!</md-slide-toggle>\n          </md-list-item>\n          <md-divider></md-divider>\n          <md-list-item>\n            <md-form-field>\n              <input mdInput [mdDatepicker]="picker" placeholder="Choose a date">\n              <md-datepicker-toggle mdSuffix [for]="picker"></md-datepicker-toggle>\n              <md-datepicker #picker></md-datepicker>\n            </md-form-field>\n          </md-list-item>\n          <md-divider></md-divider>\n          <md-list-item>\n            <md-radio-group>\n              <md-radio-button value="1">Option 1</md-radio-button>\n              <md-radio-button value="2">Option 2</md-radio-button>\n            </md-radio-group>\n          </md-list-item>\n          <md-divider></md-divider>\n          <md-list-item>\n            <md-slider thumbLabel="true" value="50" tickInterval="1"></md-slider>\n          </md-list-item>\n          <md-divider></md-divider>\n          <md-list-item>\n            <md-checkbox>Check me!</md-checkbox>\n          </md-list-item>\n          <md-divider></md-divider>\n        </md-list>\n      </md-tab>\n      <md-tab label="Tab 2">Content 2</md-tab>\n      <md-tab label="Tab 3">Content 3</md-tab>\n      <md-tab label="Tab 4">Content 4</md-tab>\n    </md-tab-group>\n  </div>\n</div>\n\n\n'},Gmjq:function(t,e,n){e=t.exports=n("FZ+f")(),e.push([t.i,"button{padding:0;min-width:34px;height:32px}",""]),t.exports=t.exports.toString()},IYMG:function(t,e,n){"use strict";var i=n("3j3K"),o=n("EEr4");n.n(o);n.d(e,"a",function(){return a});var r=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},a=function(){function t(){this.searchVideosSource=new o.Subject,this.searchVideosPublished$=this.searchVideosSource.asObservable()}return t.prototype.searchVideos=function(t){this.searchVideosSource.next(t)},t}();a=r([n.i(i.Injectable)()],a)},Iksp:function(t,e,n){"use strict";var i=n("rxKx"),o=(n.n(i),n("Qbdm")),r=n("3j3K"),a=n("NVOs"),s=n("Fzro"),c=n("YWx4"),d=n("Cd9f"),l=n("KN8t"),u=n("u87A"),p=n("5oXY"),f=n("fYnu"),m=n("zbEE"),h=n("JXc9"),v=n("nQeb"),g=n("gQav"),b=n("IYMG"),y=n("tDQs"),x=n("yCM/");n.d(e,"a",function(){return j});var w=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},j=function(){function t(){}return t}();j=w([n.i(r.NgModule)({declarations:[c.a,h.a,v.a,x.a],imports:[o.a,l.a,u.a,a.a,s.a,d.a,y.a,p.a,f.a,f.b,f.c,m.a,f.d],providers:[g.a,b.a],bootstrap:[c.a]})],j)},JF0d:function(t,e,n){e=t.exports=n("FZ+f")(),e.push([t.i,".embed-container{position:relative;padding-bottom:56.25%;height:0}.embed-container iframe{width:100%;height:80vh}.comments{height:calc(80vh - 64px);overflow:scroll}.comment{margin:10px}.comment-title{font-weight:700}",""]),t.exports=t.exports.toString()},JXc9:function(t,e,n){"use strict";var i=n("3j3K"),o=n("5oXY"),r=n("gQav"),a=n("9WnO");n.d(e,"a",function(){return d});var s=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},d=function(){function t(t,e){this.youtubeAPIService=t,this.route=e}return t.prototype.ngOnInit=function(){var t=this;this.route.paramMap.switchMap(function(e){return t.youtubeAPIService.getVideoById(e.get("id"))}).subscribe(function(e){t.video=a.a.convertVideo(e)[0],t.youtubeAPIService.getCommentsByVideoId(t.video.videoId).subscribe(function(e){t.comments=a.a.convertComments(e)})})},t}();d=s([n.i(i.Component)({selector:"oas-youtube-player",template:n("eKXV"),styles:[n("JF0d")]}),c("design:paramtypes",["function"==typeof(l=void 0!==r.a&&r.a)&&l||Object,"function"==typeof(u=void 0!==o.b&&o.b)&&u||Object])],d);var l,u},MOVZ:function(t,e,n){function i(t){var e=o[t];return e?n.e(e[1]).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var o={"./home/home.module":["RobO",0],"./search/search.module":["0b8E",1]};i.keys=function(){return Object.keys(o)},t.exports=i,i.id="MOVZ"},"Sf+L":function(t,e){t.exports='<header class="header">\n    <div fxLayout="row" fxFlex="100" fxLayoutAlign="stretch" class="content">\n      <div fxLayout="column" fxFlex="100" fxLayoutAlign="start stretch" class="content">\n        <div fxLayout="column" fxFlex="70">\n          <md-toolbar color="primary">\n            <div fxLayout="row" fxFlex="100">\n              <div fxLayout="row" fxFlex="25" fxLayoutAlign="start center">\n                <button md-button (click)="sendSignalToToggleSideNav()"><i class="material-icons" [class.md-dark]="false">dehaze</i></button>\n                <button md-button [routerLink]="[\'/\']">\n                  <img src="assets/images/logo.png" class="logo" />\n                </button>\n              </div>\n              <div fxLayout="row" fxFlex="50" fxLayoutAlign="center center">\n                <anms-big-input placeholder="Search videos, games and channels" [value]="searchQuery" (keyup)="onSearchChange($event.target.value)" (keyup.enter)="onSearch()" (keyup.escape)="onSearchReset()">\n                  <anms-big-input-action icon="cancel" color="warn" (action)="onSearchReset()" mdTooltip="Reset" mdTooltipPosition="after">\n                  </anms-big-input-action>\n                </anms-big-input>\n              </div>\n              <div fxLayout="row" fxFlex="25" fxLayoutAlign="end center">\n                <md-icon>file_upload</md-icon>\n                <md-icon>apps</md-icon>\n                <button md-icon-button [mdMenuTriggerFor]="menu">\n                  <md-icon>more_vert</md-icon>\n                </button>\n                <md-menu #menu="mdMenu">\n                  <button md-menu-item>\n                    <md-icon>dialpad</md-icon>\n                    <span>Redial</span>\n                  </button>\n                  <button md-menu-item disabled>\n                    <md-icon>voicemail</md-icon>\n                    <span>Check voicemail</span>\n                  </button>\n                  <button md-menu-item>\n                    <md-icon>notifications_off</md-icon>\n                    <span>Disable alerts</span>\n                  </button>\n                </md-menu>\n                <button md-raised-button color="accent" class="signin">SIGN IN</button>\n              </div>\n            </div>\n          </md-toolbar>\n        </div>\n        <div fxLayout="column" fxFlex="30" fxLayoutAlign="end center">\n\n\n\n          <nav md-tab-nav-bar>\n            <a md-tab-link *ngFor="let navLink of navLinks" [routerLink]="navLink.path" routerLinkActive #rla="routerLinkActive" [active]="rla.isActive">\n              {{navLink.label}}\n            </a>\n          </nav>\n        </div>\n      </div>\n    </div>\n</header>\n'},SwkK:function(t,e,n){"use strict";var i=n("3j3K"),o=n("pibQ"),r=n("pic7"),a=n("fYnu"),s=n("5oXY"),c=n("cXjt"),d=n("2Je8"),l=n("oB5N"),u=n("m49h");n.d(e,"a",function(){return f});var p=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},f=function(){function t(){}return t}();f=p([n.i(i.NgModule)({imports:[d.CommonModule,c.a,s.a,a.k,a.i,a.f,a.c,a.j,a.v,a.b,a.q,a.x,a.y],declarations:[o.a,r.a,l.a,u.a],providers:[a.z],exports:[c.a,o.a,r.a,a.k,a.q,a.i],schemas:[]})],f)},"TGZ+":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=function(){function t(t,e,n,i,o,r,a,s,c,d){this.commentId=t,this.videoId=e,this.authorDisplayName=n,this.authorProfileImageUrl=i,this.authorChannelId=o,this.textDisplay=r,this.textOriginal=a,this.publishedAt=s,this.likeCount=c,this.replies=d,this.videoId=e,this.commentId=t,this.authorDisplayName=n,this.authorProfileImageUrl=i,this.authorChannelId=o,this.textDisplay=r,this.textOriginal=a,this.publishedAt=s,this.likeCount=c,this.replies=d}return t}()},VCzo:function(t,e,n){"use strict";var i=n("3j3K"),o=n("tDQs"),r=n("fYnu");n.d(e,"a",function(){return c});var a=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.snackBar=t,this.themes=[{name:"Default theme",value:"0"},{name:"Dark theme",value:"1"},{name:"Light theme",value:"2"}],this.openSnackBar("Welcome to the Angular material starter kit!","Okey")}return t.prototype.ngOnInit=function(){this.darkTheme?this.selectedTheme="1":this.lightTheme?this.selectedTheme="2":this.selectedTheme="0"},t.prototype.changeTheme=function(){"0"==this.selectedTheme?(this.lightTheme=!1,this.darkTheme=!1):"1"==this.selectedTheme?(this.lightTheme=!1,this.darkTheme=!0):"2"==this.selectedTheme&&(this.lightTheme=!0,this.darkTheme=!1)},t.prototype.openSnackBar=function(t,e){this.snackBar.open(t,e,{duration:0})},t}();a([n.i(o.b)("lightTheme",!0),s("design:type",Boolean)],c.prototype,"lightTheme",void 0),a([n.i(o.b)(),s("design:type",Boolean)],c.prototype,"darkTheme",void 0),c=a([n.i(i.Component)({selector:"oas-settings-sidenav",template:n("GCBi"),styles:[n("cj5x")]}),s("design:paramtypes",["function"==typeof(d=void 0!==r.w&&r.w)&&d||Object])],c);var d},YWx4:function(t,e,n){"use strict";var i=n("3j3K"),o=n("zJyU"),r=n("fYnu"),a=n("tDQs");n.d(e,"a",function(){return d});var s=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},d=function(){function t(){var t=this;this.showProgressBar=!0,setTimeout(function(){t.showProgressBar=!1},2e3)}return t.prototype.onSidenavToggleEvent=function(t){console.debug("onSidenavToggleEvent received!"),this.sidenav.open()},t}();s([n.i(i.ViewChild)("sidenav"),c("design:type","function"==typeof(l=void 0!==r.A&&r.A)&&l||Object)],d.prototype,"sidenav",void 0),s([n.i(a.b)(),c("design:type",Boolean)],d.prototype,"lightTheme",void 0),s([n.i(a.b)(),c("design:type",Boolean)],d.prototype,"darkTheme",void 0),d=s([n.i(i.Component)({selector:"angular-material-starter-kit",template:n("5xMp"),styles:[n("sQHO")],animations:[o.a]}),c("design:paramtypes",[])],d);var l},cj5x:function(t,e,n){e=t.exports=n("FZ+f")(),e.push([t.i,".sidenav-content{overflow:scroll;height:80vh}.close-button{height:50px}",""]),t.exports=t.exports.toString()},dBbS:function(t,e,n){e=t.exports=n("FZ+f")(),e.push([t.i,".credits-card{width:500px;margin:20px}.credits-header-image{background-image:url("+n("0gU3")+");background-size:cover}",""]),t.exports=t.exports.toString()},eKXV:function(t,e){t.exports='<div fxLayout="row" fxFlex="100" fxLayoutAlign="stretch" class="content">\n  <div fxLayout="column" fxFlex="100" fxLayoutAlign="start stretch">\n    <div fxLayout="column" fxFlex="70">\n      <div fxLayout="row" fxFlex="100">\n        <div fxLayout="row" fxFlex="70" fxLayoutAlign="start start" class="embed-container">\n          <div fxLayout="column" fxFlex="100" fxLayoutAlign="start stretch">\n            <div *ngIf="video">\n              <iframe width="560" height="315" frameborder="0" allowfullscreen [src]="video?.videoId | youtubeSafeUrl"></iframe>\n            </div>\n          </div>\n        </div>\n        <div fxLayout="row" fxFlex="30" fxLayoutAlign="start start">\n          <div fxLayout="column" fxFlex="100" fxLayoutAlign="space-around stretch">\n            <md-toolbar>Comments</md-toolbar>\n            <div class="comments">\n              <md-card *ngFor="let comment of comments" class="comment">\n                <md-card-header>\n                  <img md-card-avatar [src]="comment.authorProfileImageUrl">\n                  <md-card-title class="comment-title">{{comment.authorDisplayName}}</md-card-title>\n                  <md-card-subtitle>Likes: {{comment.likeCount}}</md-card-subtitle>\n                </md-card-header>\n                <md-card-content><div [innerHTML]="comment.textDisplay"></div></md-card-content>\n              </md-card>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div fxLayout="column" fxFlex="30" fxLayoutAlign="start stretch">\n      <md-card *ngIf="video">\n        <md-card-header>\n          <img md-card-avatar [src]="video.thumbnailUrlMedium">\n          <md-card-title>{{video.title}}</md-card-title>\n          <md-card-subtitle>{{video.description}}</md-card-subtitle>\n        </md-card-header>\n        <md-card-content>\n          <p>\n            Views: {{video.statisticViewCount}} | Duration: {{video.duration}}\n          </p>\n        </md-card-content>\n      </md-card>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n'},gQav:function(t,e,n){"use strict";var i=n("3j3K"),o=n("Fzro"),r=n("Gvdl");n.n(r);n.d(e,"a",function(){return c});var a=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.http=t}return t.prototype.extractData=function(t){return t.json()},t.prototype.handleError=function(t){return console.error(t),r.Observable.throw(t.json().error||"Server Error")},t.prototype.searchVideos=function(t){return this.http.get("https://www.googleapis.com/youtube/v3/search?part=snippet&q="+t+"&maxResults=50&type=video&key=AIzaSyAW5x6wXJMsd6dXt_tBrWZHWDI7oK9Qhl8").map(function(t){return t.json()})},t.prototype.getCommentsByVideoId=function(t){return this.http.get("https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId="+t+"&maxResults=50&order=relevance&key=AIzaSyAW5x6wXJMsd6dXt_tBrWZHWDI7oK9Qhl8").map(this.extractData)},t.prototype.getVideoById=function(t){return this.http.get("https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id="+t+"&key=AIzaSyAW5x6wXJMsd6dXt_tBrWZHWDI7oK9Qhl8").map(this.extractData)},t.prototype.getVideoCategories=function(t){return this.http.get("https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode="+t+"&key=AIzaSyAW5x6wXJMsd6dXt_tBrWZHWDI7oK9Qhl8").map(this.extractData)},t.prototype.getVideosByCategory=function(t,e){return this.http.get("https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&part=snippet,contentDetails,statistics&regionCode="+t+"&videoCategoryId="+e+"&maxResults=6&key=AIzaSyAW5x6wXJMsd6dXt_tBrWZHWDI7oK9Qhl8").map(this.extractData)},t.prototype.searchLiveVideos=function(t){return this.http.get("https://www.googleapis.com/youtube/v3/search?part=snippet&q="+t+"&maxResults=25&type=video&eventType=live&key=AIzaSyAW5x6wXJMsd6dXt_tBrWZHWDI7oK9Qhl8").map(function(t){return t.json()})},t}();c=a([n.i(i.Injectable)(),s("design:paramtypes",["function"==typeof(d=void 0!==o.b&&o.b)&&d||Object])],c);var d},kZql:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i={production:!0}},m49h:function(t,e,n){"use strict";var i=n("3j3K");n.d(e,"a",function(){return a});var o=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){this.disabled=!1,this.icon="",this.label="",this.color="",this.action=new i.EventEmitter,this.hasFocus=!1}return t.prototype.onClick=function(){this.action.emit()},t}();o([n.i(i.Input)(),r("design:type",Object)],a.prototype,"disabled",void 0),o([n.i(i.Input)(),r("design:type",Object)],a.prototype,"icon",void 0),o([n.i(i.Input)(),r("design:type",Object)],a.prototype,"label",void 0),o([n.i(i.Input)(),r("design:type",Object)],a.prototype,"color",void 0),o([n.i(i.Output)(),r("design:type",Object)],a.prototype,"action",void 0),a=o([n.i(i.Component)({selector:"anms-big-input-action",template:n("/3wW"),styles:[n("Gmjq")]})],a)},nQeb:function(t,e,n){"use strict";var i=n("3j3K"),o=n("Qbdm");n.d(e,"a",function(){return s});var r=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t){this.sanitizer=t}return t.prototype.transform=function(t){var e="https://www.youtube.com/embed/"+t+"?autoplay=1";return this.sanitizer.bypassSecurityTrustResourceUrl(e)},t}();s=r([n.i(i.Pipe)({name:"youtubeSafeUrl"}),a("design:paramtypes",["function"==typeof(c=void 0!==o.f&&o.f)&&c||Object])],s);var c},oB5N:function(t,e,n){"use strict";var i=n("3j3K");n.d(e,"a",function(){return a});var o=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){this.value="",this.disabled=!1,this.hasFocus=!1}return t}();o([n.i(i.Input)(),r("design:type",String)],a.prototype,"placeholder",void 0),o([n.i(i.Input)(),r("design:type",Object)],a.prototype,"value",void 0),o([n.i(i.Input)(),r("design:type",Object)],a.prototype,"disabled",void 0),a=o([n.i(i.Component)({selector:"anms-big-input",template:n("66Mc"),styles:[n("wbiD")]})],a)},pibQ:function(t,e,n){"use strict";var i=n("3j3K"),o=n("5oXY");n.d(e,"a",function(){return s});var r=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t){this.router=t,this.navLinks=[{label:"HOME",path:""},{label:"CREDITS",path:"/credits"}],this.sidenavToggleEvent=new i.EventEmitter,this.searchQuery=""}return t.prototype.ngOnInit=function(){},t.prototype.ngOnDestroy=function(){},t.prototype.sendSignalToToggleSideNav=function(){this.sidenavToggleEvent.emit("Toggle")},t.prototype.onSearchChange=function(t){this.searchQuery=t},t.prototype.onSearch=function(){this.router.navigate(["/search"],{queryParams:{query:this.searchQuery}})},t.prototype.onSearchReset=function(){this.searchQuery=""},t}();r([n.i(i.Output)(),a("design:type","function"==typeof(c=void 0!==i.EventEmitter&&i.EventEmitter)&&c||Object)],s.prototype,"sidenavToggleEvent",void 0),s=r([n.i(i.Component)({selector:"oas-header",template:n("Sf+L"),styles:[n("EV7H")]}),a("design:paramtypes",["function"==typeof(d=void 0!==o.c&&o.c)&&d||Object])],s);var c,d},pic7:function(t,e,n){"use strict";var i=n("3j3K");n.d(e,"a",function(){return a});var o=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t.prototype.ngOnInit=function(){},t}();a=o([n.i(i.Component)({selector:"oas-footer",template:n("F3P+"),styles:[n("9ARh")]}),r("design:paramtypes",[])],a)},raJh:function(t,e){t.exports='<div fxLayout="row" fxFlex fxLayoutAlign="center center">\n  <md-card class="credits-card">\n    <md-card-header>\n      <div md-card-avatar class="credits-header-image"></div>\n      <md-card-title>Gökhan Sari</md-card-title>\n      <md-card-subtitle>30 years old, father, living in Zurich, originally from Turkey</md-card-subtitle>\n    </md-card-header>\n    <img md-card-image src="assets/images/profile.png" alt="Gökhan Sari">\n    <md-card-content>\n      <p>\n        My career as a software engineer has allowed me to extensively broaden my skills in all aspects of software design & development and I consider myself to be a full stack developer. With every new project I will always find opportunities to experiment with new and current frameworks such as popular ones as Spring, Hibernate and AngularJS. I have worked in large and small organisations but not matter the size of the company, I have always believed in pushing myself in delivering and developing innovative products.\n\n        Since my childhood I have always had a keen interest in programming and this has grown my passion for engineering. I have a very keen interest about 3D design and game development and develop games in my free time.\n\n        Here are a list of tools/frameworks that I am an expert in:\n\n        <br/>Backend: Java, Spring, Hibernate/SQL, Maven, REST interfaces\n        <br/>Frontend: Angular, GWT/GXT, Apache Cordova, NativeScript\n        <br/>Testing tools: JUnit, Selenium, PyAutoGUI\n        <br/>Game development: Unity 3D and C#\n      </p>\n    </md-card-content>\n    <md-card-actions>\n      <a href="https://www.linkedin.com/in/goekhan-sari" md-raised-button color="accent" target="_blank"><md-icon>public</md-icon> LinkedIn</a>\n      <a href="https://twitter.com/goekhansari" md-raised-button color="accent" target="_blank"><md-icon>public</md-icon> Twitter</a>\n      <a href="https://medium.com/@gsari" md-raised-button color="warn" target="_blank"><md-icon>public</md-icon> Medium</a>\n      <a href="https://www.instagram.com/goekhansari" md-raised-button color="warn" target="_blank"><md-icon>public</md-icon> Instagram</a>\n    </md-card-actions>\n  </md-card>\n</div>\n'},sQHO:function(t,e,n){e=t.exports=n("FZ+f")(),e.push([t.i,"@media (min-width:1281px){.wrapper{z-index:-2;min-height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.wrapper .content{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;position:relative;overflow:scroll;height:calc(100vh - 14vh - 55px);margin-bottom:55px}.wrapper md-sidenav{width:35vw}}@media (max-width:1280px){.wrapper{z-index:-2;min-height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.wrapper .content{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;position:relative;overflow:scroll;height:calc(100vh - 19vh - 55px);margin-bottom:55px}.wrapper md-sidenav{width:35vw}}",""]),t.exports=t.exports.toString()},u87A:function(t,e,n){"use strict";var i=n("3j3K"),o=n("2Je8"),r=n("SwkK");n.d(e,"a",function(){return s});var a=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},s=function(){function t(){}return t}();s=a([n.i(i.NgModule)({imports:[o.CommonModule,r.a],exports:[o.CommonModule,r.a],declarations:[]})],s)},wbiD:function(t,e,n){e=t.exports=n("FZ+f")(),e.push([t.i,".big-input{width:100%;height:5vh;display:-webkit-box;display:-ms-flexbox;display:flex;padding:10px 10px 10px 20px}.big-input input{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;border:0;font-size:20px;min-width:100px}.big-input md-card{width:100%}.big-input :focus,.big-input input:focus,.big-input textarea:focus{outline:none}",""]),t.exports=t.exports.toString()},x35b:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("3j3K"),o=n("O61y"),r=n("Iksp");n("kZql").a.production&&n.i(i.enableProdMode)(),n.i(o.a)().bootstrapModule(r.a)},"yCM/":function(t,e,n){"use strict";var i=n("3j3K");n.d(e,"a",function(){return a});var o=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t.prototype.ngOnInit=function(){},t}();a=o([n.i(i.Component)({selector:"oas-credits",template:n("raJh"),styles:[n("dBbS")]}),r("design:paramtypes",[])],a)},zJyU:function(t,e,n){"use strict";var i=n("Um43");n.d(e,"a",function(){return r});var o="route-enter-staggered",r=n.i(i.a)("routerTransition",[n.i(i.d)("* <=> *",[n.i(i.m)(":enter, :leave",n.i(i.c)({position:"fixed",width:"100%"}),{optional:!0}),n.i(i.m)(":enter ."+o,n.i(i.c)({opacity:0}),{optional:!0}),n.i(i.n)([n.i(i.m)(":enter",[n.i(i.c)({transform:"translateY(-3%)",opacity:0}),n.i(i.e)("0.5s 0.5s ease-in-out",n.i(i.c)({transform:"translateY(0%)",opacity:1}))],{optional:!0}),n.i(i.m)(":leave",[n.i(i.c)({transform:"translateY(0%)",opacity:1}),n.i(i.e)("0.2s ease-in-out",n.i(i.c)({transform:"translateY(-3%)",opacity:0}))],{optional:!0})]),n.i(i.m)(":enter ."+o,n.i(i.o)(100,[n.i(i.c)({transform:"translateY(15%)",opacity:0}),n.i(i.e)("0.5s ease-in-out",n.i(i.c)({transform:"translateY(0%)",opacity:1}))]),{optional:!0})])])},zbEE:function(t,e,n){"use strict";var i=n("3j3K"),o=n("2Je8"),r=n("fYnu"),a=n("cXjt"),s=n("VCzo"),c=n("NVOs");n.d(e,"a",function(){return l});var d=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},l=function(){function t(){}return t}();l=d([n.i(i.NgModule)({imports:[o.CommonModule,a.a,c.a,r.i,r.j,r.k,r.l,r.m,r.n,r.o,r.p,r.q,r.r,r.s,r.t,r.u,r.v],declarations:[s.a],exports:[s.a]})],l)}},[0]);