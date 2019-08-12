export default {
    name: 'TextContent',
    settings: [
        {
            name: 'Image Logo',
            contentType: 'Logo',
            responsive: null,
            defaultValue: {
                size: {
                    width: '250',
                    height: '250',
                    maxWidth: '',
                    maxHeight: ''
                }
            }
        }
    ],
    content: [
        {
            name: 'Logo',
            contentType: 'Logo',
            responsive :null,
            defaultValue : {}

        },
        {
        name: 'Header Images',
        contentType: 'HeaderImages',
        responsive : null,
        defaultValue: {
            numberImages: 4
        }

    }]
}