export default {
    model: 'BasicLayout',
    fields: [
        {
            name: 'Template',
            nameProperty: 'Template',
            typeField: 'Template',
            content: {
                responsive: ['A'],
                parameters: {},
                defaultValue: {
                }
            },
            settings: {
                responsive : ['A'],
                defaultValue: {
                    basis: {
                        A: {
                            padding: {
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '0'
                            },
                            color: {
                                hex: '#000000',
                                rgb: '0,0,0',
                                name: 'black',
                                shade: null
                            },
                            opacity: {
                                value: '1'
                            }
                        }
                    }
                }
            }

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
            settings: {
                responsive : ['M', 'T', 'D'],
                defaultValue: {
                    flex : {
                        M : {
                            properties : {
                                columns : '1',
                                gutterHorizontal : '0',
                                gutterVertical : '20',
                                direction : 'row',
                                wrap : 'wrap',
                                justify : 'flex-start',
                                alignItems : 'flex-start',
                                alignContent : 'flex-start'
                            }
                        },
                        T : {
                            properties : {
                                columns : '2',
                                gutterHorizontal : '20',
                                gutterVertical : '20',
                                direction : 'flex',
                                wrap : 'wrap',
                                justify : 'space-between',
                                alignItems : 'stretch',
                                alignContent : 'flex-start'
                            }
                        },
                        D : {
                            properties : {
                                columns : '3',
                                gutterHorizontal : '20',
                                gutterVertical : '20',
                                direction : 'flex',
                                wrap : 'wrap',
                                justify : 'space-between',
                                alignItems : 'stretch',
                                alignContent : 'flex-start'
                            }
                        }
                    }
                }
            }

        }
    ]
};
