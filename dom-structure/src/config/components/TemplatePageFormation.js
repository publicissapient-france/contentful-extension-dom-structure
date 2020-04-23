import {
    settingsCTA,
    settingsSingleImage,
    settingsTemplate,
    settingsText,
    settingsTitle
} from "../../utils/model.config";

export default {
    model: 'TemplatePageFormation',
    fields: [
        {
            name: 'Header Template',
            nameProperty: 'TemplateHeader',
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
            nameProperty: 'TitleHeader',
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
            nameProperty: 'TaglineHeader',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTitle
        },
        {
            name: 'Main Title',
            nameProperty: 'TitleMain',
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
            nameProperty: 'ContentMain',
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
            nameProperty: 'TitleProgram',
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
            nameProperty: 'TitleMethod',
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
            nameProperty: 'TitlePublic',
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
            nameProperty: 'ContentPublic',
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
            nameProperty: 'TemplatePrerequisite',
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
            nameProperty: 'TitlePrerequisite',
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
            nameProperty: 'ContentPrerequisite',
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
            nameProperty: 'TemplateGoal',
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
            nameProperty: 'TitleGoal',
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
            nameProperty: 'ContentGoal',
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
            nameProperty: 'TemplateCertification',
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
            nameProperty: 'TitleCertification',
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
            nameProperty: 'ContentCertification',
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
            nameProperty: 'TemplateValidation',
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
            nameProperty: 'TitleValidation',
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
            nameProperty: 'ContentValidation',
            typeField: 'TextMarkdown',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsText
        },
        {
            name: 'Contact Template',
            nameProperty: 'TemplateContact',
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
            nameProperty: 'TitleContact',
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
            nameProperty: 'CTAContact',
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
            name: 'CTA Inscription',
            nameProperty: 'CTAInscription',
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
            name: 'Session Template',
            nameProperty: 'TemplateSession',
            typeField: 'Template',
            content: {
                responsive: ['M', 'T', 'D'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTemplate
        },
        {
            name: 'Session Title',
            nameProperty: 'TitleSession',
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
            name: 'Session Content',
            nameProperty: 'ContentSession',
            typeField: 'TextMarkdown',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsText
        },
        {
            name: 'Session Content Bold',
            nameProperty: 'ContentSessionBold',
            typeField: 'TextMarkdown',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsText
        },
        {
            name: 'Promo Template',
            nameProperty: 'TemplatePromo',
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
            nameProperty: 'TitlePromo',
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
            name: 'Promo Tagline',
            nameProperty: 'TaglinePromo',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsText
        },
        {
            name: 'Image Certification',
            nameProperty: 'ImageCertification',
            typeField: 'SingleImage',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsSingleImage
        },
        {
            name: 'Formation Title',
            nameProperty: 'TitleFormation',
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
            name: 'Former Image',
            nameProperty: 'ImageFormer',
            typeField: 'SingleImage',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsSingleImage
        },
        {
            name: 'Former Title',
            nameProperty: 'Title Former',
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
