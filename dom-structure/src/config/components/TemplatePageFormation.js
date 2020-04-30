import {
    settingsCTA, settingsCTAnoState,
    settingsSingleImage,
    settingsTemplate,
    settingsText,
    settingsTitle
} from "../../utils/organism.model.config";

export default {
    model: 'TemplatePageFormation',
    fields: [
        {
            name: 'Header Template',
            nameProperty: 'HeaderTemplate',
            typeField: 'Template',
            content: {
                responsive: ['M', 'T', 'D'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTemplate

        },
        {
            name: 'Header Title',
            nameProperty: 'HeaderTitle',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTitle
        },
        {
            name: 'Header Tagline',
            nameProperty: 'HeaderTagline',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTitle
        },
        {
            name: 'Main Template',
            nameProperty: 'MainTemplate',
            typeField: 'Template',
            content: {
                responsive: ['M', 'T', 'D'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTemplate
        },
        {
            name: 'Main Heading 1',
            nameProperty: 'MainHeading1',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTitle
        },
        {
            name: 'Main Heading 2',
            nameProperty: 'MainHeading2',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTitle
        },
        {
            name: 'Main Heading 3',
            nameProperty: 'MainHeading3',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTitle
        },
        {
            name: 'Main Content',
            nameProperty: 'MainContent',
            typeField: 'TextMarkdown',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsText
        },
        {
            name: 'Main Content Bold',
            nameProperty: 'ContentMainBold',
            typeField: 'TextMarkdown',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsText
        },
        {
            name: 'Main Content Link',
            nameProperty: 'ContentMainLink',
            typeField: 'TextMarkdown',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsText
        },
        {
            name: 'Program Title',
            nameProperty: 'ProgramTitle',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                    text: {}
                }
            },
            settings: {}
        },
        {
            name: 'Method Title',
            nameProperty: 'MethodTitle',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                    text: {}
                }
            },
            settings: {}
        },
        {
            name: 'Badge Template',
            nameProperty: 'BadgeTemplate',
            typeField: 'Template',
            content: {
                responsive: ['M', 'T', 'D'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTemplate
        },
        {
            name: 'Badge Image',
            nameProperty: 'BadgeImage',
            typeField: 'SingleImage',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsSingleImage
        },
        {
            name: 'Session Insert Template',
            nameProperty: 'SessionTemplate',
            typeField: 'Template',
            content: {
                responsive: ['M', 'T', 'D'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTemplate
        },
        {
            name: 'Session Insert Title',
            nameProperty: 'SessionTitle',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTitle
        },
        {
            name: 'Promo Template',
            nameProperty: 'PromoTemplate',
            typeField: 'Template',
            content: {
                responsive: ['M', 'T', 'D'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTemplate
        },
        {
            name: 'Promo Title',
            nameProperty: 'PromoTitle',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTitle
        },
        {
            name: 'Promo Tagline',
            nameProperty: 'PromoTagline',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsText
        },
        {
            name: 'Inscription CTA',
            nameProperty: 'InscriptionCTA',
            typeField: 'CTA',
            content: {
                responsive: ['A'],
                defaultValue: {
                    text: {},
                    icon: {}
                }
            },
            settings: settingsCTAnoState

        },
        {
            name: 'Contact Template',
            nameProperty: 'ContactTemplate',
            typeField: 'Template',
            content: {
                responsive: ['M', 'T', 'D'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTemplate
        },
        {
            name: 'Contact Title',
            nameProperty: 'ContactTitle',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                    text: {}
                }
            },
            settings: settingsTitle
        },
        {
            name: 'CTA Contact',
            nameProperty: 'ContactCTA',
            typeField: 'CTA',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                    text: {},
                    link: {},
                    icon: {}
                }
            },
            settings: settingsCTA

        },
        {
            name: 'Partner Template',
            nameProperty: 'PartnerTemplate',
            typeField: 'Template',
            content: {
                responsive: ['M', 'T', 'D'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTemplate
        },
        {
            name: 'Partner Title',
            nameProperty: 'PartnerTitle',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                    text: {}
                }
            },
            settings: settingsTitle
        },
        {
            name: 'Partner Image',
            nameProperty: 'PartnerImage',
            typeField: 'SingleImage',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsSingleImage
        },{
            name: 'Public Template',
            nameProperty: 'TemplatePublic',
            typeField: 'Template',
            content: {
                responsive: ['M', 'T', 'D'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTemplate
        },
        {
            name: 'Public Title',
            nameProperty: 'PublicTitle',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                    text: {}
                }
            },
            settings: settingsTitle
        },
        {
            name: 'Public Content',
            nameProperty: 'PublicContent',
            typeField: 'TextMarkdown',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsText
        },
        {
            name: 'Prerequisite Template',
            nameProperty: 'PrerequisiteTemplate',
            typeField: 'Template',
            content: {
                responsive: ['M', 'T', 'D'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTemplate
        },
        {
            name: 'Prerequisite Title',
            nameProperty: 'PrerequisiteTitle',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                    text: {}
                }
            },
            settings: settingsTitle
        },
        {
            name: 'Prerequisite Content',
            nameProperty: 'PrerequisiteContent',
            typeField: 'TextMarkdown',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsText
        },
        {
            name: 'Goal Template',
            nameProperty: 'GoalTemplate',
            typeField: 'Template',
            content: {
                responsive: ['M', 'T', 'D'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTemplate
        },
        {
            name: 'Goal Title',
            nameProperty: 'GoalTitle',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                    text: {}
                }
            },
            settings: settingsTitle
        },
        {
            name: 'Goal Content',
            nameProperty: 'GoalContent',
            typeField: 'TextMarkdown',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsText
        },
        {
            name: 'Certification Template',
            nameProperty: 'CertificationTemplate',
            typeField: 'Template',
            content: {
                responsive: ['M', 'T', 'D'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTemplate
        },
        {
            name: 'Certification Title',
            nameProperty: 'CertificationTitle',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                    text: {}
                }
            },
            settings: settingsTitle
        },
        {
            name: 'Certification Content',
            nameProperty: 'CertificationContent',
            typeField: 'TextMarkdown',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsText
        },
        {
            name: 'Validation Template',
            nameProperty: 'ValidationTemplate',
            typeField: 'Template',
            content: {
                responsive: ['M', 'T', 'D'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTemplate
        },
        {
            name: 'Validation Title',
            nameProperty: 'ValidationTitle',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                    text: {}
                }
            },
            settings: settingsTitle
        },
        {
            name: 'Validation Content',
            nameProperty: 'ValidationContent',
            typeField: 'TextMarkdown',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsText
        },
        {
            name: 'Trainers Title',
            nameProperty: 'TrainersTitle',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                    text: {}
                }
            },
            settings: {}
        },
        {
            name: 'Trainer Image',
            nameProperty: 'TrainerImage',
            typeField: 'SingleImage',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsSingleImage
        },
        {
            name: 'Trainer Title',
            nameProperty: 'TrainerTitle',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTitle
        }
    ]
};
