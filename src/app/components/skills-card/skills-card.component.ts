import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/cv.model';

@Component({
  selector: 'app-skills-card',
  templateUrl: './skills-card.component.html',
  styleUrls: ['./skills-card.component.scss']
})
export class SkillsCardComponent implements OnInit {

  @Input() data: Skill;

  constructor() { }

  ngOnInit(): void {
  }

}
