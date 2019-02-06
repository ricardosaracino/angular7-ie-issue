import {AfterViewInit, Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {NavigationEnd, Router} from '@angular/router';
import {LocationStrategy} from '@angular/common';
import {MatSidenav} from '@angular/material';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit, AfterViewInit {

  @ViewChild('drawer') public drawer: MatSidenav;

  public isPopState = false;

  public isContinueVisible = false;

  public showDownloadError = false;

  public isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private router: Router, private locationStrategy: LocationStrategy,
              private breakpointObserver: BreakpointObserver) {
  }

  public ngOnInit(): void {
    this.locationStrategy.onPopState(() => {
      this.isPopState = true;
    });

    this.router.events.subscribe(event => {

      // Scroll to top if accessing a page, not via browser history stack
      if (event instanceof NavigationEnd && !this.isPopState) {

        this.drawer.close(); // todo if they click the same link it wont close

        this.isPopState = false;
      }

      // Ensures that isPopState is reset
      if (event instanceof NavigationEnd) {
        this.isPopState = false;
      }
    });
  }

  public ngAfterViewInit(): void {
  }

  public continue() {
  }

  public logout() {
  }

  /**
   *
   */
  @HostListener('window:beforeunload', ['$event'])
  public unloadNotification($event): void | string {
  }
}
