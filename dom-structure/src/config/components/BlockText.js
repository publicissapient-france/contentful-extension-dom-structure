export default {
    model: 'BlockText',
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
                responsive : ['A'],
                defaultValue: {
                    color: {
                        A: {
                            hex: '#989898',
                            name: 'Grey',
                            shade: '50'
                        }
                    },
                    opacity: {
                        A: {
                            value: '1'
                        }
                    }
                }
                /*responsive : ['M','T','D'],
                defaultValue: {
                    color: {
                        M: {
                            hex: '#989898',
                            name: 'Grey',
                            shade: '50'
                        },
                        T: {
                            hex: '#989898',
                            name: 'Grey',
                            shade: '50'
                        },
                        D: {
                            hex: '#989898',
                            name: 'Grey',
                            shade: '50'
                        }

                    },
                    opacity: {
                        M: {
                            value: '1'
                        },
                        T: {
                            value: '1'
                        },
                        D: {
                            value: '1'
                        }
                    }
                }*/
            }

        },
        {
            name : 'Text',
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
                /*responsive : ['A'],
                defaultValue: {
                    color: {
                        A: {
                            hex: '#FFFFFF',
                            name: 'white',
                            shade: null
                        }
                    },
                    opacity: {
                        A: {
                            value: '1'
                        }
                    },
                    seo: {
                        tag: 'h2'
                    },
                    font: {
                        A: {
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
                        A: {
                            align: 'center',
                            transform: null,
                            decoration: null
                        }
                    }
                }*/
                responsive : ['M','T','D'],
                defaultValue: {
                    color: {
                        M: {
                            hex: '#FFFFFF',
                            name: 'white',
                            shade: null
                        },
                        T: {
                            hex: '#FFFFFF',
                            name: 'white',
                            shade: null
                        },
                        D: {
                            hex: '#FFFFFF',
                            name: 'white',
                            shade: null
                        }

                    },
                    opacity: {
                        M: {
                            value: '1'
                        },
                        T: {
                            value: '1'
                        },
                        D: {
                            value: '1'
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
                            align: 'center',
                            transform: null,
                            decoration: null
                        },
                        T: {
                            align: 'center',
                            transform: null,
                            decoration: null
                        },
                        D: {
                            align: 'center',
                            transform: null,
                            decoration: null
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

        },
        {
            name: 'Image Logo',
            nameProperty: 'Logo',
            typeField: 'SingleImage',
            content: {
                responsive: ['A'],
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
                    }
                }
            }

        },
        {
            name: 'Image Logo 2',
            nameProperty: 'Logo2',
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
                    }
                }
            }

        }
    ]
}