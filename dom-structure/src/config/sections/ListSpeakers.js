import {settingsFlexContainer, settingsSectionTemplate} from "../../utils/organism.model.config";
import {
    alignmentStart,
    black,
    opacity,
    padding,
    paragraph,
    shadow, textProps,
    textPropsCenter,
    title3, title4,
    white
} from "../../utils/atom.model.config";
import {borderMTD} from "../../utils/molecules.model.config";

export default {
    model: 'ListSpeakers',
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
            settings: {
                responsive: ['M', 'T', 'D'],
                defaultValue: {
                    basis: {
                        M: {
                            color: white,
                            opacity: opacity,
                            shadow: shadow,
                            shadow2: {
                                value: '0px 20px 40px 0px rgba(45,69,112,0.4)'
                            }

                        },
                        T: {
                            color: white,
                            opacity: opacity,
                            shadow: shadow,
                            shadow2: {
                                value: '0px 20px 40px 0px rgba(45,69,112,0.4)'
                            }
                        },
                        D: {
                            color: white,
                            opacity: opacity,
                            shadow: shadow,
                            shadow2: {
                                value: '0px 20px 40px 0px rgba(45,69,112,0.4)'
                            }
                        }
                    },
                    border: borderMTD
                }
            }
        },
        {
            name: 'Speakers',
            nameProperty: 'Speakers',
            typeField: 'SelectSpeakers',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                    icon1: "",
                    icon2: "",
                    icon3: "",
                    speakers: [],
                    priority: [],
                    display: {
                        logo: {
                            tiny: false,
                            large: false
                        }
                    }
                }
            },
            settings: {
                responsive: ['M', 'T', 'D'],
                defaultValue: {
                    name: {
                        M: {
                            font: title3,
                            text: textPropsCenter,
                            color: black,
                            opacity: opacity,
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '5',
                                left: '0'
                            }
                        },
                        T: {
                            font: title3,
                            text: textPropsCenter,
                            color: black,
                            opacity: opacity,
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '5',
                                left: '0'
                            }
                        },
                        D: {
                            font: title3,
                            text: textPropsCenter,
                            color: black,
                            opacity: opacity,
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '5',
                                left: '0'
                            }
                        }
                    },
                    job: {
                        M: {
                            font: paragraph,
                            text: textPropsCenter,
                            color: black,
                            opacity: opacity,
                            padding: padding
                        },
                        T: {
                            font: paragraph,
                            text: textPropsCenter,
                            color: black,
                            opacity: opacity,
                            padding: padding
                        },
                        D: {
                            font: paragraph,
                            text: textPropsCenter,
                            color: black,
                            opacity: opacity,
                            padding: padding
                        }
                    },
                    company: {
                        M: {
                            font: paragraph,
                            text: textPropsCenter,
                            color: black,
                            opacity: opacity,
                            padding: padding
                        },
                        T: {
                            font: paragraph,
                            text: textPropsCenter,
                            color: black,
                            opacity: opacity,
                            padding: padding
                        },
                        D: {
                            font: paragraph,
                            text: textPropsCenter,
                            color: black,
                            opacity: opacity,
                            padding: padding
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
                    },
                    icon: {
                        M: {
                            font: {
                                family: null,
                                typeface: null,
                                weight: null,
                                size: '42',
                                lineHeight: '42',
                            },
                            color: {
                                basic: {
                                    hex: '#B2B2B2',
                                    rgb: '178, 178,178',
                                    name: 'Grey',
                                    shade: '40'
                                },
                                hover: black
                            },
                            opacity: {
                                basic: opacity,
                                hover: opacity
                            },
                            margin: {
                                top: '0',
                                right: '20',
                                bottom: '0',
                                left: '0'
                            }
                        },
                        T: {
                            font: {
                                family: null,
                                typeface: null,
                                weight: null,
                                size: '38.5',
                                lineHeight: '38.5'
                            },
                            color: {
                                basic: {
                                    hex: '#B2B2B2',
                                    rgb: '178, 178,178',
                                    name: 'Grey',
                                    shade: '40'
                                },
                                hover: black
                            },
                            opacity: {
                                basic: opacity,
                                hover: opacity
                            },
                            margin: {
                                top: '0',
                                right: '20',
                                bottom: '0',
                                left: '0'
                            }
                        },
                        D: {
                            font: {
                                family: null,
                                typeface: null,
                                weight: null,
                                size: '35',
                                lineHeight: '35'
                            },
                            color: {
                                basic: {
                                    hex: '#B2B2B2',
                                    rgb: '178, 178,178',
                                    name: 'Grey',
                                    shade: '40'
                                },
                                hover: black
                            },
                            opacity: {
                                basic: opacity,
                                hover: opacity
                            },
                            margin: {
                                top: '0',
                                right: '20',
                                bottom: '0',
                                left: '0'
                            }
                        }
                    },
                    photo: {
                        M: {
                            color: black,
                            opacity: {
                                value: '0.5'
                            }
                        },
                        T: {
                            color: black,
                            opacity: {
                                value: '0.5'
                            }
                        },
                        D: {
                            color: black,
                            opacity: {
                                value: '0.5'
                            }
                        }
                    },
                    logo: {
                        M: {
                            size: {
                                width: '100%',
                                height: 'auto',
                                maxWidth: '',
                                maxHeight: ''
                            },
                            padding: padding,
                            alignment: alignmentStart
                        },
                        T: {
                            size: {
                                width: '100%',
                                height: 'auto',
                                maxWidth: '',
                                maxHeight: ''
                            },
                            padding: padding,
                            alignment: alignmentStart
                        },
                        D: {
                            size: {
                                width: '100%',
                                height: 'auto',
                                maxWidth: '',
                                maxHeight: ''
                            },
                            padding: padding,
                            alignment: alignmentStart
                        }
                    }
                }
            }

        }
    ]
}
;
