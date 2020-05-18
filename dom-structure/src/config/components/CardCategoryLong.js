import {
    settingsCTA,
    settingsSingleImage,
    settingsTemplate,
    settingsText,
    settingsTitle
} from "../../utils/organism.model.config";

export default {
    model: 'CardCategoryLong',
    order: ['Image','Title', 'Content','CTA'],
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
            settings: settingsTemplate

        },
        {
            name: 'Title',
            nameProperty: 'Title',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                defaultValue: {}
            },
            settings: settingsTitle

        },
        {
            name: 'Heading 1',
            nameProperty: 'Heading1',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTitle
        },
        {
            name: 'Heading 2',
            nameProperty: 'Heading2',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTitle
        },
        {
            name: 'Heading 3',
            nameProperty: 'Heading3',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTitle
        },
        {
            name: 'Content',
            nameProperty: 'Content',
            typeField: 'TextMarkdown',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsText
        },
        {
            name: 'Content Bold',
            nameProperty: 'ContentBold',
            typeField: 'TextMarkdown',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsText
        },
        {
            name: 'Content Link',
            nameProperty: 'ContentLink',
            typeField: 'TextMarkdown',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsText
        },
        {
            name: 'Image',
            nameProperty: 'Image',
            typeField: 'SingleImage',
            content: {
                responsive: ['A'],
                defaultValue: {}
            },
            settings: settingsSingleImage

        },
        {
            name: 'CTA',
            nameProperty: 'CTA',
            typeField: 'CTA',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                    text: {},
                    icon: {}
                }
            },
            settings: settingsCTA

        },
        {
            name: 'Category',
            nameProperty: 'Category',
            typeField: 'SelectCategory',
            content: {
                responsive: ['A'],
                defaultValue: {
                    data: '',
                }
            },
            settings: {
                responsive: ['M', 'T', 'D'],
                defaultValue: {}
            }

        }
    ]
}
;
