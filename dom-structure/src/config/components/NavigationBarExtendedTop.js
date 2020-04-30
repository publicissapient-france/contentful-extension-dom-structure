import {
    alignmentStart, borderRadius, borderWidth,
    grey70,
    margin,
    opacity,
    padding, paragraph,
    sizeNavigation, textPropsCenter,
    transparent,
    white
} from "../../utils/atom.model.config";

export default {
    model: 'NavigationBarExtentedTop',
    fields: [
        {
            name: 'Navigation Bar',
            nameProperty: 'Bar',
            typeField: 'NavigationBar',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                }
            },
            settings: {
                responsive : ['M', 'T', 'D'],
                defaultValue: {
                    basis: {
                        M: {
                            size: {
                                basic : sizeNavigation,
                                scroll : sizeNavigation

                            },
                            padding: {
                                basic : padding,
                                scroll : padding

                            },
                            margin: {
                                basic : margin,
                                scroll : margin
                            },
                            color: {
                                basic : grey70,
                                scroll : grey70

                            },
                            opacity: {
                                basic : opacity,
                                scroll : opacity

                            }
                        },
                        T: {
                            size: {
                                basic : sizeNavigation,
                                scroll : sizeNavigation

                            },
                            padding: {
                                basic : {
                                    top: '30',
                                    right: '0',
                                    bottom: '30',
                                    left: '0'
                                },
                                scroll : padding

                            },
                            margin: {
                                basic : margin,
                                scroll : margin
                            },
                            color: {
                                basic : transparent,
                                scroll : white

                            },
                            opacity: {
                                basic : opacity,
                                scroll : {
                                    value: '0.3'
                                }

                            }
                        },
                        D: {
                            size: {
                                basic : sizeNavigation,
                                scroll : sizeNavigation
                            },
                            padding: {
                                basic : {
                                    top: '30',
                                    right: '0',
                                    bottom: '30',
                                    left: '0'
                                },
                                scroll : padding

                            },
                            margin: {
                                basic : margin,
                                scroll : margin
                            },
                            color: {
                                basic : transparent,
                                scroll : transparent

                            },
                            opacity: {
                                basic : opacity,
                                scroll : {
                                    value: '0.3'
                                }

                            }
                        },
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
                                hover: {
                                    value: '0.5'
                                },
                                active: {
                                    value: '0.5'
                                }
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
                                hover: {
                                    value: '0.5'
                                },
                                active: {
                                    value: '0.5'
                                }
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
                                hover: {
                                    value: '0.5'
                                },
                                active: {
                                    value: '0.5'
                                }
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
            settings: {
                responsive: ['M', 'T', 'D'],
                defaultValue: {
                    basis: {
                        M: {
                            size: {
                                width: '',
                                height: '20',
                                maxWidth: '',
                                maxHeight: ''
                            },
                            padding: padding,
                            margin: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '20'
                            },
                            alignment: alignmentStart
                        },
                        T: {
                            size: {
                                width: '',
                                height: '20',
                                maxWidth: '',
                                maxHeight: ''

                            },
                            padding: padding,
                            margin: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '20'
                            },
                            alignment: alignmentStart
                        },
                        D: {
                            size: {
                                width: '',
                                height: '20',
                                maxWidth: '',
                                maxHeight: ''

                            },
                            padding: padding,
                            margin: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '20'
                            },
                            alignment: alignmentStart
                        }
                    }
                }
            }

        }
    ]
};
