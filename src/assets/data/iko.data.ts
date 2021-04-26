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
                dateIn: new Date("2019, 2, 11"),
                description: "MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION MA DESCRIPTION "
            },
            {
                title:"Stagiaire ingénieur biomédical",
                company:"INL",
                location: "Villeurbanne, France",
                dateIn: new Date("2016,1,1")
            }
        ],
        education: [
            {
                title: "Ingénieur biomédical",
                location: "Villeurbanne",
                dateIn: new Date("2014,9,1")
            }, 
            {
                title: "DUT Mesures Physique",
                location: "Annecy",
                dateIn: new Date("2012,9,1")
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