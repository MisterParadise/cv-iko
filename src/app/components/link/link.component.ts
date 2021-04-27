import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CvModelLang, Link } from 'src/app/models/cv.model';
import { DataLanguageService } from 'src/app/services/data-language.service';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {

  links: Link[];
  linkSubscription: Subscription;

  constructor(private dataLanguageService: DataLanguageService) { 
    this.linkSubscription = this.dataLanguageService.cvInfosSubject.subscribe(
      (cvInfos: CvModelLang) => {
        this.links = cvInfos.links;
      }
    );
  }

  ngOnInit(): void {
    this.dataLanguageService.emitCvInfosSubject();
  }

  isEmail(link: Link) {
    return !!link.email;
  }
}
