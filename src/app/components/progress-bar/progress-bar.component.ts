import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  @Input() label;
  @Input() progression;

  constructor() { }

  ngOnInit(): void {
  }

  getProgression() {
    return this.progression * 10;
  }

}
