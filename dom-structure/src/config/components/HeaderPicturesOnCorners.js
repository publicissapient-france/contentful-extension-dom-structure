export default {
    model: 'HeaderPicturesOnCorners',
    order : ['Image', 'Title', 'Tagline'],
    fields: [
        {
            name: 'Template',
            nameProperty: 'Template',
            typeField: 'Template',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: {
                responsive: ['M', 'T', 'D'],
                defaultValue: {
                    basis : {
                        M: {
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
            name: 'Title',
            nameProperty: 'Title',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                    text: {}
                }
            },
            settings: {
                responsive: ['M', 'T', 'D'],
                defaultValue: {
                    basis: {
                        M: {
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            }
                        },
                        T: {
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            }
                        },
                        D: {
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            }
                        }
                    },
                    typography: {
                        M: {
                            font: {
                                theme: 'Title2',
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
                                name: 'White',
                                shade: null
                            },
                            opacity: {
                                value: '1'
                            }
                        },
                        T: {
                            font: {
                                theme: 'Title2',
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
                                name: 'White',
                                shade: null
                            },
                            opacity: {
                                value: '1'
                            }
                        },
                        D: {
                            font: {
                                theme: 'Title2',
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
                                name: 'White',
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
                    },
                    seo: {
                        tag: 'h2'
                    }
                }
            }

        },
        {
            name: 'Tagline',
            nameProperty: 'Tagline',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                    text: {}
                }
            },
            settings: {
                responsive: ['M', 'T', 'D'],
                defaultValue: {
                    basis: {
                        M: {
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            }
                        },
                        T: {
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            }
                        },
                        D: {
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            }
                        }
                    },
                    typography: {
                        M: {
                            font: {
                                theme: 'TitleLight',
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
                                name: 'White',
                                shade: null
                            },
                            opacity: {
                                value: '1'
                            }
                        },
                        T: {
                            font: {
                                theme: 'TitleLight',
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
                                name: 'White',
                                shade: null
                            },
                            opacity: {
                                value: '1'
                            }
                        },
                        D: {
                            font: {
                                theme: 'TitleLight',
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
                                name: 'White',
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
                    },
                    seo: {
                        tag: 'h3'
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
                                width: '175',
                                height: '175',
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
                                left: '0'
                            },
                            alignment: {
                                horizontal: 'center'
                            }
                        },
                        T: {
                            size: {
                                width: '150',
                                height: '150',
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
                                left: '0'
                            },
                            alignment: {
                                horizontal: 'center'
                            }
                        },
                        D: {
                            size: {
                                width: '100',
                                height: '100',
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
                                left: '0'
                            },
                            alignment: {
                                horizontal: 'center'
                            }
                        }
                    }
                }
            }
        },
        {
            name: 'Corner Images',
            nameProperty: 'CornerImages',
            typeField: 'MultipleImages',
            content: {
                responsive: ['A'],
                parameters: {
                    multiple: 4
                },
                defaultValue: {
                    images: [
                        {
                            alt: {},
                            asset: {
                                A: {}
                            }
                        }, {
                            alt: {},
                            asset: {
                                A: {}
                            }
                        }, {
                            alt: {},
                            asset: {
                                A: {}
                            }
                        }, {
                            alt: {},
                            asset: {
                                A: {}
                            }
                        },
                    ]
                }
            },
            settings: {
                responsive: ['A'],
                defaultValue: {
                    basis: {
                        A: {
                            size: {
                                1 : {
                                    width: '20%',
                                    height: 'auto',
                                    maxWidth: '255',
                                    maxHeight: ''
                                },
                                2 : {
                                    width: '20%',
                                    height: 'auto',
                                    maxWidth: '255',
                                    maxHeight: ''
                                },
                                3 : {
                                    width: '20%',
                                    height: 'auto',
                                    maxWidth: '255',
                                    maxHeight: ''
                                },
                                4 : {
                                    width: '20%',
                                    height: 'auto',
                                    maxWidth: '255',
                                    maxHeight: ''
                                }
                            }
                        }
                    }
                }
            }

        }
    ]
};
