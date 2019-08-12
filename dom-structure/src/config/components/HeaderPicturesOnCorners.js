export default {
    model: 'HeaderPicturesOnCorners',
    fields : [
        {
            name : 'Title Header',
            type : 'Title',

            content : {
                responsive : null,
                parameters : {},
                defaultValue : {}
            },
            settings : {
                responsive : null,
                defaultValue: {
                    color: {
                        hex: '#000000',
                        name: 'Black',
                        shade: null
                    },
                    opacity: '0.85',
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
                        lineHeight: null,
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