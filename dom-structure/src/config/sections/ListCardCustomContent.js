import {
    settingsCTA, settingsCTAnoState,
    settingsFlexContainer,
    settingsSectionTemplate,
    settingsTemplate
} from "../../utils/organism.model.config";
import {
    alignmentStart,
    black,
    opacity,
    padding,
    paragraph,
    size,
    textProps,
    title4
} from "../../utils/atom.model.config";

export default {
    model: 'ListCardCustomContent',
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
            name: 'CustomContentType',
            nameProperty: 'CustomContentType',
            typeField: 'MultiSelectCustomContentType',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                    icon1: "",
                    data: [],
                    priority: [],
                    contentType : ""
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
                    title: {
                        M: {
                            font: title4,
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
                            font: title4,
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
                            font: title4,
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
                    tagline: {
                        M: {
                            font: title4,
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
                            font: title4,
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
                            font: title4,
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
                    text: {
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
                defaultValue: {
                    text: {},
                    icon: {}
                }
            },
            settings: settingsCTAnoState

        }
    ]
}
;
