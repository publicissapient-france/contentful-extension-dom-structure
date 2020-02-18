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
            settings: {
                responsive: ['M', 'T', 'D'],
                defaultValue: {
                    basis: {
                        M: {
                            padding: {
                                top: '0',
                                right: '15',
                                bottom: '15',
                                left: '0'
                            },
                            color: {
                                hex: '#000000',
                                rgb: '0,0,0',
                                name: 'black',
                                shade: null
                            },
                            opacity: {
                                value: '1'
                            }
                        },
                        T: {
                            padding: {
                                top: '0',
                                right: '20',
                                bottom: '0',
                                left: '20'
                            },
                            color: {
                                hex: '#000000',
                                rgb: '0,0,0',
                                name: 'black',
                                shade: null
                            },
                            opacity: {
                                value: '1'
                            }
                        },
                        D: {
                            padding: {
                                top: '0',
                                right: '20',
                                bottom: '0',
                                left: '20'
                            },
                            color: {
                                hex: '#000000',
                                rgb: '0,0,0',
                                name: 'black',
                                shade: null
                            },
                            opacity: {
                                value: '1'
                            }
                        }
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
                                hex: 'transparent',
                                rgb: '',
                                name: 'Transparent',
                                shade: null
                            },
                            opacity: {
                                value: '1'
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
                                hex: 'transparent',
                                rgb: '',
                                name: 'Transparent',
                                shade: null
                            },
                            opacity: {
                                value: '1'
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
                                hex: 'transparent',
                                rgb: '',
                                name: 'Transparent',
                                shade: null
                            },
                            opacity: {
                                value: '1'
                            }
                        }
                    }
                }
            }

        },
        {
            name: 'Flex Container',
            nameProperty: 'FlexContainer',
            typeField: 'FlexContainer',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: {
                responsive: ['M', 'T', 'D'],
                defaultValue: {
                    flex: {
                        M: {
                            properties: {
                                columns: '1',
                                gutterHorizontal: '0',
                                gutterVertical: '20',
                                direction: 'row',
                                wrap: 'wrap',
                                justify: 'flex-start',
                                alignItems: 'flex-start',
                                alignContent: 'flex-start'
                            }
                        },
                        T: {
                            properties: {
                                columns: '2',
                                gutterHorizontal: '20',
                                gutterVertical: '20',
                                direction: 'flex',
                                wrap: 'wrap',
                                justify: 'space-between',
                                alignItems: 'stretch',
                                alignContent: 'flex-start'
                            }
                        },
                        D: {
                            properties: {
                                columns: '3',
                                gutterHorizontal: '20',
                                gutterVertical: '20',
                                direction: 'flex',
                                wrap: 'wrap',
                                justify: 'space-between',
                                alignItems: 'stretch',
                                alignContent: 'flex-start'
                            }
                        }
                    }
                }
            }

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
                            size: {
                                width: '',
                                height: 'auto',
                                maxWidth: '',
                                maxHeight: '',
                                minWidth: '',
                                minHeight: '400'
                            },
                            padding: {
                                top: '10',
                                right: '10',
                                bottom: '10',
                                left: '10'
                            },
                            margin: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
                            color: {
                                hex: '#000000',
                                rgb: '0,0,0',
                                name: 'black',
                                shade: null
                            },
                            opacity: {
                                value: '1'
                            }
                        },
                        T: {
                            size: {
                                width: '',
                                height: 'auto',
                                maxWidth: '',
                                maxHeight: '',
                                minWidth: '',
                                minHeight: '400'
                            },
                            padding: {
                                top: '10',
                                right: '10',
                                bottom: '10',
                                left: '10'
                            },
                            margin: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
                            color: {
                                hex: '#000000',
                                rgb: '0,0,0',
                                name: 'black',
                                shade: null
                            },
                            opacity: {
                                value: '1'
                            }
                        },
                        D: {
                            size: {
                                width: '',
                                height: 'auto',
                                maxWidth: '',
                                maxHeight: '',
                                minWidth: '',
                                minHeight: '400'
                            },
                            padding: {
                                top: '10',
                                right: '10',
                                bottom: '10',
                                left: '10'
                            },
                            margin: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
                            color: {
                                hex: '#000000',
                                rgb: '0,0,0',
                                name: 'black',
                                shade: null
                            },
                            opacity: {
                                value: '1'
                            }
                        }
                    }
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
                            font: {
                                theme: 'Title3',
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
                                hex: '#FFFFFF',
                                rgb: '255,255,255',
                                name: 'white',
                                shade: null
                            },
                            opacity: {
                                value: '1'
                            }
                        },
                        T: {
                            font: {
                                theme: 'Title3',
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
                                hex: '#FFFFFF',
                                rgb: '255,255,255',
                                name: 'white',
                                shade: null
                            },
                            opacity: {
                                value: '1'
                            }
                        },
                        D: {
                            font: {
                                theme: 'Title3',
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
                                hex: '#FFFFFF',
                                rgb: '255,255,255',
                                name: 'white',
                                shade: null
                            },
                            opacity: {
                                value: '1'
                            }
                        }
                    },
                    job: {
                        M: {
                            font: {
                                theme: 'Title3',
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
                                hex: '#FFFFFF',
                                rgb: '255,255,255',
                                name: 'white',
                                shade: null
                            },
                            opacity: {
                                value: '1'
                            }
                        },
                        T: {
                            font: {
                                theme: 'Title3',
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
                                hex: '#FFFFFF',
                                rgb: '255,255,255',
                                name: 'white',
                                shade: null
                            },
                            opacity: {
                                value: '1'
                            }
                        },
                        D: {
                            font: {
                                theme: 'Title3',
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
                                hex: '#FFFFFF',
                                rgb: '255,255,255',
                                name: 'white',
                                shade: null
                            },
                            opacity: {
                                value: '1'
                            }
                        }
                    },
                    company: {
                        M: {
                            font: {
                                theme: 'Title3',
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
                                hex: '#FFFFFF',
                                rgb: '255,255,255',
                                name: 'white',
                                shade: null
                            },
                            opacity: {
                                value: '1'
                            }
                        },
                        T: {
                            font: {
                                theme: 'Title3',
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
                                hex: '#FFFFFF',
                                rgb: '255,255,255',
                                name: 'white',
                                shade: null
                            },
                            opacity: {
                                value: '1'
                            }
                        },
                        D: {
                            font: {
                                theme: 'Title3',
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
                                hex: '#FFFFFF',
                                rgb: '255,255,255',
                                name: 'white',
                                shade: null
                            },
                            opacity: {
                                value: '1'
                            }
                        }
                    },
                    title: {
                        M: {
                            font: {
                                theme: 'Title3',
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
                                hex: '#FFFFFF',
                                rgb: '255,255,255',
                                name: 'white',
                                shade: null
                            },
                            opacity: {
                                value: '1'
                            }
                        },
                        T: {
                            font: {
                                theme: 'Title3',
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
                                hex: '#FFFFFF',
                                rgb: '255,255,255',
                                name: 'white',
                                shade: null
                            },
                            opacity: {
                                value: '1'
                            }
                        },
                        D: {
                            font: {
                                theme: 'Title3',
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
                                hex: '#FFFFFF',
                                rgb: '255,255,255',
                                name: 'white',
                                shade: null
                            },
                            opacity: {
                                value: '1'
                            }
                        }
                    },
                    text: {
                        M: {
                            font: {
                                theme: 'Title3',
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
                                hex: '#FFFFFF',
                                rgb: '255,255,255',
                                name: 'white',
                                shade: null
                            },
                            opacity: {
                                value: '1'
                            }
                        },
                        T: {
                            font: {
                                theme: 'Title3',
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
                                hex: '#FFFFFF',
                                rgb: '255,255,255',
                                name: 'white',
                                shade: null
                            },
                            opacity: {
                                value: '1'
                            }
                        },
                        D: {
                            font: {
                                theme: 'Title3',
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
                                hex: '#FFFFFF',
                                rgb: '255,255,255',
                                name: 'white',
                                shade: null
                            },
                            opacity: {
                                value: '1'
                            }
                        }
                    },
                    icon: {
                        M: {
                            font: {
                                family: null,
                                typeface: null,
                                weight: null,
                                size: null,
                                lineHeight: null
                            },
                            color: {
                                basic: {
                                    hex: '#4C4C4C',
                                    rgb: '76,76,76',
                                    name: 'Grey',
                                    shade: '80'
                                },
                                hover: {
                                    hex: '#000000',
                                    rgb: '0,0,0',
                                    name: 'black',
                                    shade: null
                                }
                            },
                            opacity: {
                                basic: {
                                    value: '1'
                                },
                                hover: {
                                    value: '1'
                                }
                            }
                        },
                        T: {
                            font: {
                                family: null,
                                typeface: null,
                                weight: null,
                                size: null,
                                lineHeight: null
                            },
                            color: {
                                basic: {
                                    hex: '#4C4C4C',
                                    rgb: '76,76,76',
                                    name: 'Grey',
                                    shade: '80'
                                },
                                hover: {
                                    hex: '#000000',
                                    rgb: '0,0,0',
                                    name: 'black',
                                    shade: null
                                }
                            },
                            opacity: {
                                basic: {
                                    value: '1'
                                },
                                hover: {
                                    value: '1'
                                }
                            }
                        },
                        D: {
                            font: {
                                family: null,
                                typeface: null,
                                weight: null,
                                size: null,
                                lineHeight: null
                            },
                            color: {
                                basic: {
                                    hex: '#4C4C4C',
                                    rgb: '76,76,76',
                                    name: 'Grey',
                                    shade: '80'
                                },
                                hover: {
                                    hex: '#000000',
                                    rgb: '0,0,0',
                                    name: 'black',
                                    shade: null
                                }
                            },
                            opacity: {
                                basic: {
                                    value: '1'
                                },
                                hover: {
                                    value: '1'
                                }
                            }
                        }
                    },
                    photo: {
                        M: {
                            size: {
                                width: '100%',
                                height: 'auto',
                                maxWidth: '',
                                maxHeight: ''
                            },
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
                            alignment: {
                                horizontal: 'flex-start'
                            }
                        },
                        T: {
                            size: {
                                width: '100%',
                                height: 'auto',
                                maxWidth: '',
                                maxHeight: ''
                            },
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
                            alignment: {
                                horizontal: 'flex-start'
                            }
                        },
                        D: {
                            size: {
                                width: '100%',
                                height: 'auto',
                                maxWidth: '',
                                maxHeight: ''
                            },
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
                            alignment: {
                                horizontal: 'flex-start'
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
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
                            alignment: {
                                horizontal: 'flex-start'
                            }
                        },
                        T: {
                            size: {
                                width: '100%',
                                height: 'auto',
                                maxWidth: '',
                                maxHeight: ''
                            },
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
                            alignment: {
                                horizontal: 'flex-start'
                            }
                        },
                        D: {
                            size: {
                                width: '100%',
                                height: 'auto',
                                maxWidth: '',
                                maxHeight: ''
                            },
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '0'
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
}
;
