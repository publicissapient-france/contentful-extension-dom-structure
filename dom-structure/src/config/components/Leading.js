export default {
    name: 'Leading',
    content: ['Title', 'Tagline', 'Text', 'Logo', 'HeaderImages'],
    settings : [
        {
            name : 'Title',
            defaultValue : {
                color : {
                    hex :'#000000',
                    name : 'Black',
                    shade : null
                },
                opacity : '0.85',
                seo : {
                    tag : 'h2'
                },

                font : {
                    theme : 'TitleLight',
                    family : null,
                    typeface : null,
                    weight : null,
                    style : 'italic',
                    size : '28',
                    lineHeight : null,
                    letterSpacing : '0'
                },
                text : {
                    align : 'left',
                    transform : null,
                    decoration : null
                }
            }
        },
        {
            name : 'Logo',
            defaultValue : {
                size : {
                    width : '500',
                    height : '500',
                    maxWidth : '',
                    maxHeight : ''
                },
                margin : {
                    top : '0',
                    right : '0',
                    bottom : '0',
                    left : '0',
                }
            }
        }
    ]

}