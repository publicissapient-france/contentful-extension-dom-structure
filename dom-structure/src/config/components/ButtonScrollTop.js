import {padding, size, margin, black, opacity, alignmentStart} from "../../utils/configModel/atom.model.config";
import {borderMTD} from "../../utils/configModel/molecules.model.config";

export default {
    model: 'ButtonScrollTop',
    order: ['Image'],
    fields: [
        {
            name: 'Template',
            nameProperty: 'Template',
            typeField: 'Template',
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
                            size: size,
                            padding: padding,
                            margin: margin,
                            color: black,
                            opacity: opacity
                        },
                        T: {
                            size: size,
                            padding: padding,
                            margin: margin,
                            color: black,
                            opacity: opacity
                        },
                        D: {
                            size: size,
                            padding: padding,
                            margin: margin,
                            color: black,
                            opacity: opacity
                        }
                    },
                    border: borderMTD
                }
            }

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
                            size: size,
                            padding: padding,
                            margin: margin,
                            alignment: alignmentStart
                        },
                        T: {
                            size: size,
                            padding: padding,
                            margin: margin,
                            alignment: alignmentStart
                        },
                        D: {
                            size: size,
                            padding: padding,
                            margin: margin,
                            alignment: alignmentStart
                        }
                    },
                    border: borderMTD
                }
            }

        }
    ]
};
