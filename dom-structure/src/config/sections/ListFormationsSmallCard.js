import {
    settingsCTA, settingsCTAnoState,
    settingsFlexContainer,
    settingsSectionTemplate, settingsTagline,
    settingsTemplate, settingsTitle
} from "../../utils/configModel/organism.model.config";
import {
    alignmentStart,
    black,
    opacity,
    padding,
    paragraph,
    size,
    textProps,
    title4, white
} from "../../utils/configModel/atom.model.config";

export default {
    model: 'ListFormationsSmallCard',
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
            name: 'Template Card',
            nameProperty: 'TemplateCard',
            typeField: 'Template',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTemplate
        },
        {
            name: 'Formation Category Title',
            nameProperty: 'Title',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTagline

        },
        {
            name: 'Formation Name CTA',
            nameProperty: 'CTA',
            typeField: 'CTA',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsCTA
        },
        {
            name: 'Formations',
            nameProperty: 'Formations',
            typeField: 'SelectFormations',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                    icon1: "",
                    data: [],
                    priority: []
                }
            },
            settings: {
                responsive: ['M', 'T', 'D'],
                defaultValue: {
                    image: {
                        M: {
                            size: size,
                            padding: padding,
                            alignment: alignmentStart
                        },
                        T: {
                            size: size,
                            padding: padding,
                            alignment: alignmentStart
                        },
                        D: {
                            size: size,
                            padding: padding,
                            alignment: alignmentStart
                        }
                    },
                    textSession: {
                        M: {
                            font: paragraph,
                            text: textProps,
                            color: black,
                            opacity: opacity,
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '10',
                                left: '0'
                            }
                        },
                        T: {
                            font: paragraph,
                            text: textProps,
                            color: black,
                            opacity: opacity,
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '10',
                                left: '0'
                            }
                        },
                        D: {
                            font: paragraph,
                            text: textProps,
                            color: black,
                            opacity: opacity,
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '10',
                                left: '0'
                            }
                        }
                    },
                    taglineSession: {
                        M: {
                            font: paragraph,
                            text: textProps,
                            color: black,
                            opacity: opacity,
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '10',
                                left: '0'
                            }
                        },
                        T: {
                            font: paragraph,
                            text: textProps,
                            color: black,
                            opacity: opacity,
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '10',
                                left: '0'
                            }
                        },
                        D: {
                            font: paragraph,
                            text: textProps,
                            color: black,
                            opacity: opacity,
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '10',
                                left: '0'
                            }
                        }
                    },
                    textPromo: {
                        M: {
                            font: paragraph,
                            text: textProps,
                            color: black,
                            opacity: opacity,
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '10',
                                left: '0'
                            }
                        },
                        T: {
                            font: paragraph,
                            text: textProps,
                            color: black,
                            opacity: opacity,
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '10',
                                left: '0'
                            }
                        },
                        D: {
                            font: paragraph,
                            text: textProps,
                            color: black,
                            opacity: opacity,
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '10',
                                left: '0'
                            }
                        }
                    },
                    taglinePromo: {
                        M: {
                            font: paragraph,
                            text: textProps,
                            color: black,
                            opacity: opacity,
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '10',
                                left: '0'
                            }
                        },
                        T: {
                            font: paragraph,
                            text: textProps,
                            color: black,
                            opacity: opacity,
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '10',
                                left: '0'
                            }
                        },
                        D: {
                            font: paragraph,
                            text: textProps,
                            color: black,
                            opacity: opacity,
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '10',
                                left: '0'
                            }
                        }
                    },
                    session: {
                        M: {
                            color: black,
                            opacity: opacity
                        },
                        T: {
                            color: black,
                            opacity: opacity
                        },
                        D: {
                            color: black,
                            opacity: opacity
                        }
                    },
                    promo: {
                        M: {
                            color: black,
                            opacity: opacity
                        },
                        T: {
                            color: black,
                            opacity: opacity
                        },
                        D: {
                            color: black,
                            opacity: opacity
                        }
                    }

                }
            }

        }
    ]
}
;
