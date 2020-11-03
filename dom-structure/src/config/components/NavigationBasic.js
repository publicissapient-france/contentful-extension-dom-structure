import {
    alignmentStart,
    black, borderRadius, borderWidth,
    grey70,
    margin,
    opacity,
    padding, paragraph, textPropsCenter,
    transparent,
    white
} from "../../utils/configModel/atom.model.config";
import {settingsSingleImage} from "../../utils/configModel/organism.model.config";

export default {
    model: 'NavigationBasic',
    fields: [
        {
            name: 'Navigation Bar',
            nameProperty: 'Bar',
            typeField: 'NavigationBar',
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
                                basic: {
                                    width: '100%',
                                    height: '50',
                                    maxWidth: '',
                                    maxHeight: '',
                                    minWidth: '',
                                    minHeight: ''
                                },
                                scroll: {
                                    width: '100%',
                                    height: '50',
                                    maxWidth: '',
                                    maxHeight: '',
                                    minWidth: '',
                                    minHeight: ''
                                }

                            },
                            padding: {
                                basic: padding,
                                scroll: padding

                            },
                            margin: {
                                basic: margin,
                                scroll: margin
                            },
                            color: {
                                basic: white,
                                scroll: white

                            },
                            opacity: {
                                basic: {
                                    value: '0.8'
                                },
                                scroll: {
                                    value: '0.8'
                                }

                            }
                        },
                        T: {
                            size: {
                                basic: {
                                    width: '100%',
                                    height: '50',
                                    maxWidth: '',
                                    maxHeight: '',
                                    minWidth: '',
                                    minHeight: ''
                                },
                                scroll: {
                                    width: '100%',
                                    height: '50',
                                    maxWidth: '',
                                    maxHeight: '',
                                    minWidth: '',
                                    minHeight: ''
                                }

                            },
                            padding: {
                                basic: padding,
                                scroll: padding

                            },
                            margin: {
                                basic: margin,
                                scroll: margin
                            },
                            color: {
                                basic: white,
                                scroll: white

                            },
                            opacity: {
                                basic: {
                                    value: '0.8'
                                },
                                scroll: {
                                    value: '0.8'
                                }

                            }
                        },
                        D: {
                            size: {
                                basic: {
                                    width: '100%',
                                    height: '60',
                                    maxWidth: '',
                                    maxHeight: '',
                                    minWidth: '',
                                    minHeight: ''
                                },
                                scroll: {
                                    width: '100%',
                                    height: '60',
                                    maxWidth: '',
                                    maxHeight: '',
                                    minWidth: '',
                                    minHeight: ''
                                }

                            },
                            padding: {
                                basic: padding,
                                scroll: padding

                            },
                            margin: {
                                basic: margin,
                                scroll: margin
                            },
                            color: {
                                basic: white,
                                scroll: white

                            },
                            opacity: {
                                basic: {
                                    value: '0.9'
                                },
                                scroll: {
                                    value: '0.9'
                                }

                            }
                        }
                    },
                    svg: {
                        M: {
                            size: {
                                width: '30',
                                height: ''
                            },
                            fill: black,
                            opacityFill: opacity,
                            color: white,
                            opacity: opacity
                        },
                        T: {
                            size: {
                                width: '30',
                                height: ''
                            },
                            fill: black,
                            opacityFill: opacity,
                            color: white,
                            opacity: opacity
                        },
                        D: {
                            size: {
                                width: '30',
                                height: ''
                            },
                            fill: transparent,
                            opacityFill: opacity,
                            color: black,
                            opacity: opacity
                        }
                    },
                    burger: {
                        M: {
                            size: {
                                width: '50',
                                height: '50'
                            },
                            fill: grey70,
                            opacityFill: opacity
                        },
                        T: {
                            size: {
                                width: '50',
                                height: '50'
                            },
                            fill: grey70,
                            opacityFill: opacity
                        },
                        D: {
                            size: {
                                width: '50',
                                height: '50'
                            },
                            fill: grey70,
                            opacityFill: opacity
                        }
                    }
                }
            }

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
                                height: '50',
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
                                height: '60',
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
