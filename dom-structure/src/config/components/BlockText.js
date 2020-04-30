import {
    size,
    padding,
    margin,
    white,
    opacity,
    backgroundPosition,
    borderWidth,
    borderRadius, transparent
} from "../../utils/atom.model.config";
import {settingsTitle, settingsText, settingsTagline} from "../../utils/organism.model.config";

export default {
    model: 'BlockText',
    order : ['Title', 'Tagline', 'Content'],
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
                            size: size,
                            padding: padding,
                            margin: margin,
                            color: white,
                            opacity: opacity,
                            background : backgroundPosition
                        }
                    },
                    border: {
                        A: {
                            width: borderWidth,
                            radius: borderRadius,
                            color: transparent,
                            opacity: opacity
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
            settings: settingsText

        },
    ]
};
