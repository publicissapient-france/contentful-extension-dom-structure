import {black, opacity, backgroundPosition, padding, margin, alignmentCenter} from "../../utils/configModel/atom.model.config";
import {settingsTagline, settingsTitle} from "../../utils/configModel/organism.model.config";

export default {
    model: 'HeaderPicturesOnCorners',
    order : ['Image', 'Title', 'Tagline'],
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
                responsive: ['M', 'T', 'D'],
                defaultValue: {
                    basis : {
                        M: {
                            color: black,
                            opacity: opacity,
                            background : backgroundPosition
                        },
                        T: {
                            color: black,
                            opacity: opacity,
                            background : backgroundPosition
                        },
                        D: {
                            color: black,
                            opacity: opacity,
                            background : backgroundPosition
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
            settings: settingsTitle

        },
        {
            name: 'Tagline',
            nameProperty: 'Tagline',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                    text: {}
                }
            },
            settings: settingsTagline

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
                    basis: {
                        M: {
                            size: {
                                width: '175',
                                height: '175',
                                maxWidth: '',
                                maxHeight: ''

                            },
                            padding: padding,
                            margin: margin,
                            alignment: alignmentCenter
                        },
                        T: {
                            size: {
                                width: '150',
                                height: '150',
                                maxWidth: '',
                                maxHeight: ''

                            },
                            padding: padding,
                            margin: margin,
                            alignment: alignmentCenter
                        },
                        D: {
                            size: {
                                width: '100',
                                height: '100',
                                maxWidth: '',
                                maxHeight: ''

                            },
                            padding: padding,
                            margin: margin,
                            alignment: alignmentCenter
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
                    images: [
                        {
                            alt: {},
                            asset: {
                                A: {}
                            }
                        }, {
                            alt: {},
                            asset: {
                                A: {}
                            }
                        }, {
                            alt: {},
                            asset: {
                                A: {}
                            }
                        }, {
                            alt: {},
                            asset: {
                                A: {}
                            }
                        },
                    ]
                }
            },
            settings: {
                responsive: ['A'],
                defaultValue: {
                    basis: {
                        A: {
                            size: {
                                1 : {
                                    width: '20%',
                                    height: 'auto',
                                    maxWidth: '255',
                                    maxHeight: ''
                                },
                                2 : {
                                    width: '20%',
                                    height: 'auto',
                                    maxWidth: '255',
                                    maxHeight: ''
                                },
                                3 : {
                                    width: '20%',
                                    height: 'auto',
                                    maxWidth: '255',
                                    maxHeight: ''
                                },
                                4 : {
                                    width: '20%',
                                    height: 'auto',
                                    maxWidth: '255',
                                    maxHeight: ''
                                }
                            }
                        }
                    }
                }
            }
        }
    ]
};
