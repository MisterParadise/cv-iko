import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Language } from 'src/app/constants/constants';
import { DataLanguageService } from 'src/app/services/data-language.service';
import { MenuModelLanguage } from 'src/app/models/menu.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  languageSelection: Language;
  Language = Language;
  
  languageSelectionPhrase: string;
  menuSubscription: Subscription;

  constructor(private dataLanguageService: DataLanguageService) { 
    this.languageSelection = this.dataLanguageService.getLanguage();

    this.menuSubscription = this.dataLanguageService.menuInfosSubject.subscribe(
      (menuInfos: MenuModelLanguage) => {
        this.languageSelectionPhrase = menuInfos.languageSelectionPhrase;
      }
    )
  }

  ngOnInit(): void {
    this.dataLanguageService.emitMenuInfosSubject();
  }

  onSwitchLanguage() {
    this.dataLanguageService.switchLanguage(this.languageSelection);
  }
}
