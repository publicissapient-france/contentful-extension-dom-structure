import {
    alignmentStart, backgroundPosition,
    black, borderRadius, borderWidth, colorAndGradient, colorGreyAndGradient,
    grey70,
    margin,
    opacity, padding,
    paragraph, shadow, size, textProps, textPropsCenter,
    transparent, white
} from "../../utils/configModel/atom.model.config";
import {settingsSingleImage, settingsTemplate} from "../../utils/configModel/organism.model.config";
import {borderMTD} from "../../utils/configModel/molecules.model.config";

export default {
    model: 'NavigationBarFromLeft',
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
            settings: {
                responsive: ['M', 'T', 'D'],
                defaultValue: {
                    basis: {
                        M: {
                            size: {
                                width: '100%',
                                height: '110',
                                maxWidth: '',
                                maxHeight: '',
                                minWidth: '',
                                minHeight: ''
                            },
                            padding: {
                                top: '0',
                                right: '30',
                                bottom: '0',
                                left: '30'
                            },
                            margin: margin,
                            color: colorAndGradient,
                            opacity: opacity,
                            shadow: shadow,
                            background: backgroundPosition
                        },
                        T: {
                            size: {
                                width: 'calc(100% /3)',
                                height: '110',
                                maxWidth: '',
                                maxHeight: '',
                                minWidth: 'calc(100% /3)',
                                minHeight: ''
                            },
                            padding: {
                                top: '0',
                                right: '40',
                                bottom: '0',
                                left: '40'
                            },
                            margin: margin,
                            color: colorAndGradient,
                            opacity: opacity,
                            shadow: shadow,
                            background: backgroundPosition
                        },
                        D: {
                            size: {
                                width: 'calc(100% /3)',
                                height: '110',
                                maxWidth: '',
                                maxHeight: '',
                                minWidth: 'calc(100% /3)',
                                minHeight: ''
                            },
                            padding: {
                                top: '0',
                                right: '40',
                                bottom: '0',
                                left: '40'
                            },
                            margin: margin,
                            color: colorAndGradient,
                            opacity: opacity,
                            shadow: shadow,
                            background: backgroundPosition
                        }
                    },
                    border: borderMTD
                }
            }

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
                responsive: ['M', 'T', 'D'],
                defaultValue: {
                    basis: {
                        M: {
                            size: {
                                width: '',
                                height: '70',
                                maxWidth: '',
                                maxHeight: '',
                                minWidth: '',
                                minHeight: ''
                            },
                            padding: padding,
                            margin: {
                                top: '20',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
                            alignment: alignmentStart
                        },
                        T: {
                            size: {
                                width: '',
                                height: '70',
                                maxWidth: '',
                                maxHeight: '',
                                minWidth: '',
                                minHeight: ''
                            },
                            padding: padding,
                            margin: {
                                top: '20',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
                            alignment: alignmentStart
                        },
                        D: {
                            size: {
                                width: '',
                                height: '70',
                                maxWidth: '',
                                maxHeight: '',
                                minWidth: '',
                                minHeight: ''
                            },
                            padding: padding,
                            margin: {
                                top: '20',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
                            alignment: alignmentStart
                        }
                    },
                    border: borderMTD
                }
            }
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
            name: 'Navigation Links',
            nameProperty: 'NavigationLinks',
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
                                top: '15',
                                right: '30',
                                bottom: '15',
                                left: '30'
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
                                top: '0',
                                right: '40',
                                bottom: '25',
                                left: '40'
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
                                top: '0',
                                right: '40',
                                bottom: '25',
                                left: '40'
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
                            font: {
                                theme: 'Title3',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: '30',
                                lineHeight: '45',
                                letterSpacing: '0'
                            },
                            text: textProps,
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
                            font: {
                                theme: 'Title3',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: '30',
                                lineHeight: '45',
                                letterSpacing: '0'
                            },
                            text: textProps,
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
                            font: {
                                theme: 'Title3',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: '30',
                                lineHeight: '45',
                                letterSpacing: '0'
                            },
                            text: textProps,
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
            settings: {
                responsive: ['M', 'T', 'D'],
                defaultValue: {
                    basis: {
                        M: {
                            size: size,
                            padding: {
                                top: '30',
                                right: '0',
                                bottom: '30',
                                left: '0'
                            },
                            margin: margin,
                            color: colorGreyAndGradient,
                            opacity: opacity,
                            shadow: shadow,
                            background: backgroundPosition
                        },
                        T: {
                            size: size,
                            padding: {
                                top: '0',
                                right: '40',
                                bottom: '0',
                                left: '60'
                            },
                            margin: margin,
                            color: colorGreyAndGradient,
                            opacity: opacity,
                            shadow: shadow,
                            background: backgroundPosition
                        },
                        D: {
                            size: size,
                            padding: {
                                top: '0',
                                right: '40',
                                bottom: '0',
                                left: '60'
                            },
                            margin: margin,
                            color: colorGreyAndGradient,
                            opacity: opacity,
                            shadow: shadow,
                            background: backgroundPosition
                        }
                    },
                    border: borderMTD
                }
            }

        },
        {
            name: 'Navigation SubLinks',
            nameProperty: 'NavigationSubLinks',
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
                                top: '15',
                                right: '30',
                                bottom: '15',
                                left: '30'
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
                                top: '8',
                                right: '0',
                                bottom: '8',
                                left: '0'
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
                                top: '8',
                                right: '0',
                                bottom: '8',
                                left: '0'
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
                            font: {
                                theme: 'Paragraph',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: '20',
                                lineHeight: '30',
                                letterSpacing: '0'
                            },
                            text: textProps,
                            color: {
                                basic: white,
                                hover: black,
                                active: black
                            },
                            opacity: {
                                basic: opacity,
                                hover: opacity,
                                active: opacity
                            }
                        },
                        T: {
                            font: {
                                theme: 'Paragraph',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: '20',
                                lineHeight: '30',
                                letterSpacing: '0'
                            },
                            text: textProps,
                            color: {
                                basic: white,
                                hover: black,
                                active: black
                            },
                            opacity: {
                                basic: opacity,
                                hover: opacity,
                                active: opacity
                            }
                        },
                        D: {
                            font: {
                                theme: 'Paragraph',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: '20',
                                lineHeight: '30',
                                letterSpacing: '0'
                            },
                            text: textProps,
                            color: {
                                basic: white,
                                hover: black,
                                active: black
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
                        }
                    }
                }
            }

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
