import {
    settingsFlexContainer,
    settingsSectionTemplate, settingsSimpleText, settingsTagline, settingsTemplate,
    settingsText, settingsCTAnoState
} from "../../utils/configModel/organism.model.config";

export default {
    model: 'ListSpeakersCardFadeInEffect',
    fields: [
        {
            name: 'Template',
            nameProperty: 'Template',
            typeField: 'Template',
            content: {
                responsive: ['M', 'T', 'D'],
                parameters: {},
                defaultValue: {
                    images: [
                        {
                            alt: {},
                            asset: {
                                M: {},
                                T: {},
                                D: {}
                            }
                        }
                    ]
                }
            },
            settings: settingsSectionTemplate

        },
        {
            name: 'Flex Container',
            nameProperty: 'FlexContainer',
            typeField: 'FlexContainer',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                }
            },
            settings: settingsFlexContainer

        },
        {
            name: 'Speakers',
            nameProperty: 'Speakers',
            typeField: 'SelectSpeakers',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                    speakers: [],
                    priority: [],
                    display: {
                        logo: {
                            tiny: false,
                            large: false
                        }
                    }
                }
            },
            settings: {
                responsive: ['M', 'T', 'D'],
                defaultValue: {}
            }

        },
        {
            name: 'TemplateCard',
            nameProperty: 'TemplateCard',
            typeField: 'Template',
            content: {
                responsive: ['M', 'T', 'D'],
                parameters: {},
                defaultValue: {
                    images: [
                        {
                            alt: {},
                            asset: {
                                M: {},
                                T: {},
                                D: {}
                            }
                        }
                    ]
                }
            },
            settings: settingsTemplate

        }, {
            name: 'Template Card Active',
            nameProperty: 'TemplateCardActive',
            typeField: 'Template',
            content: {
                responsive: ['M', 'T', 'D'],
                parameters: {},
                defaultValue: {
                    images: [
                        {
                            alt: {},
                            asset: {
                                M: {},
                                T: {},
                                D: {}
                            }
                        }
                    ]
                }
            },
            settings: settingsTemplate

        },
        {
            name: 'Name',
            nameProperty: 'TextName',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTagline

        },
        {
            name: 'Name Active',
            nameProperty: 'TextNameActive',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTagline

        },
        {
            name: 'Job',
            nameProperty: 'TextJob',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTagline

        },
        {
            name: 'Job Active',
            nameProperty: 'TextJobActive',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsText
        },
        {
            name: 'Info',
            nameProperty: 'ContentInfo',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsText
        },
        {
            name: 'Info Bold',
            nameProperty: 'ContentBold',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsText
        },
        {
            name: 'CTA Social Twitter',
            nameProperty: 'CTA',
            typeField: 'CTA',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                    icon: {}
                }
            },
            settings: settingsCTAnoState

        },
        {
            name: 'CTA Social Linkedin',
            nameProperty: 'CTA2',
            typeField: 'CTA',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                    icon: {}
                }
            },
            settings: settingsCTAnoState

        },
        {
            name: 'CTA Social Github',
            nameProperty: 'CTA3',
            typeField: 'CTA',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                    icon: {}
                }
            },
            settings: settingsCTAnoState

        }

    ]
}
;
