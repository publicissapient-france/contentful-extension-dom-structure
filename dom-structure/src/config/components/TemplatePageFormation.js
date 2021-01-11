import {
    settingsCTA, settingsCTAnoState,
    settingsSingleImage,
    settingsTemplate,
    settingsText,
    settingsTitle
} from "../../utils/configModel/organism.model.config";
import {
    backgroundPosition, black, white,
    colorAndGradient, colorTransparentAndGradient,
    margin, opacity,
    padding,
    shadow,
    size, textProps, textPropsCenter, alignmentStart, alignmentCenter, opacityBHD, transparent, borderRadius
} from "../../utils/configModel/atom.model.config";
import {
    basisMTDforText, borderBHD,
    borderMTD, iconMTD, typographyParagraphCTA,
    typographyParagraphMTD,
    typographyTitle3MTD
} from "../../utils/configModel/molecules.model.config";

export default {
    model: 'TemplatePageFormation',
    fields: [
        {
            name: 'Header Template',
            nameProperty: 'HeaderTemplate',
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
                                top: '525',
                                right: '30',
                                bottom: '30',
                                left: '30'
                            },
                            margin: margin,
                            color: colorTransparentAndGradient,
                            opacity: opacity,
                            shadow: shadow,
                            background: backgroundPosition
                        },
                        T: {
                            size: {
                                width: '',
                                height: '100vh',
                                maxWidth: '',
                                maxHeight: '',
                                minWidth: '',
                                minHeight: '800'
                            },
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '40'
                            },
                            margin: margin,
                            color: colorTransparentAndGradient,
                            opacity: opacity,
                            shadow: shadow,
                            background: backgroundPosition
                        },
                        D: {
                            size: {
                                width: '',
                                height: '100vh',
                                maxWidth: '',
                                maxHeight: '',
                                minWidth: '',
                                minHeight: '800'
                            },
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '40'
                            },
                            margin: margin,
                            color: colorTransparentAndGradient,
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
            name: 'Header Title',
            nameProperty: 'HeaderTitle',
            typeField: 'Text',
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
                            padding: {
                                top: '30',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            }
                        },
                        T: {
                            padding: {
                                top: '30',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            }
                        },
                        D: {
                            padding: {
                                top: '30',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            }
                        }
                    },
                    typography: {
                        M: {
                            font: {
                                theme: 'Title1',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: null,
                                lineHeight: null,
                                letterSpacing: '0'
                            },
                            text: textPropsCenter,
                            color: black,
                            opacity: {
                                value: '1'
                            }
                        },
                        T: {
                            font: {
                                theme: 'Title1',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: null,
                                lineHeight: null,
                                letterSpacing: '0'
                            },
                            text: textProps,
                            color: white,
                            opacity: {
                                value: '1'
                            }
                        },
                        D: {
                            font: {
                                theme: 'Title1',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: null,
                                lineHeight: null,
                                letterSpacing: '0'
                            },
                            text: textProps,
                            color: white,
                            opacity: {
                                value: '1'
                            }
                        }
                    },
                    border: borderMTD,
                    seo: {
                        tag: 'h1'
                    }
                }
            }
        },
        {
            name: 'Header Tagline',
            nameProperty: 'HeaderTagline',
            typeField: 'Text',
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
                            padding: {
                                top: '80',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            }
                        },
                        T: {
                            padding: padding
                        },
                        D: {
                            padding: padding
                        }
                    },
                    typography: {
                        M: {
                            font: {
                                theme: 'Title4',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: null,
                                lineHeight: null,
                                letterSpacing: '0'
                            },
                            text: textPropsCenter,
                            color: black,
                            opacity: {
                                value: '1'
                            }
                        },
                        T: {
                            font: {
                                theme: 'Title4',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: null,
                                lineHeight: null,
                                letterSpacing: '0'
                            },
                            text: textProps,
                            color: white,
                            opacity: {
                                value: '1'
                            }
                        },
                        D: {
                            font: {
                                theme: 'Title4',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: null,
                                lineHeight: null,
                                letterSpacing: '0'
                            },
                            text: textProps,
                            color: white,
                            opacity: {
                                value: '1'
                            }
                        }
                    },
                    border: borderMTD,
                    seo: {
                        tag: 'p'
                    }
                }
            }
        },
        {
            name: 'Main Template',
            nameProperty: 'MainTemplate',
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
                                top: '0',
                                right: '30',
                                bottom: '0',
                                left: '30'
                            },
                            margin: margin,
                            color: colorTransparentAndGradient,
                            opacity: opacity,
                            shadow: shadow,
                            background: backgroundPosition
                        },
                        T: {
                            size: {
                                width: '',
                                height: '',
                                maxWidth: '70%',
                                maxHeight: '',
                                minWidth: '',
                                minHeight: ''
                            },
                            padding: padding,
                            margin: margin,
                            color: colorTransparentAndGradient,
                            opacity: opacity,
                            shadow: shadow,
                            background: backgroundPosition
                        },
                        D: {
                            size: {
                                width: '',
                                height: '',
                                maxWidth: '70%',
                                maxHeight: '',
                                minWidth: '',
                                minHeight: ''
                            },
                            padding: padding,
                            margin: margin,
                            color: colorTransparentAndGradient,
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
            name: 'Main Heading 1',
            nameProperty: 'MainHeading1',
            typeField: 'Text',
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
                            padding: {
                                top: '80',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            }
                        },
                        T: {
                            padding: {
                                top: '80',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            }
                        },
                        D: {
                            padding: {
                                top: '80',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            }
                        }
                    },
                    typography: {
                        M: {
                            font: {
                                theme: 'Title1',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: null,
                                lineHeight: null,
                                letterSpacing: '0'
                            },
                            text: textPropsCenter,
                            color: black,
                            opacity: {
                                value: '1'
                            }
                        },
                        T: {
                            font: {
                                theme: 'Title1',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: null,
                                lineHeight: null,
                                letterSpacing: '0'
                            },
                            text: textPropsCenter,
                            color: black,
                            opacity: {
                                value: '1'
                            }
                        },
                        D: {
                            font: {
                                theme: 'Title1',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: null,
                                lineHeight: null,
                                letterSpacing: '0'
                            },
                            text: textPropsCenter,
                            color: black,
                            opacity: {
                                value: '1'
                            }
                        }
                    },
                    border: borderMTD,
                    seo: {
                        tag: 'h2'
                    }
                }
            }
        },
        {
            name: 'Main Heading 2',
            nameProperty: 'MainHeading2',
            typeField: 'Text',
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
                            padding: {
                                top: '80',
                                right: '0',
                                bottom: '60',
                                left: '0'
                            }
                        },
                        T: {
                            padding: {
                                top: '80',
                                right: '0',
                                bottom: '60',
                                left: '0'
                            }
                        },
                        D: {
                            padding: {
                                top: '80',
                                right: '0',
                                bottom: '60',
                                left: '0'
                            }
                        }
                    },
                    typography: {
                        M: {
                            font: {
                                theme: 'Title2',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: null,
                                lineHeight: null,
                                letterSpacing: '0'
                            },
                            text: textProps,
                            color: black,
                            opacity: {
                                value: '1'
                            }
                        },
                        T: {
                            font: {
                                theme: 'Title2',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: null,
                                lineHeight: null,
                                letterSpacing: '0'
                            },
                            text: textProps,
                            color: black,
                            opacity: {
                                value: '1'
                            }
                        },
                        D: {
                            font: {
                                theme: 'Title2',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: null,
                                lineHeight: null,
                                letterSpacing: '0'
                            },
                            text: textProps,
                            color: black,
                            opacity: {
                                value: '1'
                            }
                        }
                    },
                    border: borderMTD,
                    seo: {
                        tag: 'h2'
                    }
                }
            }
        },
        {
            name: 'Main Heading 3',
            nameProperty: 'MainHeading3',
            typeField: 'Text',
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
                            padding: {
                                top: '40',
                                right: '0',
                                bottom: '10',
                                left: '0'
                            }
                        },
                        T: {
                            padding: {
                                top: '40',
                                right: '0',
                                bottom: '10',
                                left: '0'
                            }
                        },
                        D: {
                            padding: {
                                top: '40',
                                right: '0',
                                bottom: '10',
                                left: '0'
                            }
                        }
                    },
                    typography: typographyTitle3MTD,
                    border: borderMTD,
                    seo: {
                        tag: 'h3'
                    }
                }
            }
        },
        {
            name: 'Main Content',
            nameProperty: 'MainContent',
            typeField: 'TextMarkdown',
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
                            padding: {
                                top: '20',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            }
                        },
                        T: {
                            padding: {
                                top: '20',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            }
                        },
                        D: {
                            padding: {
                                top: '20',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            }
                        }
                    },
                    typography: typographyParagraphMTD
                }
            }
        },
        {
            name: 'Main Content Bold',
            nameProperty: 'ContentMainBold',
            typeField: 'TextMarkdown',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsText
        },
        {
            name: 'Main Content Link',
            nameProperty: 'ContentMainLink',
            typeField: 'TextMarkdown',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsText
        },
        {
            name: 'Badge Template',
            nameProperty: 'BadgeTemplate',
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
                                top: '80',
                                right: '0',
                                bottom: '30',
                                left: '0'
                            },
                            margin: margin,
                            color: colorTransparentAndGradient,
                            opacity: opacity,
                            shadow: shadow,
                            background: backgroundPosition
                        },
                        T: {
                            size: size,
                            padding: {
                                top: '80',
                                right: '0',
                                bottom: '30',
                                left: '0'
                            },
                            margin: margin,
                            color: colorTransparentAndGradient,
                            opacity: opacity,
                            shadow: shadow,
                            background: backgroundPosition
                        },
                        D: {
                            size: size,
                            padding: {
                                top: '80',
                                right: '0',
                                bottom: '30',
                                left: '0'
                            },
                            margin: margin,
                            color: colorTransparentAndGradient,
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
            name: 'Badge Image',
            nameProperty: 'BadgeImage',
            typeField: 'SingleImage',
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
                            size: {
                                width: '120',
                                height: '120',
                                maxWidth: '',
                                maxHeight: '',
                                minWidth: '',
                                minHeight: ''
                            },
                            padding: padding,
                            margin: {
                                top: '0',
                                right: '0',
                                bottom: '20',
                                left: '0'
                            },
                            alignment: alignmentCenter
                        },
                        T: {
                            size: {
                                width: '120',
                                height: '120',
                                maxWidth: '',
                                maxHeight: '',
                                minWidth: '',
                                minHeight: ''
                            },
                            padding: padding,
                            margin: {
                                top: '0',
                                right: '0',
                                bottom: '20',
                                left: '0'
                            },
                            alignment: alignmentCenter
                        },
                        D: {
                            size: {
                                width: '120',
                                height: '120',
                                maxWidth: '',
                                maxHeight: '',
                                minWidth: '',
                                minHeight: ''
                            },
                            padding: padding,
                            margin: {
                                top: '0',
                                right: '0',
                                bottom: '20',
                                left: '0'
                            },
                            alignment: alignmentCenter
                        }
                    },
                    border: borderMTD
                }
            }
        },
        {
            name: 'Session Insert Template',
            nameProperty: 'SessionTemplate',
            typeField: 'Template',
            content: {
                responsive: ['M', 'T', 'D'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTemplate
        },
        {
            name: 'Session Insert Title',
            nameProperty: 'SessionTitle',
            typeField: 'Text',
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
                            padding: {
                                top: '4',
                                right: '10',
                                bottom: '4',
                                left: '10'
                            }
                        },
                        T: {
                            padding: {
                                top: '4',
                                right: '10',
                                bottom: '4',
                                left: '10'
                            }
                        },
                        D: {
                            padding: {
                                top: '4',
                                right: '10',
                                bottom: '4',
                                left: '10'
                            }
                        }
                    },
                    typography: {
                        M: {
                            font: {
                                theme: 'Strong',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: null,
                                lineHeight: null,
                                letterSpacing: '0'
                            },
                            text: textProps,
                            color: black,
                            opacity: {
                                value: '1'
                            }
                        },
                        T: {
                            font: {
                                theme: 'Strong',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: null,
                                lineHeight: null,
                                letterSpacing: '0'
                            },
                            text: textProps,
                            color: black,
                            opacity: {
                                value: '1'
                            }
                        },
                        D: {
                            font: {
                                theme: 'Strong',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: null,
                                lineHeight: null,
                                letterSpacing: '0'
                            },
                            text: textProps,
                            color: black,
                            opacity: {
                                value: '1'
                            }
                        }
                    },
                    border: borderMTD,
                    seo: {
                        tag: 'p'
                    }
                }
            }
        },
        {
            name: 'Session Content',
            nameProperty: 'SessionContent',
            typeField: 'TextMarkdown',
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
                            padding: {
                                top: '3',
                                right: '10',
                                bottom: '2',
                                left: '10'
                            }
                        },
                        T: {
                            padding: {
                                top: '3',
                                right: '10',
                                bottom: '2',
                                left: '10'
                            }
                        },
                        D: {
                            padding: {
                                top: '3',
                                right: '10',
                                bottom: '2',
                                left: '10'
                            }
                        }
                    },
                    typography: typographyParagraphMTD
                }
            }
        },
        {
            name: 'Promo Template',
            nameProperty: 'PromoTemplate',
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
                                top: '10',
                                right: '10',
                                bottom: '10',
                                left: '10'
                            },
                            margin: margin,
                            color: colorAndGradient,
                            opacity: opacity,
                            shadow: shadow,
                            background: backgroundPosition
                        },
                        T: {
                            size: size,
                            padding: {
                                top: '10',
                                right: '10',
                                bottom: '10',
                                left: '10'
                            },
                            margin: margin,
                            color: colorAndGradient,
                            opacity: opacity,
                            shadow: shadow,
                            background: backgroundPosition
                        },
                        D: {
                            size: size,
                            padding: {
                                top: '10',
                                right: '10',
                                bottom: '10',
                                left: '10'
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
            name: 'Promo Title',
            nameProperty: 'PromoTitle',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: {
                responsive: ['M', 'T', 'D'],
                defaultValue: {
                    basis: basisMTDforText,
                    typography: {
                        M: {
                            font: {
                                theme: 'Strong',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: null,
                                lineHeight: null,
                                letterSpacing: '0'
                            },
                            text: textProps,
                            color: white,
                            opacity: {
                                value: '1'
                            }
                        },
                        T: {
                            font: {
                                theme: 'Strong',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: null,
                                lineHeight: null,
                                letterSpacing: '0'
                            },
                            text: textProps,
                            color: white,
                            opacity: {
                                value: '1'
                            }
                        },
                        D: {
                            font: {
                                theme: 'Strong',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: null,
                                lineHeight: null,
                                letterSpacing: '0'
                            },
                            text: textProps,
                            color: white,
                            opacity: {
                                value: '1'
                            }
                        }
                    },
                    border: borderMTD,
                    seo: {
                        tag: 'p'
                    }
                }
            }
        },
        {
            name: 'Promo Tagline',
            nameProperty: 'PromoTagline',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: {
                responsive: ['M', 'T', 'D'],
                defaultValue: {
                    basis: basisMTDforText,
                    typography: {
                        M: {
                            font: {
                                theme: 'Paragraph',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: null,
                                lineHeight: null,
                                letterSpacing: '0'
                            },
                            text: textProps,
                            color: white,
                            opacity: {
                                value: '1'
                            }
                        },
                        T: {
                            font: {
                                theme: 'Paragraph',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: null,
                                lineHeight: null,
                                letterSpacing: '0'
                            },
                            text: textProps,
                            color: white,
                            opacity: {
                                value: '1'
                            }
                        },
                        D: {
                            font: {
                                theme: 'Paragraph',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: null,
                                lineHeight: null,
                                letterSpacing: '0'
                            },
                            text: textProps,
                            color: white,
                            opacity: {
                                value: '1'
                            }
                        }
                    }
                }
            }
        },
        {
            name: 'Inscription CTA',
            nameProperty: 'InscriptionCTA',
            typeField: 'CTA',
            content: {
                responsive: ['A'],
                defaultValue: {
                    text: {},
                    icon: {}
                }
            },
            settings: {
                responsive: ['M', 'T', 'D'],
                defaultValue: {
                    basis: {
                        M: {
                            size: size,
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '10'
                            },
                            margin: {
                                top: '40',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
                            alignment: alignmentStart,
                            shadow: shadow,
                            color: {
                                basic: transparent,
                                hover: transparent,
                                disabled: transparent
                            },
                            opacity: opacityBHD
                        },
                        T: {
                            size: size,
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '10'
                            },
                            margin: {
                                top: '40',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
                            alignment: alignmentStart,
                            shadow: shadow,
                            color: {
                                basic: transparent,
                                hover: transparent,
                                disabled: transparent
                            },
                            opacity: opacityBHD
                        },
                        D: {
                            size: size,
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '10'
                            },
                            margin: {
                                top: '40',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
                            alignment: alignmentStart,
                            shadow: shadow,
                            color: {
                                basic: transparent,
                                hover: transparent,
                                disabled: transparent
                            },
                            opacity: opacityBHD
                        }
                    },
                    typography: typographyParagraphCTA,
                    icon: iconMTD,
                    border: borderBHD
                }
            }

        },
        {
            name: 'Contact Template',
            nameProperty: 'ContactTemplate',
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
                                top: '4',
                                right: '10',
                                bottom: '4',
                                left: '10'
                            },
                            margin: margin,
                            color: colorAndGradient,
                            opacity: opacity,
                            shadow: shadow,
                            background: backgroundPosition
                        },
                        T: {
                            size: size,
                            padding: {
                                top: '4',
                                right: '10',
                                bottom: '4',
                                left: '10'
                            },
                            margin: margin,
                            color: colorAndGradient,
                            opacity: opacity,
                            shadow: shadow,
                            background: backgroundPosition
                        },
                        D: {
                            size: size,
                            padding: {
                                top: '4',
                                right: '10',
                                bottom: '4',
                                left: '10'
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
            name: 'Contact Title',
            nameProperty: 'ContactTitle',
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
                defaultValue: {
                    basis: {
                        M: {
                            padding: {
                                top: '5',
                                right: '10',
                                bottom: '5',
                                left: '10'
                            }
                        },
                        T: {
                            padding: {
                                top: '5',
                                right: '10',
                                bottom: '5',
                                left: '10'
                            }
                        },
                        D: {
                            padding: {
                                top: '5',
                                right: '10',
                                bottom: '5',
                                left: '10'
                            }
                        }
                    },
                    typography: {
                        M: {
                            font: {
                                theme: 'Strong',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: null,
                                lineHeight: null,
                                letterSpacing: '0'
                            },
                            text: textProps,
                            color: black,
                            opacity: {
                                value: '1'
                            }
                        },
                        T: {
                            font: {
                                theme: 'Strong',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: null,
                                lineHeight: null,
                                letterSpacing: '0'
                            },
                            text: textProps,
                            color: black,
                            opacity: {
                                value: '1'
                            }
                        },
                        D: {
                            font: {
                                theme: 'Strong',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: null,
                                lineHeight: null,
                                letterSpacing: '0'
                            },
                            text: textProps,
                            color: black,
                            opacity: {
                                value: '1'
                            }
                        }
                    },
                    border: borderMTD,
                    seo: {
                        tag: 'p'
                    }
                }
            }
        },
        {
            name: 'CTA Contact',
            nameProperty: 'ContactCTA',
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
            settings: {
                responsive: ['M', 'T', 'D'],
                defaultValue: {
                    state: {
                        external: false,
                        disabled: false,
                        animation : ''
                    },
                    basis: {
                        M: {
                            size: size,
                            padding: padding,
                            margin: margin,
                            alignment: alignmentStart,
                            shadow: shadow,
                            color: {
                                basic: transparent,
                                hover: transparent,
                                disabled: transparent
                            },
                            opacity: opacityBHD
                        },
                        T: {
                            size: size,
                            padding: padding,
                            margin: margin,
                            alignment: alignmentStart,
                            shadow: shadow,
                            color: {
                                basic: transparent,
                                hover: transparent,
                                disabled: transparent
                            },
                            opacity: opacityBHD
                        },
                        D: {
                            size: size,
                            padding: padding,
                            margin: margin,
                            alignment: alignmentStart,
                            shadow: shadow,
                            color: {
                                basic: transparent,
                                hover: transparent,
                                disabled: transparent
                            },
                            opacity: opacityBHD
                        }
                    },
                    typography: typographyParagraphCTA,
                    icon: iconMTD,
                    border: borderBHD
                }
            }

        },
        {
            name: 'Partner Template',
            nameProperty: 'PartnerTemplate',
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
                                top: '0',
                                right: '0',
                                bottom: '80',
                                left: '0'
                            },
                            margin: {
                                top: '80',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
                            color: colorAndGradient,
                            opacity: opacity,
                            shadow: shadow,
                            background: backgroundPosition
                        },
                        T: {
                            size: size,
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '80',
                                left: '0'
                            },
                            margin: {
                                top: '80',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
                            color: colorAndGradient,
                            opacity: opacity,
                            shadow: shadow,
                            background: backgroundPosition
                        },
                        D: {
                            size: size,
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '80',
                                left: '0'
                            },
                            margin: {
                                top: '80',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
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
            name: 'Partner Title',
            nameProperty: 'PartnerTitle',
            typeField: 'Text',
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
                            padding: padding
                        },
                        T: {
                            padding: {
                                top: '80',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            }
                        },
                        D: {
                            padding: {
                                top: '80',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            }
                        }
                    },
                    typography: typographyTitle3MTD,
                    border: borderMTD,
                    seo: {
                        tag: 'h3'
                    }
                }
            }
        },
        {
            name: 'Partner Image',
            nameProperty: 'PartnerImage',
            typeField: 'SingleImage',
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
                            size: {
                                width: '250',
                                height: '250',
                                maxWidth: '',
                                maxHeight: '',
                                minWidth: '',
                                minHeight: ''
                            },
                            padding: padding,
                            margin: {
                                top: '40',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
                            alignment: alignmentCenter
                        },
                        T: {
                            size: {
                                width: '150',
                                height: '150',
                                maxWidth: '',
                                maxHeight: '',
                                minWidth: '',
                                minHeight: ''
                            },
                            padding: padding,
                            margin: {
                                top: '60',
                                right: '40',
                                bottom: '0',
                                left: '0'
                            },
                            alignment: alignmentStart
                        },
                        D: {
                            size: {
                                width: '150',
                                height: '150',
                                maxWidth: '',
                                maxHeight: '',
                                minWidth: '',
                                minHeight: ''
                            },
                            padding: padding,
                            margin: {
                                top: '60',
                                right: '40',
                                bottom: '0',
                                left: '0'
                            },
                            alignment: alignmentStart
                        }
                    },
                    border: borderMTD
                }
            }
        },{
            name: 'Public Template',
            nameProperty: 'PublicTemplate',
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
                                height: '',
                                maxWidth: '',
                                maxHeight: '',
                                minWidth: '',
                                minHeight: ''
                            },
                            padding: {
                                top: '50',
                                right: '50',
                                bottom: '50',
                                left: '50'
                            },
                            margin: {
                                top: '80',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
                            color: colorAndGradient,
                            opacity: opacity,
                            shadow: shadow,
                            background: backgroundPosition
                        },
                        T: {
                            size: {
                                width: '50%',
                                height: '',
                                maxWidth: '',
                                maxHeight: '',
                                minWidth: '',
                                minHeight: ''
                            },
                            padding: {
                                top: '50',
                                right: '50',
                                bottom: '50',
                                left: '50'
                            },
                            margin: {
                                top: '80',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
                            color: colorAndGradient,
                            opacity: opacity,
                            shadow: shadow,
                            background: backgroundPosition
                        },
                        D: {
                            size: {
                                width: '50%',
                                height: '',
                                maxWidth: '',
                                maxHeight: '',
                                minWidth: '',
                                minHeight: ''
                            },
                            padding: {
                                top: '50',
                                right: '50',
                                bottom: '50',
                                left: '50'
                            },
                            margin: {
                                top: '80',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
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
            name: 'Public Title',
            nameProperty: 'PublicTitle',
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
                defaultValue: {
                    basis: basisMTDforText,
                    typography: typographyTitle3MTD,
                    border: borderMTD,
                    seo: {
                        tag: 'h3'
                    }
                }
            }
        },
        {
            name: 'Public Content',
            nameProperty: 'PublicContent',
            typeField: 'TextMarkdown',
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
                            padding: {
                                top: '20',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            }
                        },
                        T: {
                            padding: {
                                top: '20',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            }
                        },
                        D: {
                            padding: {
                                top: '20',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            }
                        }
                    },
                    typography: typographyParagraphMTD
                }
            }
        },
        {
            name: 'Prerequisite Template',
            nameProperty: 'PrerequisiteTemplate',
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
                                height: '',
                                maxWidth: '',
                                maxHeight: '',
                                minWidth: '',
                                minHeight: ''
                            },
                            padding: {
                                top: '50',
                                right: '50',
                                bottom: '50',
                                left: '50'
                            },
                            margin: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
                            color: colorAndGradient,
                            opacity: opacity,
                            shadow: shadow,
                            background: backgroundPosition
                        },
                        T: {
                            size: {
                                width: '50%',
                                height: '',
                                maxWidth: '',
                                maxHeight: '',
                                minWidth: '',
                                minHeight: ''
                            },
                            padding: {
                                top: '50',
                                right: '50',
                                bottom: '50',
                                left: '50'
                            },
                            margin: {
                                top: '80',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
                            color: colorAndGradient,
                            opacity: opacity,
                            shadow: shadow,
                            background: backgroundPosition
                        },
                        D: {
                            size: {
                                width: '50%',
                                height: '',
                                maxWidth: '',
                                maxHeight: '',
                                minWidth: '',
                                minHeight: ''
                            },
                            padding: {
                                top: '50',
                                right: '50',
                                bottom: '50',
                                left: '50'
                            },
                            margin: {
                                top: '80',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
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
            name: 'Prerequisite Title',
            nameProperty: 'PrerequisiteTitle',
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
                defaultValue: {
                    basis: basisMTDforText,
                    typography: typographyTitle3MTD,
                    border: borderMTD,
                    seo: {
                        tag: 'h3'
                    }
                }
            }
        },
        {
            name: 'Prerequisite Content',
            nameProperty: 'PrerequisiteContent',
            typeField: 'TextMarkdown',
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
                            padding: {
                                top: '20',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            }
                        },
                        T: {
                            padding: {
                                top: '20',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            }
                        },
                        D: {
                            padding: {
                                top: '20',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            }
                        }
                    },
                    typography: typographyParagraphMTD
                }
            }
        },
        {
            name: 'Goal Template',
            nameProperty: 'GoalTemplate',
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
                                top: '50',
                                right: '50',
                                bottom: '50',
                                left: '50'
                            },
                            margin: {
                                top: '30',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
                            color: colorAndGradient,
                            opacity: opacity,
                            shadow: shadow,
                            background: backgroundPosition
                        },
                        T: {
                            size: size,
                            padding: {
                                top: '50',
                                right: '50',
                                bottom: '50',
                                left: '50'
                            },
                            margin: {
                                top: '30',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
                            color: colorAndGradient,
                            opacity: opacity,
                            shadow: shadow,
                            background: backgroundPosition
                        },
                        D: {
                            size: size,
                            padding: {
                                top: '50',
                                right: '50',
                                bottom: '50',
                                left: '50'
                            },
                            margin: {
                                top: '30',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
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
            name: 'Goal Title',
            nameProperty: 'GoalTitle',
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
                defaultValue: {
                    basis: basisMTDforText,
                    typography: typographyTitle3MTD,
                    border: borderMTD,
                    seo: {
                        tag: 'h3'
                    }
                }
            }
        },
        {
            name: 'Goal Content',
            nameProperty: 'GoalContent',
            typeField: 'TextMarkdown',
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
                            padding: {
                                top: '20',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            }
                        },
                        T: {
                            padding: {
                                top: '20',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            }
                        },
                        D: {
                            padding: {
                                top: '20',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            }
                        }
                    },
                    typography: typographyParagraphMTD
                }
            }
        },
        {
            name: 'Certification Template',
            nameProperty: 'CertificationTemplate',
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
                                top: '50',
                                right: '50',
                                bottom: '50',
                                left: '50'
                            },
                            margin: margin,
                            color: colorAndGradient,
                            opacity: opacity,
                            shadow: shadow,
                            background: backgroundPosition
                        },
                        T: {
                            size: size,
                            padding: {
                                top: '50',
                                right: '50',
                                bottom: '50',
                                left: '50'
                            },
                            margin: margin,
                            color: colorAndGradient,
                            opacity: opacity,
                            shadow: shadow,
                            background: backgroundPosition
                        },
                        D: {
                            size: size,
                            padding: {
                                top: '50',
                                right: '50',
                                bottom: '50',
                                left: '50'
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
            name: 'Certification Title',
            nameProperty: 'CertificationTitle',
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
                defaultValue: {
                    basis: basisMTDforText,
                    typography: typographyTitle3MTD,
                    border: borderMTD,
                    seo: {
                        tag: 'h3'
                    }
                }
            }
        },
        {
            name: 'Certification Content',
            nameProperty: 'CertificationContent',
            typeField: 'TextMarkdown',
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
                            padding: {
                                top: '20',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            }
                        },
                        T: {
                            padding: {
                                top: '20',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            }
                        },
                        D: {
                            padding: {
                                top: '20',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            }
                        }
                    },
                    typography: typographyParagraphMTD
                }
            }
        },
        {
            name: 'Validation Template',
            nameProperty: 'ValidationTemplate',
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
                                top: '50',
                                right: '50',
                                bottom: '50',
                                left: '50'
                            },
                            margin: margin,
                            color: colorAndGradient,
                            opacity: opacity,
                            shadow: shadow,
                            background: backgroundPosition
                        },
                        T: {
                            size: size,
                            padding: {
                                top: '50',
                                right: '50',
                                bottom: '50',
                                left: '50'
                            },
                            margin: margin,
                            color: colorAndGradient,
                            opacity: opacity,
                            shadow: shadow,
                            background: backgroundPosition
                        },
                        D: {
                            size: size,
                            padding: {
                                top: '50',
                                right: '50',
                                bottom: '50',
                                left: '50'
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
            name: 'Validation Title',
            nameProperty: 'ValidationTitle',
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
                defaultValue: {
                    basis: basisMTDforText,
                    typography: typographyTitle3MTD,
                    border: borderMTD,
                    seo: {
                        tag: 'h3'
                    }
                }
            }
        },
        {
            name: 'Validation Content',
            nameProperty: 'ValidationContent',
            typeField: 'TextMarkdown',
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
                            padding: {
                                top: '20',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            }
                        },
                        T: {
                            padding: {
                                top: '20',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            }
                        },
                        D: {
                            padding: {
                                top: '20',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            }
                        }
                    },
                    typography: typographyParagraphMTD
                }
            }
        },

        {
            name: 'Additional Info Template',
            nameProperty: 'AdditionalInfoTemplate',
            typeField: 'Template',
            content: {
                responsive: ['M', 'T', 'D'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTemplate
        },
        {
            name: 'Additional Info SubBlock Template',
            nameProperty: 'AdditionalInfoSubBlockTemplate',
            typeField: 'Template',
            content: {
                responsive: ['M', 'T', 'D'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTemplate
        },
        {
            name: 'Additional Info Title',
            nameProperty: 'AdditionalInfoTitle',
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
            name: 'Trainers Title',
            nameProperty: 'TrainersTitle',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                    text: {}
                }
            },
            settings: {}
        },
        {
            name: 'Trainer Image',
            nameProperty: 'TrainerImage',
            typeField: 'SingleImage',
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
                            size: {
                                width: '150',
                                height: '150',
                                maxWidth: '',
                                maxHeight: '',
                                minWidth: '',
                                minHeight: ''
                            },
                            padding: padding,
                            margin: {
                                top: '60',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
                            alignment: alignmentCenter
                        },
                        T: {
                            size: {
                                width: '150',
                                height: '150',
                                maxWidth: '',
                                maxHeight: '',
                                minWidth: '',
                                minHeight: ''
                            },
                            padding: padding,
                            margin: {
                                top: '60',
                                right: '40',
                                bottom: '0',
                                left: '0'
                            },
                            alignment: alignmentStart
                        },
                        D: {
                            size: {
                                width: '150',
                                height: '150',
                                maxWidth: '',
                                maxHeight: '',
                                minWidth: '',
                                minHeight: ''
                            },
                            padding: padding,
                            margin: {
                                top: '60',
                                right: '40',
                                bottom: '0',
                                left: '0'
                            },
                            alignment: alignmentStart
                        }
                    },
                    border: {
                        M: {
                            width: {
                                top: '2',
                                right: '2',
                                bottom: '2',
                                left: '2'
                            },
                            radius: {
                                topLeft: '100%',
                                topRight: '100%',
                                bottomLeft: '100%',
                                bottomRight: '100%'
                            },
                            color: transparent,
                            opacity: opacity
                        },
                        T: {
                            width: {
                                top: '2',
                                right: '2',
                                bottom: '2',
                                left: '2'
                            },
                            radius: {
                                topLeft: '100%',
                                topRight: '100%',
                                bottomLeft: '100%',
                                bottomRight: '100%'
                            },
                            color: transparent,
                            opacity: opacity
                        },
                        D: {
                            width: {
                                top: '2',
                                right: '2',
                                bottom: '2',
                                left: '2'
                            },
                            radius: {
                                topLeft: '100%',
                                topRight: '100%',
                                bottomLeft: '100%',
                                bottomRight: '100%'
                            },
                            color: transparent,
                            opacity: opacity
                        }
                    }
                }
            }
        },
        {
            name: 'Trainer Title',
            nameProperty: 'TrainerTitle',
            typeField: 'Text',
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
                            padding: {
                                top: '50',
                                right: '0',
                                bottom: '20',
                                left: '0'
                            }
                        },
                        T: {
                            padding: {
                                top: '60',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            }
                        },
                        D: {
                            padding: {
                                top: '60',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            }
                        }
                    },
                    typography: {
                        M: {
                            font: {
                                theme: 'Strong',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: null,
                                lineHeight: null,
                                letterSpacing: '0'
                            },
                            text: textPropsCenter,
                            color: black,
                            opacity: {
                                value: '1'
                            }
                        },
                        T: {
                            font: {
                                theme: 'Strong',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: null,
                                lineHeight: null,
                                letterSpacing: '0'
                            },
                            text: textProps,
                            color: black,
                            opacity: {
                                value: '1'
                            }
                        },
                        D: {
                            font: {
                                theme: 'Strong',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: null,
                                lineHeight: null,
                                letterSpacing: '0'
                            },
                            text: textProps,
                            color: black,
                            opacity: {
                                value: '1'
                            }
                        }
                    },
                    border: borderMTD,
                    seo: {
                        tag: 'h4'
                    }
                }
            }
        }
    ]
};
