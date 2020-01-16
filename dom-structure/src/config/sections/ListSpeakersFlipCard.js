export default {
    model: 'ListSpeakersFlipCard',
    fields: [
        {
            name: 'Template',
            nameProperty: 'Template',
            typeField: 'Template',
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
                                columns : '2',
                                gutterHorizontal : '20',
                                gutterVertical : '20',
                                direction : 'flex',
                                wrap : 'wrap',
                                justify : 'space-between',
                                alignItems : 'stretch',
                                alignContent : 'flex-start'
                            }
                        },
                        D : {
                            properties : {
                                columns : '3',
                                gutterHorizontal : '20',
                                gutterVertical : '20',
                                direction : 'flex',
                                wrap : 'wrap',
                                justify : 'space-between',
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
                responsive: ['A'],
                defaultValue: {
                    basis: {
                        A: {
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
                    icon1: {},
                    icon2: {},
                    idSource : {},
                    speakers: [],
                    display: {
                        view1 :{
                            firstname: true,
                            lastname: true,
                            photo: true,
                            biography: true,
                            position: true,
                            company: true,
                            companyLogo: true,
                            twitter: true,
                            linkedin: true,
                        },
                        view2 :{
                            firstname: true,
                            lastname: true,
                            photo: true,
                            biography: true,
                            position: true,
                            company: true,
                            companyLogo: true,
                            twitter: true,
                            linkedin: true,
                        }
                    }
                }
            },
            settings: {
                responsive: ['A'],
                defaultValue: {
                    firstname: {
                        A: {
                            font: {
                                view1: {
                                    theme: 'Title3',
                                    family: null,
                                    typeface: null,
                                    weight: null,
                                    style: null,
                                    size: null,
                                    lineHeight: null,
                                    letterSpacing: '0'
                                },
                                view2: {
                                    theme: 'Title4',
                                    family: null,
                                    typeface: null,
                                    weight: null,
                                    style: null,
                                    size: null,
                                    lineHeight: null,
                                    letterSpacing: '0'
                                }

                            },
                            text: {
                                view1: {
                                    align: 'center',
                                    transform: null,
                                    decoration: null
                                },
                                view2: {
                                    align: 'center',
                                    transform: null,
                                    decoration: null
                                }
                            },
                            color: {
                                view1: {
                                    hex: '#FFFFFF',
                                    rgb: '255,255,255',
                                    name: 'white',
                                    shade: null
                                },
                                view2: {
                                    hex: '#FFFFFF',
                                    rgb: '255,255,255',
                                    name: 'white',
                                    shade: null
                                }
                            },
                            opacity: {
                                view1: {
                                    value: '1'
                                },
                                view2: {
                                    value: '1'
                                }
                            }
                        }
                    },
                    lastname: {
                        A: {
                            font: {
                                view1: {
                                    theme: 'Title3',
                                    family: null,
                                    typeface: null,
                                    weight: null,
                                    style: null,
                                    size: null,
                                    lineHeight: null,
                                    letterSpacing: '0'
                                },
                                view2: {
                                    theme: 'Title4',
                                    family: null,
                                    typeface: null,
                                    weight: null,
                                    style: null,
                                    size: null,
                                    lineHeight: null,
                                    letterSpacing: '0'
                                }

                            },
                            text: {
                                view1: {
                                    align: 'center',
                                    transform: null,
                                    decoration: null
                                },
                                view2: {
                                    align: 'center',
                                    transform: null,
                                    decoration: null
                                }
                            },
                            color: {
                                view1: {
                                    hex: '#FFFFFF',
                                    rgb: '255,255,255',
                                    name: 'white',
                                    shade: null
                                },
                                view2: {
                                    hex: '#FFFFFF',
                                    rgb: '255,255,255',
                                    name: 'white',
                                    shade: null
                                }
                            },
                            opacity: {
                                view1: {
                                    value: '1'
                                },
                                view2: {
                                    value: '1'
                                }
                            }
                        }
                    },
                    position: {
                        A: {
                            font: {
                                view1: {
                                    theme: 'TitleLight',
                                    family: null,
                                    typeface: null,
                                    weight: null,
                                    style: null,
                                    size: null,
                                    lineHeight: null,
                                    letterSpacing: '0'
                                },
                                view2: {
                                    theme: 'TitleLight',
                                    family: null,
                                    typeface: null,
                                    weight: null,
                                    style: null,
                                    size: null,
                                    lineHeight: null,
                                    letterSpacing: '0'
                                }

                            },
                            text: {
                                view1: {
                                    align: 'center',
                                    transform: null,
                                    decoration: null
                                },
                                view2: {
                                    align: 'center',
                                    transform: null,
                                    decoration: null
                                }
                            },
                            color: {
                                view1: {
                                    hex: '#FFFFFF',
                                    rgb: '255,255,255',
                                    name: 'white',
                                    shade: null
                                },
                                view2: {
                                    hex: '#FFFFFF',
                                    rgb: '255,255,255',
                                    name: 'white',
                                    shade: null
                                }
                            },
                            opacity: {
                                view1: {
                                    value: '1'
                                },
                                view2: {
                                    value: '1'
                                }
                            }
                        }

                    },
                    company: {
                        A: {
                            font: {
                                view1: {
                                    theme: 'TitleLight',
                                    family: null,
                                    typeface: null,
                                    weight: null,
                                    style: null,
                                    size: null,
                                    lineHeight: null,
                                    letterSpacing: '0'
                                },
                                view2: {
                                    theme: 'TitleLight',
                                    family: null,
                                    typeface: null,
                                    weight: null,
                                    style: null,
                                    size: null,
                                    lineHeight: null,
                                    letterSpacing: '0'
                                }

                            },
                            text: {
                                view1: {
                                    align: 'center',
                                    transform: null,
                                    decoration: null
                                },
                                view2: {
                                    align: 'center',
                                    transform: null,
                                    decoration: null
                                }
                            },
                            color: {
                                view1: {
                                    hex: '#FFFFFF',
                                    rgb: '255,255,255',
                                    name: 'white',
                                    shade: null
                                },
                                view2: {
                                    hex: '#FFFFFF',
                                    rgb: '255,255,255',
                                    name: 'white',
                                    shade: null
                                }
                            },
                            opacity: {
                                view1: {
                                    value: '1'
                                },
                                view2: {
                                    value: '1'
                                }
                            }
                        }
                    },
                    biography: {
                        A: {
                            font: {
                                view1: {
                                    theme: 'Paragraph',
                                    family: null,
                                    typeface: null,
                                    weight: null,
                                    style: null,
                                    size: null,
                                    lineHeight: null,
                                    letterSpacing: '0'
                                },
                                view2: {
                                    theme: 'Paragraph',
                                    family: null,
                                    typeface: null,
                                    weight: null,
                                    style: null,
                                    size: null,
                                    lineHeight: null,
                                    letterSpacing: '0'
                                }

                            },
                            text: {
                                view1: {
                                    align: 'center',
                                    transform: null,
                                    decoration: null
                                },
                                view2: {
                                    align: 'center',
                                    transform: null,
                                    decoration: null
                                }
                            },
                            color: {
                                view1: {
                                    hex: '#FFFFFF',
                                    rgb: '255,255,255',
                                    name: 'white',
                                    shade: null
                                },
                                view2: {
                                    hex: '#FFFFFF',
                                    rgb: '255,255,255',
                                    name: 'white',
                                    shade: null
                                }
                            },
                            opacity: {
                                view1: {
                                    value: '1'
                                },
                                view2: {
                                    value: '1'
                                }
                            }
                        }
                    },
                    icon1: { //twitter
                        A: {
                            font: {
                                view1: {
                                    family: null,
                                    typeface: null,
                                    weight: null,
                                    size: null,
                                    lineHeight: null
                                },
                                view2: {
                                    family: null,
                                    typeface: null,
                                    weight: null,
                                    size: null,
                                    lineHeight: null,
                                }
                            },
                            color: {
                                view1: {
                                    hex: '#FFFFFF',
                                    rgb: '255,255,255',
                                    name: 'white',
                                    shade: null
                                },
                                view2: {
                                    hex: '#FFFFFF',
                                    rgb: '255,255,255',
                                    name: 'white',
                                    shade: null
                                }
                            },
                            opacity: {
                                view1: {
                                    value: '1'
                                },
                                view2: {
                                    value: '1'
                                }
                            }
                        }
                    },
                    icon2: { //linkedin
                        A: {
                            font: {
                                view1: {
                                    family: null,
                                    typeface: null,
                                    weight: null,
                                    size: null,
                                    lineHeight: null
                                },
                                view2: {
                                    family: null,
                                    typeface: null,
                                    weight: null,
                                    size: null,
                                    lineHeight: null,
                                }

                            },
                            color: {
                                view1: {
                                    hex: '#FFFFFF',
                                    rgb: '255,255,255',
                                    name: 'white',
                                    shade: null
                                },
                                view2: {
                                    hex: '#FFFFFF',
                                    rgb: '255,255,255',
                                    name: 'white',
                                    shade: null
                                }
                            },
                            opacity: {
                                view1: {
                                    value: '1'
                                },
                                view2: {
                                    value: '1'
                                }
                            }
                        }
                    },
                    photo: {
                        A: {
                            size: {
                                view1: {
                                    width: '100%',
                                    height: 'auto',
                                    maxWidth: '',
                                    maxHeight: ''
                                },
                                view2: {
                                    width: '100%',
                                    height: 'auto',
                                    maxWidth: '',
                                    maxHeight: ''
                                }

                            },
                            padding: {
                                view1: {
                                    top: '0',
                                    right: '0',
                                    bottom: '0',
                                    left: '0'
                                },
                                view2: {
                                    top: '0',
                                    right: '0',
                                    bottom: '0',
                                    left: '0'
                                }
                            },
                            alignment: {
                                view1: {
                                    horizontal: 'flex-start'
                                },
                                view2: {
                                    horizontal: 'flex-start'
                                }
                            }
                        }
                    },
                    companyLogo: {
                        A: {
                            size: {
                                view1: {
                                    width: '',
                                    height: '30',
                                    maxWidth: '',
                                    maxHeight: ''
                                },
                                view2: {
                                    width: '0',
                                    height: '30',
                                    maxWidth: '',
                                    maxHeight: ''
                                }

                            },
                            padding: {
                                view1: {
                                    top: '0',
                                    right: '0',
                                    bottom: '0',
                                    left: '0'
                                },
                                view2: {
                                    top: '0',
                                    right: '0',
                                    bottom: '0',
                                    left: '0'
                                }
                            },
                            alignment: {
                                view1: {
                                    horizontal: 'flex-start'
                                },
                                view2: {
                                    horizontal: 'flex-start'
                                }
                            }
                        }
                    }

                }
            }

        }
    ]
};
