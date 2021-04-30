import { Language } from "src/app/constants/constants";
import { CvModel } from "src/app/models/cv.model";

export const IKO_DATA:  CvModel = {
    cv_data: [{
        language: Language.FRENCH,
        infos: {
            firstName: 'Ivan',
            lastName: 'Kolodziejczyk',
            description: "Installé à Nantes mais originaire de la région Lyonnaise, je suis diplômé ingénieur biomédical reconverti en développeur full-stack au sein de Sopra Steria depuis 2 ans."
        },
        experiences: [
            {
                title:"Développeur Full-Stack",
                company:"Sopra Steria",
                location:"Nantes, France",
                dateIn: "02/2019",
                dateOut: "Aujourd'hui",
                description: "MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION ",
                stickers: [
                    {
                        label: "Angular",
                        logoUrl: "assets/img/angular.svg"
                    },
                    {
                        label: "Maven"
                    }, 
                    {
                        label: "HTML5"
                    },
                    {
                        label: "CSS3"
                    },
                    {
                        label: "SCSS"
                    }
                ]
            },
            {
                title:"Stagiaire ingénieur biomédical",
                company:"INL",
                location: "Villeurbanne, France",
                dateIn: "01/2016",
                dateOut: "09/2016",
                description: "Petit description de ses morts"
            }
        ],
        education: [
            {
                title: "Ingénieur biomédical",
                location: "Villeurbanne",
                dateIn: "09/2014"
            }, 
            {
                title: "DUT Mesures Physique",
                location: "Annecy",
                dateIn: "09/2012"
            }
        ],
        skills: [
            {
                title: "Compétences informatiques",
                stickers: [{
                    label: "Angular",
                    logoUrl: "assets/img/angular.svg"
                }, {
                    label: "Maven"
                }, {
                    label: "Spark"
                }, {
                    label: "Java"
                }]
            }
        ],
        hobbies: [
            {
                title: "Guitare"
            },
            {
                title: "Sciences"
            },
            {
                title: "Jeux vidéos"
            }
        ],
        links: [
            {
                pictoUrl: "assets/img/github.svg",
                url: "https://github.com/MisterParadise"
            },
            {
                pictoUrl: "assets/img/linkedin.svg",
                url: "https://www.linkedin.com/in/ivan-kolodziejczyk-19006ab1/"
            }, {
                pictoUrl: "assets/img/mail.svg",
                email: "ivan.kolodziejczyk@gmail.com"
            }
        ]
    }, {
        language: Language.ENGLISH,
        infos: {
            firstName: 'Ivan',
            lastName: 'Kolodziejczyk',
            description: "Hello I'm a fullstack developper and I pretty much like Angular :)"
        }
    }]
}