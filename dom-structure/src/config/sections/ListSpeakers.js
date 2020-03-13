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
                            },
                            shadow2: {
                                value: '0px 20px 40px 0px rgba(45,69,112,0.4)'
                            }

                        },
                        T: {
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
                            },
                            shadow2: {
                                value: '0px 20px 40px 0px rgba(45,69,112,0.4)'
                            }
                        },
                        D: {
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
                            },
                            shadow2: {
                                value: '0px 20px 40px 0px rgba(45,69,112,0.4)'
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
                                bottom: '5',
                                left: '0'
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
                                bottom: '5',
                                left: '0'
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
                                bottom: '5',
                                left: '0'
                            }
                        }
                    },
                    job: {
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
                                bottom: '0',
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
                                bottom: '0',
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
                                bottom: '0',
                                left: '0'
                            }
                        }
                    },
                    company: {
                        M: {
                            font: {
                                theme: 'Paragraph',
                                family: null,
                                typeface: null,
                                weight: ['Bold', '700'],
                                style: null,
                                size: '16.8',
                                lineHeight: '19.2',
                                letterSpacing: '0'
                            },
                            text: {
                                align: 'center',
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
                                value: '0.6'
                            },
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            }
                        },
                        T: {
                            font: {
                                theme: 'Paragraph',
                                family: null,
                                typeface: null,
                                weight: ['Bold', '700'],
                                style: null,
                                size: '15.4',
                                lineHeight: '17.6',
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
                                value: '0.6'
                            },
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            }
                        },
                        D: {
                            font: {
                                theme: 'Paragraph',
                                family: null,
                                typeface: null,
                                weight: ['Bold', '700'],
                                style: null,
                                size: '14',
                                lineHeight: '16',
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
                                value: '0.6'
                            },
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '0'
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
                            color: {
                                hex: '#000000',
                                rgb: '0,0,0',
                                name: 'black',
                                shade: null
                            },
                            opacity: {
                                value: '0.5'
                            }
                        },
                        T: {
                            color: {
                                hex: '#000000',
                                rgb: '0,0,0',
                                name: 'black',
                                shade: null
                            },
                            opacity: {
                                value: '0.5'
                            }
                        },
                        D: {
                            color: {
                                hex: '#000000',
                                rgb: '0,0,0',
                                name: 'black',
                                shade: null
                            },
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
