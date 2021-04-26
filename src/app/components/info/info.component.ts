import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Language } from 'src/app/constants/constants';
import { CvModelLang, Infos } from 'src/app/models/cv.model';
import { DataLanguageService } from 'src/app/services/data-language.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  infos: Infos;
  infosSubscription: Subscription;

  constructor(private dataLanguageService: DataLanguageService) { 
    this.infosSubscription = this.dataLanguageService.cvInfosSubject.subscribe(
      (cvInfos: CvModelLang)=> {
        this.infos = cvInfos.infos;
      }
    );
  }

  ngOnInit(): void {
    this.dataLanguageService.emitCvInfosSubject();
  }

  getFullName(): string {
    return this.infos.firstName.toUpperCase() + " " + this.infos.lastName.toUpperCase();
  }
}
