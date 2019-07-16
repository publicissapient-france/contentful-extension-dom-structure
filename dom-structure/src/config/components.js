const config = [
    {
        name: 'TextContent',
        settings: [],
        content: ['Title', 'Text']
    },
    {
        name: 'MainTitle',
        settings: [],
        content: ['Title' , 'Subtitle'],

    },
    {
        name: 'Leading',
        content: ['Title', 'Tagline', 'Text'],
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
                        size : null,
                        lineHeight : null,
                        letterSpacing : '0'
                    },
                    text : {
                        align : 'left',
                        transform : null,
                        decoration : null
                    }
                }
            }
        ]

    }
];

export default config;
