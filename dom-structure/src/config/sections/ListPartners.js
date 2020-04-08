export default {
    model: 'ListPartners',
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
            name: 'Partners',
            nameProperty: 'Partners',
            typeField: 'SelectPartners',
            content: {
                responsive: ['A'],
                defaultValue: {
                    data: [],
                    priority: []
                }
            },
            settings: {
                responsive: ['M', 'T', 'D'],
                defaultValue: {
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
