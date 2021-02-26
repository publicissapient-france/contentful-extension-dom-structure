import {
    settingsCTA, settingsSimpleText,
    settingsSingleImage, settingsTagline,
    settingsTemplate,
    settingsText,
    settingsTitle
} from "../../utils/configModel/organism.model.config";

export default {
    model: 'CountdownDate',
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
            settings: settingsTemplate
        },
        {
            name: 'Start Date',
            nameProperty: 'DateStart',
            typeField: 'InputDate',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                    date : ''
                }
            },
            settings: {
                responsive: ['M', 'T', 'D'],
                defaultValue: {}
            }

        },
        {
            name: 'End Date',
            nameProperty: 'DateEnd',
            typeField: 'InputDate',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                    date : ''
                }
            },
            settings: {
                responsive: ['M', 'T', 'D'],
                defaultValue: {}
            }

        },
        {
            name: 'Label Days',
            nameProperty: 'TextDays',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                    text: {}
                }
            },
            settings: {
                responsive: ['M', 'T', 'D'],
                defaultValue: {}
            }

        },
        {
            name: 'Label Hours',
            nameProperty: 'TextHours',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                    text: {}
                }
            },
            settings: {
                responsive: ['M', 'T', 'D'],
                defaultValue: {}
            }

        },
        {
            name: 'Label Minutes',
            nameProperty: 'TextMinutes',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                    text: {}
                }
            },
            settings: {
                responsive: ['M', 'T', 'D'],
                defaultValue: {}
            }

        },
        {
            name: 'Label Seconds',
            nameProperty: 'TextSeconds',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                    text: {}
                }
            },
            settings: {
                responsive: ['M', 'T', 'D'],
                defaultValue: {}
            }

        },
        {
            name: 'Contextual Message Present',
            nameProperty: 'TextPresent',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                    text: {}
                }
            },
            settings: {
                responsive: ['M', 'T', 'D'],
                defaultValue: {}
            }

        },
        {
            name: 'Contextual Message Past',
            nameProperty: 'TextPast',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                    text: {}
                }
            },
            settings: {
                responsive: ['M', 'T', 'D'],
                defaultValue: {}
            }

        },
        {
            name: 'Numbers',
            nameProperty: 'Title',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTitle

        },
        {
            name: 'Tagline',
            nameProperty: 'Tagline',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTagline

        },
        {
            name: 'Contextual Message',
            nameProperty: 'TitleContextual',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTitle

        },
        {
            name: 'Separator',
            nameProperty: 'Separator',
            typeField: 'Template',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTemplate
        }

    ]
}
;
