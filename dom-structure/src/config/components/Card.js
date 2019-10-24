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
                    basis: {
                        A: {
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
                                horizontal: 'flex-start'
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
                    typography: {
                        M: {
                            font: {
                                theme: 'Title1',
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
                    typography: {
                        A: {
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
                            }
                        }
                    }
                }
            }

        }/*,
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
                responsive: ['A'],
                defaultValue: {
                    basis: {
                        A: {
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
                                horizontal: 'flex-start'
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
                        A: {
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

        }*//*,
        {
            name: 'CTA',
            nameProperty: 'CTA',
            typeField: 'CTA',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                    text: {},
                    link: {},
                    icon: {}
                }
            },
            settings: {
                responsive: ['A'],
                defaultValue: {
                    target: {
                        external: false
                    },
                    basis: {
                        A: {
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
                                horizontal: 'flex-start'
                            },
                            color: {
                                basic: {
                                    hex: '#000000',
                                    rgb: '0,0,0',
                                    name: 'black',
                                    shade: null
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
                            }
                        }
                    },
                    typography: {
                        A: {
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
                                    hex: '#000000',
                                    rgb: '0,0,0',
                                    name: 'black',
                                    shade: null
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
                            }
                        }
                    },
                    icon: {
                        A: {
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
                                    hex: '#000000',
                                    rgb: '0,0,0',
                                    name: 'black',
                                    shade: null
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
                            }

                        }
                    },
                    border: {
                        A: {
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
                                basic: {
                                    hex: '#000000',
                                    rgb: '0,0,0',
                                    name: 'black',
                                    shade: null
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
                            }
                        }
                    }
                }
            }

        }*/
    ]
}
;
