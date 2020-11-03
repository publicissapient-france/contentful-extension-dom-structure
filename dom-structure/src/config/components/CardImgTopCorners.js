import {
    settingsCTA,
    settingsSingleImage, settingsTagline,
    settingsTemplate,
    settingsText,
    settingsTitle, settingsSimpleText
} from "../../utils/configModel/organism.model.config";

export default {
    model: 'CardImgTopCorners',
    order: ['Title', 'Tagline', 'Content', 'ImageTopLeft', 'ImageTopRight', 'CTA'],
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
            name: 'Title',
            nameProperty: 'Title',
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
            name: 'Tagline',
            nameProperty: 'Tagline',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                    text: {}
                }
            },
            settings: settingsTagline

        },
        {
            name: 'Content',
            nameProperty: 'Content',
            typeField: 'TextMarkdown',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                    html: {}
                }
            },
            settings: settingsText

        },
        {
            name: 'Content Bold',
            nameProperty: 'ContentBold',
            typeField: 'TextMarkdown',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsSimpleText
        },
        {
            name: 'Image Top Left',
            nameProperty: 'ImageTopLeft',
            typeField: 'SingleImage',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                    images: [
                        {
                            alt: {},
                            asset: {
                                A: {}
                            }
                        }
                    ]
                }
            },
            settings: settingsSingleImage

        },
        {
            name: 'Image Top Right',
            nameProperty: 'ImageTopRight',
            typeField: 'SingleImage',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                    images: [
                        {
                            alt: {},
                            asset: {
                                A: {}
                            }
                        }
                    ]
                }
            },
            settings: settingsSingleImage

        },
        {
            name: 'CTA',
            nameProperty: 'CTA',
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

        }
    ]
}
;
