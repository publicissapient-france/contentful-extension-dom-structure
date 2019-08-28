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
            settings : {
                responsive : ['A'],
                defaultValue: {
                    color: {
                        A : {
                            hex: '#000000',
                            rgb: '0,0,0',
                            name: 'black',
                            shade: null
                        }
                    },
                    opacity: {
                        A : {
                            value : '0.85'
                        }

                    },
                    seo: {
                        tag: 'h2'
                    },

                    font: {
                        A : {
                            theme: 'TitleLight',
                            family: null,
                            typeface: null,
                            weight: null,
                            style: 'italic',
                            size: '28',
                            lineHeight: '40',
                            letterSpacing: '0'
                        }

                    },
                    text: {
                        A : {
                            align: 'left',
                            transform: null,
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
                            theme: 'Title1',
                            family: null,
                            typeface: null,
                            weight: null,
                            style: null,
                            size: '28',
                            lineHeight: '40',
                            letterSpacing: '0'
                        },
                        T: {
                            theme: 'Paragraph',
                            family: null,
                            typeface: null,
                            weight: null,
                            style: 'italic',
                            size: '18',
                            lineHeight: '32',
                            letterSpacing: '0'
                        },
                        D: {
                            theme: 'TitleLight',
                            family: null,
                            typeface: null,
                            weight: null,
                            style: 'italic',
                            size: '16',
                            lineHeight: '24',
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
                    image: null
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
                    images : null
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