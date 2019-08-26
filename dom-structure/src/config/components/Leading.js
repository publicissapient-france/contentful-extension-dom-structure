export default {
    model: 'Leading',
    fields: [
        {
            name: 'Main Title',
            nameProperty: 'Title',
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
                            name: 'Black',
                            shade: null
                        },
                        T: {
                            hex: '#000000',
                            name: 'Black',
                            shade: null
                        },
                        D: {
                            hex: '#000000',
                            name: 'Black',
                            shade: null
                        }

                    },
                    opacity: {
                        M: {
                            value: '0.80'
                        },
                        T: {
                            value: '0.90'
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
            name: 'Tagline Leading',
            nameProperty: 'Tagline',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                    title: null
                }
            },
            settings: {
                responsive: ['M', 'T', 'D'],
                defaultValue: {
                    color: {
                        M: {
                            hex: '#000000',
                            name: 'Black',
                            shade: null
                        },
                        T: {
                            hex: '#000000',
                            name: 'Black',
                            shade: null
                        },
                        D: {
                            hex: '#000000',
                            name: 'Black',
                            shade: null
                        }

                    },
                    opacity: {
                        M: {
                            value: '0.80'
                        },
                        T: {
                            value: '0.90'
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
            name: 'Text Content',
            nameProperty: 'TextMarkdown',
            typeField: 'TextMarkdown',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                    markdown: null
                }
            },
            settings: {
                responsive: ['A'],
                defaultValue: {}
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
                responsive: ['M', 'T', 'D'],
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
            name: 'Image Illustration',
            nameProperty: 'Illustration',
            typeField: 'SingleImage',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                    image: null
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

                    },
                    padding: {
                        A : {
                            top: '10',
                            right: '5',
                            bottom: '10',
                            left: '5'
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
                    images: null
                }
            },
            settings: {
                responsive: ['A'],
                defaultValue: {
                    size: {
                        A: {
                            width: '200',
                            height: '200',
                            maxWidth: '',
                            maxHeight: ''
                        }
                    },
                    padding: {
                        A: {
                            top: '10',
                            right: '5',
                            bottom: '10',
                            left: '5'
                        }

                    }
                }
            }

        },
        {
            name: 'Corner Images Responsive',
            nameProperty: 'CornerImagesResponsive',
            typeField: 'MultipleImages',
            content: {
                responsive: ['M', 'T', 'D'],
                parameters: {
                    multiple: 4
                },
                defaultValue: {
                    images: null
                }
            },
            settings: {
                responsive: ['A'],
                defaultValue: {
                    size: {
                        A: {
                            width: '200',
                            height: '200',
                            maxWidth: '',
                            maxHeight: ''
                        }
                    },
                    padding: {
                        A: {
                            top: '10',
                            right: '5',
                            bottom: '10',
                            left: '5'
                        }
                    }
                }
            }

        }
    ]
}