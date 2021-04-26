import { Injectable, OnInit } from "@angular/core";
import { element } from "protractor";
import { Subject } from "rxjs";
import { IKO_DATA } from "src/assets/data/iko.data";
import { MENU_DATA } from "src/assets/data/menu.data";
import { Language } from "../constants/constants";
import { CvModelLang } from "../models/cv.model"
import { MenuModel, MenuModelLanguage } from "../models/menu.model";

@Injectable()
export class DataLanguageService{
    //DEFAULT VALUE
    language = Language.FRENCH;

    cvInfosSubject = new Subject<CvModelLang>();
    cvInfos: CvModelLang = IKO_DATA.cv_data.find(element => element.language === this.language);

    menuInfosSubject = new Subject<MenuModelLanguage>();
    menuInfos: MenuModelLanguage = MENU_DATA.menu_data.find(element => element.language === this.language);

    emitCvInfosSubject() {
        this.cvInfosSubject.next(this.cvInfos);
    }

    emitMenuInfosSubject() {
        this.menuInfosSubject.next(this.menuInfos);
    }

    emitSubjects() {
        this.emitCvInfosSubject();
        this.emitMenuInfosSubject();
    }

    switchLanguage(language: Language) {
        this.cvInfos = IKO_DATA.cv_data.find(element => element.language === language);
        this.menuInfos = MENU_DATA.menu_data.find(element => element.language === language);
        this.emitSubjects();
    }

    getLanguage(): Language {
        return this.language;
    }

    
}