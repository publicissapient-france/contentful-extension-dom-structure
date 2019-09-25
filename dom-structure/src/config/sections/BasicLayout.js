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
                    }
                }
            }

        }
    ]
};
