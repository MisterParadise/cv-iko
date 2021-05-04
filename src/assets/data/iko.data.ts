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
                institution:"Sopra Steria",
                location:"Nantes, France",
                dateIn: "02/2019",
                dateOut: "Aujourd'hui",
                descriptions: [ 
                    "07/2020 - Aujourd'hui : Développeur Big Data pour un client dans le secteur de l'énergie.", 
                    "02/2019 - 07/2020 : Développeur fullstack sur un portail web de suivi de consommation énergétique."
                ],
                logo: {
                    logoUrl: "assets/img/Sopra_Steria_logo.svg",
                    logoHeight: 13
                },
                stickers: [{
                        label: "Angular 6",
                        logoUrl: "assets/img/angular.svg"
                    }, {
                        label: "Java",
                        logoUrl: "assets/img/java.svg"
                    },  {
                        label: "HTML5",
                        logoUrl: "assets/img/html5.svg"
                    }, {
                        label: "SCSS",
                        logoUrl: "assets/img/sass.svg"
                    }, {
                        label: "Spring"
                    }, {
                        label: "Maven"
                    }, {
                        label: "Git",
                        logoUrl: "assets/img/git.svg"
                    }, {
                        label: "Jenkins",
                        logoUrl: "assets/img/jenkins.svg"
                    }, {
                        label: "Openshift"
                    }, {
                        label: "Hadoop"
                    }, {
                        label: "SCRUM"
                    }, {
                        label: "SAFE"
                    }
                ]
            },
            {
                title: "Stagiaire ingénieur biomédical",
                institution: "INL",
                logo: {
                    logoUrl: "assets/img/inl-cnrs-logo.png"
                },
                location: "Villeurbanne, France",
                dateIn: "03/2017",
                dateOut: "08/2017",
                descriptions: ["Stage effectué dans le cadre du diplôme d’ingénieur biomédical. Conception et fabrication d'un capteur autoalimenté portable pour le monitoring de la santé. Prise en main de microcontrôleurs basse consommation."]
            }, {
                title: "Stagiaire assistant ingénieur",
                institution: "CAPIO - Polyclinique du beaujolais",
                location: "Villefranche sur Saône, France",
                dateIn: "10/2015",
                dateOut: "01/2016",
                descriptions: ["Stage effectué dans le cadre du diplôme d’ingénieur biomédical. Mise en place d’une nouvelle GMAO (CARL Software) au sein d’un établissement de soins. Travaux annexes d’assistance à l’ingénieur biomédical de la clinique."]
            }, {
                title: "Stagiaire technicien biomédical",
                institution: "Centre hospitalier du Haut Bugey",
                location: "Oyonnax, France",
                dateIn: "07/2015",
                dateOut: "08/2015",
                descriptions: ["Stage effectué dans le cadre du diplôme d’ingénieur biomédical. Assistance au technicien biomédical du centre hospitalier."]
            }, {
                title: "Stagiaire technicien",
                institution: "CERN",
                logo: {
                    logoUrl: "assets/img/cern-vector-logo.svg"
                },
                location: "Genève",
                dateIn: "03/2014",
                dateOut: "06/2014",
                descriptions: ["Stage effectué dans le cadre du DUT Mesures Physiques. Étude et caractérisation d’un nouvel analyseur de gaz en vue d’une utilisation au sein d’un accélérateur de particules."]
            }
        ],
        education: [
            {
                title: "Ingénieur biomédical",
                location: "Villeurbanne, France",
                logo: {
                    logoUrl: "assets/img/polytech-logo.svg",
                    logoHeight: 30
                },
                dateIn: "2014",
                dateOut: "2017",
                institution: "Polytech Lyon"
            }, 
            {
                title: "DUT Mesures Physique",
                location: "Annecy, France",
                logo: {
                    logoUrl: "assets/img/iut-logo.svg",
                    logoHeight: 30
                },
                dateIn: "2012",
                dateOut: "2014",
                institution: "Université de Savoie"
            }
        ],
        skills: [
            {
                title: "Savoir-faire",
                progressBars: [{
                    label: "Angular",
                    rating: 8
                }, {
                    label: "Java",
                    rating: 7
                }, {
                    label: "Spark",
                    rating: 5
                }, {
                    label: "Scala",
                    rating: 4
                }],
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
            }, {
                title: "Savoir-être",
                stickers: [{
                    label: "Esprit d'équipe"
                }, {
                    label: "Curiosité"
                }]
            }, {
                title: "Langues",
                progressBars: [{
                    label: "Français",
                    rating: 10
                }, {
                    label: "English",
                    rating: 8
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