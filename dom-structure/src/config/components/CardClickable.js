import {
    padding,
    size,
    margin,
    opacity,
    white,
    shadow,
    backgroundPosition,
    borderWidth, borderRadius, transparent
} from "../../utils/configModel/atom.model.config";
import {
    settingsSimpleText,
    settingsSingleImage,
    settingsTagline, settingsTemplate,
    settingsText,
    settingsTitle
} from "../../utils/configModel/organism.model.config";

export default {
    model: 'CardClickable',
    order: ['Title', 'Tagline', 'Content', 'Image'],
    fields: [
        {
            name: 'Template',
            nameProperty: 'Template',
            typeField: 'Template',
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
            settings: settingsTemplate

        },
        {
            name: 'Link',
            nameProperty: 'Link',
            typeField: 'Link',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                    link: {}
                }
            },
            settings: {
                responsive: ['A'],
                defaultValue: {
                    state: {
                        external: false,
                        disabled: false
                    }
                }
            }

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
            name: 'Image',
            nameProperty: 'Image',
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

        }
    ]
};
