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
                defaultValue: {
                }
            },
            settings: {
                responsive : ['M', 'T', 'D'],
                defaultValue: {
                    basis: {
                        M: {
                            size: {
                                basic : {
                                    width: '100%',
                                    height: '50',
                                    maxWidth: '',
                                    maxHeight: '',
                                    minWidth: '',
                                    minHeight: ''
                                },
                                scroll : {
                                    width: '100%',
                                    height: '50',
                                    maxWidth: '',
                                    maxHeight: '',
                                    minWidth: '',
                                    minHeight: ''
                                }

                            },
                            padding: {
                                basic : {
                                    top: '0',
                                    right: '0',
                                    bottom: '0',
                                    left: '0'
                                },
                                scroll : {
                                    top: '0',
                                    right: '0',
                                    bottom: '0',
                                    left: '0'
                                }

                            },
                            margin: {
                                basic : {
                                    top: '0',
                                    right: '0',
                                    bottom: '0',
                                    left: '0'
                                },
                                scroll : {
                                    top: '0',
                                    right: '0',
                                    bottom: '0',
                                    left: '0'
                                }
                            },
                            color: {
                                basic : {
                                    hex: '#303030',
                                    rgb: '48,48,48',
                                    name: 'Grey-90',
                                    shade: null
                                },
                                scroll : {
                                    hex: '#FFFFFF',
                                    rgb: '255,255,255',
                                    name: 'White',
                                    shade: null
                                }

                            },
                            opacity: {
                                basic : {
                                    value: '1'
                                },
                                scroll : {
                                    value: '0.3'
                                }

                            }
                        },
                        T: {
                            size: {
                                basic : {
                                    width: '100%',
                                    height: '60',
                                    maxWidth: '',
                                    maxHeight: '',
                                    minWidth: '',
                                    minHeight: ''
                                },
                                scroll : {
                                    width: '100%',
                                    height: '50',
                                    maxWidth: '',
                                    maxHeight: '',
                                    minWidth: '',
                                    minHeight: ''
                                }

                            },
                            padding: {
                                basic : {
                                    top: '0',
                                    right: '0',
                                    bottom: '0',
                                    left: '0'
                                },
                                scroll : {
                                    top: '0',
                                    right: '0',
                                    bottom: '0',
                                    left: '0'
                                }

                            },
                            margin: {
                                basic : {
                                    top: '0',
                                    right: '0',
                                    bottom: '0',
                                    left: '0'
                                },
                                scroll : {
                                    top: '0',
                                    right: '0',
                                    bottom: '0',
                                    left: '0'
                                }
                            },
                            color: {
                                basic : {
                                    hex: 'transparent',
                                    rgb: '',
                                    name: 'Transparent',
                                    shade: null
                                },
                                scroll : {
                                    hex: '#FFFFFF',
                                    rgb: '255,255,255',
                                    name: 'White',
                                    shade: null
                                }

                            },
                            opacity: {
                                basic : {
                                    value: '1'
                                },
                                scroll : {
                                    value: '0.3'
                                }

                            }
                        },
                        D: {
                            size: {
                                basic : {
                                    width: '100%',
                                    height: '60',
                                    maxWidth: '',
                                    maxHeight: '',
                                    minWidth: '',
                                    minHeight: ''
                                },
                                scroll : {
                                    width: '100%',
                                    height: '50',
                                    maxWidth: '',
                                    maxHeight: '',
                                    minWidth: '',
                                    minHeight: ''
                                }

                            },
                            padding: {
                                basic : {
                                    top: '0',
                                    right: '0',
                                    bottom: '0',
                                    left: '0'
                                },
                                scroll : {
                                    top: '0',
                                    right: '0',
                                    bottom: '0',
                                    left: '0'
                                }

                            },
                            margin: {
                                basic : {
                                    top: '0',
                                    right: '0',
                                    bottom: '0',
                                    left: '0'
                                },
                                scroll : {
                                    top: '0',
                                    right: '0',
                                    bottom: '0',
                                    left: '0'
                                }
                            },
                            color: {
                                basic : {
                                    hex: 'transparent',
                                    rgb: '',
                                    name: 'Transparent',
                                    shade: null
                                },
                                scroll : {
                                    hex: '#FFFFFF',
                                    rgb: '255,255,255',
                                    name: 'White',
                                    shade: null
                                }

                            },
                            opacity: {
                                basic : {
                                    value: '1'
                                },
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
                            margin: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
                            alignment: {
                                horizontal: 'flex-start'
                            },
                            color: {
                                basic: {
                                    hex: 'transparent',
                                    rgb: '',
                                    name: 'Transparent',
                                    shade: null
                                },
                                hover: {
                                    hex: '#FFFFFF',
                                    rgb: '255,255,255',
                                    name: 'White',
                                    shade: null
                                },
                                active: {
                                    hex: 'transparent',
                                    rgb: '',
                                    name: 'Transparent',
                                    shade: null
                                }
                            },
                            opacity: {
                                basic: {
                                    value: '1'
                                },
                                hover: {
                                    value: '0.3'
                                },
                                active: {
                                    value: '1'
                                }
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
                            margin: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
                            alignment: {
                                horizontal: 'flex-start'
                            },
                            color: {
                                basic: {
                                    hex: 'transparent',
                                    rgb: '',
                                    name: 'Transparent',
                                    shade: null
                                },
                                hover: {
                                    hex: '#FFFFFF',
                                    rgb: '255,255,255',
                                    name: 'White',
                                    shade: null
                                },
                                active: {
                                    hex: 'transparent',
                                    rgb: '',
                                    name: 'Transparent',
                                    shade: null
                                }
                            },
                            opacity: {
                                basic: {
                                    value: '1'
                                },
                                hover: {
                                    value: '0.3'
                                },
                                active: {
                                    value: '1'
                                }
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
                            margin: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
                            alignment: {
                                horizontal: 'flex-start'
                            },
                            color: {
                                basic: {
                                    hex: 'transparent',
                                    rgb: '',
                                    name: 'Transparent',
                                    shade: null
                                },
                                hover: {
                                    hex: '#FFFFFF',
                                    rgb: '255,255,255',
                                    name: 'White',
                                    shade: null
                                },
                                active: {
                                    hex: 'transparent',
                                    rgb: '',
                                    name: 'Transparent',
                                    shade: null
                                }
                            },
                            opacity: {
                                basic: {
                                    value: '1'
                                },
                                hover: {
                                    value: '0.3'
                                },
                                active: {
                                    value: '1'
                                }
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
                                size: null,
                                lineHeight: null,
                                letterSpacing: '0'
                            },
                            text: {
                                align: 'center',
                                transform: null,
                                decoration: null
                            },
                            color: {
                                basic: {
                                    hex: '#FFFFFF',
                                    rgb: '255,255,255',
                                    name: 'White',
                                    shade: null
                                },
                                hover: {
                                    hex: '#FFFFFF',
                                    rgb: '255,255,255',
                                    name: 'White',
                                    shade: null
                                },
                                active: {
                                    hex: '#FFFFFF',
                                    rgb: '255,255,255',
                                    name: 'White',
                                    shade: null
                                }
                            },
                            opacity: {
                                basic: {
                                    value: '1'
                                },
                                hover: {
                                    value: '0.5'
                                },
                                active: {
                                    value: '0.5'
                                }
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
                            text: {
                                align: 'center',
                                transform: null,
                                decoration: null
                            },
                            color: {
                                basic: {
                                    hex: '#FFFFFF',
                                    rgb: '255,255,255',
                                    name: 'White',
                                    shade: null
                                },
                                hover: {
                                    hex: '#FFFFFF',
                                    rgb: '255,255,255',
                                    name: 'White',
                                    shade: null
                                },
                                active: {
                                    hex: '#FFFFFF',
                                    rgb: '255,255,255',
                                    name: 'White',
                                    shade: null
                                }
                            },
                            opacity: {
                                basic: {
                                    value: '1'
                                },
                                hover: {
                                    value: '0.5'
                                },
                                active: {
                                    value: '0.5'
                                }
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
                            text: {
                                align: 'center',
                                transform: null,
                                decoration: null
                            },
                            color: {
                                basic: {
                                    hex: '#FFFFFF',
                                    rgb: '255,255,255',
                                    name: 'White',
                                    shade: null
                                },
                                hover: {
                                    hex: '#FFFFFF',
                                    rgb: '255,255,255',
                                    name: 'White',
                                    shade: null
                                },
                                active: {
                                    hex: '#FFFFFF',
                                    rgb: '255,255,255',
                                    name: 'White',
                                    shade: null
                                }
                            },
                            opacity: {
                                basic: {
                                    value: '1'
                                },
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
                            width: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
                            radius: {
                                topLeft: '0',
                                topRight: '0',
                                bottomLeft: '0',
                                bottomRight: '0'
                            },
                            color: {
                                basic: {
                                    hex: 'transparent',
                                    rgb: '',
                                    name: 'Transparent',
                                    shade: null
                                },
                                hover: {
                                    hex: 'transparent',
                                    rgb: '',
                                    name: 'Transparent',
                                    shade: null
                                },
                                active: {
                                    hex: 'transparent',
                                    rgb: '',
                                    name: 'Transparent',
                                    shade: null
                                }
                            },
                            opacity: {
                                basic: {
                                    value: '1'
                                },
                                hover: {
                                    value: '1'
                                },
                                active: {
                                    value: '1'
                                }
                            }
                        },
                        T: {
                            width: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
                            radius: {
                                topLeft: '0',
                                topRight: '0',
                                bottomLeft: '0',
                                bottomRight: '0'
                            },
                            color: {
                                basic: {
                                    hex: 'transparent',
                                    rgb: '',
                                    name: 'Transparent',
                                    shade: null
                                },
                                hover: {
                                    hex: 'transparent',
                                    rgb: '',
                                    name: 'Transparent',
                                    shade: null
                                },
                                active: {
                                    hex: 'transparent',
                                    rgb: '',
                                    name: 'Transparent',
                                    shade: null
                                }
                            },
                            opacity: {
                                basic: {
                                    value: '1'
                                },
                                hover: {
                                    value: '1'
                                },
                                active: {
                                    value: '1'
                                }
                            }
                        },
                        D: {
                            width: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
                            radius: {
                                topLeft: '0',
                                topRight: '0',
                                bottomLeft: '0',
                                bottomRight: '0'
                            },
                            color: {
                                basic: {
                                    hex: 'transparent',
                                    rgb: '',
                                    name: 'Transparent',
                                    shade: null
                                },
                                hover: {
                                    hex: 'transparent',
                                    rgb: '',
                                    name: 'Transparent',
                                    shade: null
                                },
                                active: {
                                    hex: 'transparent',
                                    rgb: '',
                                    name: 'Transparent',
                                    shade: null
                                }
                            },
                            opacity: {
                                basic: {
                                    value: '1'
                                },
                                hover: {
                                    value: '1'
                                },
                                active: {
                                    value: '1'
                                }
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
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
                            margin: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '20'
                            },
                            alignment: {
                                horizontal: 'flex-start'
                            }
                        },
                        T: {
                            size: {
                                width: '',
                                height: '20',
                                maxWidth: '',
                                maxHeight: ''

                            },
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
                            margin: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '20'
                            },
                            alignment: {
                                horizontal: 'flex-start'
                            }
                        },
                        D: {
                            size: {
                                width: '',
                                height: '20',
                                maxWidth: '',
                                maxHeight: ''

                            },
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
                            margin: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '20'
                            },
                            alignment: {
                                horizontal: 'flex-start'
                            }
                        }
                    }
                }
            }

        }
    ]
};
