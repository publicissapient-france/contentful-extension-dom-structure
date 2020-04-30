import {settingsFlexContainer, settingsSectionTemplate, settingsTemplate} from "../../utils/organism.model.config";
import {alignmentStart, padding} from "../../utils/atom.model.config";

export default {
    model: 'ListPartners',
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
            name: 'Flex Container',
            nameProperty: 'FlexContainer',
            typeField: 'FlexContainer',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                }
            },
            settings: settingsFlexContainer

        },
        {
            name: 'Template Card',
            nameProperty: 'TemplateCard',
            typeField: 'Template',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTemplate
        },
        {
            name: 'Partners',
            nameProperty: 'Partners',
            typeField: 'SelectPartners',
            content: {
                responsive: ['A'],
                defaultValue: {
                    data: [],
                    priority: []
                }
            },
            settings: {
                responsive: ['M', 'T', 'D'],
                defaultValue: {
                    logo: {
                        M: {
                            size: {
                                width: '100%',
                                height: 'auto',
                                maxWidth: '',
                                maxHeight: ''
                            },
                            padding: padding,
                            alignment: alignmentStart
                        },
                        T: {
                            size: {
                                width: '100%',
                                height: 'auto',
                                maxWidth: '',
                                maxHeight: ''
                            },
                            padding: padding,
                            alignment: alignmentStart
                        },
                        D: {
                            size: {
                                width: '100%',
                                height: 'auto',
                                maxWidth: '',
                                maxHeight: ''
                            },
                            padding: padding,
                            alignment: alignmentStart
                        }
                    }
                }
            }

        }
    ]
}
;
