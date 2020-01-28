export default {
    model: 'BasicLayoutCornersImages',
    fields: [
        {
            name: 'Template',
            nameProperty: 'Template',
            typeField: 'Template',
            content: {
                responsive: ['M', 'T', 'D'],
                parameters: {},
                defaultValue: {}
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
                defaultValue: {}
            },
            settings: {
                responsive: ['M', 'T', 'D'],
                defaultValue: {
                    flex: {
                        M: {
                            properties: {
                                columns: '1',
                                gutterHorizontal: '0',
                                gutterVertical: '20',
                                direction: 'row',
                                wrap: 'wrap',
                                justify: 'flex-start',
                                alignItems: 'flex-start',
                                alignContent: 'flex-start'
                            }
                        },
                        T: {
                            properties: {
                                columns: '2',
                                gutterHorizontal: '20',
                                gutterVertical: '20',
                                direction: 'flex',
                                wrap: 'wrap',
                                justify: 'center',
                                alignItems: 'stretch',
                                alignContent: 'flex-start'
                            }
                        },
                        D: {
                            properties: {
                                columns: '3',
                                gutterHorizontal: '20',
                                gutterVertical: '20',
                                direction: 'flex',
                                wrap: 'wrap',
                                justify: 'center',
                                alignItems: 'stretch',
                                alignContent: 'flex-start'
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
                responsive: ['M', 'T', 'D'],
                parameters: {
                    multiple: 4
                },
                defaultValue: {
                    images: [
                        {
                            alt: {},
                            asset: {
                                M: {},
                                T: {},
                                D: {}
                            }
                        }, {
                            alt: {},
                            asset: {
                                M: {},
                                T: {},
                                D: {}
                            }
                        }, {
                            alt: {},
                            asset: {
                                M: {},
                                T: {},
                                D: {}
                            }
                        }, {
                            alt: {},
                            asset: {
                                M: {},
                                T: {},
                                D: {}
                            }
                        },
                    ]
                }
            },
            settings: {
                responsive: ['M', 'T', 'D'],
                defaultValue: {
                    basis: {
                        M: {
                            size: {
                                1: {
                                    width: '20%',
                                    height: 'auto',
                                    maxWidth: '',
                                    maxHeight: '',
                                    minWidth: '',
                                    minHeight: ''
                                },
                                2: {
                                    width: '20%',
                                    height: 'auto',
                                    maxWidth: '',
                                    maxHeight: '',
                                    minWidth: '',
                                    minHeight: ''
                                },
                                3: {
                                    width: '20%',
                                    height: 'auto',
                                    maxWidth: '',
                                    maxHeight: '',
                                    minWidth: '',
                                    minHeight: ''
                                },
                                4: {
                                    width: '20%',
                                    height: 'auto',
                                    maxWidth: '',
                                    maxHeight: '',
                                    minWidth: '',
                                    minHeight: ''
                                }
                            }
                        },
                        T: {
                            size: {
                                1: {
                                    width: '20%',
                                    height: 'auto',
                                    maxWidth: '',
                                    maxHeight: '',
                                    minWidth: '',
                                    minHeight: ''
                                },
                                2: {
                                    width: '20%',
                                    height: 'auto',
                                    maxWidth: '',
                                    maxHeight: '',
                                    minWidth: '',
                                    minHeight: ''
                                },
                                3: {
                                    width: '20%',
                                    height: 'auto',
                                    maxWidth: '',
                                    maxHeight: '',
                                    minWidth: '',
                                    minHeight: ''
                                },
                                4: {
                                    width: '20%',
                                    height: 'auto',
                                    maxWidth: '',
                                    maxHeight: '',
                                    minWidth: '',
                                    minHeight: ''
                                }
                            }
                        },
                        D: {
                            size: {
                                1: {
                                    width: '20%',
                                    height: 'auto',
                                    maxWidth: '',
                                    maxHeight: '',
                                    minWidth: '',
                                    minHeight: ''
                                },
                                2: {
                                    width: '20%',
                                    height: 'auto',
                                    maxWidth: '',
                                    maxHeight: '',
                                    minWidth: '',
                                    minHeight: ''
                                },
                                3: {
                                    width: '20%',
                                    height: 'auto',
                                    maxWidth: '',
                                    maxHeight: '',
                                    minWidth: '',
                                    minHeight: ''
                                },
                                4: {
                                    width: '20%',
                                    height: 'auto',
                                    maxWidth: '',
                                    maxHeight: '',
                                    minWidth: '',
                                    minHeight: ''
                                }
                            }
                        }
                    }
                }
            }

        }
    ]
};
