import { Language } from "src/app/constants/constants";
import { MenuModel } from "src/app/models/menu.model";

export const MENU_DATA: MenuModel = {
    menu_data: [{
        language: Language.FRENCH,
        languageSelectionPhrase: 'Sélectionnez votre langue',
        experiences: 'Expériences',
        education: 'Formations',
        skills: 'Compétences',
        hobbies: 'Centres d\'intérêts',
        projects: 'Projets'
    },
    {
        language: Language.ENGLISH,
        languageSelectionPhrase: 'Select your language',
        experiences: 'Experiences',
        education: 'Education',
        skills: 'Skills',
        hobbies: 'Hobbies',
        projects: 'Projects'
    },
]
}