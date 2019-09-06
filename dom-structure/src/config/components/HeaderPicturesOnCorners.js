export default {
    model: 'HeaderPicturesOnCorners',
    fields : [
        {
            name : 'Template',
            nameProperty : 'Template',
            typeField : 'Template',
            content : {
                responsive : ['A'],
                parameters : {},
                defaultValue : {
                }
            },
            settings : {
                responsive : ['M','T','D'],
                defaultValue: {
                    color: {
                        M: {
                            hex: '#000000',
                            rgb: '0,0,0',
                            name: 'black',
                            shade: null
                        },
                        T: {
                            hex: '#000000',
                            rgb: '0,0,0',
                            name: 'black',
                            shade: null
                        },
                        D: {
                            hex: '#000000',
                            rgb: '0,0,0',
                            name: 'black',
                            shade: null
                        }

                    },
                    opacity: {
                        M: {
                            value: '0.8'
                        },
                        T: {
                            value: '0.9'
                        },
                        D: {
                            value: '0.95'
                        }
                    }
                }
            }

        },
        {
            name : 'Title Header',
            nameProperty : 'Title',
            typeField : 'Text',
            content : {
                responsive : ['A'],
                parameters : {},
                defaultValue : {
                    text : null
                }
            },
            settings: {
                responsive: ['M', 'T', 'D'],
                defaultValue: {
                    color: {
                        M: {
                            hex: '#000000',
                            rgb: '0,0,0',
                            name: 'black',
                            shade: null
                        },
                        T: {
                            hex: '#000000',
                            rgb: '0,0,0',
                            name: 'black',
                            shade: null
                        },
                        D: {
                            hex: '#000000',
                            rgb: '0,0,0',
                            name: 'black',
                            shade: null
                        }

                    },
                    opacity: {
                        M: {
                            value: '0.8'
                        },
                        T: {
                            value: '0.9'
                        },
                        D: {
                            value: '0.95'
                        }
                    },
                    seo: {
                        tag: 'h2'
                    },
                    font: {
                        M: {
                            theme: 'Title1',
                            family: null,
                            typeface: null,
                            weight: null,
                            style: null,
                            size: null,
                            lineHeight: null,
                            letterSpacing: '0'
                        },
                        T: {
                            theme: 'Title1',
                            family: null,
                            typeface: null,
                            weight: null,
                            style: null,
                            size: null,
                            lineHeight: null,
                            letterSpacing: '0'
                        },
                        D: {
                            theme: 'Title1',
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
                        M: {
                            align: 'left',
                            transform: null,
                            decoration: 'underline'
                        },
                        T: {
                            align: 'center',
                            transform: 'uppercase',
                            decoration: null
                        },
                        D: {
                            align: 'justify',
                            transform: 'capitalize',
                            decoration: null
                        }
                    }
                }
            }

        },
        {
            name: 'Tagline Leading',
            nameProperty: 'Tagline',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                    text: null
                }
            },
            settings: {
                responsive: ['M', 'T', 'D'],
                defaultValue: {
                    color: {
                        M: {
                            hex: '#000000',
                            rgb: '0,0,0',
                            name: 'black',
                            shade: null
                        },
                        T: {
                            hex: '#000000',
                            rgb: '0,0,0',
                            name: 'black',
                            shade: null
                        },
                        D: {
                            hex: '#000000',
                            rgb: '0,0,0',
                            name: 'black',
                            shade: null
                        }

                    },
                    opacity: {
                        M: {
                            value: '0.8'
                        },
                        T: {
                            value: '0.9'
                        },
                        D: {
                            value: '0.95'
                        }
                    },
                    seo: {
                        tag: 'h2'
                    },
                    font: {
                        M: {
                            theme: 'TitleLight',
                            family: null,
                            typeface: null,
                            weight: null,
                            style: null,
                            size: null,
                            lineHeight: null,
                            letterSpacing: '0'
                        },
                        T: {
                            theme: 'TitleLight',
                            family: null,
                            typeface: null,
                            weight: null,
                            style: null,
                            size: null,
                            lineHeight: null,
                            letterSpacing: '0'
                        },
                        D: {
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
                        M: {
                            align: 'left',
                            transform: null,
                            decoration: 'underline'
                        },
                        T: {
                            align: 'center',
                            transform: 'uppercase',
                            decoration: null
                        },
                        D: {
                            align: 'justify',
                            transform: 'capitalize',
                            decoration: null
                        }
                    }
                }
            }

        },
        {
            name: 'Image Logo',
            nameProperty: 'Logo',
            typeField: 'SingleImage',
            content: {
                responsive: ['M', 'T', 'D'],
                parameters: {},
                defaultValue: {
                    images : [
                        {
                            alt : {},
                            asset : {
                                M : {},
                                T : {},
                                D : {}
                            }
                        }
                    ]
                }
            },
            settings: {
                responsive: ['M','T', 'D'],
                defaultValue: {
                    size: {
                        M: {
                            width: '200',
                            height: '200',
                            maxWidth: '',
                            maxHeight: ''
                        },
                        T: {
                            width: '500',
                            height: '500',
                            maxWidth: '',
                            maxHeight: ''
                        },
                        D: {
                            width: '500',
                            height: '500',
                            maxWidth: '',
                            maxHeight: ''
                        }
                    },
                    padding: {
                        M: {
                            top: '0',
                            right: '0',
                            bottom: '0',
                            left: '0'
                        },
                        T: {
                            top: '0',
                            right: '0',
                            bottom: '0',
                            left: '0'
                        },
                        D: {
                            top: '0',
                            right: '0',
                            bottom: '0',
                            left: '0'
                        }
                    },
                    margin: {
                        M: {
                            top: '0',
                            right: '0',
                            bottom: '0',
                            left: '0'
                        },
                        T: {
                            top: '0',
                            right: '0',
                            bottom: '0',
                            left: '0'
                        },
                        D: {
                            top: '0',
                            right: '0',
                            bottom: '0',
                            left: '0'
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
                    images : [
                        {
                            alt : {},
                            asset : {
                                A : {}
                            }
                        },{
                            alt : {},
                            asset : {
                                A : {}
                            }
                        },{
                            alt : {},
                            asset : {
                                A : {}
                            }
                        },{
                            alt : {},
                            asset : {
                                A : {}
                            }
                        },
                    ]
                }
            },
            settings: {
                responsive: ['A'],
                defaultValue: {
                    size: {
                        A : {
                            width: '200',
                            height: '200',
                            maxWidth: '',
                            maxHeight: ''
                        }
                    }
                }
            }

        }
    ]
}