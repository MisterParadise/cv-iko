import { Language } from "../constants/constants"

export type MenuModel = {
    menu_data: MenuModelLanguage[]
}

export type MenuModelLanguage = {
    language: Language,
    languageSelectionPhrase: string,
    experiences: string,
    education: string,
    skills: string,
    hobbies: string,
    projects: string
}