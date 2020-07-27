import {settingsFlexContainer, settingsSectionTemplate} from "../../utils/organism.model.config";
import {alignmentStart,grey60, black, opacity,opacity40, padding, paragraph, title3, title4, textProps, white} from "../../utils/atom.model.config";

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
                            font: paragraph,
                            text: textProps,
                            color: white,
                            opacity: opacity,
                            padding: padding
                        },
                        T: {
                            font: paragraph,
                            text: textProps,
                            color: white,
                            opacity: opacity,
                            padding: padding
                        },
                        D: {
                            font: paragraph,
                            text: textProps,
                            color: white,
                            opacity: opacity,
                            padding: padding
                        }
                    },
                    set1Text: {
                        M: {
                            font: paragraph,
                            text: textProps,
                            color: white,
                            opacity: opacity40,
                            padding: padding
                        },
                        T: {
                            font: paragraph,
                            text: textProps,
                            color: white,
                            opacity: opacity40,
                            padding: padding
                        },
                        D: {
                            font: paragraph,
                            text: textProps,
                            color: white,
                            opacity: opacity40,
                            padding: padding
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
                            font: paragraph,
                            text: textProps,
                            color: black,
                            opacity: opacity,
                            padding: padding
                        },
                        T: {
                            font: paragraph,
                            text: textProps,
                            color: black,
                            opacity: opacity,
                            padding: padding
                        },
                        D: {
                            font: paragraph,
                            text: textProps,
                            color: black,
                            opacity: opacity,
                            padding: padding
                        }
                    },
                    set2Text: {
                        M: {
                            font: paragraph,
                            text: textProps,
                            color: black,
                            opacity: opacity40,
                            padding: padding
                        },
                        T: {
                            font: paragraph,
                            text: textProps,
                            color: black,
                            opacity: opacity40,
                            padding: padding
                        },
                        D: {
                            font: paragraph,
                            text: textProps,
                            color: black,
                            opacity: opacity40,
                            padding: padding
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
                            font: paragraph,
                            text: textProps,
                            color: black,
                            opacity: opacity,
                            padding: padding
                        },
                        T: {
                            font: paragraph,
                            text: textProps,
                            color: black,
                            opacity: opacity,
                            padding: padding
                        },
                        D: {
                            font: paragraph,
                            text: textProps,
                            color: black,
                            opacity: opacity,
                            padding: padding
                        }
                    },
                    set3Text: {
                        M: {
                            font: paragraph,
                            text: textProps,
                            color: black,
                            opacity: opacity40,
                            padding: padding
                        },
                        T: {
                            font: paragraph,
                            text: textProps,
                            color: black,
                            opacity: opacity40,
                            padding: padding
                        },
                        D: {
                            font: paragraph,
                            text: textProps,
                            color: black,
                            opacity: opacity40,
                            padding: padding
                        }
                    }

                }
            }

        }
    ]
};
