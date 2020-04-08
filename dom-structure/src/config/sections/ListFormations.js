export default {
    model: 'ListFormations',
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
                                right: '20',
                                bottom: '0',
                                left: '20'
                            },
                            color: {
                                hex: '#F0F0F0',
                                rgb: '240,240,240',
                                name: 'Grey',
                                shade: '10'
                            },
                            opacity: {
                                value: '1'
                            },
                            background : {
                                top : '0'
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
                                hex: '#F0F0F0',
                                rgb: '240,240,240',
                                name: 'Grey',
                                shade: '10'
                            },
                            opacity: {
                                value: '1'
                            },
                            background : {
                                top : '0'
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
                                hex: '#F0F0F0',
                                rgb: '240,240,240',
                                name: 'Grey',
                                shade: '10'
                            },
                            opacity: {
                                value: '1'
                            },
                            background : {
                                top : '0'
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
                defaultValue: {
                }
            },
            settings: {
                responsive : ['M', 'T', 'D'],
                defaultValue: {
                    flex : {
                        M : {
                            properties : {
                                columns : '1',
                                gutterHorizontal : '0',
                                gutterVertical : '20',
                                direction : 'row',
                                wrap : 'wrap',
                                justify : 'flex-start',
                                alignItems : 'flex-start',
                                alignContent : 'flex-start'
                            }
                        },
                        T : {
                            properties : {
                                columns : '3',
                                gutterHorizontal : '20',
                                gutterVertical : '20',
                                direction : 'row',
                                wrap : 'wrap',
                                justify : 'flex-start',
                                alignItems : 'stretch',
                                alignContent : 'flex-start'
                            }
                        },
                        D : {
                            properties : {
                                columns : '4',
                                gutterHorizontal : '20',
                                gutterVertical : '20',
                                direction : 'row',
                                wrap : 'wrap',
                                justify : 'flex-start',
                                alignItems : 'stretch',
                                alignContent : 'flex-start'
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
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
                            margin: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
                            color: {
                                hex: '#FFFFFF',
                                rgb: '255,255,255',
                                name: 'White',
                                shade: null
                            },
                            opacity: {
                                value: '1'
                            },
                            shadow: {
                                value: 'none'
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
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
                            margin: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
                            color: {
                                hex: '#FFFFFF',
                                rgb: '255,255,255',
                                name: 'White',
                                shade: null
                            },
                            opacity: {
                                value: '1'
                            },
                            shadow: {
                                value: 'none'
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
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
                            margin: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
                            color: {
                                hex: '#FFFFFF',
                                rgb: '255,255,255',
                                name: 'White',
                                shade: null
                            },
                            opacity: {
                                value: '1'
                            },
                            shadow: {
                                value: 'none'
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
            name: 'Formations',
            nameProperty: 'Formations',
            typeField: 'SelectFormations',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                    icon1: "",
                    data: [],
                    priority: []
                }
            },
            settings: {
                responsive: ['M', 'T', 'D'],
                defaultValue: {
                    image: {
                        M: {
                            size: {
                                width: '100%',
                                height: 'auto',
                                maxWidth: '',
                                maxHeight: '',
                                minWidth: '',
                                minHeight: ''
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
                                maxHeight: '',
                                minWidth: '',
                                minHeight: ''
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
                                maxHeight: '',
                                minWidth: '',
                                minHeight: ''
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
                    title: {
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
                            text: {
                                align: 'left',
                                transform: null,
                                decoration: null
                            },
                            color: {
                                hex: '#000000',
                                rgb: '0,0,0',
                                name: 'black',
                                shade: null
                            },
                            opacity: {
                                value: '1'
                            },
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '10',
                                left: '0'
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
                            text: {
                                align: 'left',
                                transform: null,
                                decoration: null
                            },
                            color: {
                                hex: '#000000',
                                rgb: '0,0,0',
                                name: 'black',
                                shade: null
                            },
                            opacity: {
                                value: '1'
                            },
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '10',
                                left: '0'
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
                            text: {
                                align: 'left',
                                transform: null,
                                decoration: null
                            },
                            color: {
                                hex: '#000000',
                                rgb: '0,0,0',
                                name: 'black',
                                shade: null
                            },
                            opacity: {
                                value: '1'
                            },
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '10',
                                left: '0'
                            }
                        }
                    },
                    category: {
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
                            text: {
                                align: 'left',
                                transform: null,
                                decoration: null
                            },
                            color: {
                                hex: '#000000',
                                rgb: '0,0,0',
                                name: 'black',
                                shade: null
                            },
                            opacity: {
                                value: '1'
                            },
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '10',
                                left: '0'
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
                            text: {
                                align: 'left',
                                transform: null,
                                decoration: null
                            },
                            color: {
                                hex: '#000000',
                                rgb: '0,0,0',
                                name: 'black',
                                shade: null
                            },
                            opacity: {
                                value: '1'
                            },
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '10',
                                left: '0'
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
                            text: {
                                align: 'left',
                                transform: null,
                                decoration: null
                            },
                            color: {
                                hex: '#000000',
                                rgb: '0,0,0',
                                name: 'black',
                                shade: null
                            },
                            opacity: {
                                value: '1'
                            },
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
                                align: 'left',
                                transform: null,
                                decoration: null
                            },
                            color: {
                                hex: '#000000',
                                rgb: '0,0,0',
                                name: 'black',
                                shade: null
                            },
                            opacity: {
                                value: '1'
                            },
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '10',
                                left: '0'
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
                                align: 'left',
                                transform: null,
                                decoration: null
                            },
                            color: {
                                hex: '#000000',
                                rgb: '0,0,0',
                                name: 'black',
                                shade: null
                            },
                            opacity: {
                                value: '1'
                            },
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '10',
                                left: '0'
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
                                align: 'left',
                                transform: null,
                                decoration: null
                            },
                            color: {
                                hex: '#000000',
                                rgb: '0,0,0',
                                name: 'black',
                                shade: null
                            },
                            opacity: {
                                value: '1'
                            },
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '10',
                                left: '0'
                            }
                        }
                    },

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
            settings: {
                responsive: ['M', 'T', 'D'],
                defaultValue: {
                    basis: {
                        M: {
                            size: {
                                width: '',
                                height: '',
                                maxWidth: '',
                                maxHeight: '',
                                minWidth: '',
                                minHeight: ''

                            },
                            padding: {
                                top: '0',
                                right: '20',
                                bottom: '0',
                                left: '20'
                            },
                            margin: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
                            alignment: {
                                horizontal: 'center'
                            },
                            shadow: {
                                value: 'none'
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
                                disabled: {
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
                                    value: '1'
                                },
                                disabled: {
                                    value: '0.7'
                                }
                            }
                        },
                        T: {
                            size: {
                                width: '',
                                height: '',
                                maxWidth: '',
                                maxHeight: '',
                                minWidth: '',
                                minHeight: ''

                            },
                            padding: {
                                top: '0',
                                right: '20',
                                bottom: '0',
                                left: '20'
                            },
                            margin: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
                            alignment: {
                                horizontal: 'center'
                            },
                            shadow: {
                                value: 'none'
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
                                disabled: {
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
                                    value: '1'
                                },
                                disabled: {
                                    value: '0.7'
                                }
                            }
                        },
                        D: {
                            size: {
                                width: '',
                                height: '',
                                maxWidth: '',
                                maxHeight: '',
                                minWidth: '',
                                minHeight: ''

                            },
                            padding: {
                                top: '0',
                                right: '20',
                                bottom: '0',
                                left: '20'
                            },
                            margin: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
                            alignment: {
                                horizontal: 'center'
                            },
                            shadow: {
                                value: 'none'
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
                                disabled: {
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
                                    value: '1'
                                },
                                disabled: {
                                    value: '0.7'
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
                                },
                                disabled: {
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
                                    value: '1'
                                },
                                disabled: {
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
                                },
                                disabled: {
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
                                    value: '1'
                                },
                                disabled: {
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
                                },
                                disabled: {
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
                                    value: '1'
                                },
                                disabled: {
                                    value: '0.5'
                                }
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
                                lineHeight: null,
                            },
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '0'
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
                                },
                                disabled: {
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
                                    value: '1'
                                },
                                disabled: {
                                    value: '0.5'
                                }
                            }

                        },
                        T: {
                            font: {
                                family: null,
                                typeface: null,
                                weight: null,
                                size: null,
                                lineHeight: null,
                            },
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '0'
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
                                },
                                disabled: {
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
                                    value: '1'
                                },
                                disabled: {
                                    value: '0.5'
                                }
                            }

                        },
                        D: {
                            font: {
                                family: null,
                                typeface: null,
                                weight: null,
                                size: null,
                                lineHeight: null,
                            },
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '0'
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
                                },
                                disabled: {
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
                                    value: '1'
                                },
                                disabled: {
                                    value: '0.5'
                                }
                            }

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
                                topLeft: '8',
                                topRight: '8',
                                bottomLeft: '8',
                                bottomRight: '8'
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
                                disabled: {
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
                                    value: '1'
                                },
                                disabled: {
                                    value: '0.3'
                                }
                            }
                        },
                        T: {
                            width: {
                                top: '2',
                                right: '2',
                                bottom: '2',
                                left: '2'
                            },
                            radius: {
                                topLeft: '8',
                                topRight: '8',
                                bottomLeft: '8',
                                bottomRight: '8'
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
                                disabled: {
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
                                    value: '1'
                                },
                                disabled: {
                                    value: '0.3'
                                }
                            }
                        },
                        D: {
                            width: {
                                top: '2',
                                right: '2',
                                bottom: '2',
                                left: '2'
                            },
                            radius: {
                                topLeft: '8',
                                topRight: '8',
                                bottomLeft: '8',
                                bottomRight: '8'
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
                                disabled: {
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
                                    value: '1'
                                },
                                disabled: {
                                    value: '0.3'
                                }
                            }
                        }
                    }
                }
            }

        }
    ]
}
;
