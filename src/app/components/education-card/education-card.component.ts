import { Component, Input, OnInit } from '@angular/core';
import { Education } from 'src/app/models/cv.model';

@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.scss']
})
export class EducationCardComponent implements OnInit {

  @Input() data: Education;

  constructor() { }

  ngOnInit(): void {
  }

}
