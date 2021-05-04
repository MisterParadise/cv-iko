import { Component, HostListener, OnInit } from '@angular/core';
import { constants } from 'node:buffer';
import { MOBILE_WIDTH_SIZE } from './constants/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  innerWidth: any;

  title = 'cv-iko';  

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  isMobile() {
    return this.innerWidth <= MOBILE_WIDTH_SIZE;
  }
}
