import {settingsFlexContainer, settingsTemplate} from "../../utils/organism.model.config";

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
            settings: settingsTemplate
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
            settings: settingsFlexContainer

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
