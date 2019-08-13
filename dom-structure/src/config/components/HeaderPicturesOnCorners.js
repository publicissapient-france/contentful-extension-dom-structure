export default {
    model: 'HeaderPicturesOnCorners',
    fields : [
        {
            name : 'Title Header',
            type : 'Title',

            content : {
                responsive : null,
                parameters : {},
                defaultValue : {
                    title : null
                }
            },
            settings : {
                responsive : null,
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