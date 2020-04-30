import {settingsTemplate, settingsText, settingsTitle} from "../../utils/organism.model.config";

export default {
    model: 'HeaderCategory',
    order: ['Title', 'Content'],
    fields: [
        {
            name: 'Template',
            nameProperty: 'Template',
            typeField: 'Template',
            content: {
                responsive: ['M', 'T', 'D'],
                parameters: {},
                defaultValue: {},
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
            name: 'Content',
            nameProperty: 'Content',
            typeField: 'TextMarkdown',
            content: {
                responsive: ['A'],
                defaultValue: {}
            },
            settings: settingsText
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
};
