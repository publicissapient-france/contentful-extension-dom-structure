export default {
    model: 'Card',
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
                responsive: ['A'],
                defaultValue: {
                    color: {
                        A: {
                            hex: '#000000',
                            rgb: '0,0,0',
                            name: 'black',
                            shade: null
                        }
                    },
                    opacity: {
                        A: {
                            value: '1'
                        }
                    },
                    padding: {
                        A: {
                            top: '0',
                            right: '0',
                            bottom: '0',
                            left: '0'
                        }
                    },
                    margin: {
                        A: {
                            top: '0',
                            right: '0',
                            bottom: '0',
                            left: '0'
                        }
                    },
                }
            }

        },
        /*
        {
            name: 'Flex Item',
            nameProperty: 'FlexItem',
            typeField: 'FlexItem',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                }
            },
            settings: {
                responsive: ['A'],
                defaultValue: {
                    flex: {
                        A: {
                            order: '1',
                            grow: '1',
                            alignSelf: 'auto'
                        }
                    }
                }
            }

        },*/
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
                responsive: ['A'],
                defaultValue: {
                    color: {
                        A: {
                            hex: '#000000',
                            rgb: '0,0,0',
                            name: 'black',
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
                }
            }

        },
        {
            name: 'Content',
            nameProperty: 'Content',
            typeField: 'TextMarkdown',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                    html: {}
                }
            },
            settings: {
                 responsive : ['A'],
                defaultValue: {
                    color: {
                        A: {
                            hex: '#000000',
                            rgb: '0,0,0',
                            name: 'black',
                            shade: null
                        }
                    },
                    opacity: {
                        A: {
                            value: '1'
                        }
                    },
                    font: {
                        A: {
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
                        A: {
                            align: 'left',
                            transform: null,
                            decoration: null
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
                    size: {
                        M: {
                            width: '100',
                            height: '100',
                            maxWidth: '',
                            maxHeight: ''
                        },
                        T: {
                            width: '150',
                            height: '150',
                            maxWidth: '',
                            maxHeight: ''
                        },
                        D: {
                            width: '200',
                            height: '200',
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

        }
    ]
};
