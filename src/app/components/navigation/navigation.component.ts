import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuModelLanguage } from 'src/app/models/menu.model';
import { DataLanguageService } from 'src/app/services/data-language.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  menuInfos: MenuModelLanguage;
  menuInfosSubscription: Subscription;

  constructor(private dataLanguageService: DataLanguageService) {
    this.menuInfosSubscription = this.dataLanguageService.menuInfosSubject.subscribe(
      (menuInfos: MenuModelLanguage) => {
        this.menuInfos = menuInfos;
      }
    )
  }

  ngOnInit(): void {
    this.dataLanguageService.emitMenuInfosSubject();
  }

}
