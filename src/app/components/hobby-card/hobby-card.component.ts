import { Component, Input, OnInit } from '@angular/core';
import { Hobby } from 'src/app/models/cv.model';

@Component({
  selector: 'app-hobby-card',
  templateUrl: './hobby-card.component.html',
  styleUrls: ['./hobby-card.component.scss']
})
export class HobbyCardComponent implements OnInit {

  @Input() data: Hobby;

  constructor() { }

  ngOnInit(): void {
  }

}
