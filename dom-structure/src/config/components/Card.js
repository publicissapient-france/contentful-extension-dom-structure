export default {
    model: 'Card',
    order: ['Title', 'Content', 'Image', 'CTA'],
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
                    },
                    border: {
                        M: {
                            color: {
                                hex: '#000000',
                                rgb: '0,0,0',
                                name: 'black',
                                shade: null
                            },
                            opacity: {
                                value: '1'
                            },
                            width: {
                                top: 'O',
                                right: 'O',
                                bottom: 'O',
                                left: 'O'
                            },
                            radius: {
                                topLeft: '0',
                                topRight: '0',
                                bottomLeft: '0',
                                bottomRight: '0'
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
                            },
                            width: {
                                top: 'O',
                                right: 'O',
                                bottom: 'O',
                                left: 'O'
                            },
                            radius: {
                                topLeft: '0',
                                topRight: '0',
                                bottomLeft: '0',
                                bottomRight: '0'
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
                            },
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
                            }
                        }
                    }
                }
            }

        },
        {
            name: 'CTA',
            nameProperty: 'CTA',
            typeField: 'CTA',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                    text: {},
                    link: {}
                }
            },
            settings: {
                responsive: ['A'],
                defaultValue: {
                    target: {
                        external: false
                    },
                    size: {
                        A: {
                            width: '100',
                            height: '100',
                            maxWidth: '',
                            maxHeight: ''
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
                            align: 'center',
                            transform: null,
                            decoration: null
                        }
                    },
                    border: {
                        A: {
                            width: {
                                top: 'O',
                                right: 'O',
                                bottom: 'O',
                                left: 'O'
                            },
                            radius: {
                                topLeft: '0',
                                topRight: '0',
                                bottomLeft: '0',
                                bottomRight: '0'
                            }
                        }
                    },
                    basic: {
                        background: {
                            A: {
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
                        border: {
                            A: {
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
                    },
                    hover: {
                        background: {
                            A: {
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
                        border: {
                            A: {
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
            }

        }
    ]
};
