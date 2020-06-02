import {
    alignmentStart,
    black, borderRadius, borderWidth,
    grey70,
    margin,
    opacity,
    paragraph, size, textPropsCenter,
    transparent
} from "../../utils/atom.model.config";
import {settingsSingleImage, settingsTemplate} from "../../utils/organism.model.config";

export default {
    model: 'NavigationBar',
    fields: [
        {
            name: 'Template Left Container',
            nameProperty: 'TemplateLeft',
            typeField: 'Template',
            content: {
                responsive: ['M', 'T', 'D'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTemplate

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
            name: 'Template Links',
            nameProperty: 'TemplateLinks',
            typeField: 'Template',
            content: {
                responsive: ['M', 'T', 'D'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTemplate

        },
        {
            name: 'Links',
            nameProperty: 'Links',
            typeField: 'NavigationLinks',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: {
                responsive: ['M', 'T', 'D'],
                defaultValue: {
                    basis: {
                        M: {
                            size: size,
                            padding: {
                                top: '10',
                                right: '20',
                                bottom: '10',
                                left: '20'
                            },
                            margin: margin,
                            alignment: alignmentStart,
                            color: {
                                basic: transparent,
                                hover: transparent,
                                active: transparent
                            },
                            opacity: {
                                basic: opacity,
                                hover: opacity,
                                active: opacity
                            }
                        },
                        T: {
                            size: size,
                            padding: {
                                top: '10',
                                right: '15',
                                bottom: '10',
                                left: '15'
                            },
                            margin: margin,
                            alignment: alignmentStart,
                            color: {
                                basic: transparent,
                                hover: transparent,
                                active: transparent
                            },
                            opacity: {
                                basic: opacity,
                                hover: opacity,
                                active: opacity
                            }
                        },
                        D: {
                            size: size,
                            padding: {
                                top: '10',
                                right: '15',
                                bottom: '10',
                                left: '15'
                            },
                            margin: margin,
                            alignment: alignmentStart,
                            color: {
                                basic: transparent,
                                hover: transparent,
                                active: transparent
                            },
                            opacity: {
                                basic: opacity,
                                hover: opacity,
                                active: opacity
                            }
                        }
                    },
                    typography: {
                        M: {
                            font: paragraph,
                            text: textPropsCenter,
                            color: {
                                basic: black,
                                hover: grey70,
                                active: grey70
                            },
                            opacity: {
                                basic: opacity,
                                hover: opacity,
                                active: opacity
                            }
                        },
                        T: {
                            font: paragraph,
                            text: textPropsCenter,
                            color: {
                                basic: black,
                                hover: grey70,
                                active: grey70
                            },
                            opacity: {
                                basic: opacity,
                                hover: opacity,
                                active: opacity
                            }
                        },
                        D: {
                            font: paragraph,
                            text: textPropsCenter,
                            color: {
                                basic: black,
                                hover: grey70,
                                active: grey70
                            },
                            opacity: {
                                basic: opacity,
                                hover: opacity,
                                active: opacity
                            }
                        },

                    },
                    border: {
                        M: {
                            width: borderWidth,
                            radius: borderRadius,
                            color: {
                                basic: transparent,
                                hover: transparent,
                                active: transparent
                            },
                            opacity: {
                                basic: opacity,
                                hover: opacity,
                                active: opacity
                            }
                        },
                        T: {
                            width: borderWidth,
                            radius: borderRadius,
                            color: {
                                basic: transparent,
                                hover: transparent,
                                active: transparent
                            },
                            opacity: {
                                basic: opacity,
                                hover: opacity,
                                active: opacity
                            }
                        },
                        D: {
                            width: {
                                top: '0',
                                right: '0',
                                bottom: '1',
                                left: '0'
                            },
                            radius: borderRadius,
                            color: {
                                basic: transparent,
                                hover: transparent,
                                active: transparent
                            },
                            opacity: {
                                basic: opacity,
                                hover: opacity,
                                active: opacity
                            }
                        }
                    }
                }
            }

        },
        {
            name: 'Template SubLinks',
            nameProperty: 'TemplateSubLinks',
            typeField: 'Template',
            content: {
                responsive: ['M', 'T', 'D'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTemplate

        },
        {
            name: 'SubLinks',
            nameProperty: 'SubLinks',
            typeField: 'NavigationLinks',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: {
                responsive: ['M', 'T', 'D'],
                defaultValue: {
                    basis: {
                        M: {
                            size: size,
                            padding: {
                                top: '10',
                                right: '20',
                                bottom: '10',
                                left: '20'
                            },
                            margin: margin,
                            alignment: alignmentStart,
                            color: {
                                basic: transparent,
                                hover: transparent,
                                active: transparent
                            },
                            opacity: {
                                basic: opacity,
                                hover: opacity,
                                active: opacity
                            }
                        },
                        T: {
                            size: size,
                            padding: {
                                top: '10',
                                right: '15',
                                bottom: '10',
                                left: '15'
                            },
                            margin: margin,
                            alignment: alignmentStart,
                            color: {
                                basic: transparent,
                                hover: transparent,
                                active: transparent
                            },
                            opacity: {
                                basic: opacity,
                                hover: opacity,
                                active: opacity
                            }
                        },
                        D: {
                            size: size,
                            padding: {
                                top: '10',
                                right: '15',
                                bottom: '10',
                                left: '15'
                            },
                            margin: margin,
                            alignment: alignmentStart,
                            color: {
                                basic: transparent,
                                hover: transparent,
                                active: transparent
                            },
                            opacity: {
                                basic: opacity,
                                hover: opacity,
                                active: opacity
                            }
                        }
                    },
                    typography: {
                        M: {
                            font: paragraph,
                            text: textPropsCenter,
                            color: {
                                basic: black,
                                hover: grey70,
                                active: grey70
                            },
                            opacity: {
                                basic: opacity,
                                hover: opacity,
                                active: opacity
                            }
                        },
                        T: {
                            font: paragraph,
                            text: textPropsCenter,
                            color: {
                                basic: black,
                                hover: grey70,
                                active: grey70
                            },
                            opacity: {
                                basic: opacity,
                                hover: opacity,
                                active: opacity
                            }
                        },
                        D: {
                            font: paragraph,
                            text: textPropsCenter,
                            color: {
                                basic: black,
                                hover: grey70,
                                active: grey70
                            },
                            opacity: {
                                basic: opacity,
                                hover: opacity,
                                active: opacity
                            }
                        },

                    },
                    border: {
                        M: {
                            width: borderWidth,
                            radius: borderRadius,
                            color: {
                                basic: transparent,
                                hover: transparent,
                                active: transparent
                            },
                            opacity: {
                                basic: opacity,
                                hover: opacity,
                                active: opacity
                            }
                        },
                        T: {
                            width: borderWidth,
                            radius: borderRadius,
                            color: {
                                basic: transparent,
                                hover: transparent,
                                active: transparent
                            },
                            opacity: {
                                basic: opacity,
                                hover: opacity,
                                active: opacity
                            }
                        },
                        D: {
                            width: {
                                top: '0',
                                right: '0',
                                bottom: '1',
                                left: '0'
                            },
                            radius: borderRadius,
                            color: {
                                basic: transparent,
                                hover: transparent,
                                active: transparent
                            },
                            opacity: {
                                basic: opacity,
                                hover: opacity,
                                active: opacity
                            }
                        }
                    }
                }
            }

        },
        {
            name: 'Template Burger',
            nameProperty: 'TemplateBurger',
            typeField: 'Template',
            content: {
                responsive: ['M', 'T', 'D'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTemplate
        },
        {
            name: 'Template Language',
            nameProperty: 'TemplateLanguage',
            typeField: 'Template',
            content: {
                responsive: ['M', 'T', 'D'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTemplate
        }
    ]
};
