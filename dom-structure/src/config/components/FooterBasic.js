import {settingsSingleImage, settingsTemplate} from "../../utils/configModel/organism.model.config";
import {
    alignmentStart,
    margin,
    opacity,
    transparent,
    paragraph,
    textPropsCenter, white, opacityBHD, borderWidth, borderRadius
} from "../../utils/configModel/atom.model.config";
import {borderMTD} from "../../utils/configModel/molecules.model.config";

export default {
    model: 'FooterBasic',
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
            name: 'Navigation Links',
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
                            size: {
                                width: '',
                                height: '50',
                                maxWidth: '',
                                maxHeight: ''

                            },
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
                            size: {
                                width: '',
                                height: '100%',
                                maxWidth: '',
                                maxHeight: ''

                            },
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
                            size: {
                                width: '',
                                height: '100%',
                                maxWidth: '',
                                maxHeight: ''

                            },
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
                                basic: white,
                                hover: white,
                                active: white
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
                                basic: white,
                                hover: white,
                                active: white
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
                                basic: white,
                                hover: white,
                                active: white
                            },
                            opacity: {
                                basic: opacity,
                                hover: opacity,
                                active: opacity
                            }
                        }
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
