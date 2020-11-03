import {
    size,
    padding,
    margin,
    white,
    opacity,
    shadow,
    backgroundPosition,
    borderWidth, borderRadius, transparent, alignmentStart, black
} from "../../utils/configModel/atom.model.config";
import {settingsCTA, settingsTagline, settingsText, settingsTitle} from "../../utils/configModel/organism.model.config";

export default {
    model: 'CardDuo',
    order: [['Title', 'Tagline', 'Content', 'CTA'], ['Title2', 'Tagline2', 'Content2', 'CTA2']],
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
                            background: backgroundPosition
                        }
                    },
                    border: {
                        A: {
                            width: borderWidth,
                            radius: borderRadius,
                            color: transparent,
                            opacity: opacity,
                            shadow: shadow
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
            settings: {
                responsive: ['A'],
                defaultValue: {
                    basis: {
                        A: {
                            size: size,
                            padding: padding,
                            margin: margin,
                            alignment: alignmentStart
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
            name: 'Separator',
            nameProperty: 'Separator',
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
                            color: black,
                            opacity: opacity
                        }
                    }

                }
            }
        },
        {
            name: 'Template 2',
            nameProperty: 'Template2',
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
                            background: backgroundPosition
                        }
                    },
                    border: {
                        A: {
                            width: borderWidth,
                            radius: borderRadius,
                            color: transparent,
                            opacity: opacity,
                            shadow: shadow
                        }
                    }
                }
            }
        },
        {
            name: 'Title 2',
            nameProperty: 'Title2',
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
            name: 'Tagline 2',
            nameProperty: 'Tagline2',
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
            name: 'Content 2',
            nameProperty: 'Content2',
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
            name: 'Image 2',
            nameProperty: 'Image2',
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
            settings: {
                responsive: ['A'],
                defaultValue: {
                    basis: {
                        A: {
                            size: size,
                            padding: padding,
                            margin: margin,
                            alignment: alignmentStart
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
        }
    ]
};
