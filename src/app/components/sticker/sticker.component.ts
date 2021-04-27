import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.scss']
})
export class StickerComponent implements OnInit {

  @Input() label: string;
  @Input() logoUrl: string;

  constructor() { }

  ngOnInit(): void {
  }

  isLogoUrlProvided() {
    return !!this.logoUrl;
  }
}
