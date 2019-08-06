export default {
    name: 'Leading',
    content: [
        {
            name: 'Title',
            contentType: 'Title',
            responsive : null,
            defaultValue : {}
        },
        {
            name: 'Tagline',
            contentType: 'Tagline',
            responsive : null,
            defaultValue : {}

        },
        {
            name: 'Text',
            contentType: 'Text',
            responsive : null,
            defaultValue : {}

        },
        {
            name: 'Logo',
            contentType: 'Logo',
            responsive : ['S', 'M', 'L'],
            defaultValue : {}

        },
        {
            name: 'Header Images',
            contentType: 'HeaderImages',
            responsive : null,
            defaultValue: {
                numberImages: 4
            }

        },
    ],
    settings: [
        {
            name: 'Title',
            contentType: 'Title',
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
        },
        {
            name: 'Image Logo',
            contentType: 'Logo',
            responsive : null,
            defaultValue: {
                size: {
                    width: '500',
                    height: '500',
                    maxWidth: '',
                    maxHeight: ''
                },
                margin: {
                    top: '0',
                    right: '0',
                    bottom: '0',
                    left: '0',
                }
            }
        }
    ]

}