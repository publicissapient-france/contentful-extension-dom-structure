import { settingsSectionTemplate} from "../../utils/organism.model.config";
import {grey60, black, opacity,opacity40, padding, paragraph, textProps, white} from "../../utils/atom.model.config";

export default {
    model: 'BasicSchedule',
    fields: [
        {
            name: 'Template',
            nameProperty: 'Template',
            typeField: 'Template',
            content: {
                responsive: ['M', 'T', 'D'],
                parameters: {},
                defaultValue: {
                    images: [
                        {
                            alt: {},
                            asset: {
                                M: {},
                                T: {},
                                D: {}
                            }
                        }
                    ]
                }
            },
            settings: settingsSectionTemplate
        },
        {
            name: 'Schedule',
            nameProperty: 'Schedule',
            typeField: 'Schedule',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: {
                responsive: ['M', 'T', 'D'],
                defaultValue: {
                    grid: true,
                    set1Bkg: {
                        M: {
                            color: grey60,
                            opacity: opacity
                        },
                        T: {
                            color: grey60,
                            opacity: opacity,
                        },
                        D: {
                            color: grey60,
                            opacity: opacity
                        }
                    },
                    set1Title: {
                        M: {
                            font: {
                                theme: 'Paragraph',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: '14',
                                lineHeight: '18',
                                letterSpacing: '0'
                            },
                            text: textProps,
                            color: white,
                            opacity: opacity
                        },
                        T: {
                            font: {
                                theme: 'Paragraph',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: '14',
                                lineHeight: '18',
                                letterSpacing: '0'
                            },
                            text: textProps,
                            color: white,
                            opacity: opacity
                        },
                        D: {
                            font: {
                                theme: 'Paragraph',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: '14',
                                lineHeight: '18',
                                letterSpacing: '0'
                            },
                            text: textProps,
                            color: white,
                            opacity: opacity
                        }
                    },
                    set1Text: {
                        M: {
                            font: {
                                theme: 'Paragraph',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: '13',
                                lineHeight: '13',
                                letterSpacing: '0'
                            },
                            text: textProps,
                            color: white,
                            opacity: opacity40
                        },
                        T: {
                            font: {
                                theme: 'Paragraph',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: '13',
                                lineHeight: '13',
                                letterSpacing: '0'
                            },
                            text: textProps,
                            color: white,
                            opacity: opacity40
                        },
                        D: {
                            font: {
                                theme: 'Paragraph',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: '13',
                                lineHeight: '13',
                                letterSpacing: '0'
                            },
                            text: textProps,
                            color: white,
                            opacity: opacity40
                        }
                    },
                    set2Bkg: {
                        M: {
                            color: white,
                            opacity: opacity
                        },
                        T: {
                            color: white,
                            opacity: opacity,
                        },
                        D: {
                            color: white,
                            opacity: opacity
                        }
                    },
                    set2Title: {
                        M: {
                            font: {
                                theme: 'Paragraph',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: '14',
                                lineHeight: '18',
                                letterSpacing: '0'
                            },
                            text: textProps,
                            color: black,
                            opacity: opacity
                        },
                        T: {
                            font: {
                                theme: 'Paragraph',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: '14',
                                lineHeight: '18',
                                letterSpacing: '0'
                            },
                            text: textProps,
                            color: black,
                            opacity: opacity
                        },
                        D: {
                            font: {
                                theme: 'Paragraph',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: '14',
                                lineHeight: '18',
                                letterSpacing: '0'
                            },
                            text: textProps,
                            color: black,
                            opacity: opacity
                        }
                    },
                    set2Text: {
                        M: {
                            font: {
                                theme: 'Paragraph',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: '13',
                                lineHeight: '13',
                                letterSpacing: '0'
                            },
                            text: textProps,
                            color: black,
                            opacity: opacity40
                        },
                        T: {
                            font: {
                                theme: 'Paragraph',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: '13',
                                lineHeight: '13',
                                letterSpacing: '0'
                            },
                            text: textProps,
                            color: black,
                            opacity: opacity40
                        },
                        D: {
                            font: {
                                theme: 'Paragraph',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: '13',
                                lineHeight: '13',
                                letterSpacing: '0'
                            },
                            text: textProps,
                            color: black,
                            opacity: opacity40
                        }
                    },
                    set3Bkg: {
                        M: {
                            color: white,
                            opacity: opacity
                        },
                        T: {
                            color: white,
                            opacity: opacity,
                        },
                        D: {
                            color: white,
                            opacity: opacity
                        }
                    },
                    set3Title: {
                        M: {
                            font: {
                                theme: 'Paragraph',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: '14',
                                lineHeight: '18',
                                letterSpacing: '0'
                            },
                            text: textProps,
                            color: black,
                            opacity: opacity
                        },
                        T: {
                            font: {
                                theme: 'Paragraph',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: '14',
                                lineHeight: '18',
                                letterSpacing: '0'
                            },
                            text: textProps,
                            color: black,
                            opacity: opacity
                        },
                        D: {
                            font: {
                                theme: 'Paragraph',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: '14',
                                lineHeight: '18',
                                letterSpacing: '0'
                            },
                            text: textProps,
                            color: black,
                            opacity: opacity
                        }
                    },
                    set3Text: {
                        M: {
                            font: {
                                theme: 'Paragraph',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: '13',
                                lineHeight: '13',
                                letterSpacing: '0'
                            },
                            text: textProps,
                            color: black,
                            opacity: opacity40
                        },
                        T: {
                            font: {
                                theme: 'Paragraph',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: '13',
                                lineHeight: '13',
                                letterSpacing: '0'
                            },
                            text: textProps,
                            color: black,
                            opacity: opacity40
                        },
                        D: {
                            font: {
                                theme: 'Paragraph',
                                family: null,
                                typeface: null,
                                weight: null,
                                style: null,
                                size: '13',
                                lineHeight: '13',
                                letterSpacing: '0'
                            },
                            text: textProps,
                            color: black,
                            opacity: opacity40
                        }
                    }

                }
            }

        }
    ]
};
