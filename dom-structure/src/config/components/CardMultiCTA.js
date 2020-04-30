import {
    padding,
    size,
    margin,
    white,
    shadow,
    backgroundPosition,
    opacity,
    borderWidth, borderRadius, transparent
} from "../../utils/atom.model.config";
import {settingsSingleImage, settingsTagline, settingsText, settingsTitle, settingsCTA} from "../../utils/organism.model.config";

export default {
    model: 'CardMultiCTA',
    order: ['Title', 'Tagline', 'Content', 'Image', 'CTA', 'CTA2', 'CTA3', 'CTA4'],
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
            settings: {
                responsive: ['A'],
                defaultValue: {
                    basis: {
                        A: {
                            size: size,
                            padding: padding,
                            margin: margin,
                            color: white,
                            opacity: opacity,
                            shadow: shadow,
                            background : backgroundPosition
                        }
                    },
                    border: {
                        A: {
                            width: borderWidth,
                            radius: borderRadius,
                            color: transparent,
                            opacity: opacity
                        }
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
        },
        {
            name: 'CTA 2',
            nameProperty: 'CTA2',
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
            name: 'CTA 3',
            nameProperty: 'CTA3',
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
            name: 'CTA 4',
            nameProperty: 'CTA4',
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
};
