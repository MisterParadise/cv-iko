import { Component, Input, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/cv.model';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss'],
  animations: [
    trigger("expandExperienceCard", [
      state(
        "void",
        style({
          height: "0px",
          overflow: "hidden"
        })
      ),
      transition(":enter", [
        animate(
          "200ms ease-out",
          style({
            height: "*",
            overflow: "hidden"
          })
        )
      ]),
      transition(":leave", [
        animate(
          "200ms ease-out", 
          style({
            height: "0px",
            overflow: "hidden"
          })
        )
      ])
    ])
  ]
})
export class ExperienceCardComponent implements OnInit {

  @Input() data: Experience;
  @Input() noDateOutPlaceholder: string;

  openTab: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  switchOpenTabStatus() {
    this.openTab = !this.openTab;
  }

}
