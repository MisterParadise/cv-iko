import { Language } from "../constants/constants"

export type CvModel = {
    cv_data: CvModelLang[]
}

export type CvModelLang = {
    language: Language,
    infos: Infos,
    links?: Link,
    experiences?: Experience[],
    education?: Education[],
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
    websiteUrl?: string
}

export type Experience = {
    title: string,
    company: string,
    location: string,
    description?: string,
    dateIn: Date,
    dateOut?: Date
}

export type Education = {
    title: string,
    location: string,
    description?: string,
    dateIn: Date;
    dateOut?: Date
}

export type Skill = {
    title: string
}

export type Hobby = {
    title: string
}

export type Project = {
    title: string
}