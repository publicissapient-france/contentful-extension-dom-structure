export default {
    model: 'SpeakerFlipCard',
    order: ['Speakers'],
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
                    speakers: {},
                    views: [
                        {
                            firstname: true,
                            lastname: true,
                            photo: true,
                            position: true,
                            company: true,
                            companyLogo: true,
                            twitter: true,
                            linkedin: true,
                        },
                        {
                            firstname: true,
                            lastname: true,
                            photo: true,
                            position: true,
                            company: true,
                            companyLogo: true,
                            twitter: true,
                            linkedin: true,
                        }
                    ]
                }
            },
            settings: {
                responsive: ['A'],
                defaultValue: {
                    firstname: {
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
                                    hex: '#000000',
                                    rgb: '0,0,0',
                                    name: 'black',
                                    shade: null
                                },
                                view2: {
                                    hex: '#000000',
                                    rgb: '0,0,0',
                                    name: 'black',
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
                                    hex: '#000000',
                                    rgb: '0,0,0',
                                    name: 'black',
                                    shade: null
                                },
                                view2: {
                                    hex: '#000000',
                                    rgb: '0,0,0',
                                    name: 'black',
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
                                    hex: '#000000',
                                    rgb: '0,0,0',
                                    name: 'black',
                                    shade: null
                                },
                                view2: {
                                    hex: '#000000',
                                    rgb: '0,0,0',
                                    name: 'black',
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
                        },
                        company: {
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
                                        hex: '#000000',
                                        rgb: '0,0,0',
                                        name: 'black',
                                        shade: null
                                    },
                                    view2: {
                                        hex: '#000000',
                                        rgb: '0,0,0',
                                        name: 'black',
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
                                    hex: '#000000',
                                    rgb: '0,0,0',
                                    name: 'black',
                                    shade: null
                                },
                                view2: {
                                    hex: '#000000',
                                    rgb: '0,0,0',
                                    name: 'black',
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
                                    hex: '#000000',
                                    rgb: '0,0,0',
                                    name: 'black',
                                    shade: null
                                },
                                view2: {
                                    hex: '#000000',
                                    rgb: '0,0,0',
                                    name: 'black',
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
                                    width: '100',
                                    height: '100',
                                    maxWidth: '',
                                    maxHeight: ''
                                },
                                view2: {
                                    width: '100',
                                    height: '100',
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
                                    width: '100',
                                    height: '100',
                                    maxWidth: '',
                                    maxHeight: ''
                                },
                                view2: {
                                    width: '100',
                                    height: '100',
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
}
;
