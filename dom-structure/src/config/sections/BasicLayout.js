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
                responsive : ['M','T','D'],
                defaultValue: {
                    color: {
                        M: {
                            hex: '#989898',
                            name: 'Grey',
                            shade: '50'
                        },
                        T: {
                            hex: '#989898',
                            name: 'Grey',
                            shade: '50'
                        },
                        D: {
                            hex: '#989898',
                            name: 'Grey',
                            shade: '50'
                        }

                    },
                    opacity: {
                        M: {
                            value: '1'
                        },
                        T: {
                            value: '1'
                        },
                        D: {
                            value: '1'
                        }
                    },
                    padding: {
                        M: {
                            top: '0',
                            right: '0',
                            bottom: '0',
                            left: '0'
                        },
                        T: {
                            top: '0',
                            right: '0',
                            bottom: '0',
                            left: '0'
                        },
                        D: {
                            top: '0',
                            right: '0',
                            bottom: '0',
                            left: '0'
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
                            columns : '1',
                            gutterHorizontal : '0',
                            gutterVertical : '0',
                            direction : 'row',
                            wrap : 'wrap',
                            justify : 'flex-start',
                            alignItems : 'flex-start',
                            alignContent : 'flex-start'
                        },
                        T : {
                            columns : '1',
                            gutterHorizontal : '0',
                            gutterVertical : '0',
                            direction : 'row',
                            wrap : 'wrap',
                            justify : 'flex-start',
                            alignItems : 'flex-start',
                            alignContent : 'flex-start'
                        },
                        D : {
                            columns : '1',
                            gutterHorizontal : '0',
                            gutterVertical : '0',
                            direction : 'row',
                            wrap : 'wrap',
                            justify : 'flex-start',
                            alignItems : 'flex-start',
                            alignContent : 'flex-start'
                        }
                    }
                }
            }

        }
    ]
};
