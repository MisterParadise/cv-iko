import { Language } from "../constants/constants"

export type CvModel = {
    cv_data: CvModelLang[]
}

export type CvModelLang = {
    language: Language,
    infos: Infos,
    links?: Link[],
    experiences?: Experience[],
    education?: Experience[],
    skills?: Skill[],
    hobbies?: Hobby[],
    projects?: Project[]
}

export type Infos = {
    firstName: string,
    lastName: string,
    description?: string,
    photoUrl?: string
}

export type Link = {
    pictoUrl: string,
    url?: string,
    email?: string,
    
}

export type Experience = {
    title: string,
    institution: string,
    location: string,
    descriptions?: string[],
    dateIn: string,
    dateOut: string,
    stickers?: Sticker[],
    logo?: Logo
}

export type Education = {
    title: string,
    location: string,
    description?: string,
    dateIn: string;
    dateOut?: string,
    stickers?: Sticker[]
}

export type Skill = {
    title: string,
    progressBars?: ProgressBar[]
    stickers?: Sticker[]
}

export type Hobby = {
    title: string
}

export type Project = {
    title: string,
    stickers?: Sticker[]
}

export type Sticker = {
    label: string
    logoUrl?: string
}

export type ProgressBar = {
    label: string,
    rating: number
}

export type Logo = {
    logoUrl: string,
    logoWidth?: number,
    logoHeight?: number
}