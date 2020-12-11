import {
    settingsCTA, settingsCTAnoState,
    settingsFlexContainer,
    settingsSectionTemplate, settingsTagline,
    settingsTemplate, settingsTitle
} from "../../utils/configModel/organism.model.config";
import {
    alignmentStart,
    black,
    opacity,
    padding,
    paragraph,
    size,
    textProps,
    title4, white
} from "../../utils/configModel/atom.model.config";

export default {
    model: 'ListAllFormationsWithFilter',
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
            name: 'Template Even Container',
            nameProperty: 'TemplateEven',
            typeField: 'Template',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTemplate
        },
        {
            name: 'Template Odd Container',
            nameProperty: 'TemplateOdd',
            typeField: 'Template',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTemplate
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
            name: 'Formation Category Title',
            nameProperty: 'Title',
            typeField: 'Text',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsTagline

        },
        {
            name: 'Formation Name CTA',
            nameProperty: 'CTA',
            typeField: 'CTA',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsCTA
        },
        {
            name: 'Select CTA',
            nameProperty: 'CTASelect',
            typeField: 'CTA',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {}
            },
            settings: settingsCTA
        }
    ]
}
;
