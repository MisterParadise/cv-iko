import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { DetailsComponent } from './components/details/details.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ContactComponent } from './components/contact/contact.component';
import { InfoComponent } from './components/info/info.component';
import { LinkComponent } from './components/link/link.component';
import { DataLanguageService } from './services/data-language.service';
import { ExperienceCardComponent } from './components/experience-card/experience-card.component';
import { EducationCardComponent } from './components/education-card/education-card.component';
import { SkillsCardComponent } from './components/skills-card/skills-card.component';
import { HobbyCardComponent } from './components/hobby-card/hobby-card.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DetailsComponent,
    NavigationComponent,
    ContactComponent,
    InfoComponent,
    LinkComponent,
    ExperienceCardComponent,
    EducationCardComponent,
    SkillsCardComponent,
    HobbyCardComponent,
    ProjectCardComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [
    DataLanguageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
