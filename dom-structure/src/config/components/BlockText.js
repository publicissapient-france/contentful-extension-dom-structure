export default {
    model: 'BlockText',
    fields : [
        {
            name : 'Template',
            nameProperty : 'Template',
            typeField : 'Template',
            content : {
                responsive : [],
                parameters : {},
                defaultValue : {
                }
            },
            settings : {
                responsive : ['M','T','D'],
                defaultValue: {
                    color: {
                        M: {
                            hex: '#000000',
                            name: 'Black',
                            shade: null
                        },
                        T: {
                            hex: '#000000',
                            name: 'Black',
                            shade: null
                        },
                        D: {
                            hex: '#000000',
                            name: 'Black',
                            shade: null
                        }

                    },
                    opacity: {
                        M: {
                            value: '0.80'
                        },
                        T: {
                            value: '0.90'
                        },
                        D: {
                            value: '0.95'
                        }
                    }
                }
            }

        },
        {
            name : 'Title',
            nameProperty : 'Title',
            typeField : 'Text',
            content : {
                responsive : [],
                parameters : {},
                defaultValue : {
                    text : null
                }
            },
            settings : {
                responsive : [],
                defaultValue: {
                    color: {
                        hex: '#000000',
                        name: 'Black',
                        shade: null
                    },
                    opacity: {
                        value : '0.85'
                    },
                    seo: {
                        tag: 'h2'
                    },

                    font: {
                        theme: 'TitleLight',
                        family: null,
                        typeface: null,
                        weight: null,
                        style: 'italic',
                        size: '28',
                        lineHeight: '40',
                        letterSpacing: '0'
                    },
                    text: {
                        align: 'left',
                        transform: null,
                        decoration: null
                    }
                }
            }

        }
    ]
}