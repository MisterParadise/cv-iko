import { Component, HostListener, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { MOBILE_WIDTH_SIZE } from 'src/app/constants/constants';
import { CvModelLang, Education, Experience, Hobby, Project, Skill } from 'src/app/models/cv.model';
import { MenuModelLanguage } from 'src/app/models/menu.model';
import { DataLanguageService } from 'src/app/services/data-language.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnChanges {

  innerWidth: any;

  experiences: Experience[];
  educations: Education[];
  skills: Skill[];
  hobbies: Hobby[];
  projects: Project[];
  noDateOutPlaceholder: string;

  menuInfos: MenuModelLanguage;

  CvdataSubscription: Subscription;
  MenusInfosSubscription: Subscription;

  

  constructor(private dataLanguageService: DataLanguageService) { 
    this.CvdataSubscription = this.dataLanguageService.cvInfosSubject.subscribe(
      (cvInfos: CvModelLang) => {
        this.experiences = cvInfos.experiences;
        this.educations = cvInfos.education;
        this.skills = cvInfos.skills;
        this.hobbies = cvInfos.hobbies;
        this.projects = cvInfos.projects;
      }
    );

    this.MenusInfosSubscription = this.dataLanguageService.menuInfosSubject.subscribe(
      (menuInfos: MenuModelLanguage) => {
        this.menuInfos = menuInfos;
      }
    )
  }

  ngOnInit(): void {
    this.dataLanguageService.emitMenuInfosSubject();
    this.innerWidth = window.innerWidth;
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'innerWidth': {
            this.innerWidth = changes.currentValue;
          }
        }
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  isMobile() {
    return this.innerWidth <= MOBILE_WIDTH_SIZE;
  }

}
