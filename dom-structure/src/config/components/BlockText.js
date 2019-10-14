export default {
    model: 'BlockText',
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
                /* responsive : ['M','T','D'],
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
                } */
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
                /* responsive : ['A'],
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
                } */
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

        }
    ]
};
