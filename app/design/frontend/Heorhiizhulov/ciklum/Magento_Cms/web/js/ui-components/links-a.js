define(['uiComponent'], function (Component) {
    'use strict';

    return Component.extend({
        defaults: {
            label: 'Links Component A',
            amount: 4.8,
            links: {
                amount: 'exampleUiComponentLinksB:value'
            },
            tracks: {
                amount: true
            }
        }
    });
});
